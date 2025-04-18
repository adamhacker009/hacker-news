<template>
  <div>
    <div
      v-for="(article, index) in newsIds"
      :key="index"
      class="container mx-auto flex flex-wrap gap-0.5"
    >
      <app-news-card
        v-if="index < limitaion"
        :is-load="limitaion - index <= 15"
        :article-id="article"
      />
    </div>
    <div class="container mx-auto mt-4 flex gap-1">
      <button
        @click="updateNews"
        class="p-2 text-white bg-blue-800 font-bold text-lg fixed bottom-1"
      >
        Update news list
      </button>
    </div>
    <div ref="loader"></div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useNewsStore } from '@/stores'
import AppNewsCard from '@/components/newsCard/AppNewsCard.vue'
import { onMounted, ref, useTemplateRef } from 'vue'
const loaderRef = useTemplateRef('loader')

const { newsIds } = storeToRefs(useNewsStore())
const { getNews } = useNewsStore()

const limitaion = ref(15)

const addNews = () => {
  limitaion.value = limitaion.value + 15
}

const updateNews = async () => {
  newsIds.value = 0
  await getNews()
  limitaion.value = 15
  console.log(newsIds.value)
}

const observer = new IntersectionObserver((entries) => {
  const entry = entries[0]
  if (entry.isIntersecting && limitaion.value < newsIds.value.length) {
    addNews()
  }
})

onMounted(() => {
  observer.observe(loaderRef.value)
})

getNews()

setInterval(() => {
  updateNews()
}, 60000)
</script>

<style scoped></style>
