import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from '@/assets/js/index.js'

export const useCommentsStore = defineStore('comments', () => {
  const comments = ref([])

  const getComments = async (child) => {
    const response = await api.get(`/item/${child}.json`)
    comments.value.push(response.data)
  }
  return { comments, getComments }
})
