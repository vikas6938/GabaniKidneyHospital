


// Close the off-canvas menu when close button is clicked
closeMenuBtn.addEventListener('click', () => {
  offCanvasMenu.classList.remove('translate-x-0'); // slide out
  offCanvasMenu.classList.add('translate-x-full'); // hide off-screen
});
