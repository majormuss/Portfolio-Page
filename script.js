// TODO: Implement the See More Projects button yourself.
// 1. Select #toggle-projects and every .extra-project card.
// 2. Attach a click event listener.
// 3. Toggle each card's hidden property.
// 4. Update the button text and aria-expanded value.
console.log("Script loaded");
document.getElementsByClassName("light-mode-toggle")[0].addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    console.log("Light mode toggled");
});