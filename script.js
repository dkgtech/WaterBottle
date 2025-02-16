// Show button when scrolling down
window.onscroll = function () {
    let btn = document.getElementById("scrollTopBtn");
    if (document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleMenu() {
    document.querySelector(".nav_links").classList.toggle("active");
}