<template>
  <section class="section-padding bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="badge-blue mb-4">Tecnologías</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Stack <span class="gradient-text">Tecnológico</span>
        </h2>
        <p class="text-gray-600 text-lg">
          Uso las mejores tecnologías del mercado para crear soluciones robustas y escalables.
        </p>
      </div>
      
      <!-- Tech Categories -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Frontend -->
        <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900">Frontend</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="tech-badge">Vue 3</span>
            <span class="tech-badge">React</span>
            <span class="tech-badge">Angular</span>
            <span class="tech-badge">TypeScript</span>
            <span class="tech-badge">Tailwind CSS</span>
            <span class="tech-badge">HTML5/CSS3</span>
          </div>
        </div>
        
        <!-- Backend -->
        <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900">Backend</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="tech-badge">.NET Core</span>
            <span class="tech-badge">Node.js</span>
            <span class="tech-badge">Python</span>
            <span class="tech-badge">C#</span>
            <span class="tech-badge">REST APIs</span>
            <span class="tech-badge">GraphQL</span>
          </div>
        </div>
        
        <!-- Database -->
        <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900">Base de Datos</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="tech-badge">PostgreSQL</span>
            <span class="tech-badge">MySQL</span>
            <span class="tech-badge">SQL Server</span>
            <span class="tech-badge">MongoDB</span>
            <span class="tech-badge">Redis</span>
          </div>
        </div>
        
        <!-- DevOps & Tools -->
        <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900">DevOps & Tools</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="tech-badge">Git</span>
            <span class="tech-badge">Docker</span>
            <span class="tech-badge">Azure</span>
            <span class="tech-badge">AWS</span>
            <span class="tech-badge">CI/CD</span>
            <span class="tech-badge">Linux</span>
          </div>
        </div>
      </div>
      
      <!-- Additional Info -->
      <div class="mt-12 text-center">
        <p class="text-gray-500 text-sm">
          ¿Necesitas una tecnología específica? 
          <a :href="whatsappLink" target="_blank" class="text-blue-600 hover:text-blue-700 font-medium">
            Consultame
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const phoneNumber = '59177777777' // 👈 REEMPLAZA CON TU NÚMERO REAL
const message = encodeURIComponent('Hola Samuel, tengo una consulta sobre tecnologías...')
const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`
</script>

<style scoped>
.tech-badge {
  @apply bg-white text-gray-700 text-sm px-3 py-1.5 rounded-lg font-medium border border-gray-200 shadow-sm;
}
</style>
