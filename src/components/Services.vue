<template>
  <section id="servicios" class="services-section">
     <div class="bg-grid"></div>
    <!--<div class="bg-glow bg-glow--right"></div>
    <div class="bg-glow bg-glow--left"></div> -->

    <div class="services-container">
      <div class="services-header">
        <span class="services-eyebrow">Servicios</span>
        <h2 class="services-title">
          ¿Qué puedo hacer por tu <em>negocio</em>?
        </h2>
        <p class="services-subtitle">
          Soluciones tecnológicas personalizadas para automatizar procesos y hacer crecer tu empresa.
        </p>
      </div>
      
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon service-icon--primary">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="service-title">Sistemas de Reservas</h3>
          <p class="service-description">
            Plataformas completas para restaurantes, eventos y servicios. Gestión de cupos, horarios y pagos.
          </p>
          <ul class="service-features">
            <li class="service-feature">
              <span class="feature-check">✓</span>
              Reservas online 24/7
            </li>
            <li class="service-feature">
              <span class="feature-check">✓</span>
              Control de disponibilidad
            </li>
            <li class="service-feature">
              <span class="feature-check">✓</span>
              Notificaciones automáticas
            </li>
          </ul>
        </div>
        
        <div class="service-card">
          <div class="service-icon service-icon--secondary">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
          </div>
          <h3 class="service-title">Gestión Empresarial</h3>
          <p class="service-description">
            ERPs modulares para RRHH, inventarios, nómina y más. Adaptables a cualquier industria.
          </p>
          <ul class="service-features">
            <li class="service-feature">
              <span class="feature-check">✓</span>
              Módulos personalizables
            </li>
            <li class="service-feature">
              <span class="feature-check">✓</span>
              Reportes y analytics
            </li>
            <li class="service-feature">
              <span class="feature-check">✓</span>
              Multi-sucursal
            </li>
          </ul>
        </div>
        
        <div class="service-card">
          <div class="service-icon service-icon--tertiary">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="service-title">Landing Pages</h3>
          <p class="service-description">
            Páginas de alto impacto diseñadas para convertir visitantes en clientes. Optimizadas para SEO.
          </p>
          <ul class="service-features">
            <li class="service-feature">
              <span class="feature-check">✓</span>
              Diseño responsive
            </li>
            <li class="service-feature">
              <span class="feature-check">✓</span>
              Optimización SEO
            </li>
            <li class="service-feature">
              <span class="feature-check">✓</span>
              Alta velocidad de carga
            </li>
          </ul>
        </div>
        
        <div class="service-card">
          <div class="service-icon service-icon--quaternary">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
            </svg>
          </div>
          <h3 class="service-title">APIs & Integraciones</h3>
          <p class="service-description">
            Desarrollo de APIs RESTful e integración con servicios de terceros (pagos, WhatsApp, etc.)
          </p>
          <ul class="service-features">
            <li class="service-feature">
              <span class="feature-check">✓</span>
              APIs seguras y escalables
            </li>
            <li class="service-feature">
              <span class="feature-check">✓</span>
              Integración pasarelas de pago
            </li>
            <li class="service-feature">
              <span class="feature-check">✓</span>
              Webhooks y automatizaciones
            </li>
          </ul>
        </div>
        
        <div class="service-card">
          <div class="service-icon service-icon--quinary">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="service-title">Apps Móviles</h3>
          <p class="service-description">
            Aplicaciones móviles híbridas que funcionan en iOS y Android con un solo código.
          </p>
          <ul class="service-features">
            <li class="service-feature">
              <span class="feature-check">✓</span>
              iOS y Android
            </li>
            <li class="service-feature">
              <span class="feature-check">✓</span>
              Notificaciones push
            </li>
            <li class="service-feature">
              <span class="feature-check">✓</span>
              Sincronización en tiempo real
            </li>
          </ul>
        </div>
        
        <div class="service-card">
          <div class="service-icon service-icon--senary">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
          </div>
          <h3 class="service-title">Soporte & Mantenimiento</h3>
          <p class="service-description">
            Mantenimiento continuo, actualizaciones y soporte técnico para tus sistemas.
          </p>
          <ul class="service-features">
            <li class="service-feature">
              <span class="feature-check">✓</span>
              Soporte 24/7
            </li>
            <li class="service-feature">
              <span class="feature-check">✓</span>
              Actualizaciones de seguridad
            </li>
            <li class="service-feature">
              <span class="feature-check">✓</span>
              Backups automáticos
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Layout y Fondo ── */
.services-section {
  position: relative;
  overflow: hidden; /* 🔥 SOLUCIÓN SCROLL: Evita desbordamiento luces */
  padding: var(--space-3xl) var(--space-md);
  background: var(--color-bg); /* GLOBAL */
}

.services-container {
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}

/* ── Elementos de Fondo ── */
/* .bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--color-border) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-border) 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.1;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%);
  pointer-events: none;
} */

.bg-glow {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
  opacity: 0.15;
}

.bg-glow--left {
  top: -100px;
  left: -150px;
  background: var(--color-accent);
}

.bg-glow--right {
  bottom: -100px;
  right: -150px;
  background: var(--color-accent);
}

/* ── Header ── */
.services-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 64px;
}

.services-eyebrow {
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

.services-title {
  font-size: clamp(36px, 5vw, 60px);
  font-weight: 800;
  color: var(--color-text);
  line-height: 1.1;
  margin: 0 0 16px;
  letter-spacing: -0.03em;
}

.services-title em {
  font-style: normal;
  background: var(--color-gradient-popular);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.services-subtitle {
  font-size: 17px;
  color: var(--color-text-muted);
  line-height: 1.6;
}

/* ── Grid y Cards ── */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.service-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 32px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4);
  border-color: var(--color-border-accent);
}

/* ── Iconos ── */
.service-icon {
  width: 64px;
  height: 64px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

/* 🔥 SOLUCIÓN COLOR: Ahora usa variables globales y clases específicas */
.service-icon--primary { background: var(--color-accent-dim); color: var(--color-accent); }
.service-icon--secondary { background: rgba(79, 70, 229, 0.15); color: #818cf8; } /* Indigo */
.service-icon--tertiary { background: rgba(147, 51, 234, 0.15); color: #c084fc; } /* Purple */
.service-icon--quaternary { background: rgba(34, 197, 94, 0.15); color: #4ade80; } /* Green */
.service-icon--quinary { background: rgba(249, 115, 22, 0.15); color: #fb923c; } /* Orange */
.service-icon--senary { background: rgba(236, 72, 153, 0.15); color: #f472b6; } /* Pink */

/* ── Contenido de Card ── */
.service-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 12px;
}

.service-description {
  font-size: 15px;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0 0 24px;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.service-feature {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--color-text);
}

.feature-check {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  flex-shrink: 0;
  background: var(--color-accent-dim);
  color: var(--color-accent);
  font-weight: 700;
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>