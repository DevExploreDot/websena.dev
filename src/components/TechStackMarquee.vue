<template>
  <section id="tecnologias" class="section-with-bg py-[var(--space-3xl)] px-[var(--space-md)] overflow-hidden">
    <!-- Background decorative elements -->
    <div class="bg-grid"></div>
    <div class="bg-glow bg-glow--top"></div>
    <div class="bg-glow bg-glow--bottom"></div>

    <div class="max-w-7xl mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="techstack-eyebrow">Tecnologías</span>
        <h2 class="techstack-title">
          Stack <em>tecnológico</em>
        </h2>
        <p class="techstack-subtitle">
          Las herramientas que uso para crear soluciones robustas y escalables.
        </p>
      </div>
      
      <!-- Marquee Container -->
      <div class="relative">
        <!-- Gradient Overlays for fade effect -->
        <div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-20 pointer-events-none"></div>
        <div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-20 pointer-events-none"></div>
        
        <!-- First Row - Moving Left -->
        <div class="marquee-container mb-8">
          <div class="marquee-track marquee-left">
            <!-- Frontend Technologies -->
            <div class="tech-group">
              <span class="tech-category">Frontend</span>
              <div class="tech-item"><span class="tech-icon">⚛️</span>React</div>
              <div class="tech-item"><span class="tech-icon">💚</span>Vue 3</div>
              <div class="tech-item"><span class="tech-icon">🅰️</span>Angular</div>
              <div class="tech-item"><span class="tech-icon">📘</span>TypeScript</div>
              <div class="tech-item"><span class="tech-icon">🎨</span>Tailwind CSS</div>
              <div class="tech-item"><span class="tech-icon">⚡</span>Vite</div>
            </div>
            
            <!-- Backend Technologies -->
            <div class="tech-group">
              <span class="tech-category">Backend</span>
              <div class="tech-item"><span class="tech-icon">🟢</span>Node.js</div>
              <div class="tech-item"><span class="tech-icon">🔷</span>.NET Core</div>
              <div class="tech-item"><span class="tech-icon">🐍</span>Python</div>
              <div class="tech-item"><span class="tech-icon">☕</span>Java</div>
              <div class="tech-item"><span class="tech-icon">🚀</span>Express</div>
            </div>
            
            <!-- Database Technologies -->
            <div class="tech-group">
              <span class="tech-category">Base de Datos</span>
              <div class="tech-item"><span class="tech-icon">🐘</span>PostgreSQL</div>
              <div class="tech-item"><span class="tech-icon">🐬</span>MySQL</div>
              <div class="tech-item"><span class="tech-icon">📊</span>SQL Server</div>
              <div class="tech-item"><span class="tech-icon">🍃</span>MongoDB</div>
              <div class="tech-item"><span class="tech-icon">⚡</span>Redis</div>
            </div>
            
            <!-- DevOps/CI-CD Technologies -->
            <div class="tech-group">
              <span class="tech-category">CI/CD</span>
              <div class="tech-item"><span class="tech-icon">🐳</span>Docker</div>
              <div class="tech-item"><span class="tech-icon">☸️</span>Kubernetes</div>
              <div class="tech-item"><span class="tech-icon">🔄</span>GitHub Actions</div>
              <div class="tech-item"><span class="tech-icon">☁️</span>AWS</div>
              <div class="tech-item"><span class="tech-icon">🔷</span>Azure</div>
              <div class="tech-item"><span class="tech-icon">📦</span>Git</div>
            </div>
            
            <!-- Duplicate for seamless loop -->
            <div class="tech-group">
              <span class="tech-category">Frontend</span>
              <div class="tech-item"><span class="tech-icon">⚛️</span>React</div>
              <div class="tech-item"><span class="tech-icon">💚</span>Vue 3</div>
              <div class="tech-item"><span class="tech-icon">🅰️</span>Angular</div>
              <div class="tech-item"><span class="tech-icon">📘</span>TypeScript</div>
              <div class="tech-item"><span class="tech-icon">🎨</span>Tailwind CSS</div>
              <div class="tech-item"><span class="tech-icon">⚡</span>Vite</div>
            </div>
            
            <div class="tech-group">
              <span class="tech-category">Backend</span>
              <div class="tech-item"><span class="tech-icon">🟢</span>Node.js</div>
              <div class="tech-item"><span class="tech-icon">🔷</span>.NET Core</div>
              <div class="tech-item"><span class="tech-icon">🐍</span>Python</div>
              <div class="tech-item"><span class="tech-icon">☕</span>Java</div>
              <div class="tech-item"><span class="tech-icon">🚀</span>Express</div>
            </div>
            
            <div class="tech-group">
              <span class="tech-category">Base de Datos</span>
              <div class="tech-item"><span class="tech-icon">🐘</span>PostgreSQL</div>
              <div class="tech-item"><span class="tech-icon">🐬</span>MySQL</div>
              <div class="tech-item"><span class="tech-icon">📊</span>SQL Server</div>
              <div class="tech-item"><span class="tech-icon">🍃</span>MongoDB</div>
              <div class="tech-item"><span class="tech-icon">⚡</span>Redis</div>
            </div>
            
            <div class="tech-group">
              <span class="tech-category">CI/CD</span>
              <div class="tech-item"><span class="tech-icon">🐳</span>Docker</div>
              <div class="tech-item"><span class="tech-icon">☸️</span>Kubernetes</div>
              <div class="tech-item"><span class="tech-icon">🔄</span>GitHub Actions</div>
              <div class="tech-item"><span class="tech-icon">☁️</span>AWS</div>
              <div class="tech-item"><span class="tech-icon">🔷</span>Azure</div>
              <div class="tech-item"><span class="tech-icon">📦</span>Git</div>
            </div>
          </div>
        </div>
        
        <!-- Second Row - Moving Right (Reverse) -->
        <div class="marquee-container">
          <div class="marquee-track marquee-right">
            <!-- CI/CD Technologies (Reverse order) -->
            <div class="tech-group">
              <span class="tech-category">CI/CD</span>
              <div class="tech-item"><span class="tech-icon">📦</span>Git</div>
              <div class="tech-item"><span class="tech-icon">🔷</span>Azure</div>
              <div class="tech-item"><span class="tech-icon">☁️</span>AWS</div>
              <div class="tech-item"><span class="tech-icon">🔄</span>GitHub Actions</div>
              <div class="tech-item"><span class="tech-icon">☸️</span>Kubernetes</div>
              <div class="tech-item"><span class="tech-icon">🐳</span>Docker</div>
            </div>
            
            <!-- Database Technologies (Reverse order) -->
            <div class="tech-group">
              <span class="tech-category">Base de Datos</span>
              <div class="tech-item"><span class="tech-icon">⚡</span>Redis</div>
              <div class="tech-item"><span class="tech-icon">🍃</span>MongoDB</div>
              <div class="tech-item"><span class="tech-icon">📊</span>SQL Server</div>
              <div class="tech-item"><span class="tech-icon">🐬</span>MySQL</div>
              <div class="tech-item"><span class="tech-icon">🐘</span>PostgreSQL</div>
            </div>
            
            <!-- Backend Technologies (Reverse order) -->
            <div class="tech-group">
              <span class="tech-category">Backend</span>
              <div class="tech-item"><span class="tech-icon">🚀</span>Express</div>
              <div class="tech-item"><span class="tech-icon">☕</span>Java</div>
              <div class="tech-item"><span class="tech-icon">🐍</span>Python</div>
              <div class="tech-item"><span class="tech-icon">🔷</span>.NET Core</div>
              <div class="tech-item"><span class="tech-icon">🟢</span>Node.js</div>
            </div>
            
            <!-- Frontend Technologies (Reverse order) -->
            <div class="tech-group">
              <span class="tech-category">Frontend</span>
              <div class="tech-item"><span class="tech-icon">⚡</span>Vite</div>
              <div class="tech-item"><span class="tech-icon">🎨</span>Tailwind CSS</div>
              <div class="tech-item"><span class="tech-icon">📘</span>TypeScript</div>
              <div class="tech-item"><span class="tech-icon">🅰️</span>Angular</div>
              <div class="tech-item"><span class="tech-icon">💚</span>Vue 3</div>
              <div class="tech-item"><span class="tech-icon">⚛️</span>React</div>
            </div>
            
            <!-- Duplicate for seamless loop -->
            <div class="tech-group">
              <span class="tech-category">CI/CD</span>
              <div class="tech-item"><span class="tech-icon">📦</span>Git</div>
              <div class="tech-item"><span class="tech-icon">🔷</span>Azure</div>
              <div class="tech-item"><span class="tech-icon">☁️</span>AWS</div>
              <div class="tech-item"><span class="tech-icon">🔄</span>GitHub Actions</div>
              <div class="tech-item"><span class="tech-icon">☸️</span>Kubernetes</div>
              <div class="tech-item"><span class="tech-icon">🐳</span>Docker</div>
            </div>
            
            <div class="tech-group">
              <span class="tech-category">Base de Datos</span>
              <div class="tech-item"><span class="tech-icon">⚡</span>Redis</div>
              <div class="tech-item"><span class="tech-icon">🍃</span>MongoDB</div>
              <div class="tech-item"><span class="tech-icon">📊</span>SQL Server</div>
              <div class="tech-item"><span class="tech-icon">🐬</span>MySQL</div>
              <div class="tech-item"><span class="tech-icon">🐘</span>PostgreSQL</div>
            </div>
            
            <div class="tech-group">
              <span class="tech-category">Backend</span>
              <div class="tech-item"><span class="tech-icon">🚀</span>Express</div>
              <div class="tech-item"><span class="tech-icon">☕</span>Java</div>
              <div class="tech-item"><span class="tech-icon">🐍</span>Python</div>
              <div class="tech-item"><span class="tech-icon">🔷</span>.NET Core</div>
              <div class="tech-item"><span class="tech-icon">🟢</span>Node.js</div>
            </div>
            
            <div class="tech-group">
              <span class="tech-category">Frontend</span>
              <div class="tech-item"><span class="tech-icon">⚡</span>Vite</div>
              <div class="tech-item"><span class="tech-icon">🎨</span>Tailwind CSS</div>
              <div class="tech-item"><span class="tech-icon">📘</span>TypeScript</div>
              <div class="tech-item"><span class="tech-icon">🅰️</span>Angular</div>
              <div class="tech-item"><span class="tech-icon">💚</span>Vue 3</div>
              <div class="tech-item"><span class="tech-icon">⚛️</span>React</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Variables (reutilizadas de Pricing.vue) ── */
