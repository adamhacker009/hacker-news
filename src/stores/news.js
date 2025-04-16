import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from '@/assets/js/index.js'
import { useCommentsStore } from '@/stores/comments.js'

export const useNewsStore = defineStore('news', () => {
  const news = ref([])
  const { getComments } = useCommentsStore()

  const getNews = async () => {
    news.value = await api.get(`newstories.json`).then((res) => res.data)
  }

  const article = ref([])

  const getArticle = async (id) => {
    const response = await api.get(`item/${id}.json`)
    article.value = response.data
    article.value.kids?.forEach((item) => {
      getComments(item)
    })
  }

  const getArticleSlim = async (id) => {
    const response = await api.get(`item/${id}.json`)
    article.value.push(response.data)
  }

  return { news, getNews, article, getArticle, getArticleSlim }
})
