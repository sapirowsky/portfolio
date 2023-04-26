<template>
  <section class="w-full py-12 md:px-16 flex flex-col items-center bg-gray-800">
    <div class="flex items-center h-12">
      <UiDot class="text-green-400" />
      <h1 class="text-gray-400">Some of my Work</h1>
    </div>
    <div class="w-full flex flex-col items-center justify-center gap-1 mt-2">
      <div class="container transition-all duration-150 ease-in-out">
        <div
          class="z-20 text-right flex flex-col justify-around col-start-1 col-end-[-1] row-end-[-1] md:col-start-5 md:col-end-13 md:row-end-1 p-4 md:p-0"
        >
          <h1 class="text-xl font-bold">World Cup Info</h1>
          <p class="w-full md:bg-darkBg p-4">
            This project shows 2022 world cup info and i created it with Natalia
            K. as a school project. Actually only things that i didn't create
            here was logo and front page bracket.
          </p>
          <div class="text-gray-400 flex gap-2 justify-end">
            <p>Nuxt 3</p>
            <p>Pinia</p>
            <p>Prisma</p>
            <p>Tailwind</p>
            <p>SQL</p>
            <p>REST</p>
          </div>
          <div class="flex justify-end gap-4 mt-2">
            <NuxtLink
              to="https://github.com/sapirowsky/fifa"
              aria-label="GitHub"
              target="_b"
            >
              <UiGitHub class="w-8 h-8 md:w-12 md:h-12" />
            </NuxtLink>
            <NuxtLink
              to="https://fifa.kamilkruszona.dev/"
              aria-label="Fifa"
              target="_b"
            >
              <UiExternalLink class="w-8 h-8 md:w-12 md:h-12" />
            </NuxtLink>
          </div>
        </div>
        <NuxtLink
          class="col-start-1 col-end-[-1] row-end-[-1] md:col-start-1 md:col-end-8 md:row-end-1 blur-sm hover:blur-0"
          to="https://fifa.kamilkruszona.dev/"
          target="_b"
        >
          <NuxtImg
            preset="highq"
            loading="lazy"
            class="object-cover opacity-20 md:opacity-100"
            src="/img/fifa.png"
            alt="picture of fifa site"
          />
        </NuxtLink>
      </div>
      <div class="container"></div>
      <div class="container"></div>
    </div>
  </section>
</template>

<style>
.container {
  max-width: 1400px;
  @apply grid grid-cols-12;
}
</style>