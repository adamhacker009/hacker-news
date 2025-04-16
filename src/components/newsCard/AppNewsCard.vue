<template>
  <div class="container mb-2">
    {{ article }}
  </div>
</template>

<style scoped></style>

<script setup>
import { storeToRefs } from 'pinia'
import { computed, onMounted } from 'vue'
import { useNewsStore } from '@/stores/index.js'

const { article } = storeToRefs(useNewsStore())
const { getArticleSlim } = useNewsStore()

const props = defineProps({ articleId: Number })

const currentArticle = computed(() => article[props.articleId])

onMounted(() => {})
</script>