#tecnologias {
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
  z-index: 0;
}

.bg-glow--top {
  position: absolute;
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background: rgba(0, 229, 160, 0.06);
  filter: blur(150px);
  pointer-events: none;
  z-index: 0;
}

.bg-glow--bottom {
  position: absolute;
  bottom: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background: rgba(0, 180, 216, 0.06);
  filter: blur(150px);
  pointer-events: none;
  z-index: 0;
}

/* ── Header ── */
.techstack-eyebrow {
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

.techstack-title {
  font-size: clamp(36px, 5vw, 60px);
  font-weight: 800;
  color: var(--text);
  line-height: 1.1;
  margin: 0 0 16px;
  letter-spacing: -0.03em;
}

.techstack-title em {
  font-style: normal;
  background: var(--popular-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.techstack-subtitle {
  font-size: 17px;
  color: var(--text-muted);
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
}

/* ── Marquee ── */
.marquee-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.marquee-track {
  display: flex;
  gap: 2.5rem;
  width: max-content;
  padding: 12px 0;
}

.marquee-left {
  animation: marquee-left 45s linear infinite;
}

.marquee-right {
  animation: marquee-right 45s linear infinite;
}

.marquee-container:hover .marquee-track {
  animation-play-state: paused;
}

@keyframes marquee-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes marquee-right {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

/* ── Tech Groups ── */
.tech-group {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1rem 2rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 9999px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.tech-group:hover {
  border-color: var(--border-accent);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.tech-category {
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--accent);
  padding-right: 1rem;
  border-right: 1px solid var(--border);
  white-space: nowrap;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 1.25rem;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 9999px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text);
  white-space: nowrap;
  transition: all 0.3s ease;
}

.tech-item:hover {
  background: rgba(0, 229, 160, 0.1);
  color: var(--accent);
  transform: scale(1.05);
}

.tech-icon {
  font-size: 1.25rem;
  min-width: 24px;
  text-align: center;
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .marquee-left,
  .marquee-right {
    animation-duration: 50s;
  }
  
  .tech-group {
    padding: 0.75rem 1.5rem;
    gap: 1rem;
  }
  
  .tech-item {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
  
  .tech-category {
    font-size: 0.8rem;
  }
}

@media (max-width: 768px) {
  .marquee-left,
  .marquee-right {
    animation-duration: 40s;
  }
  
  .tech-group {
    padding: 0.625rem 1.25rem;
    gap: 0.75rem;
  }
  
  .tech-item {
    padding: 0.4rem 0.875rem;
    font-size: 0.85rem;
  }
  
  .tech-icon {
    font-size: 1.1rem;
  }
  
  .tech-category {
    font-size: 0.75rem;
    padding-right: 0.75rem;
  }
}
</style>