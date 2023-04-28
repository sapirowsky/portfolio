<script setup>
const props = defineProps(["creator"]);
const creator = props.creator;
</script>
<template>
  <header class="h-screen flex relative">
    <div class="relative flex-1 hidden w-0 md:block">
      <NuxtImg
        preset="highq"
        class="absolute inset-0 object-cover w-full h-full"
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="code"
        width="1200px"
        height="1000px"
      />
    </div>
    <div
      class="flex flex-col justify-center items-center flex-1 px-4 py-12 sm:px-6 md:flex-none md:px-20 xl:px-24"
    >
      <div class="flex items-start w-full max-w-sm mx-auto md:w-80">
        <div class="pt-10 w-full flex flex-col items-end">
          <span class="flex flex-col text-gray-400">
            kamilkruszano@gmail.com
          </span>
          <span class="flex flex-col font-bold text-xl">
            {{ creator }}
          </span>
        </div>
      </div>
      <div class="flex items-center w-full h-full max-w-sm mx-auto md:w-80">
        <div class="pt-5 w-full flex flex-col items-end">
          <h1 class="flex flex-col font-bold text-3xl">
            <span class="flex justify-end">Hi there 👋,</span>
            <span class="flex justify-end">I'm Kamil</span>
          </h1>
          <p class="text-gray-400">web developer</p>
        </div>
      </div>
      <a
        class="h-14 w-40 border border-green-400 rounded flex items-center justify-around"
        href="#main"
      >
        <UiDoubleArrowDown class="animate-bounce" />
        <span>Scroll</span>
        <UiDoubleArrowDown class="animate-bounce" />
      </a>
    </div>
  </header>
</template>