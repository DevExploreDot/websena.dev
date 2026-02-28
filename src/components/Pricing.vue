<template>
  <section class="pricing-section" id="precios">
    <!-- Background decorative elements -->
    <div class="bg-grid"></div>
    <div class="bg-glow bg-glow--left"></div>
    <div class="bg-glow bg-glow--right"></div>

    <div class="pricing-container">
      <!-- Header -->
      <div class="pricing-header">
        <span class="pricing-eyebrow">Inversión</span>
        <h2 class="pricing-title">Planes que escalan<br /><em>con tu negocio</em></h2>
        <p class="pricing-subtitle">
          Transparencia total. Sin sorpresas. Elige el plan que mejor se adapte a lo que necesitas.
        </p>

        <!-- Service type selector -->
        <div class="service-tabs">
          <button
            v-for="service in services"
            :key="service.id"
            class="service-tab"
            :class="{ 'service-tab--active': activeService === service.id }"
            @click="activeService = service.id"
          >
            <span class="service-tab__icon">{{ service.icon }}</span>
            {{ service.label }}
          </button>
        </div>
      </div>

      <!-- Plans grid -->
      <div class="plans-grid">
        <div
          v-for="(plan, index) in currentPlans"
          :key="plan.name"
          class="plan-card"
          :class="{
            'plan-card--popular': plan.popular,
            'plan-card--basic': index === 0,
            'plan-card--premium': index === 2,
          }"
        >
          <!-- Popular badge -->
          <div v-if="plan.popular" class="popular-badge">
            <span>⚡ Más elegido</span>
          </div>

          <!-- Plan header -->
          <div class="plan-header">
            <div class="plan-icon">{{ plan.icon }}</div>
            <h3 class="plan-name">{{ plan.name }}</h3>
            <p class="plan-description">{{ plan.description }}</p>
          </div>

          <!-- Price -->
          <div class="plan-price">
            <span class="plan-price__currency">$</span>
            <span class="plan-price__amount">{{ plan.price }}</span>
            <span class="plan-price__period">USD</span>
          </div>
          <p class="plan-delivery">⏱ Entrega en {{ plan.delivery }}</p>

          <!-- Features -->
          <ul class="plan-features">
            <li
              v-for="feature in plan.features"
              :key="feature.text"
              class="plan-feature"
              :class="{ 'plan-feature--disabled': !feature.included }"
            >
              <span class="plan-feature__check">{{ feature.included ? '✓' : '✕' }}</span>
              {{ feature.text }}
            </li>
          </ul>

          <!-- CTA -->
          <a
            href="#contacto"
            class="plan-cta"
            :class="{ 'plan-cta--popular': plan.popular }"
          >
            Solicitar cotización
            <span class="plan-cta__arrow">→</span>
          </a>
        </div>
      </div>

      <!-- Footer note -->
      <p class="pricing-note">
        💬 ¿Tienes un proyecto especial? <a href="#contacto" class="pricing-note__link">Hablemos</a> y armamos un plan a tu medida.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

type FeatureItem = { text: string; included: boolean }

interface Plan {
  name: string
  icon: string
  description: string
  price: string
  delivery: string
  popular?: boolean
  features: FeatureItem[]
}

interface ServiceType {
  id: string
  label: string
  icon: string
  plans: Plan[]
}

const activeService = ref('landing')

