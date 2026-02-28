<template>
  <section class="hero-section">
    <!-- Background decorative elements -->
    <div class="bg-grid"></div>
    <div class="bg-glow bg-glow--top-left"></div>
    <div class="bg-glow bg-glow--bottom-right"></div>

    <div class="hero-container">
      <div class="hero-content">
        <!-- Eyebrow badge (corregido: hero-eyebrow en lugar de hero-badge) -->
        <div class="hero-eyebrow">
          <span class="badge-dot"></span>
          Disponible para nuevos proyectos
        </div>

        <!-- Main headline -->
        <h1 class="hero-title">
          Sistemas que transforman<br /><em>tu negocio</em>
        </h1>

        <!-- Subtitle enfocado en resultados -->
        <p class="hero-subtitle">
          Desarrollo software empresarial con arquitectura modular y RBAC avanzado. 
          <strong>Automatiza procesos, reduce costos operativos y escala sin límites.</strong>
        </p>

        <!-- Social proof stats -->
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">15+</span>
            <span class="stat-label">Proyectos entregados</span>
          </div>
          <div class="stat">
            <span class="stat-number">60%</span>
            <span class="stat-label">Reducción procesos</span>
          </div>
          <div class="stat">
            <span class="stat-number">100%</span>
            <span class="stat-label">Clientes satisfechos</span>
          </div>
        </div>

        <!-- Primary CTAs -->
        <div class="hero-ctas">
          <a :href="whatsappLink" target="_blank" class="cta-primary">
            <svg class="cta-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Agendar consulta gratuita
          </a>
          <a href="#precios" class="cta-secondary">
            Ver precios
            <span class="cta-arrow">→</span>
          </a>
        </div>

        <!-- Location -->
        <div class="hero-location">
          <svg class="location-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          Basado en La Paz, Bolivia · Servicios remotos worldwide
        </div>
      </div>

      <!-- System mockup visual -->
      <div class="hero-visual">
        <div class="visual-container">
          <div class="visual-screen visual-screen--desktop">
            <div class="screen-content">
              <div class="screen-header">
                <div class="screen-dots">
                  <span class="dot dot--red"></span>
                  <span class="dot dot--yellow"></span>
                  <span class="dot dot--green"></span>
                </div>
                <div class="screen-title">System-DMLAP</div>
              </div>
              <div class="screen-body">
                <div class="screen-modules">
                  <div class="module-item module-item--active">
                    <span class="module-icon">👤</span>
                    <span class="module-label">RRHH</span>
                  </div>
                  <div class="module-item">
                    <span class="module-icon">📦</span>
                    <span class="module-label">Inventario</span>
                  </div>
                  <div class="module-item">
                    <span class="module-icon">📊</span>
                    <span class="module-label">Reportes</span>
                  </div>
                  <div class="module-item">
                    <span class="module-icon">⚙️</span>
                    <span class="module-label">Config</span>
                  </div>
                </div>
                <div class="screen-data">
                  <div class="data-card">
                    <div class="data-value">247</div>
                    <div class="data-label">Empleados activos</div>
                  </div>
                  <div class="data-card">
                    <div class="data-value">18</div>
                    <div class="data-label">Sedes gestionadas</div>
                  </div>
                  <div class="data-card">
                    <div class="data-value">99.8%</div>
                    <div class="data-label">Precisión inventario</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <a href="#servicios" class="scroll-indicator" aria-label="Desplazarse a servicios">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </a>
  </section>
</template>

