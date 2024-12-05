document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector(".main-content");
    const allSections = document.querySelectorAll(".main-content"); // All sections to be observed

    // Function to add slide-up animation with delay
    const addSlideUpEffect = (section, index) => {
        section.style.transitionDelay = `${index * 0.5}s`; // Adds delay based on index
        section.classList.add("slide-up");
    };

    // Intersection Observer to trigger animation when each section is in the viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = Array.from(allSections).indexOf(entry.target); // Get index of the section
                addSlideUpEffect(entry.target, index);
                observer.unobserve(entry.target); // Stop observing once animation triggers
            }
        });
    });

    allSections.forEach((section) => {
        observer.observe(section); // Observe each section individually
    });
});
