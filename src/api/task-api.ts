import { instance } from '../common-utills/instance'
import { CreateTaskResponseType, TaskType, UpdateDeleteTaskResponseType } from '../types'

export const TaskAPI = {
  getTasks: (todolistId: string) => {
    return instance.get<TaskType[]>(`/todo-lists/${todolistId}/tasks`)
  },
  createTasks: (todolistId: string, title: string) => {
    return instance.post<CreateTaskResponseType>(`/todo-lists/${todolistId}/tasks`, { title })
  },
  updateTask: (todolistId: string, taskId: string, title: string) => {
    return instance.put<UpdateDeleteTaskResponseType>(`/todo-lists/${todolistId}/tasks/${taskId}`, {
      title,
    })
  },
  removeTask: (todolistId: string, taskId: string) => {
    return instance.delete<UpdateDeleteTaskResponseType>(
      `/todo-lists/${todolistId}/tasks/${taskId}`
    )
  },
}
