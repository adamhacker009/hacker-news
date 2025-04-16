<template>
  <div v-for="article in news" class="container mx-auto flex flex-wrap gap-0.5"></div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useNewsStore } from '@/stores'
import { onMounted } from 'vue'
import AppNewsCard from '@/components/newsCard/AppNewsCard.vue'

const { news } = storeToRefs(useNewsStore())
const { getNews } = useNewsStore()

onMounted(() => {
  getNews()
})
</script>

<style scoped>
@use '@/assets/main';
</style>
