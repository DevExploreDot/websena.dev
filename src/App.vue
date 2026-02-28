<template>
  <div class="main-layout">
    
    <Hero />
    
    <Services />
    
    <section id="proyectos" class="section-projects">
      <div class="bg-grid"></div>
      <div class="container">
        
        <header class="section-header">
          <span class="badge-accent">Portafolio</span>
          <h2 class="section-title">
            Proyectos <span class="gradient-text">Recientes</span>
          </h2>
          <p class="section-subtitle">
            Algunos de los sistemas que he desarrollado para clientes satisfechos.
          </p>
        </header>
        
        <div class="projects-grid">
          <ProjectCard
            title="DMLAP - Sistema de Reservaciones"
            description="Plataforma completa para gestión de reservas de eventos y brunch buffet. Permite a los clientes reservar online y al administrador controlar cupos y horarios en tiempo real."
            projectType="Sistema de Reservas"
            :features="[
              'Reservas online 24/7 para bodas, cumpleaños y eventos corporativos',
              'Control de cupos por horario para brunch buffet',
              'Panel de administración con reportes y estadísticas',
              'Notificaciones automáticas por email y WhatsApp'
            ]"
            :results="[
              'Redujo tiempo de reserva en 80%',
              'Aumentó reservas en 45%',
              'Eliminó errores de sobrebooking'
            ]"
            :technologies="['Vue 3', 'TypeScript', 'CSS Puro', 'Node.js', 'PostgreSQL']"
            githubLink="https://github.com/tu-usuario/project-dmlap"
            liveLink="https://dmlap-demo.com"
            :imageRight="true"
          />
          
          <ProjectCard
            title="System-DMLAP - ERP Empresarial"
            description="Sistema empresarial modular y escalable diseñado para gestionar múltiples áreas de una empresa. Implementa arquitectura multi-tenant para aislar datos de cada cliente."
            projectType="ERP Empresarial"
            :features="[
              'Gestión completa de RRHH: nómina, permisos, asistencias y vacaciones',
              'Control de inventarios y almacén con alertas de stock',
              'Sistema de permisos dinámico basado en roles (RBAC)',
              'Multi-tenancy: cada empresa con su base de datos aislada'
            ]"
            :results="[
              'Redujo procesos administrativos en 60%',
              'Mejoró precisión de inventario en 95%',
              'Escalable a múltiples países'
            ]"
            :technologies="['Angular', 'TypeScript', '.NET Core', 'SQL Server', 'Azure']"
            githubLink="https://github.com/tu-usuario/system-dmlap"
            :imageRight="false"
          />
        </div>
        
        <footer class="projects-footer">
          <p>¿Quieres ver más proyectos?</p>
          <a 
            href="https://github.com/tu-usuario" 
            target="_blank"
            class="github-link"
          >
            <svg class="icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Ver más en GitHub
          </a>
        </footer>
      </div>
    </section>
    
    <Process id="proceso" />
    <TechStackMarquee />
    <Pricing id="precios" />
    <CTA />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import ProjectCard from './components/ProjectCard.vue'
import Process from './components/Process.vue'
import TechStackMarquee from './components/TechStackMarquee.vue' 
import CTA from './components/CTA.vue'
import Footer from './components/Footer.vue'
import Pricing from './components/Pricing.vue'
</script>

<style scoped>
.main-layout {
  min-height: 100vh;
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-sans);
  overflow: hidden;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-md);
  position: relative; /* CRUCIAL para bg-grid */
  z-index: 1;
}

/* Sección de Proyectos */
.section-projects {
  padding: var(--space-3xl) 0;
  background-color: var(--color-bg);
  position: relative; /* CRUCIAL */
  overflow: hidden;
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--space-3xl);
}

.badge-accent {
  display: inline-block;
  padding: 4px 16px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-accent);
  background: var(--color-accent-dim);
  border: 1px solid var(--color-border-accent);
  border-radius: 100px;
  margin-bottom: 1rem;
}

.section-title {
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
}

.gradient-text {
  background: var(--color-gradient-popular);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  color: var(--color-text-muted);
  font-size: 1.125rem;
}

.projects-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-3xl);
}

.projects-footer {
  text-align: center;
  margin-top: var(--space-3xl);
}

.projects-footer p {
  color: var(--color-text-muted);
  margin-bottom: 1rem;
}

.github-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-accent);
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s;
}

.github-link:hover {
  opacity: 0.8;
}

.icon {
  width: 1.25rem;
  height: 1.25rem;
}

/* Responsive móvil */
@media (max-width: 768px) {
  .section-projects {
    padding: var(--space-xl) 0;
  }
}
</style>