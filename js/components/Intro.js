export default function Intro() {
  return `
    <!-- HERO -->
    <section id="intro" class="section-accent hero">
      <h1 style="margin: 0 0 12px; font-size: 2.3rem; line-height: 1.25;">
        <span style="color: var(--brand)">Magobe Technology</span>
      </h1>
      <p style="margin: 0; color: var(--muted); max-width: 980px; font-size: 1.1rem;">
        Datos claros, decisiones inteligentes.
        Ayudo a proyectos y PYMEs a empezar a trabajar con datos
        de forma práctica, ordenada y escalable.
      </p>
      <span class="tag" style="margin-top: 12px; display: inline-block;">
        En fase de lanzamiento
      </span>
    </section>

    <!-- SOBRE MAGOBE -->
    <section class="section-accent">
      <h2 style="margin: 0 0 10px;">Sobre Magobe</h2>
      <p style="color: var(--muted); margin: 0;">
        <strong>Magobe Technology</strong> nace como un proyecto personal
        tras finalizar mis estudios en <strong>Ciencia de Datos (UPV)</strong>
        y adquirir experiencia en entornos reales de datos.
      </p>
      <p style="color: var(--muted); margin: 10px 0 0;">
        El objetivo es simple: ayudar a empresas que todavía no trabajan
        con datos (o lo hacen sin estructura) a <strong>entender su información</strong>
        y usarla para tomar mejores decisiones, sin soluciones sobredimensionadas.
      </p>
    </section>

    <!-- MISIÓN / VISIÓN / VALORES -->
    <section style="max-width: var(--section-max); margin: 22px auto; padding: 0;">
      <div style="
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 18px;
      ">

        <div class="corp-block">
          <h3 style="margin: 0 0 10px;">Misión</h3>
          <p style="color: var(--muted); margin: 0;">
            Hacer que el análisis de datos y la automatización
            sean accesibles para proyectos reales,
            con soluciones útiles desde el primer día.
          </p>
        </div>

        <div class="corp-block">
          <h3 style="margin: 0 0 10px;">Visión</h3>
          <p style="color: var(--muted); margin: 0;">
            Convertirme en un apoyo tecnológico de confianza
            para empresas que quieren crecer con datos,
            empezando simple y escalando cuando tenga sentido.
          </p>
        </div>

        <div class="corp-block">
          <h3 style="margin: 0 0 10px;">Valores</h3>
          <ul style="color: var(--muted); padding-left: 18px; margin: 6px 0 0;">
            <li><strong>Cercanía:</strong> hablamos claro y sin tecnicismos innecesarios.</li>
            <li><strong>Practicidad:</strong> menos humo, más impacto real.</li>
            <li><strong>Escalabilidad:</strong> soluciones pensadas para crecer contigo.</li>
            <li><strong>Transparencia:</strong> procesos, tiempos y resultados claros.</li>
          </ul>
        </div>

      </div>
    </section>

    <!-- QUÉ HAGO -->
    <section id="servicios" class="section-accent">
      <h2 style="margin: 0 0 10px;">Qué hago</h2>
      <p style="color: var(--muted); margin: 0 0 20px;">
        Empiezo por lo esencial.
        Estos son los servicios base sobre los que construimos soluciones más avanzadas.
      </p>

      <div style="
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 16px;
      ">

        <div class="corp-block">
          <h4 style="margin: 0 0 8px;">📊 Análisis de datos e informes</h4>
          <p style="color: var(--muted); margin: 0;">
            Estudios de datos con conclusiones claras y entregables en PDF,
            pensados para perfiles no técnicos.
          </p>
        </div>

        <div class="corp-block">
          <h4 style="margin: 0 0 8px;">⚡ ETL y preparación de datos</h4>
          <p style="color: var(--muted); margin: 0;">
            Limpieza, transformación e integración de datos
            para que estén listos para analizar o visualizar.
          </p>
        </div>

        <div class="corp-block">
          <h4 style="margin: 0 0 8px;">📈 Dashboards</h4>
          <p style="color: var(--muted); margin: 0;">
            Cuadros de mando sencillos y funcionales
            enfocados en KPIs y seguimiento.
          </p>
        </div>

        <div class="corp-block">
          <h4 style="margin: 0 0 8px;">🧩 Automatización y APIs</h4>
          <p style="color: var(--muted); margin: 0;">
            Automatización de procesos e integraciones básicas
            entre sistemas.
          </p>
        </div>

        <div class="corp-block">
          <h4 style="margin: 0 0 8px;">🤖 IA aplicada</h4>
          <p style="color: var(--muted); margin: 0;">
            Modelos y soluciones de IA
            cuando el proyecto y los datos están preparados.
          </p>
          <span class="tag">Coming soon</span>
        </div>

      </div>
    </section>

    <!-- DIVULGACIÓN -->
    <section class="teaching section-accent">
      <h3 style="margin: 0 0 10px;">Divulgación</h3>
      <p style="color: var(--muted); margin: 0 0 12px;">
        Comparto contenido sobre ciencia de datos y tecnología
        desde un enfoque práctico y realista.
      </p>
      <div class="social-links">
        <a href="https://www.youtube.com/@magobetechnology" target="_blank" rel="noopener">🎥 YouTube</a>
        <a href="https://www.tiktok.com/@magobetech" target="_blank" rel="noopener">📱 TikTok</a>
        <a href="https://www.instagram.com/magobetech/" target="_blank" rel="noopener">📸 Instagram</a>
      </div>
    </section>
  `;
}