const services: ServiceType[] = [
  {
  id: 'landing',
  label: 'Landing Page',
  icon: '🚀',
  plans: [
    {
      name: 'Básico',
      icon: '🌱',
      description: 'Presencia online rápida y profesional.',
      price: '250', // ↓ de 299
      delivery: '5–7 días',
      features: [
        { text: 'Diseño de 1 página', included: true },
        { text: 'Responsive (móvil + escritorio)', included: true },
        { text: 'Formulario de contacto', included: true },
        { text: 'SEO básico', included: true },
        { text: 'Dominio y hosting 3 meses', included: true }, // ✨ Agregado
        { text: 'Animaciones personalizadas', included: false },
        { text: 'Integración con CRM', included: false },
        { text: 'Soporte 30 días', included: false },
      ],
    },
    {
      name: 'Estándar',
      icon: '⚡',
      description: 'Convierte visitas en clientes desde el día 1.',
      price: '450', // ↓ de 599
      delivery: '10–14 días',
      popular: true,
      features: [
        { text: 'Diseño de 1 página premium', included: true },
        { text: 'Responsive (móvil + escritorio)', included: true },
        { text: 'Formulario de contacto', included: true },
        { text: 'SEO optimizado', included: true },
        { text: 'Dominio y hosting 6 meses', included: true }, // ✨ Agregado
        { text: 'Animaciones personalizadas', included: true },
        { text: 'Integración con CRM', included: true },
        { text: 'Soporte 30 días', included: true }, // ✨ Agregado
      ],
    },
    {
      name: 'Premium',
      icon: '👑',
      description: 'Solución completa con estrategia de conversión.',
      price: '750', // ↓ de 999
      delivery: '14–21 días',
      features: [
        { text: 'Diseño de hasta 3 páginas', included: true },
        { text: 'Responsive (móvil + escritorio)', included: true },
        { text: 'Formulario de contacto', included: true },
        { text: 'SEO avanzado + analytics', included: true },
        { text: 'Dominio y hosting 12 meses', included: true }, // ✨ Agregado
        { text: 'Animaciones personalizadas', included: true },
        { text: 'Integración con CRM', included: true },
        { text: 'Blog / secciones extra', included: true },
        { text: 'Soporte 60 días', included: true }, // ✨ Mejorado
      ],
    },
  ],
},
  {
    id: 'corporate',
    label: 'Sitio Corporativo',
    icon: '🏢',
    plans: [
      {
        name: 'Básico',
        icon: '🌱',
        description: 'Presencia institucional profesional para tu empresa.',
        price: '799',
        delivery: '14–21 días',
        features: [
          { text: 'Hasta 5 páginas', included: true },
          { text: 'Responsive adaptativo', included: true },
          { text: 'Formulario de contacto', included: true },
          { text: 'SEO básico', included: true },
          { text: 'Blog corporativo', included: false },
          { text: 'Multi-idioma', included: false },
          { text: 'Panel de administración', included: false },
          { text: 'Soporte 60 días', included: false },
        ],
      },
      {
        name: 'Estándar',
        icon: '⚡',
        description: 'Sitio robusto con gestión de contenido incluida.',
        price: '1,499',
        delivery: '21–30 días',
        popular: true,
        features: [
          { text: 'Hasta 10 páginas', included: true },
          { text: 'Responsive adaptativo', included: true },
          { text: 'Formulario de contacto', included: true },
          { text: 'SEO avanzado', included: true },
          { text: 'Blog corporativo', included: true },
          { text: 'Multi-idioma', included: true },
          { text: 'Panel de administración', included: false },
          { text: 'Soporte 60 días', included: false },
        ],
      },
      {
        name: 'Premium',
        icon: '👑',
        description: 'Solución enterprise con panel de control y soporte extendido.',
        price: '2,499',
        delivery: '30–45 días',
        features: [
          { text: 'Páginas ilimitadas', included: true },
          { text: 'Responsive adaptativo', included: true },
          { text: 'Formulario de contacto', included: true },
          { text: 'SEO avanzado + schema', included: true },
          { text: 'Blog corporativo', included: true },
          { text: 'Multi-idioma', included: true },
          { text: 'Panel de administración', included: true },
          { text: 'Soporte 60 días', included: true },
        ],
      },
    ],
  },
  {
    id: 'system',
    label: 'Sistema Web / App',
    icon: '⚙️',
    plans: [
      {
        name: 'Básico',
        icon: '🌱',
        description: 'Sistema funcional para automatizar procesos simples.',
        price: '1,999',
        delivery: '30–45 días',
        features: [
          { text: 'Módulos básicos (hasta 3)', included: true },
          { text: 'Autenticación de usuarios', included: true },
          { text: 'Base de datos relacional', included: true },
          { text: 'Panel de administración', included: true },
          { text: 'API REST', included: false },
          { text: 'Reportes y exportación', included: false },
          { text: 'Roles y permisos', included: false },
          { text: 'Soporte 90 días', included: false },
        ],
      },
      {
        name: 'Estándar',
        icon: '⚡',
        description: 'Sistema completo con lógica de negocio y reportería.',
        price: '3,999',
        delivery: '45–75 días',
        popular: true,
        features: [
          { text: 'Módulos ilimitados', included: true },
          { text: 'Autenticación de usuarios', included: true },
          { text: 'Base de datos relacional', included: true },
          { text: 'Panel de administración', included: true },
          { text: 'API REST', included: true },
          { text: 'Reportes y exportación', included: true },
          { text: 'Roles y permisos', included: false },
          { text: 'Soporte 90 días', included: false },
        ],
      },
      {
        name: 'Premium',
        icon: '👑',
        description: 'Solución escalable lista para producción enterprise.',
        price: '6,999',
        delivery: '60–120 días',
        features: [
          { text: 'Módulos ilimitados', included: true },
          { text: 'Autenticación avanzada (OAuth)', included: true },
          { text: 'Base de datos + caché', included: true },
          { text: 'Panel de administración', included: true },
          { text: 'API REST + WebSockets', included: true },
          { text: 'Reportes y exportación', included: true },
          { text: 'Roles y permisos', included: true },
          { text: 'Soporte 90 días', included: true },
        ],
      },
    ],
  },
  {
    id: 'ecommerce',
    label: 'E-commerce',
    icon: '🛍️',
    plans: [
      {
        name: 'Básico',
        icon: '🌱',
        description: 'Tu tienda online lista para vender desde el día 1.',
        price: '1,299',
        delivery: '21–30 días',
        features: [
          { text: 'Catálogo de productos', included: true },
          { text: 'Carrito de compras', included: true },
          { text: 'Pasarela de pago básica', included: true },
          { text: 'Panel de pedidos', included: true },
          { text: 'Cupones y descuentos', included: false },
          { text: 'Inventario automatizado', included: false },
          { text: 'Integración con correos', included: false },
          { text: 'Soporte 60 días', included: false },
        ],
      },
      {
        name: 'Estándar',
        icon: '⚡',
        description: 'Tienda completa con herramientas de conversión y marketing.',
        price: '2,299',
        delivery: '30–45 días',
        popular: true,
        features: [
          { text: 'Catálogo ilimitado', included: true },
          { text: 'Carrito de compras', included: true },
          { text: 'Múltiples pasarelas de pago', included: true },
          { text: 'Panel de pedidos avanzado', included: true },
          { text: 'Cupones y descuentos', included: true },
          { text: 'Inventario automatizado', included: true },
          { text: 'Integración con correos', included: false },
          { text: 'Soporte 60 días', included: false },
        ],
      },
      {
        name: 'Premium',
        icon: '👑',
        description: 'E-commerce escalable con automatizaciones y analytics avanzados.',
        price: '3,999',
        delivery: '45–60 días',
        features: [
          { text: 'Catálogo ilimitado', included: true },
          { text: 'Carrito de compras', included: true },
          { text: 'Múltiples pasarelas de pago', included: true },
          { text: 'Panel de pedidos avanzado', included: true },
          { text: 'Cupones y descuentos', included: true },
          { text: 'Inventario automatizado', included: true },
          { text: 'Integración con correos', included: true },
          { text: 'Soporte 60 días', included: true },
        ],
      },
    ],
  },
]

