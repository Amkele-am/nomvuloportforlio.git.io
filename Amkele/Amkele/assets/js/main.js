const sticky = document.querySelector(".home-pg-navbar");
const backTop = document.querySelector(".back-top-btn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    sticky.classList.add("sticky");
  } else {
    sticky.classList.remove("sticky");
  }
  if (window.scrollY > 349) {
    backTop.style.display = "grid";
  } else {
    backTop.style.display = "none";
  }
});

if (backTop) {
  document.querySelector(".back-top-btn").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const activeLink = document.querySelectorAll(".nav-link");
activeLink.forEach((link) => {
  link.addEventListener("click", function (e) {
    activeLink.forEach((link) => link.classList.remove("active"));
    e.currentTarget.classList.add("active");
  });
});

const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
