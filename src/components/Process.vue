<template>
  <section id="proceso" class="process-section">
    <div class="bg-grid"></div>
    <div class="bg-glow bg-glow--center"></div>

    <div class="main-container">
      <div class="header-container">
        <span class="process-eyebrow">Mi Metodología</span>
        <h2 class="process-title">
          Cómo trabajo para<br /><em>garantizar tu éxito</em>
        </h2>
        <p class="process-subtitle">
          Un proceso estructurado y transparente desde la idea inicial hasta la entrega final.
        </p>
      </div>
      
      <div class="process-timeline">
        <div class="process-step">
          <div class="process-step__connector process-step__connector--top"></div>
          <div class="process-step__content">
            <div class="process-step__badge">1</div>
            <h3 class="process-step__title">Descubrimiento</h3>
            <p class="process-step__description">
              Analizamos tus necesidades, objetivos de negocio y usuarios finales para definir el alcance exacto del proyecto.
            </p>
            <ul class="process-step__details">
              <li>Reunión inicial gratuita (30 min)</li>
              <li>Análisis de competidores</li>
              <li>Definición de requisitos</li>
            </ul>
          </div>
          <div class="process-step__connector process-step__connector--bottom"></div>
        </div>
        
        <div class="process-step">
          <div class="process-step__connector process-step__connector--top"></div>
          <div class="process-step__content">
            <div class="process-step__badge">2</div>
            <h3 class="process-step__title">Diseño & Prototipado</h3>
            <p class="process-step__description">
              Creamos wireframes y prototipos interactivos para validar la experiencia de usuario antes de desarrollar.
            </p>
            <ul class="process-step__details">
              <li>Diseño UI/UX responsive</li>
              <li>Prototipo funcional</li>
              <li>Aprobación por tu equipo</li>
            </ul>
          </div>
          <div class="process-step__connector process-step__connector--bottom"></div>
        </div>
        
        <div class="process-step">
          <div class="process-step__connector process-step__connector--top"></div>
          <div class="process-step__content">
            <div class="process-step__badge">3</div>
            <h3 class="process-step__title">Desarrollo</h3>
            <p class="process-step__description">
              Construimos tu sistema con código limpio, pruebas automatizadas y entregas incrementales cada 1-2 semanas.
            </p>
            <ul class="process-step__details">
              <li>Desarrollo ágil</li>
              <li>Commits diarios en GitHub</li>
              <li>Demo semanal de avances</li>
            </ul>
          </div>
          <div class="process-step__connector process-step__connector--bottom"></div>
        </div>
        
        <div class="process-step">
          <div class="process-step__connector process-step__connector--top"></div>
          <div class="process-step__content">
            <div class="process-step__badge">4</div>
            <h3 class="process-step__title">Entrega & Soporte</h3>
            <p class="process-step__description">
              Desplegamos tu sistema en producción y ofrecemos soporte continuo para garantizar su éxito a largo plazo.
            </p>
            <ul class="process-step__details">
              <li>Capacitación a tu equipo</li>
              <li>Documentación completa</li>
              <li>Soporte 30-90 días incluido</li>
            </ul>
          </div>
          <div class="process-step__connector process-step__connector--bottom"></div>
        </div>
      </div>
      
      <div class="cta-container">
        <a href="#precios" class="process-cta">
          Ver planes y precios
          <span class="process-cta__arrow">→</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Estilos refactorizados usando tus variables ── */
.process-section {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: 'DM Sans', 'Segoe UI', sans-serif;
  position: relative;
  overflow: hidden;
  /* Espaciado usando tus variables */
  padding-top: var(--space-3xl);
  padding-bottom: var(--space-3xl);
  padding-left: var(--space-md);
  padding-right: var(--space-md);
}

/* ── Background effects ── */
/* .bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%);
  pointer-events: none;
} */

.bg-glow--center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  border-radius: 50%;
  /* Corregido a tu accent color */
  background: var(--color-accent-dim);
  filter: blur(120px);
  pointer-events: none;
}

/* ── Layout ── */
.main-container {
  max-width: 1152px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.header-container {
  text-align: center;
  max-width: 768px;
  margin: 0 auto 80px;
}

/* ── Header Styles ── */
.process-eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-accent);
  background: var(--color-accent-dim);
  border: 1px solid var(--color-border-accent);
  padding: 6px 16px;
  border-radius: 100px;
  margin-bottom: 24px;
}

.process-title {
  font-size: 60px;
  font-weight: 800;
  color: var(--color-text);
  line-height: 1.1;
  margin: 0 0 16px;
  letter-spacing: -0.03em;
}

.process-title em {
  font-style: normal;
  /* CORREGIDO A TU GRADIENTE */
  background: var(--color-gradient-popular);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.process-subtitle {
  font-size: 17px;
  color: var(--color-text-muted);
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
}

/* ── Timeline ── */
.process-timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 0;
}

.process-timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  background: var(--color-border);
  transform: translateX(-50%);
}

/* ── Steps ── */
.process-step {
  position: relative;
  width: 100%;
  margin-bottom: 60px;
  padding: 0 40px;
}

.process-step:nth-child(odd) .process-step__content {
  text-align: right;
}

.process-step:nth-child(even) .process-step__content {
  text-align: left;
}

.process-step__content {
  position: relative;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 32px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.process-step__content:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-border-accent);
}

.process-step__badge {
  position: absolute;
  top: -24px;
  left: 50%;
  transform: translateX(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--color-accent);
  color: var(--color-bg);
  font-size: 20px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid var(--color-bg);
  box-shadow: 0 0 20px var(--color-accent-glow);
}

.process-step__title {
  font-size: 24px;
  font-weight: 800;
  color: var(--color-text);
  margin: 0 0 12px;
}

.process-step__description {
  font-size: 16px;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0 0 20px;
}

.process-step__details {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.process-step__details li {
  font-size: 15px;
  color: var(--color-text);
  position: relative;
  padding-left: 20px;
}

.process-step__details li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-weight: bold;
}

/* ── Connectors ── */
.process-step__connector {
  position: absolute;
  background: var(--color-border);
  z-index: 0;
}

.process-step__connector--top {
  top: -40px;
  width: 2px;
  height: 40px;
  left: 50%;
  transform: translateX(-50%);
}

.process-step__connector--bottom {
  bottom: -40px;
  width: 2px;
  height: 40px;
  left: 50%;
  transform: translateX(-50%);
}

/* ── CTA ── */
.cta-container {
  text-align: center;
  margin-top: var(--space-2xl);
}

.process-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  background: var(--color-accent);
  color: var(--color-bg);
  font-size: 16px;
  font-weight: 700;
  border-radius: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.process-cta:hover {
  background: #ffb300; /* Un tono más claro para el hover */
  box-shadow: 0 0 32px var(--color-accent-glow);
  transform: translateX(4px);
}

.process-cta__arrow {
  transition: transform 0.3s ease;
}

.process-cta:hover .process-cta__arrow {
  transform: translateX(6px);
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .process-title { font-size: 48px; }
}

@media (max-width: 768px) {
  .process-title { font-size: 36px; }

  .process-timeline::before {
    left: 32px;
  }
  
  .process-step {
    padding-left: 72px;
    padding-right: 0;
  }
  
  .process-step__content {
    text-align: left !important;
  }
  
  .process-step__badge {
    left: 32px;
    transform: translateX(0);
  }
  
  .process-step__connector--top,
  .process-step__connector--bottom {
    left: 32px;
    transform: translateX(0);
  }
}
</style>