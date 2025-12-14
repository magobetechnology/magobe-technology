import Intro from "./components/Intro.js";
import About from "./components/About.js";
import Services from "./components/Services.js";
import Pricing from "./components/Pricing.js"; // COMING SOON
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  if (!app) return;

  /* =========================
     HEADER
  ========================== */
  const header = document.createElement("header");
  header.innerHTML = `
    <div class="header-inner">
      <div class="logo-container">
        <img src="./assets/img/logo.png" alt="Magobe Technology Logo" class="logo">
        <span class="brand">Magobe Technology</span>
      </div>

      <nav>
        <a href="#intro">Inicio</a>
        <a href="#about">Quién Soy</a>
        <a href="#services">Servicios</a>
        <a href="#pricing">Pricing</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </nav>
    </div>
  `;
  app.appendChild(header);

  /* =========================
     CONTENIDO DINÁMICO
  ========================== */
  const content = document.createElement("main");
  content.id = "content";
  app.appendChild(content);

  /* =========================
     ROUTER SIMPLE
  ========================== */
  function router() {
    const hash = window.location.hash.substring(1) || "intro";

    // Link activo
    document.querySelectorAll("nav a").forEach(link => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${hash}`
      );
    });

    switch (hash) {
      case "about":
        content.innerHTML = About();
        break;
      case "services":
        content.innerHTML = Services();
        break;
      case "pricing":
        content.innerHTML = Pricing();
        break;
      case "projects":
        content.innerHTML = Projects();
        break;
      case "contact":
        content.innerHTML = Contact();
        break;
      default:
        content.innerHTML = Intro();
    }
  }

  window.addEventListener("hashchange", router);
  router(); // Render inicial
});
