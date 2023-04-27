<script setup>
const creator = "<KamilKruszona />";

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".observerHidden");
  hiddenElements.forEach((el) => observer.observe(el));
});

onBeforeUnmount(() => {
  observer.disconnect();
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "Kamil Kruszona",
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
    <div class="wrapper">
      <Header :creator="creator" />
      <main id="main">
        <AboutMe />
        <Skills />
        <MyWork />
      </main>
    </div>
  </Body>
</template>
