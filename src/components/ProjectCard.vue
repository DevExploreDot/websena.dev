<template>
  <div class="project-card">
    <div class="project-card__inner">
      <!-- Image Section -->
      <div :class="imagePositionClass" class="project-card__image">
        <div class="project-card__image-container">
          <!-- Project Image or Placeholder -->
          <div v-if="imageUrl" class="project-card__image-wrapper">
            <img :src="imageUrl" :alt="title" class="project-card__image-element" />
            <div class="project-card__image-overlay"></div>
          </div>
          <div v-else class="project-card__placeholder">
            <div class="project-card__placeholder-icon">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <p class="project-card__placeholder-text">Screenshot próximamente</p>
            <p class="project-card__placeholder-subtext">Proyecto en desarrollo</p>
          </div>
        </div>
        
        <!-- Project Type Badge -->
        <div class="project-card__badge">
          <span>{{ projectType }}</span>
        </div>
      </div>
      
      <!-- Content Section -->
      <div :class="contentPositionClass" class="project-card__content">
        <!-- Title -->
        <h3 class="project-card__title">{{ title }}</h3>
        
        <!-- Description -->
        <p class="project-card__description">{{ description }}</p>
        
        <!-- Results/Metrics -->
        <div v-if="results && results.length > 0" class="project-card__results">
          <p class="project-card__results-title">Resultados:</p>
          <ul class="project-card__results-list">
            <li v-for="(result, index) in results" :key="index" class="project-card__result-item">
              <svg class="project-card__result-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
              {{ result }}
            </li>
          </ul>
        </div>
        
        <!-- Features -->
        <div class="project-card__features">
          <p class="project-card__features-title">Características principales:</p>
          <ul class="project-card__features-list">
            <li v-for="(feature, index) in features" :key="index" class="project-card__feature-item">
              <svg class="project-card__feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>
        
        <!-- Technologies -->
        <div class="project-card__tech">
          <p class="project-card__tech-title">Tecnologías:</p>
          <div class="project-card__tech-list">
            <span 
              v-for="(tech, index) in technologies" 
              :key="index"
              class="project-card__tech-item"
            >
              {{ tech }}
            </span>
          </div>
        </div>
        
        <!-- Links -->
        <div class="project-card__actions">
          <a 
            v-if="liveLink"
            :href="liveLink" 
            target="_blank"
            class="project-card__button project-card__button--primary"
          >
            <svg class="project-card__button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
            Ver Demo
          </a>
          <a 
            v-if="githubLink"
            :href="githubLink" 
            target="_blank"
            class="project-card__button project-card__button--secondary"
          >
            <svg class="project-card__button-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Código en GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  title: string
  description: string
  features: string[]
  technologies: string[]
  githubLink?: string
  liveLink?: string
  imageUrl?: string
  imageRight?: boolean
  projectType?: string
  results?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  imageRight: true,
  projectType: 'Web App'
})

const imagePositionClass = computed(() => props.imageRight ? 'md:order-2' : 'md:order-1')
const contentPositionClass = computed(() => props.imageRight ? 'md:order-1' : 'md:order-2')
</script>

<style scoped>
/* ── Variables (reutilizadas de Pricing.vue) ── */
.project-card {
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

  font-family: 'DM Sans', 'Segoe UI', sans-serif;
}

/* ── Card base ── */
.project-card__inner {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 24px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card__inner:hover {
  transform: translateY(-4px);
  box-shadow: 0 28px 56px rgba(0, 0, 0, 0.5);
  border-color: rgba(255, 255, 255, 0.12);
}

/* ── Layout ── */
.project-card__inner {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .project-card__inner {
    flex-direction: row;
  }
}

/* ── Image section ── */
.project-card__image {
  position: relative;
  width: 100%;
  min-height: 300px;
}

@media (min-width: 768px) {
  .project-card__image {
    width: 50%;
    min-height: auto;
  }
}

.project-card__image-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: linear-gradient(135deg, var(--surface-2) 0%, var(--surface) 100%);
}

.project-card__image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
}

.project-card__image-element {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card__inner:hover .project-card__image-element {
  transform: scale(1.05);
}

.project-card__image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.6) 100%);
  border-radius: 16px;
}

/* ── Placeholder ── */
.project-card__placeholder {
  text-align: center;
  max-width: 300px;
}

.project-card__placeholder-icon {
  width: 96px;
  height: 96px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  color: var(--text-muted);
}

.project-card__placeholder-text {
  font-size: 16px;
  color: var(--text-muted);
  font-weight: 500;
  margin-bottom: 4px;
}

.project-card__placeholder-subtext {
  font-size: 13px;
  color: var(--text-muted);
  opacity: 0.7;
}

/* ── Badge ── */
.project-card__badge {
  position: absolute;
  top: 24px;
  left: 24px;
  background: var(--accent-dim);
  color: var(--accent);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 100px;
  border: 1px solid var(--border-accent);
}

/* ── Content section ── */
.project-card__content {
  padding: 32px;
  width: 100%;
}

@media (min-width: 768px) {
  .project-card__content {
    width: 50%;
  }
}

/* ── Typography ── */
.project-card__title {
  font-size: 28px;
  font-weight: 800;
  color: var(--text);
  margin: 0 0 16px;
  line-height: 1.2;
}

.project-card__description {
  font-size: 16px;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0 0 28px;
}

/* ── Results ── */
.project-card__results {
  background: rgba(0, 229, 160, 0.05);
  border: 1px solid rgba(0, 229, 160, 0.2);
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 28px;
}

.project-card__results-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}

.project-card__results-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.project-card__result-item {
  font-size: 14px;
  color: var(--text);
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.project-card__result-icon {
  width: 16px;
  height: 16px;
  color: var(--accent);
  flex-shrink: 0;
  margin-top: 2px;
}

/* ── Features ── */
.project-card__features {
  margin-bottom: 28px;
}

.project-card__features-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}

.project-card__features-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.project-card__feature-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 15px;
  color: var(--text);
}

.project-card__feature-icon {
  width: 20px;
  height: 20px;
  color: var(--accent);
  flex-shrink: 0;
  margin-top: 2px;
}

/* ── Technologies ── */
.project-card__tech {
  margin-bottom: 28px;
}

.project-card__tech-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}

.project-card__tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.project-card__tech-item {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-muted);
  font-size: 13px;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 10px;
  white-space: nowrap;
}

/* ── Actions ── */
.project-card__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;
}

.project-card__button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 14px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.project-card__button--primary {
  background: var(--accent);
  color: #000;
  border: 2px solid var(--accent);
}

.project-card__button--primary:hover {
  background: #00ffb3;
  border-color: #00ffb3;
  box-shadow: 0 0 24px var(--accent-glow);
}

.project-card__button--secondary {
  background: transparent;
  color: var(--text);
  border: 2px solid var(--border);
}

.project-card__button--secondary:hover {
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
}

.project-card__button-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .project-card__content {
    padding: 24px;
  }
  
  .project-card__title {
    font-size: 24px;
  }
  
  .project-card__image {
    min-height: 280px;
  }
}
</style>