<script setup lang="ts">
// Corregido: SIN espacios en la URL de WhatsApp
const phoneNumber = '59177777777' // 👉 TU NÚMERO REAL SIN ESPACIOS
const message = encodeURIComponent('Hola Samuel, vi tu portafolio y me interesa desarrollar un sistema para mi negocio. ¿Podemos agendar una llamada?')
const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}` // 👉 URL corregida
</script>

<style scoped>
/* ── Variables ── */
.hero-section {
  --accent: #00e5a0;
  --accent-dim: rgba(0, 229, 160, 0.12);
  --accent-glow: rgba(0, 229, 160, 0.35);
  --bg: #080c10;
  --surface: #0e1419;
  --surface-2: #131a22;
  --border: rgba(255, 255, 255, 0.07);
  --border-accent: rgba(0, 229, 160, 0.4);
  --text: #e8edf2;
  --text-muted: #6b7a8d;
  --gradient: linear-gradient(135deg, #00e5a0 0%, #00b4d8 100%);

  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg);
  overflow: hidden;
  font-family: 'DM Sans', 'Segoe UI', sans-serif;
  padding-top: 24px;
  padding-bottom: 120px;
}

/* ── Background effects ── */
.bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%);
  pointer-events: none;
}

.bg-glow {
  position: absolute;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  filter: blur(140px);
  pointer-events: none;
}

.bg-glow--top-left {
  top: -200px;
  left: -250px;
  background: rgba(0, 229, 160, 0.09);
}

.bg-glow--bottom-right {
  bottom: -200px;
  right: -250px;
  background: rgba(0, 180, 216, 0.09);
}

/* ── Layout ── */
.hero-container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

/* ── Content side ── */
.hero-content {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

/* ── Eyebrow badge ── */
.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--accent);
  background: var(--accent-dim);
  border: 1px solid var(--border-accent);
  padding: 8px 20px;
  border-radius: 100px;
  width: fit-content;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--accent);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

/* ── Title ── */
.hero-title {
  font-size: clamp(48px, 8vw, 72px);
  font-weight: 800;
  color: var(--text);
  line-height: 1.05;
  margin: 0;
  letter-spacing: -0.03em;
}

.hero-title em {
  font-style: normal;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ── Subtitle ── */
.hero-subtitle {
  font-size: 20px;
  color: var(--text-muted);
  line-height: 1.65;
  margin: 0;
}

.hero-subtitle strong {
  color: var(--text);
  font-weight: 700;
}

/* ── Stats ── */
.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 16px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.stat:hover {
  border-color: var(--border-accent);
  transform: translateY(-2px);
}

.stat-number {
  font-size: 32px;
  font-weight: 800;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.stat-label {
  font-size: 13px;
  color: var(--text-muted);
  text-align: center;
  line-height: 1.4;
}

/* ── CTAs ── */
.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  background: var(--accent);
  border: 2px solid var(--accent);
  border-radius: 16px;
  color: #000;
  font-size: 17px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 229, 160, 0.25);
}

.cta-primary:hover {
  background: #00ffb3;
  border-color: #00ffb3;
  transform: translateY(-3px);
  box-shadow: 0 8px 32px var(--accent-glow);
}

.cta-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 32px;
  background: transparent;
  border: 2px solid var(--border);
  border-radius: 16px;
  color: var(--text);
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-secondary:hover {
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-3px);
}

.cta-arrow {
  transition: transform 0.3s ease;
}

.cta-secondary:hover .cta-arrow {
  transform: translateX(6px);
}

/* ── Location ── */
.hero-location {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  color: var(--text-muted);
}

.location-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

/* ── Visual mockup ── */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  padding-top: 40px;
}

.visual-container {
  position: relative;
  width: 100%;
  max-width: 520px;
  height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-screen--desktop {
  width: 100%;
  height: 100%;
  background: var(--surface);
  border: 2px solid var(--border);
  border-radius: 28px;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
  transition: transform 0.4s ease;
}

.hero-container:hover .visual-screen--desktop {
  transform: perspective(1000px) rotateY(0) rotateX(0);
}

.screen-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.screen-header {
  padding: 20px 24px;
  border-bottom: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.02);
  display: flex;
  align-items: center;
  gap: 16px;
}

.screen-dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
}

.dot--red { background: #ff5f57; }
.dot--yellow { background: #ffbd2e; }
.dot--green { background: #28c940; }

.screen-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
}

.screen-body {
  flex: 1;
  padding: 28px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.screen-modules {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.module-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.04);
  color: var(--text-muted);
  transition: all 0.2s ease;
  cursor: pointer;
}

.module-item:hover {
  background: rgba(255, 255, 255, 0.08);
  color: var(--text);
}

.module-item--active {
  background: var(--accent-dim);
  color: var(--accent);
  border: 1px solid var(--border-accent);
}

.module-icon {
  font-size: 24px;
  min-width: 24px;
  text-align: center;
}

.module-label {
  font-size: 16px;
  font-weight: 600;
}

.screen-data {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.data-card {
  background: rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  border: 1px solid var(--border);
}

.data-value {
  font-size: 28px;
  font-weight: 800;
  color: var(--accent);
  line-height: 1.2;
  margin-bottom: 4px;
}

.data-label {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.4;
}

/* ── Scroll indicator ── */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--text-muted);
  transition: color 0.3s ease;
  animation: bounce 2s ease-in-out infinite;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.scroll-indicator:hover {
  color: var(--accent);
}

.scroll-indicator svg {
  width: 32px;
  height: 32px;
  stroke-width: 2.5px;
}

/* ── Animations ── */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(10px); }
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }

  .hero-content {
    margin: 0 auto;
    align-items: center;
  }

  .hero-stats {
    grid-template-columns: repeat(3, 1fr);
  }

  .hero-ctas {
    justify-content: center;
    width: 100%;
  }

  .hero-visual {
    padding-top: 0;
    max-width: 400px;
    margin: 0 auto;
  }

  .visual-container {
    max-width: 400px;
    height: 400px;
  }

  .visual-screen--desktop {
    border-radius: 24px;
  }
}

@media (max-width: 640px) {
  .hero-title {
    font-size: clamp(40px, 10vw, 56px);
  }

  .hero-subtitle {
    font-size: 18px;
  }

  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .hero-ctas {
    flex-direction: column;
  }

  .cta-primary,
  .cta-secondary {
    width: 100%;
    justify-content: center;
  }

  .visual-container {
    display: none;
  }

  .scroll-indicator {
    bottom: 32px;
  }
}
</style>