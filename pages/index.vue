<script setup>
const mainStore = useMainStore()
</script>

<template>
  <div>{{ mainStore.count }}</div>
  <el-button type="primary" @click="() => mainStore.setCount(++mainStore.count)">按钮</el-button>
</template>

<style scoped lang="scss">

</style>