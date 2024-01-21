// DISABLE COMMENT TO MAKE TABS APEN-CLOSE

// document.addEventListener("DOMContentLoaded", function () {
//     const radioInputs = document.querySelectorAll('input[name="slide"]');
  
//     radioInputs.forEach((input) => {
//       input.addEventListener("click", function () {
//         const isChecked = this.checked;
//         const isOpen = this.getAttribute('data-open') === 'true';
  
//         if (isChecked && !isOpen) {
//           // If it's checked and not open, mark the container as open
//           this.setAttribute('data-open', 'true');
//         } else {
//           // Otherwise, uncheck and close the container
//           this.checked = false;
//           this.setAttribute('data-open', 'false');
//         }
  
//         // Toggle the styles based on the checked state
//         const description = this.nextElementSibling.querySelector('.description');
//         if (this.checked) {
//           description.style.opacity = '0';
//           description.style.transform = 'translateY(30px)';
//           description.style.transitionDelay = '.3s';
//         } else {
//           description.style.opacity = '1';
//           description.style.transform = 'translateY(0)';
//           description.style.transitionDelay = '0s';
//         }
//       });
//     });
//   });
  