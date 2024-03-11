import { computed, ref } from 'vue'
import { doRequest } from '@/helpers/doRequest.js'

const useTodoState = () => {
  const todo = ref()

  const getTodo = computed(() => todo.value)

  const getList = async () => {
    todo.value = await doRequest('http://localhost:3000/todo', 'GET')
  }

  getList()

  return {
    getTodo
  }
}

export const todoState = useTodoState()
