<template>
 
    <NuxtLayout name="error" />
 
</template>
<script setup>
    useHead({
    htmlAttrs: {
      lang: 'pl'
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