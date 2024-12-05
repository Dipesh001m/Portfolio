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
    const navElement = document.getElementById("desktop-nav");

    // Function to scroll to the nav element
    if (navElement) {
        navElement.scrollIntoView({
            behavior: "smooth", // Use 'smooth' scrolling
            block: "start" // Align to the top of the viewport
        });
    }
});








