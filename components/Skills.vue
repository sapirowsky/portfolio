<template>
  <section
    class="w-full py-8 px-4 md:px-16 flex flex-col items-center bg-darkBg"
  >
    <div class="flex items-center h-12">
      <UiDot class="text-green-400" />
      <h1 class="text-gray-400">Skills</h1>
    </div>
    <div class="w-4/5 flex items-center justify-center mt-2">
      <div class="flex flex-wrap gap-4">
        <div class="has-tooltip observerHidden">
          <span class="tooltip w-16"> HTML 5 </span>
          <UiHtml class="w-12 h-12" />
        </div>
        <div class="has-tooltip observerHidden">
          <span class="tooltip w-16"> CSS 3</span>
          <UiCss class="w-12 h-12" />
        </div>
        <div class="has-tooltip observerHidden">
          <span class="tooltip w-36 -left-3/4">JavaScript ES6+</span>
          <UiJS class="w-12 h-12" />
        </div>
        <div class="has-tooltip observerHidden">
          <span class="tooltip">Node.js</span>
          <UiNode class="w-12 h-12" />
        </div>
        <div class="has-tooltip observerHidden">
          <span class="tooltip w-16">Nuxt 3</span>
          <UiNuxt class="w-12 h-12" />
        </div>
        <div class="has-tooltip observerHidden">
          <span class="tooltip">Prisma</span>
          <UiPrisma class="w-12 h-12" />
        </div>
        <div class="has-tooltip observerHidden">
          <span class="tooltip -left-1/4">Tailwind</span>
          <UiTailwind class="w-12 h-12" />
        </div>
        <div class="has-tooltip observerHidden">
          <span class="tooltip -left-1/4">Strapi</span>
          <UiStrapi class="w-12 h-12" />
        </div>
        <div class="has-tooltip observerHidden">
          <span class="tooltip -left-1/2">Sql (Relational Database)</span>
          <UiSql class="w-12 h-12" />
        </div>
        <div class="has-tooltip observerHidden">
          <span class="tooltip">Vs Code</span>
          <UiVsCode class="w-12 h-12" />
        </div>
        <div class="has-tooltip observerHidden">
          <span class="tooltip">Git</span>
          <UiGit class="w-12 h-12" />
        </div>
        <div class="has-tooltip observerHidden">
          <span class="tooltip">GitHub</span>
          <UiGitHub class="w-12 h-12" />
        </div>
        <div class="has-tooltip observerHidden">
          <span class="tooltip">PHP</span>
          <UiPhp class="w-12 h-12" />
        </div>
        <div class="has-tooltip observerHidden">
          <span class="tooltip">WordPress</span>
          <UiWordpress class="w-12 h-12" />
        </div>
      </div>
    </div>
  </section>
</template>