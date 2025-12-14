export default function Services() {
  return `
    <section id="services" class="section-accent hero">
      <h2>Servicios</h2>
      <p>
        Empieza simple, crece bien.
        Ofrezco servicios de datos y tecnología pensados para proyectos
        que quieren <strong>ordenar, entender y aprovechar</strong> su información
        sin complicarse desde el día uno.
      </p>
    </section>

    <!-- SERVICIOS PRINCIPALES -->
    <section class="section-accent">
      <h3>Servicios disponibles</h3>

      <div class="corp-block">
        <h3>📊 Análisis de datos & informe en PDF</h3>
        <p>
          Análisis completo de tus datos para entender qué está pasando en tu negocio.
          Trabajo directamente con los datos (Python / R), sin dashboards,
          y entrego un <strong>informe en PDF</strong> claro, visual y accionable.
        </p>
        <p>
          Ideal si necesitas:
        </p>
        <ul class="skills-list">
          <li>Entender resultados, tendencias o problemas</li>
          <li>Un estudio puntual (tipo TFG / proyecto técnico)</li>
          <li>Conclusiones claras para tomar decisiones</li>
        </ul>
        <span class="tag">Entrega: PDF</span>
        <span class="tag">Enfoque: análisis</span>
      </div>

      <div class="corp-block">
        <h3>⚡ ETL básico & preparación de datos</h3>
        <p>
          Diseño e implementación de procesos sencillos para
          <strong>limpiar, transformar e integrar datos</strong>
          desde Excel, CSV, bases de datos o APIs.
        </p>
        <ul class="skills-list">
          <li>Azure Data Factory o Power Automate</li>
          <li>Datos listos para analizar o visualizar</li>
          <li>Documentación clara del proceso</li>
        </ul>
        <span class="tag">Automatización</span>
        <span class="tag">Escalable</span>
      </div>

      <div class="corp-block">
        <h3>📈 Dashboards en Power BI</h3>
        <p>
          Creación de dashboards claros y funcionales
          para hacer seguimiento de KPIs y resultados.
          Sin sobrecargar, solo lo que aporta valor.
        </p>
        <ul class="skills-list">
          <li>Diseño de KPIs</li>
          <li>Modelo de datos sencillo</li>
          <li>Informe listo para compartir</li>
        </ul>
        <span class="tag">Power BI</span>
        <span class="tag">Decisión</span>
      </div>
    </section>

    <!-- SERVICIOS EN CAMINO -->
    <section class="section-accent">
      <h3>Próximamente</h3>

      <div class="corp-block">
        <h3>🤖 Modelos predictivos</h3>
        <p>
          Forecasts, segmentación y modelos sencillos
          para proyectos que ya tienen datos limpios y objetivos claros.
        </p>
        <span class="tag">Coming soon</span>
      </div>

      <div class="corp-block">
        <h3>🌐 Desarrollo web & data apps</h3>
        <p>
          Aplicaciones web y data apps con React, Streamlit o Shiny,
          incluyendo control de usuarios y seguridad.
        </p>
        <span class="tag">Coming soon</span>
      </div>

      <div class="corp-block">
        <h3>🔐 APIs & automatizaciones avanzadas</h3>
        <p>
          Integraciones entre sistemas, funciones serverless
          y flujos más complejos para proyectos en crecimiento.
        </p>
        <span class="tag">Coming soon</span>
      </div>
    </section>

    <!-- CTA -->
    <section class="teaching">
      <h3>¿No sabes por dónde empezar?</h3>
      <p>
        Cuéntame tu caso y vemos qué servicio encaja mejor.
        Sin compromiso y sin tecnicismos raros.
      </p>
      <a href="#contact" class="cta">Hablar de mi proyecto</a>
    </section>
  `;
}
