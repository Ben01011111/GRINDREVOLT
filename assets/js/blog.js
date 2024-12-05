document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector(".heading");

    // Function to add shine effect dynamically
    const addShineEffect = () => {
        heading.style.background = "linear-gradient(to right, black, #e02500, #e09500, black)";
        heading.style.backgroundSize = "200%"; // Expand gradient for animation
        heading.style.webkitBackgroundClip = "text";
        heading.style.color = "transparent";
        heading.style.animation = "shineLeftToRight 3s linear infinite";
    };

    // Intersection Observer to trigger effect on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                heading.classList.add("visible");
                addShineEffect(); // Apply shine effect
                observer.unobserve(heading); // Stop observing after visible
            }
        });
    });

    observer.observe(heading);
});

// Adding the keyframes via JavaScript
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
    .heading {
        font-size: 9em;
        font-weight: bold;
        opacity: 0;
        transform: translateX(-30px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }

    .heading.visible {
        opacity: 1;
        transform: translateX(0);
    }

    @keyframes shineLeftToRight {
        0% {
            background-position: -200% 0; /* Start far left */
        }
        100% {
            background-position: 150% 10; /* Move to far right */
        }
    }
`;
document.head.appendChild(styleSheet);
