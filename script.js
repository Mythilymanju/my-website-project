// function toggleMenu() {
//   document.querySelector('.nav-links').classList.toggle('show');
// }
// Toggle Mobile Menu
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Accordion Animation
document.querySelectorAll(".accordion details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (detail.open) {
      document.querySelectorAll(".accordion details").forEach((other) => {
        if (other !== detail) other.removeAttribute("open");
      });
    }
  });
});

  const cards = document.querySelectorAll(".tech-card");
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");
  let currentIndex = 0;

  // Function to show only two cards at a time
  function showCards() {
    cards.forEach((card, index) => {
      card.style.display = (index === currentIndex || index === currentIndex + 1) ? "block" : "none";
    });
  }

  // Move left
  leftArrow.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex -= 2;
      showCards();
    }
  });

  // Move right
  rightArrow.addEventListener("click", () => {
    if (currentIndex < cards.length - 2) {
      currentIndex += 2;
      showCards();
    }
  });

  // Initialize
  showCards();
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const isActive = item.classList.contains("active");

    // Close all items
    document.querySelectorAll(".accordion-item").forEach((i) => {
      i.classList.remove("active");
      i.querySelector(".icon").textContent = "+";
    });

    // Open the clicked one
    if (!isActive) {
      item.classList.add("active");
      header.querySelector(".icon").textContent = "✖";
    }
  });
});

