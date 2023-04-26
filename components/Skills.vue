<template>
  <section class="w-full py-12 md:px-16 flex flex-col items-center">
    <div class="flex items-center h-12">
      <UiDot class="text-green-400" />
      <h1 class="text-gray-400">Skills</h1>
    </div>
    <div class="w-full md:w-4/5 flex justify-center">
      <!-- <div class="h-full hidden md:block">
        <div class="hex">
          <div class="hexInside"></div>
        </div>
      </div> -->
      <div class="flex flex-wrap gap-4">
        <UiHtml class="w-12 h-12" />
        <UiCss class="w-12 h-12" />
        <UiJS class="w-12 h-12" />
        <UiNode class="w-12 h-12" />
        <UiNuxt class="w-12 h-12" />
        <UiPrisma class="w-12 h-12" />
        <UiTailwind class="w-12 h-12" />
        <UiGit class="w-12 h-12" />
        <UiGitHub class="w-12 h-12" />
      </div>
      <!-- <div class="h-full hidden md:block">
        <div class="hex">
          <div class="hexInside"></div>
        </div>
      </div> -->
    </div>
  </section>
</template>
