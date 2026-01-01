// Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
});

// Products Slider Navigation
document.addEventListener("DOMContentLoaded", function () {
  const productsTrack = document.getElementById("products-track");
  const prevBtn = document.querySelector(".slider-prev");
  const nextBtn = document.querySelector(".slider-next");
  const slideWidth = 324; // 300px slide + 24px gap

  if (prevBtn && nextBtn && productsTrack) {
    prevBtn.addEventListener("click", function () {
      productsTrack.scrollBy({ left: -slideWidth, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", function () {
      productsTrack.scrollBy({ left: slideWidth, behavior: "smooth" });
    });
  }
});

// Intersection Observer for fade-in animations
document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(function (element) {
    observer.observe(element);
  });
});
