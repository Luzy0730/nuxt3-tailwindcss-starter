<script setup lang="ts">
const config = useRuntimeConfig()
const fullYear = new Date().getFullYear();
</script>

<template>
  <div class="bg-blur w-full leading-10 text-center fixed bottom-0 text-gray-100 hidden-md-and-down">
    Copyright © {{ fullYear }} & Made by {{ config.public.NUXT_SITE_ANTHOR }} & {{ config.public.NUXT_SITE_ICP }}
  </div>
</template>

<style scoped lang="scss">

</style>