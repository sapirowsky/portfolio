<script setup>
const myWork = [
  {
    title: "Metana",
    description:
      "I really like to learn new things on projects and this company isn't working only for Polish market, so it was perfect timing for me to learn internalization (i18n). It was also first time that I've been using ThreeJS.",
    mobile: "Mobile friendly",
    technologies: ["Nuxt 3", "TailwindCSS", "ThreeJS", "i18n", "daisyUi"],
    image: "/img/metana.webp",
    imageAlt: "Metana landingpage",
    site: "https://metana.pl/",
    github: "https://github.com/sapirowsky/metana-website",
  },
  {
    title: "ZGK Cieszyn",
    description: "I collaborated with Sławomir Szewieczek to create this site.",
    mobile: "Mobile friendly",
    technologies: ["Wordpress", "PHP", "HTML", "CSS", "UiKit"],
    image: "/img/zgk.webp",
    imageAlt: "ZGK landingpage",
    site: "https://zgk.cieszyn.pl/",
    github: null,
    collaborators: [
      {
        name: "Sławomir Szewieczek",
        mail: "szewieczko@gmail.com",
      },
    ],
  },
  {
    title: "World Cup Info",
    description:
      "For this project I had a little help from Natalia K. who created logo and front page bracket for me. What's worth noticing is that, the site have its own database and api. I have also implemented skeleton loading to this site.",
    mobile: "Mobile friendly",
    technologies: ["Nuxt 3", "Pinia", "Prisma", "TailwindCSS", "SQL", "REST"],
    image: "/img/fifa.webp",
    imageAlt: "image of fifa website",
    site: "https://fifa.kamilkruszona.dev/",
    github: "https://github.com/sapirowsky/fifa",
  },
  {
    title: "iQsystem",
    description:
      "I was working on this project for iQsystem to modernize their site.",
    mobile: "Mobile friendly",
    technologies: ["HTML", "SCSS", "JavaScript"],
    image: "/img/iQsystem.webp",
    imageAlt: "image of iQsystem website",
    site: "https://sapirowsky.github.io/iQsystem/",
    github: "https://github.com/sapirowsky/iQsystem",
  },
  {
    title: "ZBM Cieszyn",
    description:
      "I was collaborating with Sławomir Szewieczek, my main objective was to create wcag implementation.",
    mobile: "Mobile friendly",
    technologies: ["CSS", "JavaScript"],
    image: "/img/zbm.webp",
    imageAlt: "image of ZBM website",
    site: "https://zbm.cieszyn.pl/",
    github: null,
    collaborators: [
      {
        name: "Sławomir Szewieczek",
        mail: "szewieczko@gmail.com",
      },
    ],
  },
  {
    title: "SP3 Cieszyn",
    description:
      "I was collaborating with Sławomir Szewieczek, my main objective was to create wcag implementation.",
    mobile: "Mobile friendly",
    technologies: ["CSS", "JavaScript"],
    image: "/img/sp3.webp",
    imageAlt: "image of SP3 website",
    site: "https://sp3cieszyn.pl/",
    github: null,
    collaborators: [
      {
        name: "Sławomir Szewieczek",
        mail: "szewieczko@gmail.com",
      },
    ],
  },
  // {
  //   title: "Terminal",
  //   description:
  //     "Fun project made to imitate Windows PowerShell terminal. But as you may guess, it doesn't have to many features.",
  //   mobile: "Not mobile friendly",
  //   technologies: ["Nuxt 3", "TailwindCSS"],
  //   image: "/img/terminal.png",
  //   imageAlt: "image of terminal website",
  //   site: "https://terminal.kamilkruszona.dev/",
  //   github: "https://github.com/sapirowsky/browserTerminal",
  // },
]
</script>

<template>
  <section class="w-full py-12 md:px-16 flex flex-col items-center bg-gray-800">
    <div class="flex items-center h-12">
      <UiDot class="text-green-400" />
      <h1 class="text-gray-400">Some of my Work</h1>
    </div>
    <div class="w-full flex flex-col items-center justify-center gap-12 mt-2">
      <div
        v-for="(work, i) in myWork"
        :key="work.title"
        class="container transition-all duration-150 ease-in-out observerHidden translate-y-1/4"
      >
        <div v-if="i % 2 == 0 || i == 0" class="mywork-container">
          <div
            class="z-20 text-right flex flex-col justify-around col-start-1 col-end-[-1] row-end-[-1] md:col-start-5 md:col-end-13 md:row-end-1 p-4 md:p-0"
          >
            <h1 class="text-xl font-bold">{{ work.title }}</h1>
            <p v-if="work.description" class="w-full md:bg-darkBg p-4">
              {{ work.description }}
            </p>
            <div class="text-gray-400 flex gap-2 justify-end flex-wrap">
              <p v-for="tech in work.technologies" :key="tech">
                {{ tech }}
              </p>
            </div>
            <div class="text-white" v-if="work.collaborators">
              Contact:
              <a
                v-for="collaborator in work.collaborators"
                :key="collaborator.name"
                :href="'mailto:' + collaborator.mail"
              >
                {{ collaborator.name }}
              </a>
            </div>
            <div class="flex justify-end gap-4 mt-2">
              <NuxtLink
                v-if="work.github"
                :to="work.github"
                aria-label="GitHub"
                target="_b"
              >
                <UiGitHub class="w-8 h-8 md:w-12 md:h-12" />
              </NuxtLink>
              <NuxtLink :to="work.site" aria-label="Fifa" target="_b">
                <UiExternalLink class="w-8 h-8 md:w-12 md:h-12" />
              </NuxtLink>
            </div>
          </div>
          <NuxtLink
            class="col-start-1 col-end-[-1] row-end-[-1] md:col-start-1 md:col-end-8 md:row-end-1"
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
        <div v-else class="mywork-container">
          <div
            class="z-20 text-left flex flex-col justify-around col-start-1 col-end-[-1] row-end-[-1] md:col-start-1 md:col-end-8 md:row-end-1 p-4 md:p-0"
          >
            <h1 class="text-xl font-bold">{{ work.title }}</h1>
            <p class="w-full md:bg-darkBg p-4">
              {{ work.description }}
            </p>
            <div class="text-gray-400 flex gap-2 justify-start flex-wrap">
              <p v-for="tech in work.technologies" :key="tech">
                {{ tech }}
              </p>
            </div>
            <div class="text-white" v-if="work.collaborators">
              Contact:
              <a
                v-for="collaborator in work.collaborators"
                :key="collaborator.name"
                :href="'mailto:' + collaborator.mail"
              >
                {{ collaborator.name }}
              </a>
            </div>
            <div class="flex justify-start gap-4 mt-2">
              <NuxtLink
                v-if="work.github"
                :to="work.github"
                aria-label="GitHub"
                target="_b"
              >
                <UiGitHub class="w-8 h-8 md:w-12 md:h-12" />
              </NuxtLink>
              <NuxtLink :to="work.site" aria-label="instaling" target="_b">
                <UiExternalLink class="w-8 h-8 md:w-12 md:h-12" />
              </NuxtLink>
            </div>
          </div>
          <NuxtLink
            class="col-start-1 col-end-[-1] row-end-[-1] md:col-start-5 md:col-end-13 md:row-end-1"
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
