<script setup>
import { useNewsStore } from '@/stores/index.js'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCommentsStore } from '@/stores/comments.js'
import { dateFormater } from '@/shared/index.js'
import NewsComment from '@/components/comment/NewsComment.vue'

const router = useRoute()

const { comments } = storeToRefs(useCommentsStore())

const { article } = storeToRefs(useNewsStore())
const { getArticle } = useNewsStore()

onMounted(() => {
  getArticle(router.params.id)
})
</script>

<template>
  <div class="container mx-auto mt-2">
    <h1 class="text-4xl">{{ article.title }}</h1>
    <div class="flex items-center gap-3 mb-3">
      <h4 class="text-2xl">
        Author:
        <span class="text-xl">{{ article.by }}</span>
      </h4>
      <h4 class="text-2xl">
        Rating:
        <span class="text-xl">{{ article.score }}</span>
      </h4>
    </div>
    <a
      v-if="article.url"
      class="mt-4 rounded p-2 text-gray-50 bg-emerald-500"
      :href="`${article.url}`"
    >
      Original post
    </a>
    <p v-if="article.time" class="text-xl mt-4">
      {{ dateFormater(article.time) }}
    </p>
    <div class="text-lg mt-2 mb-2" v-html="article.text"></div>

    <div v-if="comments">
      <div v-for="comment in comments">
        <news-comment :comment="comment"></news-comment>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
