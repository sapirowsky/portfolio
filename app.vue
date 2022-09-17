<template>
 
    <NuxtLayout name="error" />
 
</template>
<script setup>
    useHead({
    htmlAttrs: {
      lang: 'pl'
    },  
    bodyAttrs: {
        class: computed(() => darkMode.value ? 'bg-slate-900' : 'bg-white')
      },
      title: 'Sapyr Portfolio',
      meta: [
        {
            hid: 'description',
            name: 'description',
            content: 'You can find sapyr\'s portfolio here!'
        }
      ],
  })
</script>