<template>
  <section class="cta-section py-[var(--space-3xl)] px-[var(--space-md)] relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="bg-grid"></div>
    <div class="bg-glow bg-glow--center"></div>
    
    <div class="cta-container max-w-4xl mx-auto px-4 text-center relative z-10">
      <!-- Badge -->
      <div class="cta-badge">
        <span class="badge-dot"></span>
        <span>Respuesta en menos de 2 horas</span>
      </div>
      
      <!-- Title -->
      <h2 class="cta-title">
        ¿Listo para llevar tu negocio<br /><em>al siguiente nivel</em>?
      </h2>
      
      <!-- Description -->
      <p class="cta-subtitle">
        Agenda una consulta gratuita de 30 minutos. Sin compromiso, solo conversamos sobre tu proyecto y cómo puedo ayudarte.
      </p>
      
      <!-- CTA Buttons -->
      <div class="cta-buttons">
        <a 
          :href="whatsappLink" 
          target="_blank"
          class="cta-button cta-button--primary"
        >
          <svg class="button-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Contactar por WhatsApp
        </a>
        <a 
          :href="emailLink"
          class="cta-button cta-button--secondary"
        >
          <svg class="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          Enviar Email
        </a>
      </div>
      
      <!-- Trust indicators -->
      <div class="cta-trust">
        <div class="trust-item">
          <svg class="trust-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span>Respuesta rápida</span>
        </div>
        <div class="trust-item">
          <svg class="trust-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
          <span>Consulta gratuita</span>
        </div>
        <div class="trust-item">
          <svg class="trust-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span>Sin compromiso</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const phoneNumber = '59177777777' // 👉 SIN espacios
const message = encodeURIComponent('Hola Samuel, vi tu portafolio y me interesa desarrollar un sistema para mi negocio. ¿Podemos agendar una llamada?')
const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}` // 👉 Corregido: sin espacio después de wa.me/

const email = 'senauluquipas@gmail.com'
const emailSubject = encodeURIComponent('Consulta sobre desarrollo de software')
const emailBody = encodeURIComponent('Hola Samuel,\n\nVi tu portafolio y me interesa desarrollar un sistema para mi negocio.\n\n[Cuéntame más sobre tu proyecto]\n\nSaludos,')
const emailLink = `mailto:${email}?subject=${emailSubject}&body=${emailBody}`
</script>

<style scoped>
/* ── Variables (reutilizadas de Pricing.vue) ── */
.cta-section {
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

.bg-glow--center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background: rgba(0, 229, 160, 0.08);
  filter: blur(150px);
  pointer-events: none;
}

/* ── Badge ── */
.cta-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: var(--accent);
  background: var(--accent-dim);
  border: 1px solid var(--border-accent);
  padding: 8px 18px;
  border-radius: 100px;
  margin-bottom: 32px;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--accent);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

/* ── Title ── */
.cta-title {
  font-size: clamp(36px, 6vw, 64px);
  font-weight: 800;
  color: var(--text);
  line-height: 1.05;
  margin: 0 0 24px;
  letter-spacing: -0.03em;
}

.cta-title em {
  font-style: normal;
  background: var(--popular-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ── Subtitle ── */
.cta-subtitle {
  font-size: 18px;
  color: var(--text-muted);
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto 40px;
}

/* ── Buttons ── */
.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-bottom: 48px;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 16px 36px;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.cta-button--primary {
  background: var(--accent);
  color: #000;
  border: 2px solid var(--accent);
}

.cta-button--primary:hover {
  background: #00ffb3;
  border-color: #00ffb3;
  box-shadow: 0 0 40px var(--accent-glow);
  transform: translateY(-3px);
}

.cta-button--secondary {
  background: transparent;
  color: var(--text);
  border: 2px solid var(--border);
}

.cta-button--secondary:hover {
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-3px);
}

.button-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

/* ── Trust indicators ── */
.cta-trust {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  margin-top: 24px;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--text-muted);
}

.trust-icon {
  width: 20px;
  height: 20px;
  color: var(--accent);
}

/* ── Animations ── */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
}

/* ── Responsive ── */
@media (max-width: 640px) {
  .cta-buttons {
    flex-direction: column;
    width: 100%;
  }
  
  .cta-button {
    width: 100%;
    padding: 16px;
  }
  
  .cta-trust {
    gap: 20px;
    flex-direction: column;
    align-items: center;
  }
}
</style>