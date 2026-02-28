<template>
  <div class="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] font-sans overflow-x-hidden">
    <!-- Hero Section -->
    <Hero />
    
    <!-- Services Section -->
    <Services />
    
    <!-- Projects Section -->
    <section id="proyectos" class="section-with-bg py-[var(--space-3xl)] px-[var(--space-md)]">
      <div class="max-w-7xl mx-auto px-4">
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="inline-block px-4 py-1 text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] bg-[var(--color-accent-dim)] border border-[var(--color-border-accent)] rounded-full mb-4">
            Portafolio
          </span>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Proyectos <span class="bg-[var(--color-gradient-popular)] text-transparent bg-clip-text">Recientes</span>
          </h2>
          <p class="text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto">
            Algunos de los sistemas que he desarrollado para clientes satisfechos.
          </p>
        </div>
        
        <!-- Projects -->
        <div class="space-y-12">
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
            :technologies="['Vue 3', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL']"
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
        
        <!-- More Projects CTA -->
        <div class="text-center mt-12">
          <p class="text-[var(--color-text-muted)] mb-4">¿Quieres ver más proyectos?</p>
          <a 
            href="https://github.com/tu-usuario" 
            target="_blank"
            class="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[color:var(--color-accent)] font-medium transition-colors"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Ver más en GitHub
          </a>
        </div>
      </div>
    </section>
    
    <!-- Process Section -->
    <Process id="proceso" />
    
    <!-- Tech Stack Section -->
    <TechStackMarquee />
    
    <!-- Pricing Section -->
    <Pricing id="precios" />
    
    <!-- CTA Section -->
    <CTA />
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import ProjectCard from './components/ProjectCard.vue'
import Process from './components/Process.vue'
import TechStackMarquee from './components/TechStackMarquee.vue' // ← Corregido: TechStackMarquee (no TechStack)
import CTA from './components/CTA.vue'
import Footer from './components/Footer.vue'
import Pricing from './components/Pricing.vue'
</script>