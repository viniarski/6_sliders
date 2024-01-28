document.addEventListener("DOMContentLoaded", function () {
  let segments = document.getElementsByName('segment')

  segments.forEach((segment) => {
    segment.addEventListener("click", function (event) {
      let targetSegment = event.target;
      let isOpen = targetSegment.getAttribute('data-open') == 'true';

      if (isOpen) {
        targetSegment.checked = false;
        targetSegment.setAttribute('data-open', 'false');
      } else {
        targetSegment.setAttribute('data-open', 'true');
      }
    });
  });
});
