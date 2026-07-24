// Mobile Menu

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Highlight Current Page

const currentPage = window.location.pathname.split("/").pop();

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    const linkPage = link.getAttribute("href");

    if(linkPage === currentPage || (currentPage === "" && linkPage === "index.html")){
        link.classList.add("active");
    }

});
