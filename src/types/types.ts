export type TodolistType = {
  id: string
  addedDate: Date
  order: number
  title: string
}

export type UnionResponseType<T = {}> = {
  data: T
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}

export type TaskType = {
  id: string
  title: string
  description: string
  todoListId: string
  order: number
  status: number
  priority: number
  startDate: Date
  deadline: number
  addedDate: Date
}

export type CreateTaskResponseType<T = {}> = {
  data: T
  item: TaskType[]
  resultCode: number
  messages: string[]
}

export type UpdateDeleteTaskResponseType = {
  data: {
    item: TaskType
  }
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}
