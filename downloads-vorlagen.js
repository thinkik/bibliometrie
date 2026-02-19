(function () {
  const cards = document.querySelectorAll('.download-card');

  const triggerDownload = (blob, fileName) => {
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = objectUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(objectUrl);
  };

  cards.forEach((card) => {
    const button = card.querySelector('.download-button');
    const progressBar = card.querySelector('.download-progress');
    const progressText = card.querySelector('.download-progress-text');
    const fileUrl = card.dataset.fileUrl;
    const fileName = card.dataset.fileName;

    if (!button || !progressBar || !progressText || !fileUrl || !fileName) {
      return;
    }

    button.addEventListener('click', async () => {
      try {
        button.disabled = true;
        progressBar.value = 0;
        progressText.textContent = '0 %';

        const response = await fetch(fileUrl);

        if (!response.ok || !response.body) {
          throw new Error('Download nicht verfügbar');
        }

        const contentLength = Number(response.headers.get('content-length')) || 0;
        const reader = response.body.getReader();
        const chunks = [];
        let loaded = 0;

        while (true) {
          const { done, value } = await reader.read();

          if (done) {
            break;
          }

          chunks.push(value);
          loaded += value.length;

          if (contentLength > 0) {
            const percent = Math.round((loaded / contentLength) * 100);
            progressBar.value = percent;
            progressText.textContent = `${percent} %`;
          }
        }

        const fileBlob = new Blob(chunks);
        progressBar.value = 100;
        progressText.textContent = '100 %';
        triggerDownload(fileBlob, fileName);
      } catch (error) {
        progressText.textContent = 'Fehler';
      } finally {
        button.disabled = false;
      }
    });
  });
})();
