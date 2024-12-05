document.addEventListener("DOMContentLoaded", () => {
    const gridItems = document.querySelectorAll(".grid-item");
    const navbar = document.querySelector(".navbar");
    const brand = document.querySelector(".brand");

    // Intersection Observer to reveal grid items on scroll
    const revealGridItems = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    revealGridItems.unobserve(entry.target); // Stop observing once visible
                }
            });
        },
        { threshold: 0.2 }
    );

    gridItems.forEach((item) => {
        revealGridItems.observe(item);
    });

    // Navbar background color change on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#000000"; // Change background to black
        } else {
            navbar.style.backgroundColor = "#000000"; // Reset to white
        }
    });

    // Brand text pulsing animation
    setInterval(() => {
        brand.style.transform = "scale(1.1)";
        brand.style.transition = "transform 0.3s ease-in-out";
        setTimeout(() => {
            brand.style.transform = "scale(1)";
        }, 300);
    }, 2000);
});
