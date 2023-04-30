<script setup>
const myWork = [
  {
    title: "World Cup Info",
    description: "For this project I had a little help from Natalia K. who created logo and front page bracket for me. What's worth noticing is that, the site have its own database and api. I have also implemented skeleton loading to this site.",
    technologies: ['Nuxt 3', 'Pinia', 'Prisma', 'Tailwind', 'SQL', 'REST'],
    image: '/img/fifa.png',
    imageAlt: 'image of fifa website',
    site: 'https://fifa.kamilkruszona.dev/',
    github: 'https://github.com/sapirowsky/fifa'
  },
  {
    title: "Instaling Word DB",
    description: "This project was made to solve problem of remembering Deutsch words, also to make mine and my class life a little easier. For this project I had to make a simple db & rest api.",
    technologies: ['Nuxt 3', 'Prisma', 'Tailwind', 'SQL', 'REST'],
    image: '/img/instaling.png',
    imageAlt: 'image of instaling website',
    site: 'https://instaling.kamilkruszona.dev/',
    github: 'https://github.com/sapirowsky/instalingWordDB'
  },
  {
    title: "Terminal",
    description: "Fun project made to imitate Windows PowerShell terminal. But as you may guess, it doesn't have to many features.",
    technologies: ['Nuxt 3', 'Tailwind'],
    image: '/img/terminal.png',
    imageAlt: 'image of terminal website',
    site: 'https://terminal.kamilkruszona.dev/',
    github: 'https://github.com/sapirowsky/browserTerminal'
  },
  {
    title: "iQsystem",
    description: "I was working on this project for iQsystem to modernize their site but unfortunetely it isn't available as official webpage. (yet, hopefully)",
    technologies: ['HTML', 'SCSS', "JavaScript"],
    image: '/img/iQsystem.png',
    imageAlt: 'image of iQsystem website',
    site: 'https://sapirowsky.github.io/iQsystem/',
    github: 'https://github.com/sapirowsky/iQsystem'
  },
]
</script>

<template>
  <section class="w-full py-12 md:px-16 flex flex-col items-center bg-gray-800">
    <div class="flex items-center h-12">
      <UiDot class="text-green-400" />
      <h1 class="text-gray-400">Some of my Work</h1>
    </div>
    <div class="w-full flex flex-col items-center justify-center gap-12 mt-2">
      <div v-for="(work, i) in myWork" :key="work.title"
      class="container transition-all duration-150 ease-in-out observerHidden translate-y-1/4">
        <div v-if="i % 2 == 0 || i == 0"
        class="mywork-container">
          <div
          class="z-20 text-right flex flex-col justify-around col-start-1 col-end-[-1] row-end-[-1] md:col-start-5 md:col-end-13 md:row-end-1 p-4 md:p-0"
        >
          <h1 class="text-xl font-bold">{{ work.title }}</h1>
          <p class="w-full md:bg-darkBg p-4">
            {{ work.description }}
          </p>
          <div class="text-gray-400 flex gap-2 justify-end flex-wrap">
            <p v-for="tech in work.technologies" :key="tech">
              {{ tech }}
            </p>
          </div>
          <div class="flex justify-end gap-4 mt-2">
            <NuxtLink
              :to="work.github"
              aria-label="GitHub"
              target="_b"
            >
              <UiGitHub class="w-8 h-8 md:w-12 md:h-12" />
            </NuxtLink>
            <NuxtLink
              :to="work.site"
              aria-label="Fifa"
              target="_b"
            >
              <UiExternalLink class="w-8 h-8 md:w-12 md:h-12" />
            </NuxtLink>
          </div>
        </div>
        <NuxtLink
          class="col-start-1 col-end-[-1] row-end-[-1] md:col-start-1 md:col-end-8 md:row-end-1 blur-[1px] hover:blur-0"
          :to="work.site"
          target="_b"
        >
          <NuxtImg
            preset="highq"
            loading="lazy"
            class="w-full h-full object-cover opacity-20 md:opacity-100"
            :src="work.image"
            :alt="work.imageAlt"
            height="400"
            width="800"
          />
        </NuxtLink>
        
        </div>
        <div v-else
          class="mywork-container">
          <div
          class="z-20 text-left flex flex-col justify-around col-start-1 col-end-[-1] row-end-[-1] md:col-start-1 md:col-end-8 md:row-end-1 p-4 md:p-0"
        >
          <h1 class="text-xl font-bold">{{work.title}}</h1>
          <p class="w-full md:bg-darkBg p-4">
            {{ work.description }}
          </p>
          <div class="text-gray-400 flex gap-2 justify-start flex-wrap">
            <p v-for="tech in work.technologies" :key="tech">
              {{ tech }}
            </p>
          </div>
          <div class="flex justify-start gap-4 mt-2">
            <NuxtLink
              :to="work.github"
              aria-label="GitHub"
              target="_b"
            >
              <UiGitHub class="w-8 h-8 md:w-12 md:h-12" />
            </NuxtLink>
            <NuxtLink
              :to="work.site"
              aria-label="instaling"
              target="_b"
            >
              <UiExternalLink class="w-8 h-8 md:w-12 md:h-12" />
            </NuxtLink>
          </div>
        </div>
        <NuxtLink
          class="col-start-1 col-end-[-1] row-end-[-1] md:col-start-5 md:col-end-13 md:row-end-1 blur-[1px] hover:blur-0"
          :to="work.site"
          target="_b"
        >
          <NuxtImg
            preset="highq"
            loading="lazy"
            class="w-full h-full object-cover opacity-20 md:opacity-100"
            :src="work.image"
            :alt="work.imageAlt"
            height="400"
            width="800"
          />
        </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
