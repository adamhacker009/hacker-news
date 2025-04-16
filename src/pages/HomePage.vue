<template>
  <div>
    <div v-for="article in newsIds" class="container mx-auto flex flex-wrap gap-0.5">
      <app-news-card :article-id="article"></app-news-card>
    </div>
    <button @click="limitaion = limitaion + 15"></button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useNewsStore } from '@/stores'
import AppNewsCard from '@/components/newsCard/AppNewsCard.vue'
import { computed, ref } from 'vue'

const { newsIds } = storeToRefs(useNewsStore())
const { getNews } = useNewsStore()

const limitaion = ref(15)

getNews()
</script>

<style scoped>
@use '@/assets/main';
</style>
