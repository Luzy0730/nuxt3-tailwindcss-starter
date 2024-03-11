<script setup>
const config = useRuntimeConfig()
useSeoMeta({
  title: config.public.NUXT_SITE_NAME,
  description: config.public.NUXT_SITE_DES,
  keywords: config.public.NUXT_SITE_KEYWORDS
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
