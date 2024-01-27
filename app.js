document.addEventListener("DOMContentLoaded", function () {
  const radioInputs = document.querySelectorAll('input[name="segment"]');

  radioInputs.forEach((input) => {
    input.addEventListener("click", function (event) {
      const targetInput = event.target;
      const isChecked = targetInput.checked;
      const isOpen = targetInput.getAttribute('data-open') === 'true';

      if (isChecked && !isOpen) {
        targetInput.setAttribute('data-open', 'true');
      } else {
        targetInput.checked = false;
        targetInput.setAttribute('data-open', 'false');
      }
    });
  });
});
