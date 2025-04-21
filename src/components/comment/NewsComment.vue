<template>
  <div class="px-2 py-1 mb-4 border-x-black border-x-2 border-solid">
    <h4 class="text-2xl">
      Author: <span>{{ props.comment.by }}</span>
    </h4>
    <h4 class="text-2xl">{{ dateFormater(props.comment.time) }}</h4>
    <p class="text-xl break-words">{{ props.comment.text }}</p>
    <button v-if="props.comment.kids && ThreadOpened === false" @click="getComments">+</button>
    <div v-if="currentCommentThread.length">
      <news-comment v-for="(kid, index) in currentCommentThread" :key="index" :comment="kid" />
    </div>
  </div>
</template>

<script setup>
import { dateFormater } from '@/shared/index.js'
import { ref } from 'vue'
import { useCommentsStore } from '@/stores'

const props = defineProps({
  comment: Object,
})

const { getCommentsOfComments } = useCommentsStore()
const currentCommentThread = ref([])

const ThreadOpened = ref(false)

const getComments = async () => {
  ThreadOpened.value = true
  for (const id of props.comment.kids) {
    const comment = await getCommentsOfComments(id)
    currentCommentThread.value.push(comment)
  }
}
</script>

<style scoped></style>
