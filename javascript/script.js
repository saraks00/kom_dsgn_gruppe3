const headerTitles = document.querySelectorAll(".header-inner-title-inner span");
const animationDuration = ".65s";
const animationDetails = "cubic-bezier(.175, .685, .32, 1) forwards";

window.addEventListener("load", function() {
    for (let i = 0; i < headerTitles.length; i++) {
        const delay = 0.8 + i * 0.15; // Adjust the delay as needed
        headerTitles[i].style.animation = `headerTitle ${animationDuration} ${delay}s ${animationDetails}`;
    }
});