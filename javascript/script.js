const headerTitle1 = document.querySelectorAll(".header-inner-title-inner span")[0];
const headerTitle2 = document.querySelectorAll(".header-inner-title-inner span")[1];
const headerTitle3 = document.querySelectorAll(".header-inner-title-inner span")[2];

let animationDuration = ".65s";
let animationDetails = "cubic-bezier(.175, .685, .32, 1) forwards";

window.addEventListener("load", function() {
    headerTitle1.style.animation = "headerTitle " + animationDuration + " .8s " + animationDetails;
    headerTitle2.style.animation = "headerTitle " + animationDuration + " .95s " + animationDetails;
    headerTitle3.style.animation = "headerTitle " + animationDuration + " 1.05s " + animationDetails;
});