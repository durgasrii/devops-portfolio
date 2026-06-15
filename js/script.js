const roles = [

"Building Cloud & DevOps Solutions",
"Cloud Enthusiast",
"CI/CD Learner",
"Future DevSecOps Engineer"

];

let index = 0;

const typingText =
document.getElementById("typing-text");

setInterval(() => {

index++;

if(index >= roles.length){
index = 0;
}

typingText.textContent =
roles[index];

},2000);

const menuToggle =
document.getElementById("menu-toggle");

const navLinks =
document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

navLinks.classList.toggle("active");

});