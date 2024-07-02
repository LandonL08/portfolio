let homeButton = document.querySelector(".home")
let welcomeScreen = document.querySelector(".welcome")
let whoButton = document.querySelector(".about")
let whoScreen = document.querySelector(".who")
let skillsButton = document.querySelector(".skills")
let skillsScreen = document.querySelector(".skills-screen")
let projectButton = document.querySelector(".projects")
let projectScreen = document.querySelector(".projects-screen")
let contactScreen = document.querySelector(".contact-screen")
let contactButton = document.querySelector(".contact")




homeButton.addEventListener("click", function() {
welcomeScreen.style.display = "block";
whoScreen.style.display = "none";
skillsScreen.style.display = "none";
projectScreen.style.display = "none";
contactScreen.style.display = "none";

});

whoButton.addEventListener("click", function(){
welcomeScreen.style.display = "none";
whoScreen.style.display = "block";
skillsScreen.style.display = "none";
projectScreen.style.display = "none";
contactScreen.style.display = "none";
});


skillsButton.addEventListener("click", function(){
welcomeScreen.style.display = "none";
whoScreen.style.display = "none";
skillsScreen.style.display = "block";
projectScreen.style.display = "none";
contactScreen.style.display = "none"; 
});


projectButton.addEventListener("click", function(){
welcomeScreen.style.display = "none";
whoScreen.style.display = "none";
skillsScreen.style.display = "none";
projectScreen.style.display = "block";
contactScreen.style.display = "none";
});

contactButton.addEventListener("click", function(){
welcomeScreen.style.display = "none";
whoScreen.style.display = "none";
skillsScreen.style.display = "none";
projectScreen.style.display = "none";
contactScreen.style.display = "block";
});