const currentPlans = computed(() => {
  return services.find((s) => s.id === activeService.value)?.plans ?? []
})
</script>

<style scoped>
/* ── Variables ── */
.pricing-section {
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

  position: relative;
  background: var(--bg);
  padding: 120px 24px;
  overflow: hidden;
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

/* ── Layout ── */
.pricing-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* ── Header ── */
.pricing-header {
  text-align: center;
  margin-bottom: 64px;
}

.pricing-eyebrow {
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

.pricing-title {
  font-size: clamp(36px, 5vw, 60px);
  font-weight: 800;
  color: var(--text);
  line-height: 1.1;
  margin: 0 0 16px;
  letter-spacing: -0.03em;
}

.pricing-title em {
  font-style: normal;
  background: var(--popular-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.pricing-subtitle {
  font-size: 17px;
  color: var(--text-muted);
  max-width: 500px;
  margin: 0 auto 40px;
  line-height: 1.6;
}

/* ── Service tabs ── */
.service-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.service-tab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 100px;
  color: var(--text-muted);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.service-tab:hover {
  border-color: rgba(255, 255, 255, 0.15);
  color: var(--text);
}

.service-tab--active {
  background: var(--accent-dim);
  border-color: var(--border-accent);
  color: var(--accent);
}

.service-tab__icon {
  font-size: 16px;
}

/* ── Plans grid ── */
.plans-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: start;
}

/* ── Plan card ── */
.plan-card {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 32px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.plan-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4);
}

.plan-card--popular {
  background: var(--surface-2);
  border-color: var(--border-accent);
  box-shadow: 0 0 0 1px var(--border-accent), 0 24px 64px rgba(0, 229, 160, 0.08);
  transform: scale(1.03);
}

.plan-card--popular:hover {
  transform: scale(1.03) translateY(-4px);
}

/* Popular badge */
.popular-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
}

.popular-badge span {
  display: inline-block;
  background: var(--popular-gradient);
  color: #000;
  font-size: 12px;
  font-weight: 700;
  padding: 5px 16px;
  border-radius: 100px;
  white-space: nowrap;
}

/* Plan header */
.plan-header {
  margin-bottom: 24px;
}

.plan-icon {
  font-size: 28px;
  margin-bottom: 12px;
}

.plan-name {
  font-size: 20px;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 8px;
}

.plan-description {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0;
}

/* Price */
.plan-price {
  display: flex;
  align-items: flex-end;
  gap: 2px;
  margin-bottom: 6px;
}

.plan-price__currency {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-muted);
  padding-bottom: 6px;
}

