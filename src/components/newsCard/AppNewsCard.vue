<template>
  <div class="container mb-2">
    {{ currentArticle }}
  </div>
</template>

<style scoped></style>

<script setup>
import { useNewsStore } from '@/stores/index.js'
import { ref } from 'vue'
// import { dateFormater } from '@/shared/index.js'

const { getArticleSlim } = useNewsStore()

const props = defineProps({ articleId: Number })

const currentArticle = ref()
const initialArticle = async () => {
  currentArticle.value = await getArticleSlim(props.articleId)
}
initialArticle()
</script>
