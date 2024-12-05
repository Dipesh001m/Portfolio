function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section"); // Select all sections you want to observe

    const observerOptions = {
        root: null, // Observer will use the viewport as the root
        rootMargin: '0px', // No margin to offset
        threshold: 0.1 // 10% of the section must be visible to trigger
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // When the section is visible, add a class, otherwise remove it
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add visible class when section is in view
            } else {
                entry.target.classList.remove("visible"); // Remove visible class when section is out of view
            }
        });
    }, observerOptions);

    // Observe each section individually
    sections.forEach(section => observer.observe(section));
});



document.addEventListener("DOMContentLoaded", () => {
    const navElement = document.getElementById("nav");

    // Function to check media query and scroll to nav
    const scrollToNav = (query) => {
        if (query.matches && navElement) {
            navElement.scrollIntoView({
                behavior: "smooth", // Use 'smooth' scrolling
                block: "start" // Align to the top of the viewport
            });
        }
    };

    // Media queries
    const media600 = window.matchMedia("(max-width: 600px)");
    const media1200 = window.matchMedia("(max-width: 1200px)");
    const media1400 = window.matchMedia("(max-width: 1400px)");

    // Check each media query and scroll to nav if it matches
    scrollToNav(media600);
    scrollToNav(media1200);
    scrollToNav(media1400);

    // Optionally, listen for changes in media query matches
    media600.addEventListener("change", () => scrollToNav(media600));
    media1200.addEventListener("change", () => scrollToNav(media1200));
    media1400.addEventListener("change", () => scrollToNav(media1400));
});




