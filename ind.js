document.addEventListener("DOMContentLoaded", function () {
    const openIcon = document.querySelector('.logo .op.active');
    const closeIcon = document.querySelector('.logo .op:not(.active)');
    const header = document.querySelector('.header');

    openIcon.addEventListener("click", function () {
      openIcon.classList.remove("active");
      closeIcon.classList.add("active");
      header.style.display = "flex"; // or "block", depending on your layout
    });

    closeIcon.addEventListener("click", function () {
      closeIcon.classList.remove("active");
      openIcon.classList.add("active");
      header.style.display = "none";
    });
});