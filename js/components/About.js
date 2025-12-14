export default function About() {
  return `
    <!-- ABOUT / QUIÉN SOY -->
    <section id="about" class="section-accent about-section hero">
      <div class="about-grid">

        <!-- Foto de perfil -->
        <figure class="profile-card">
          <img
            class="profile-img"
            src="./assets/img/profile.jpg"
            alt="Foto de perfil - Magobe Technology"
            loading="lazy"
            decoding="async"
          />
          <figcaption class="profile-caption">
            Fundadora · Data Engineer & Analyst
          </figcaption>
        </figure>

        <!-- Texto principal -->
        <div class="about-text">
          <h2>Datos bien hechos, sin complicarse</h2>

          <p>
            Soy la fundadora de <strong>Magobe Technology</strong>.
            Trabajo con datos y tecnología desde un enfoque muy práctico:
            entender el problema, ordenar la información y construir soluciones
            que <strong>realmente se usen</strong>.
          </p>

          <p>
            Ayudo a <strong>PYMEs, startups y proyectos digitales</strong> a empezar
            a trabajar con datos de forma clara y escalable:
            desde <strong>ETL sencillos</strong> y automatizaciones,
            hasta <strong>dashboards</strong>, <strong>APIs</strong> y modelos
            cuando el proyecto está listo para dar el siguiente paso.
          </p>

          <p>
            Además, creo contenido sobre <strong>ciencia de datos y tecnología en redes</strong>,
            explicando conceptos complejos de forma sencilla, sin postureo
            y con foco en cómo aplicar la tecnología al mundo real.
          </p>

          <!-- Highlights -->
          <ul class="about-highlights">
            <li>Soluciones pensadas para hoy, preparadas para crecer mañana</li>
            <li>Datos claros > dashboards bonitos sin sentido</li>
            <li>Tecnología al servicio del negocio (no al revés)</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- QUÉ HAGO -->
    <section class="section-accent skills">
      <h3>Qué puedo hacer por tu proyecto</h3>
      <ul class="skills-list">
        <li>⚡ <strong>Procesos ETL / ELT</strong> con Azure Data Factory y Power Automate.</li>
        <li>📊 <strong>Dashboards en Power BI</strong> para seguimiento y toma de decisiones.</li>
        <li>🔁 <strong>Automatización</strong> de reporting y flujos de datos.</li>
        <li>🧩 <strong>APIs y Azure Functions</strong> para integrar sistemas.</li>
        <li>🤖 <strong>Análisis y modelos predictivos</strong> cuando aportan valor real.</li>
      </ul>
    </section>

    <!-- DESARROLLO Y DATA APPS -->
    <section class="section-accent skills">
      <h3>Data apps y desarrollo</h3>
      <ul class="skills-list">
        <li>🌐 Frontend con <strong>JavaScript y React</strong> para proyectos web.</li>
        <li>📈 Aplicaciones de datos con <strong>Streamlit y Shiny</strong>.</li>
        <li>🔐 Gestión de usuarios y seguridad con <strong>Auth0</strong>.</li>
      </ul>
    </section>

    <!-- LENGUAJES -->
    <section class="section-accent skills">
      <h3>Lenguajes de programación</h3>
      <ul class="pill-list">
        <li class="pill">Python</li>
        <li class="pill">SQL</li>
        <li class="pill">R</li>
        <li class="pill">JavaScript</li>
        <li class="pill">HTML</li>
        <li class="pill">CSS</li>
      </ul>
    </section>

    <!-- HERRAMIENTAS -->
    <section class="section-accent skills">
      <h3>Herramientas y tecnologías</h3>
      <ul class="pill-list">
        <li class="pill">Azure Data Factory</li>
        <li class="pill">Azure Functions</li>
        <li class="pill">Power BI</li>
        <li class="pill">Power Automate</li>
        <li class="pill">Auth0</li>
        <li class="pill">GitHub</li>
        <li class="pill">Streamlit</li>
        <li class="pill">Shiny</li>
        <li class="pill">React</li>
      </ul>
    </section>
  `;
}
