document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const banner = document.querySelector(".banner");
    const categoryTitle = document.querySelector(".cat");
    const gridItems = document.querySelectorAll(".grid-item");
    const contactForm = document.querySelector("form");
    const sections = document.querySelectorAll("section, article, aside");

    // Add initial styles for animations
    navbar.style.opacity = 0;
    banner.style.opacity = 0;
    banner.style.transform = "translateY(50px)";
    categoryTitle.style.opacity = 0;
    contactForm.style.opacity = 0;
    contactForm.style.transform = "translateY(50px)";

    gridItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = "translateY(20px)";
    });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateX(-50px)";
    });

    // Fade in Navbar on page load
    setTimeout(() => {
        navbar.style.transition = "opacity 1s ease-in-out";
        navbar.style.opacity = 1;
    }, 100);

    // Fade-in Hero Banner
    setTimeout(() => {
        banner.style.transition = "opacity 1.5s ease, transform 1.5s ease";
        banner.style.opacity = 1;
        banner.style.transform = "translateY(0)";
    }, 500);

    // Trigger animations on scroll
    const observerOptions = {
        threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                target.style.transition = "opacity 1s ease, transform 1s ease";
                target.style.opacity = 1;
                target.style.transform = "translateX(0)";
                observer.unobserve(target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe sections
    sections.forEach(section => {
        observer.observe(section);
    });

    // Gallery grid animation
    const gridObserverCallback = (entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const gridItem = entry.target;
                setTimeout(() => {
                    gridItem.style.transition = "opacity 0.5s ease, transform 0.5s ease";
                    gridItem.style.opacity = 1;
                    gridItem.style.transform = "translateY(0)";
                }, index * 150); // Delay each item
                observer.unobserve(gridItem);
            }
        });
    };

    const gridObserver = new IntersectionObserver(gridObserverCallback, observerOptions);

    gridItems.forEach(item => {
        gridObserver.observe(item);
    });

    // Animate Contact Form
    const contactObserverCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactForm.style.transition = "opacity 1s ease, transform 0.5s ease";
                contactForm.style.opacity = 1;
                contactForm.style.transform = "translateY(0)";
            }
        });
    };

    const contactObserver = new IntersectionObserver(contactObserverCallback, observerOptions);
    contactObserver.observe(contactForm);

    // Navbar background color on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            navbar.style.transition = "background-color 0.5s ease";
        } else {
            navbar.style.backgroundColor = "transparent";
        }
    });
});
