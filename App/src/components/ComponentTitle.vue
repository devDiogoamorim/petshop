<script setup>

defineProps({
  title: {
    type: String,
    required: true
  },
  paragraph: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="title">
    <h1>{{ title }}</h1>
    <p>{{ paragraph }}</p>
  </div>
</template>

<style scoped>
@import "../styles/index.scss"
</style>