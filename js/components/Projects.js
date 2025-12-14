export default function Projects() {
  return `
    <!-- INTRO -->
    <section id="projects" class="section-accent hero">
      <h2>Proyectos & Casos de uso</h2>
      <p>
        A continuación se muestran <strong>ejemplos de proyectos reales</strong>
        desarrollados durante mi formación en Ciencia de Datos y prácticas técnicas.
        Se presentan como <em>casos de uso aplicables a empresas</em>.
      </p>
      <span class="tag">Portfolio · Solo informativo</span>
    </section>

    <!-- PROYECTOS -->
    <section class="section-accent projects-grid">

      <!-- TFG -->
      <div class="corp-block project-card">
        <h3>🤖 IA aplicada a redacción de ofertas de empleo</h3>
        <p>
          Proyecto de fin de grado centrado en el uso de
          <strong>Inteligencia Artificial</strong> para mejorar la calidad,
          claridad y atractivo de ofertas de empleo y voluntariado.
        </p>
        <ul class="skills-list">
          <li>Procesamiento de texto</li>
          <li>Análisis de lenguaje</li>
          <li>IA aplicada a RRHH</li>
        </ul>
        <span class="tag">Caso de uso real</span>
      </div>

      <!-- ECONOMÍA / ANÁLISIS -->
      <div class="corp-block project-card">
        <h3>📊 Análisis económico y predicción de ventas</h3>
        <p>
          Estudio de datos de ventas de varias tiendas mediante
          <strong>modelos de datos de panel</strong> y
          <strong>series temporales</strong>,
          con conclusiones orientadas a negocio.
        </p>
        <ul class="skills-list">
          <li>Análisis descriptivo</li>
          <li>Modelos econométricos</li>
          <li>Predicciones</li>
        </ul>
        <span class="tag">Proyecto académico</span>
      </div>

      <!-- ETL + DATOS -->
      <div class="corp-block project-card">
        <h3>⚡ Integración y transformación de datos (ETL)</h3>
        <p>
          Diseño de procesos ETL para integrar datos desde
          diferentes fuentes y prepararlos para análisis
          y visualización.
        </p>
        <ul class="skills-list">
          <li>Azure Data Factory</li>
          <li>Power Automate</li>
          <li>SQL y calidad del dato</li>
        </ul>
        <span class="tag">Ejemplo técnico</span>
      </div>

      <!-- VISUAL -->
      <div class="corp-block project-card">
        <h3>📈 Dashboards y reporting</h3>
        <p>
          Creación de dashboards en Power BI enfocados en KPIs,
          seguimiento de métricas y toma de decisiones.
        </p>
        <ul class="skills-list">
          <li>Modelado de datos</li>
          <li>Diseño de KPIs</li>
          <li>Visualización clara</li>
        </ul>
        <span class="tag">Ejemplo de dashboard</span>
      </div>

    </section>

    <!-- FUTURO -->
    <section class="teaching">
      <h3>Próximamente</h3>
      <p>
        Se añadirán más proyectos relacionados con
        <strong>visión artificial</strong>,
        <strong>modelos predictivos</strong>
        y enlaces a repositorios de GitHub.
      </p>
      <p>
        Actualmente los proyectos se muestran con fines informativos.
        La contratación de servicios se habilitará próximamente.
      </p>
      <a href="#contact" class="cta">Solicitar información</a>
    </section>
  `;
}
