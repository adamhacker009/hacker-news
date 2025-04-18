<template>
  <div class="p2 mt-2" v-if="currentArticle">
    <router-link :to="`/news/${currentArticle.id}`" class="text-2xl font-bold">{{
      currentArticle.title
    }}</router-link>
    <div class="flex gap-2 items-center">
      <h5 class="text-lg">{{ currentArticle.by }}</h5>
      <h5 class="text-lg">Rating: {{ currentArticle.score }}</h5>
      <h5 class="text-lg">Comments: {{ currentArticle.descendants }}</h5>
    </div>
    <h5>{{ dateFormater(currentArticle.time) }}</h5>
  </div>
</template>

<style scoped></style>

<script setup>
import { useNewsStore } from '@/stores/index.js'
import { ref } from 'vue'
import { dateFormater } from '@/shared/index.js'

const { getArticleSlim } = useNewsStore()

const props = defineProps({
  articleId: { type: Number, required: true },
  isLoad: { type: Boolean, default: false },
})

const currentArticle = ref()
const initialArticle = async () => {
  currentArticle.value = await getArticleSlim(props.articleId)
}
initialArticle()
setInterval(() => {
  if (props.isLoad) initialArticle()
}, 60000)
</script>
