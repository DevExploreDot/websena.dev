<template>
  <section id="servicios" class="services-section py-[var(--space-3xl)] px-[var(--space-md)] relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="bg-grid"></div>
    <div class="bg-glow bg-glow--left"></div>
    <div class="bg-glow bg-glow--right"></div>

    <div class="services-container max-w-7xl mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="services-eyebrow">Servicios</span>
        <h2 class="services-title">
          ¿Qué puedo hacer por tu <em>negocio</em>?
        </h2>
        <p class="services-subtitle">
          Soluciones tecnológicas personalizadas para automatizar procesos y hacer crecer tu empresa.
        </p>
      </div>
      
      <!-- Services Grid -->
      <div class="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Service 1 -->
        <div class="service-card">
          <div class="service-icon bg-[var(--color-accent-dim)] text-[var(--color-accent)]">
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
        
        <!-- Service 2 -->
        <div class="service-card">
          <div class="service-icon bg-indigo-900/30 text-indigo-400">
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
        
        <!-- Service 3 -->
        <div class="service-card">
          <div class="service-icon bg-purple-900/30 text-purple-400">
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
        
        <!-- Service 4 -->
        <div class="service-card">
          <div class="service-icon bg-green-900/30 text-green-400">
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
        
        <!-- Service 5 -->
        <div class="service-card">
          <div class="service-icon bg-orange-900/30 text-orange-400">
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
        
        <!-- Service 6 -->
        <div class="service-card">
          <div class="service-icon bg-pink-900/30 text-pink-400">
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
/* ── Variables (reutilizadas de Pricing.vue) ── */
.services-section {
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
  --popular-gradient: linear-gradient(135deg, #00e5a0 0%, #00b4d8 100%);

  background: var(--bg);
  font-family: 'DM Sans', 'Segoe UI', sans-serif;
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
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
}

.bg-glow--left {
  top: -100px;
  left: -150px;
  background: rgba(0, 229, 160, 0.06);
}

.bg-glow--right {
  bottom: -100px;
  right: -150px;
  background: rgba(0, 180, 216, 0.06);
}

/* ── Header ── */
.services-eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  background: var(--accent-dim);
  border: 1px solid var(--border-accent);
  padding: 6px 16px;
  border-radius: 100px;
  margin-bottom: 24px;
}

.services-title {
  font-size: clamp(36px, 5vw, 60px);
  font-weight: 800;
  color: var(--text);
  line-height: 1.1;
  margin: 0 0 16px;
  letter-spacing: -0.03em;
}

.services-title em {
  font-style: normal;
  background: var(--popular-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.services-subtitle {
  font-size: 17px;
  color: var(--text-muted);
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
}

/* ── Cards ── */
.service-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 32px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4);
  border-color: rgba(255, 255, 255, 0.12);
}

.service-icon {
  width: 64px;
  height: 64px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  font-size: 28px;
}

.service-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 12px;
}

.service-description {
  font-size: 15px;
  color: var(--text-muted);
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
  color: var(--text);
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
  background: var(--accent-dim);
  color: var(--accent);
  font-weight: 700;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>