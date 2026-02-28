<template>
  <footer class="footer-section">
    
    <div class="bg-grid"></div>
    <!-- <div class="footer-bg-glow"></div> -->

    <div class="footer-container">
      <div class="footer-grid">
        
        <div class="footer-brand-col">
          <h3 class="footer-brand">
            Samuel Seña <span class="footer-brand-accent">Uluquipa</span>
          </h3>
          <p class="footer-description">
            Desarrollador de software especializado en crear soluciones tecnológicas que automatizan procesos y hacen crecer negocios.
          </p>
          <div class="footer-socials">
            <a href="https://github.com/tu-usuario" target="_blank" class="footer-social" aria-label="GitHub">
              <svg class="footer-social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com/in/tu-perfil" target="_blank" class="footer-social" aria-label="LinkedIn">
              <svg class="footer-social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a :href="whatsappLink" target="_blank" class="footer-social" aria-label="WhatsApp">
              <svg class="footer-social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>
        
        <div class="footer-links-col">
          <h4 class="footer-heading">Enlaces Rápidos</h4>
          <ul class="footer-links-list">
            <li v-for="link in ['Servicios', 'Proyectos', 'Proceso', 'Tecnologías']" :key="link">
              <a :href="'#' + link.toLowerCase()" class="footer-link">{{ link }}</a>
            </li>
          </ul>
        </div>
        
        <div class="footer-contact-col">
          <h4 class="footer-heading">Contacto</h4>
          <ul class="footer-contact-list">
            <li class="footer-contact-item">
              <svg class="footer-contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v10a2 2 0 002 2z"/></svg>
              <a :href="emailLink" class="footer-contact-link">{{ email }}</a>
            </li>
            <li class="footer-contact-item">
              <svg class="footer-contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span class="footer-contact-text">La Paz, Bolivia</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="footer-bottom-container">
        <div class="footer-bottom-flex">
          <p class="footer-copyright">&copy; {{ currentYear }} Samuel Seña Uluquipa. Todos los derechos reservados.</p>
          <p class="footer-dev">Desarrollado con <span class="footer-heart">❤️</span> en La Paz, Bolivia</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const phoneNumber = '59177777777' 
const message = encodeURIComponent('Hola Samuel, vi tu portafolio y me interesa desarrollar un sistema para mi negocio. ¿Podemos agendar una llamada?')
const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`

const email = 'senauluquipas@gmail.com'
const emailLink = `mailto:${email}`

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer-section {
  background: var(--color-surface);
  color: var(--color-text);
  font-family: 'DM Sans', sans-serif;
  position: relative;
  overflow: hidden;
  padding-top: 64px;
}

/* ── Background effects ── */
/* .footer-bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
  z-index: 0;
  opacity: 0.5;
} */

.footer-bg-glow {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 300px;
  /* CORREGIDO A TU ACCENT COLOR DIM */
  background: var(--color-accent-dim);
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
  opacity: 0.5;
}

/* ── Containers ── */
.footer-container {
  position: relative;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px 64px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .footer-grid {
    grid-template-columns: 2fr 1fr 1fr;
  }
}

/* ── Brand ── */
.footer-brand {
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.2;
}

.footer-brand-accent {
  /* CORREGIDO A TU GRADIENTE POPULAR */
  background: var(--color-gradient-popular);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-description {
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 32px;
  max-width: 450px;
}

.footer-socials {
  display: flex;
  gap: 16px;
}

.footer-social {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text-muted);
  transition: all 0.3s ease;
  border: 1px solid var(--color-border);
  text-decoration: none;
}

.footer-social:hover {
  background: var(--color-accent-dim);
  color: var(--color-accent);
  border-color: var(--color-border-accent);
  transform: translateY(-2px);
  box-shadow: 0 0 20px var(--color-accent-glow);
}

.footer-social-icon {
  width: 24px;
  height: 24px;
}

/* ── Headings ── */
.footer-heading {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 24px;
  position: relative;
  padding-bottom: 8px;
}

.footer-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 32px;
  height: 2px;
  background: var(--color-accent);
  border-radius: 1px;
}

/* ── Links ── */
.footer-links-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-link {
  color: var(--color-text-muted);
  text-decoration: none;
  font-size: 16px;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer-link:hover {
  color: var(--color-accent);
}

.footer-link::before {
  content: '';
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-accent);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.footer-link:hover::before {
  opacity: 1;
}

/* ── Contact ── */
.footer-contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.footer-contact-icon {
  width: 20px;
  height: 20px;
  color: var(--color-accent);
  flex-shrink: 0;
  margin-top: 2px;
}

.footer-contact-link,
.footer-contact-text {
  color: var(--color-text-muted);
  font-size: 16px;
  line-height: 1.5;
  text-decoration: none;
  transition: color 0.2s ease;
}

a.footer-contact-link:hover {
  color: var(--color-accent);
}

/* ── Bottom bar ── */
.footer-bottom {
  border-top: 1px solid var(--color-border);
  position: relative;
  z-index: 1;
}

.footer-bottom-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 16px;
}

.footer-bottom-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
}

@media (min-width: 768px) {
  .footer-bottom-flex {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.footer-copyright,
.footer-dev {
  color: var(--color-text-muted);
  font-size: 14px;
  margin: 0;
}

.footer-heart {
  color: var(--color-accent);
  display: inline-block;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.2); }
}
</style>