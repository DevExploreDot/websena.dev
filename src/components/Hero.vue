<template>
  <section class="hero-section">
    <div class="bg-grid"></div>
   <!--  <div class="bg-glow bg-glow--top-left"></div>
    <div class="bg-glow bg-glow--bottom-right"></div> -->

    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-eyebrow">
          <span class="badge-dot"></span>
          Disponible para nuevos proyectos
        </div>

        <h1 class="hero-title">
          Sistemas que transforman<br /><em>tu negocio</em>
        </h1>

        <p class="hero-subtitle">
          Desarrollo software empresarial con arquitectura modular y RBAC avanzado. 
          <strong>Automatiza procesos, reduce costos operativos y escala sin límites.</strong>
        </p>

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

        <div class="hero-location">
          <svg class="location-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          Basado en La Paz, Bolivia · Servicios remotos worldwide
        </div>
      </div>

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
                    <div class="data-label">Empleados</div>
                  </div>
                  <div class="data-card">
                    <div class="data-value">18</div>
                    <div class="data-label">Sedes</div>
                  </div>
                  <div class="data-card">
                    <div class="data-value">99.8%</div>
                    <div class="data-label">Precisión</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a href="#servicios" class="scroll-indicator" aria-label="Desplazarse a servicios">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </a>
  </section>
</template>

<script setup lang="ts">
const phoneNumber = '59177777777' 
const message = encodeURIComponent('Hola Samuel, vi tu portafolio y me interesa desarrollar un sistema para mi negocio. ¿Podemos agendar una llamada?')
const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`
</script>

<style scoped>
/* ── Layout y Fondo ── */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg);
  font-family: 'DM Sans', sans-serif;
  padding: 100px 24px;
  box-sizing: border-box;
  overflow: hidden; /* 🔥 SOLUCIÓN SCROLL: Recorta luces de fondo */
}

/* ── Elementos de Fondo ── */
/* .bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--color-border) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-border) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.9;
  mask-image: radial-gradient(ellipse 70% 50% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
} */

.bg-glow {
  position: absolute;
  width: 50vw;
  height: 50vw;
  border-radius: 50%;
  filter: blur(150px);
  opacity: 0.3;
  pointer-events: none;
}

/* 🔥 SOLUCIÓN COLOR: Usa tus variables globales */
.bg-glow--top-left { top: -10%; left: -20%; background: var(--color-accent); }
.bg-glow--bottom-right { bottom: -10%; right: -20%; background: var(--color-accent); }

/* ── Contenedor Principal ── */
.hero-container {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 50px;
  align-items: center;
}

/* ── Contenido Izquierdo ── */
.hero-content { display: flex; flex-direction: column; gap: 24px; }

.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-accent);
  background: var(--color-accent-dim);
  border: 1px solid var(--color-border-accent);
  padding: 8px 16px;
  border-radius: 100px;
  width: fit-content;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--color-accent);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.hero-title {
  font-size: clamp(36px, 6vw, 60px);
  font-weight: 800;
  color: var(--color-text);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0;
}

.hero-title em {
  font-style: normal;
  background: var(--color-gradient-popular);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 18px;
  color: var(--color-text-muted);
  line-height: 1.6;
  max-width: 550px;
  margin: 0;
}

.hero-subtitle strong { color: var(--color-text); }

/* ── Estadísticas ── */
.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-top: 10px;
}

.stat {
  padding: 16px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 28px;
  font-weight: 800;
  color: var(--color-accent);
  line-height: 1;
}

.stat-label {
  font-size: 11px;
  color: var(--color-text-muted);
  text-transform: uppercase;
  margin-top: 4px;
  display: block;
}

/* ── CTAs ── */
.hero-ctas {
  display: flex;
  gap: 15px;
  margin-top: 10px;
  flex-wrap: wrap;
}

.cta-primary {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  background: var(--color-accent);
  color: #000;
  border-radius: 12px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.cta-secondary {
  padding: 14px 28px;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;
}

.cta-secondary:hover {
  background: var(--color-surface);
}

.cta-icon { width: 20px; height: 20px; }
.cta-arrow { margin-left: 5px; }

/* ── Ubicación ── */
.hero-location {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--color-text-muted);
  margin-top: 10px;
}
.location-icon { width: 18px; color: var(--color-accent); }

/* ── Mockup Visual ── */
.hero-visual { display: flex; justify-content: center; }
.visual-container { width: 100%; max-width: 480px; }

.visual-screen--desktop {
  background: var(--color-surface-2);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  box-shadow: var(--shadow-md);
  overflow: hidden;
}

.screen-header {
  padding: 12px 16px;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  gap: 8px;
  align-items: center;
  background: rgba(0,0,0,0.2);
}

.dot { width: 10px; height: 10px; border-radius: 50%; }
.dot--red { background: #ff5f57; }
.dot--yellow { background: #ffbd2e; }
.dot--green { background: #28c940; }
.screen-title { font-size: 12px; color: var(--color-text-muted); font-weight: 600; }

.screen-body { padding: 20px; display: flex; flex-direction: column; gap: 20px; }

.screen-modules {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.module-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: var(--color-surface);
  border-radius: 8px;
  font-size: 13px;
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
}

.module-item--active {
  background: var(--color-accent-dim);
  border: 1px solid var(--color-border-accent);
  color: var(--color-accent);
}

.module-icon { font-size: 16px; }

.screen-data {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.data-card {
  background: var(--color-surface);
  padding: 12px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid var(--color-border);
}

.data-value { font-weight: 800; color: var(--color-accent); font-size: 16px; }
.data-label { font-size: 10px; color: var(--color-text-muted); text-transform: uppercase; margin-top: 2px; }

/* ── Animaciones ── */
@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--color-text-muted);
  animation: bounce 2s infinite;
}

/* ── Responsive ── */
@media (max-width: 968px) {
  .hero-container { grid-template-columns: 1fr; text-align: center; gap: 40px; }
  .hero-content { align-items: center; }
  .hero-visual { display: none; }
  .hero-ctas { justify-content: center; width: 100%; }
  .hero-stats { justify-items: center; }
}
</style>