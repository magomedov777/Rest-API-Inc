/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'
import { TodolistType, UnionResponseType } from '../types'
import { instance } from '../common-utills/instance'

export const TodolistAPI = {
  getTodolists: () => {
    return instance.get<TodolistType[]>('todo-lists')
  },
  createTodolist: (title: string) => {
    return instance.post<UnionResponseType<{ item: TodolistType }>>('todo-lists', { title })
  },
  deleteTodolist: (todolistId: string) => {
    return instance.delete<UnionResponseType>(`todo-lists/${todolistId}`)
  },
  updateTodolist: (todolistId: string, title: string) => {
    return instance.put<UnionResponseType>(`todo-lists/${todolistId}`, {
      title,
    })
  },
}
