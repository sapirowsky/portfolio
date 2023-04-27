<script setup>
// onMounted(() => {
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("show");
//       } else {
//         entry.target.classList.remove("show");
//       }
//     });
//   });
//   const elementsToObserve = document.querySelectorAll(".observer");
//   elementsToObserve.forEach((el) => observer.observe(el));
// });
// onBeforeUnmount(() => {
//   observer.disconnect();
// });
</script>
<template>
  <section
    class="w-full py-12 md:px-16 flex flex-col items-center gap-4 bg-gray-800"
  >
    <div class="flex items-center h-12">
      <UiDot class="text-green-400" />
      <h1 class="text-gray-400">About Me</h1>
    </div>
    <div
      class="container flex flex-col gap-8 md:flex-row justify-center items-center observerHidden"
    >
      <div class="flex flex-col gap-5 w-2/3">
        <div>
          <h2 class="text-3xl">Kamil Kruszona</h2>
          <h3 class="uppercase text-sm text-green-400">Full-Stack Developer</h3>
        </div>
        <p class="text-sm md:text-base">
          I'm a full-stack developer, i've started simply by making html/css
          sites, but it wasn't satisfing since user wasn't able to interact with
          my site. So i tried js as well as php & ended up choosing js for my
          frontend and backend journey.
        </p>
        <ul class="flex flex-row gap-4">
          <li class="w-12 h-12">
            <NuxtLink
              to="https://github.com/sapirowsky"
              target="_b"
              class="w-full h-full"
              aria-label="GitHub"
            >
              <UiGitHub class="w-full h-full" />
            </NuxtLink>
          </li>

          <li class="w-12 h-12">
            <NuxtLink
              to="mailto:kamilkruszano@gmail.com"
              target="_b"
              class="w-full h-full"
              aria-label="Mail me"
            >
              <UiMail class="w-full h-full" />
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="w-1/2 sm:w-1/3 shadow-md shadow-green-400 md:p-4">
        <NuxtImg
          preset="highq"
          class="w-full h-full object-cover"
          src="/img/sapir.jpeg"
          alt="Kamil Kruszona"
          width="500"
          height="500"
        />
      </div>
    </div>
  </section>
</template>