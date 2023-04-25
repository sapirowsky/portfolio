<script setup>
const creator = "<KamilKruszona />";

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: creator,
  meta: [
    {
      hid: "description",
      name: "description",
      content: "You can find sapyr's portfolio here!",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "./favicon.ico",
    },
  ],
});
</script>
<template>
  <Body class="bg-darkBg text-slate-50 font-mono">
    <Header :creator="creator" />
    <main id="main">
      <AboutMe />

      <Skills />
      <MyWork />
    </main>
  </Body>
</template>