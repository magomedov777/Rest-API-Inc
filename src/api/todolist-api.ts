/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1/',
  withCredentials: true,
  headers: {
    'API-KEY': '851ccd71-58c3-4f92-b794-f803a4080a69',
  },
})
export const TodolistAPI = {
  getTodolists: () => {
    return instance.get<TodolistType[]>('todo-lists')
  },
  createTodolist: (title: string) => {
    return instance.post('todo-lists', { title })
  },
  deleteTodolist: (todolistId: string) => {
    return instance.delete(`todo-lists/${todolistId}`)
  },
  updateTodolist: (todolistId: string, title: string) => {
    return instance.put(`todo-lists/${todolistId}`, {
      title,
    })
  },
}

//types
type TodolistType = {
  id: string
  addedDate: Date
  order: number
  title: string
}
