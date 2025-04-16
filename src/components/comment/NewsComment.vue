<template>
  <div class="px-2 py-1 mb-4 border-x-black border-x-2 border-solid">
    <h4 class="text-2xl">
      Author: <span>{{ props.comment.by }}</span>
    </h4>
    <h4 class="text-2xl">{{ dateFormater(props.comment.time) }}</h4>
    <p class="text-xl">{{ props.comment.text }}</p>
    <div v-for="kid in props.comment.kids">
      <NewsComment :comment="kid"></NewsComment>
    </div>
  </div>
</template>

<script setup>
import { dateFormater } from '@/shared/index.js'
const props = defineProps({
  comment: Object,
})
console.log(props.comment)
</script>

<style scoped></style>
