// Example: Add functionality for a mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector("#menu-button");
    const menu = document.querySelector("#menu");
  
    menuButton?.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  });
  