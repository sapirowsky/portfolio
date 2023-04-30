<template>
  <section class="w-full py-12 md:px-16 flex flex-col items-center bg-gray-800">
    <div class="flex items-center h-12">
      <UiDot class="text-green-400" />
      <h1 class="text-gray-400">Some of my Work</h1>
    </div>
    <div class="w-full flex flex-col items-center justify-center gap-12 mt-2">
      <div
        class="container mywork-container transition-all duration-150 ease-in-out observerHidden translate-y-1/4"
      >
        <div
          class="z-20 text-right flex flex-col justify-around col-start-1 col-end-[-1] row-end-[-1] md:col-start-5 md:col-end-13 md:row-end-1 p-4 md:p-0"
        >
          <h1 class="text-xl font-bold">World Cup Info</h1>
          <p class="w-full md:bg-darkBg p-4">
            For this project I had a little help from Natalia K. who created
            logo and front page bracket for me. What's worth noticing is that,
            the site have its own database and api. I have also implemented skeleton
            loading to this site.
          </p>
          <div class="text-gray-400 flex gap-2 justify-end flex-wrap">
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
          class="col-start-1 col-end-[-1] row-end-[-1] md:col-start-1 md:col-end-8 md:row-end-1 blur-[1px] hover:blur-0"
          to="https://fifa.kamilkruszona.dev/"
          target="_b"
        >
          <NuxtImg
            preset="highq"
            loading="lazy"
            class="w-full h-full object-cover opacity-20 md:opacity-100"
            src="/img/fifa.png"
            alt="picture of fifa site"
            height="400"
            width="800"
          />
        </NuxtLink>
      </div>

      <div
        class="container mywork-container transition-all duration-150 ease-in-out observerHidden translate-y-1/4"
      >
        <div
          class="z-20 text-left flex flex-col justify-around col-start-1 col-end-[-1] row-end-[-1] md:col-start-1 md:col-end-8 md:row-end-1 p-4 md:p-0"
        >
          <h1 class="text-xl font-bold">Instaling Word DB</h1>
          <p class="w-full md:bg-darkBg p-4">
            This project was made to solve problem of remembering Deutsch words,
            also to make mine and my class life a little easier. For this
            project I had to make a simple db & rest api.
          </p>
          <div class="text-gray-400 flex gap-2 justify-start flex-wrap">
            <p>Nuxt 3</p>
            <p>Prisma</p>
            <p>Tailwind</p>
            <p>SQL</p>
            <p>REST</p>
          </div>
          <div class="flex justify-start gap-4 mt-2">
            <NuxtLink
              to="https://github.com/sapirowsky/instalingWordDB"
              aria-label="GitHub"
              target="_b"
            >
              <UiGitHub class="w-8 h-8 md:w-12 md:h-12" />
            </NuxtLink>
            <NuxtLink
              to="https://instaling.kamilkruszona.dev/"
              aria-label="instaling"
              target="_b"
            >
              <UiExternalLink class="w-8 h-8 md:w-12 md:h-12" />
            </NuxtLink>
          </div>
        </div>
        <NuxtLink
          class="col-start-1 col-end-[-1] row-end-[-1] md:col-start-5 md:col-end-13 md:row-end-1 blur-[1px] hover:blur-0"
          to="https://instaling.kamilkruszona.dev/"
          target="_b"
        >
          <NuxtImg
            preset="highq"
            loading="lazy"
            class="w-full h-full object-cover opacity-20 md:opacity-100"
            src="/img/instaling.png"
            alt="picture of fifa site"
            height="400"
            width="800"
          />
        </NuxtLink>
      </div>

      <div
        class="container mywork-container transition-all duration-150 ease-in-out observerHidden translate-y-1/4"
      >
        <div
          class="z-20 text-right flex flex-col justify-around col-start-1 col-end-[-1] row-end-[-1] md:col-start-5 md:col-end-13 md:row-end-1 p-4 md:p-0"
        >
          <h1 class="text-xl font-bold">Terminal</h1>
          <p class="w-full md:bg-darkBg p-4">
            Fun project made to imitate Windows PowerShell terminal. But as you
            may guess, it doesn't have to many features.
          </p>
          <div class="text-gray-400 flex gap-2 justify-end flex-wrap">
            <p>Nuxt 3</p>
            <p>Tailwind</p>
          </div>
          <div class="flex justify-end gap-4 mt-2">
            <NuxtLink
              to="https://github.com/sapirowsky/browserTerminal"
              aria-label="GitHub"
              target="_b"
            >
              <UiGitHub class="w-8 h-8 md:w-12 md:h-12" />
            </NuxtLink>
            <NuxtLink
              to="https://terminal.kamilkruszona.dev/"
              aria-label="terminal"
              target="_b"
            >
              <UiExternalLink class="w-8 h-8 md:w-12 md:h-12" />
            </NuxtLink>
          </div>
        </div>
        <NuxtLink
          class="col-start-1 col-end-[-1] row-end-[-1] md:col-start-1 md:col-end-8 md:row-end-1 blur-[1px] hover:blur-0"
          to="https://terminal.kamilkruszona.dev/"
          target="_b"
        >
          <NuxtImg
            preset="highq"
            loading="lazy"
            class="w-full h-full object-cover opacity-20 md:opacity-100"
            src="/img/terminal.png"
            alt="picture of fifa site"
            height="400"
            width="800"
          />
        </NuxtLink>
      </div>

      <div
        class="container mywork-container transition-all duration-150 ease-in-out observerHidden translate-y-1/4"
      >
        <div
          class="z-20 text-left flex flex-col justify-around col-start-1 col-end-[-1] row-end-[-1] md:col-start-1 md:col-end-8 md:row-end-1 p-4 md:p-0"
        >
          <h1 class="text-xl font-bold">iQsystem</h1>
          <p class="w-full md:bg-darkBg p-4">
            I was working on this project for iQsystem to modernize their site but unfortunetely it isn't available as official webpage. (yet, hopefully)
          </p>
          <div class="text-gray-400 flex gap-2 justify-start flex-wrap">
            <p>HTML</p>
            <p>SCSS</p>
            <p>JavaScript</p>
          </div>
          <div class="flex justify-start gap-4 mt-2">
            <NuxtLink
              to="https://github.com/sapirowsky/iQsystem"
              aria-label="GitHub"
              target="_b"
            >
              <UiGitHub class="w-8 h-8 md:w-12 md:h-12" />
            </NuxtLink>
            <NuxtLink
              to="https://sapirowsky.github.io/iQsystem"
              aria-label="instaling"
              target="_b"
            >
              <UiExternalLink class="w-8 h-8 md:w-12 md:h-12" />
            </NuxtLink>
          </div>
        </div>
        <NuxtLink
          class="col-start-1 col-end-[-1] row-end-[-1] md:col-start-5 md:col-end-13 md:row-end-1 blur-[1px] hover:blur-0"
          to="https://sapirowsky.github.io/iQsystem"
          target="_b"
        >
          <NuxtImg
            preset="highq"
            loading="lazy"
            class="w-full h-full object-cover opacity-20 md:opacity-100"
            src="/img/iQsystem.png"
            alt="picture of fifa site"
            height="400"
            width="800"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
