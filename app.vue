<template>
  <div :class="{'dark': darkMode}">
    <NuxtLayout name="error" />
  </div>
</template>

<script setup>
    const darkMode = ref(true)
</script>