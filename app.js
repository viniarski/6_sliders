document.addEventListener("DOMContentLoaded", function () {
  const segment = document.getElementsByName('segment')

  segment.forEach((panel) => {
    panel.addEventListener("click", function (event) {
      const targetPanel = event.target;
      const isOpen = targetPanel.getAttribute('data-open') == 'true';

      if (isOpen) {
        targetPanel.setAttribute('data-open', 'false');
      } else {
        targetPanel.checked = false;
        targetPanel.setAttribute('data-open', 'true');
      }
    });
  });
});
