// -------- FORMULAIRE DE CONTACT --------
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // empêche le rechargement de la page

    alert("✅ Merci pour votre message ! Nous vous répondrons très bientôt.");
    form.reset(); // vide le formulaire
  });

  // -------- SMOOTH SCROLL NAVIGATION --------
  const links = document.querySelectorAll("nav a[href^='#']");
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // -------- ANIMATION D'APPARITION DES SERVICES --------
  const services = document.querySelectorAll(".service");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  services.forEach(service => {
    observer.observe(service);
  });
});




document.addEventListener("DOMContentLoaded", () => {
  // -------- Message dynamique dans le header --------
  const header = document.querySelector("header p");
  if (header) {
    header.insertAdjacentHTML(
      "beforeend",
      
    );
  }

  // -------- Animation des cartes membres --------
  const members = document.querySelectorAll(".member");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  members.forEach(member => {
    member.classList.add("hidden");
    observer.observe(member);
  });

  // -------- Confirmation retour --------
  const backBtn = document.querySelector(".back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", (e) => {
      const confirmBack = confirm("Voulez-vous vraiment retourner à l'accueil ?");
      if (!confirmBack) {
        e.preventDefault();
      }
    });
  }
});

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});




