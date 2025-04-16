import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from '@/assets/js/index.js'
import { useCommentsStore } from '@/stores/comments.js'

export const useNewsStore = defineStore('news', () => {
  const newsIds = ref([])
  const { getComments } = useCommentsStore()

  const getNews = async () => {
    newsIds.value = await api.get(`newstories.json`).then((res) => res.data)
  }

  const article = ref({})

  const getArticle = async (id) => {
    const response = await api.get(`item/${id}.json`)
    article.value = response.data
    article.value.kids?.forEach((item) => {
      getComments(item)
    })
  }

  const getArticleSlim = async (id) => {
    const response = await api.get(`item/${id}.json`)
    return response.data
  }

  return { newsIds, getNews, article, getArticle, getArticleSlim }
})