.plan-price__amount {
  font-size: 52px;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.04em;
  line-height: 1;
}

.plan-card--popular .plan-price__amount {
  background: var(--popular-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.plan-price__period {
  font-size: 14px;
  color: var(--text-muted);
  padding-bottom: 8px;
  margin-left: 4px;
}

.plan-delivery {
  font-size: 13px;
  color: var(--text-muted);
  margin: 0 0 24px;
}

/* Features */
.plan-features {
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
  border-top: 1px solid var(--border);
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.plan-feature {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--text);
}

.plan-feature--disabled {
  color: var(--text-muted);
  text-decoration: line-through;
  text-decoration-color: rgba(107, 122, 141, 0.4);
}

.plan-feature__check {
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

.plan-feature--disabled .plan-feature__check {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text-muted);
}

/* CTA Button */
.plan-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 14px 24px;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--text);
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.plan-cta:hover {
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
}

.plan-cta--popular {
  background: var(--accent);
  border-color: var(--accent);
  color: #000;
}

.plan-cta--popular:hover {
  background: #00ffb3;
  border-color: #00ffb3;
  box-shadow: 0 0 24px var(--accent-glow);
}

.plan-cta__arrow {
  transition: transform 0.2s ease;
}

.plan-cta:hover .plan-cta__arrow {
  transform: translateX(4px);
}

/* Footer note */
.pricing-note {
  text-align: center;
  font-size: 15px;
  color: var(--text-muted);
  margin-top: 48px;
}

.pricing-note__link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid var(--border-accent);
  padding-bottom: 1px;
  transition: border-color 0.2s;
}

.pricing-note__link:hover {
  border-color: var(--accent);
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .plans-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .plan-card--popular {
    transform: scale(1);
  }

  .plan-card--popular:hover {
    transform: translateY(-4px);
  }
}

@media (max-width: 640px) {
  .pricing-section {
    padding: 80px 16px;
  }

  .plans-grid {
    grid-template-columns: 1fr;
  }

  .service-tabs {
    gap: 6px;
  }

  .service-tab {
    padding: 8px 14px;
    font-size: 13px;
  }
}
</style>