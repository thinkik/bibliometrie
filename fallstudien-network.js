(function () {
  const svg = d3.select('#science-map-svg');
  if (!svg.node()) {
    return;
  }

  const statusEl = document.getElementById('science-map-status');
  const clusterContainer = document.getElementById('cluster-filters');
  const minWeightInput = document.getElementById('min-link-weight');
  const minWeightValue = document.getElementById('min-link-weight-value');
  const fileInput = document.getElementById('network-file-input');
  const resetBtn = document.getElementById('reset-network-filters');
  const loadSampleBtn = document.getElementById('load-sample-network');

  const width = 860;
  const height = 520;
  svg.attr('viewBox', `0 0 ${width} ${height}`);

  const color = d3.scaleOrdinal(d3.schemeTableau10);
  const tooltip = d3.select('#science-map-tooltip');

  let originalData = null;
  let activeClusters = new Set();

  const nodeLayer = svg.append('g').attr('class', 'node-layer');
  const linkLayer = svg.append('g').attr('class', 'link-layer');
  const labelLayer = svg.append('g').attr('class', 'label-layer');

  const simulation = d3
    .forceSimulation()
    .force('link', d3.forceLink().id((d) => d.id).distance(90))
    .force('charge', d3.forceManyBody().strength(-220))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius(24));

  function setStatus(message, isError = false) {
    statusEl.textContent = message;
    statusEl.classList.toggle('is-error', isError);
  }

  function normalizeData(data) {
    const nodes = (data.nodes || []).map((node) => ({
      ...node,
      id: String(node.id),
      label: node.label || node.id,
      cluster: node.cluster || 'Unbekannt',
      citations: Number(node.citations) || 0,
      year: Number(node.year) || null,
      keywords: node.keywords || ''
    }));

    const ids = new Set(nodes.map((n) => n.id));
    const links = (data.links || [])
      .map((link) => ({
        source: String(link.source),
        target: String(link.target),
        weight: Number(link.weight) || 1,
        type: link.type || 'co-word'
      }))
      .filter((link) => ids.has(link.source) && ids.has(link.target));

    return { nodes, links };
  }

  function getClusters(nodes) {
    return [...new Set(nodes.map((node) => node.cluster))].sort((a, b) => a.localeCompare(b, 'de'));
  }

  function renderClusterFilters(nodes) {
    const clusters = getClusters(nodes);
    if (!activeClusters.size) {
      activeClusters = new Set(clusters);
    } else {
      activeClusters = new Set(clusters.filter((cluster) => activeClusters.has(cluster)));
      if (!activeClusters.size) {
        activeClusters = new Set(clusters);
      }
    }

    clusterContainer.innerHTML = '';
    clusters.forEach((cluster) => {
      const label = document.createElement('label');
      label.className = 'cluster-option';
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.value = cluster;
      input.checked = activeClusters.has(cluster);
      input.addEventListener('change', () => {
        if (input.checked) {
          activeClusters.add(cluster);
        } else {
          activeClusters.delete(cluster);
        }
        updateGraph();
      });

      const swatch = document.createElement('span');
      swatch.className = 'cluster-swatch';
      swatch.style.backgroundColor = color(cluster);
      const text = document.createElement('span');
      text.textContent = cluster;

      label.append(input, swatch, text);
      clusterContainer.appendChild(label);
    });
  }

  function buildVisibleData() {
    const minWeight = Number(minWeightInput.value);
    minWeightValue.textContent = String(minWeight);

    const visibleNodes = originalData.nodes.filter((node) => activeClusters.has(node.cluster));
    const visibleIds = new Set(visibleNodes.map((node) => node.id));
    const visibleLinks = originalData.links.filter(
      (link) => visibleIds.has(link.source) && visibleIds.has(link.target) && link.weight >= minWeight
    );

    return {
      nodes: visibleNodes.map((node) => ({ ...node })),
      links: visibleLinks.map((link) => ({ ...link }))
    };
  }

  function updateGraph() {
    if (!originalData) {
      return;
    }

    const data = buildVisibleData();

    const links = linkLayer
      .selectAll('line')
      .data(data.links, (d) => `${d.source}-${d.target}-${d.type}`)
      .join('line')
      .attr('stroke', '#94a3b8')
      .attr('stroke-opacity', 0.5)
      .attr('stroke-width', (d) => Math.max(1, d.weight * 0.8));

    const nodes = nodeLayer
      .selectAll('circle')
      .data(data.nodes, (d) => d.id)
      .join('circle')
      .attr('r', (d) => Math.max(6, Math.min(16, 6 + Math.sqrt(d.citations) / 2)))
      .attr('fill', (d) => color(d.cluster))
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 1.5)
      .call(
        d3
          .drag()
          .on('start', (event, d) => {
            if (!event.active) simulation.alphaTarget(0.2).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on('drag', (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on('end', (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      )
      .on('mouseenter', (event, d) => {
        const yearText = d.year ? `Jahr: ${d.year}` : 'Jahr: k.A.';
        tooltip
          .style('opacity', 1)
          .html(
            `<strong>${d.label}</strong><br/>Cluster: ${d.cluster}<br/>Zitationen: ${d.citations}<br/>${yearText}<br/>Keywords: ${d.keywords}`
          );
      })
      .on('mousemove', (event) => {
        tooltip.style('left', `${event.pageX + 14}px`).style('top', `${event.pageY + 14}px`);
      })
      .on('mouseleave', () => {
        tooltip.style('opacity', 0);
      });

    const labels = labelLayer
      .selectAll('text')
      .data(data.nodes, (d) => d.id)
      .join('text')
      .attr('font-size', 11)
      .attr('fill', '#334155')
      .attr('dx', 10)
      .attr('dy', 4)
      .text((d) => d.label);

    simulation.nodes(data.nodes).on('tick', () => {
      links
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y);

      nodes.attr('cx', (d) => d.x).attr('cy', (d) => d.y);
      labels.attr('x', (d) => d.x).attr('y', (d) => d.y);
    });

    simulation.force('link').links(data.links);
    simulation.alpha(0.9).restart();

    setStatus(
      `Aktiv: ${data.nodes.length} Knoten, ${data.links.length} Kanten (${activeClusters.size} ausgewählte Cluster).`
    );
  }

  function parseCsvNetwork(csvText) {
    const rows = d3.csvParse(csvText);
    const nodesMap = new Map();
    const links = [];

    rows.forEach((row) => {
      const source = String(row.source || '').trim();
      const target = String(row.target || '').trim();
      if (!source || !target) {
        return;
      }

      const sourceNode = {
        id: source,
        label: row.source_label || source,
        cluster: row.source_cluster || 'Unbekannt',
        citations: Number(row.source_citations) || 0,
        year: Number(row.source_year) || null,
        keywords: row.source_keywords || ''
      };
      const targetNode = {
        id: target,
        label: row.target_label || target,
        cluster: row.target_cluster || 'Unbekannt',
        citations: Number(row.target_citations) || 0,
        year: Number(row.target_year) || null,
        keywords: row.target_keywords || ''
      };

      if (!nodesMap.has(sourceNode.id)) nodesMap.set(sourceNode.id, sourceNode);
      if (!nodesMap.has(targetNode.id)) nodesMap.set(targetNode.id, targetNode);

      links.push({
        source,
        target,
        weight: Number(row.weight) || 1,
        type: row.type || 'co-word'
      });
    });

    return { nodes: [...nodesMap.values()], links };
  }

  async function loadJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Beispieldaten konnten nicht geladen werden.');
    }
    return response.json();
  }

  async function loadSample() {
    try {
      const data = await loadJson('data/science-mapping-sample.json');
      originalData = normalizeData(data);
      renderClusterFilters(originalData.nodes);
      updateGraph();
      setStatus('Beispieldaten erfolgreich geladen.');
    } catch (error) {
      setStatus(error.message, true);
    }
  }

  fileInput.addEventListener('change', async (event) => {
    const [file] = event.target.files;
    if (!file) return;

    try {
      const text = await file.text();
      const parsed = file.name.toLowerCase().endsWith('.csv')
        ? parseCsvNetwork(text)
        : JSON.parse(text);
      originalData = normalizeData(parsed);
      renderClusterFilters(originalData.nodes);
      updateGraph();
      setStatus(`Datei „${file.name}“ geladen.`);
    } catch (error) {
      setStatus(`Datei konnte nicht verarbeitet werden: ${error.message}`, true);
    }
  });

  minWeightInput.addEventListener('input', () => updateGraph());
  loadSampleBtn.addEventListener('click', () => loadSample());
  resetBtn.addEventListener('click', () => {
    if (!originalData) return;
    minWeightInput.value = '1';
    activeClusters = new Set(getClusters(originalData.nodes));
    renderClusterFilters(originalData.nodes);
    updateGraph();
  });

  loadSample();
})();
