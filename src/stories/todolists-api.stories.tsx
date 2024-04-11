/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TodolistAPI } from '../api/todolist-api'

export default {
  title: 'API',
}

export const GetTodolists = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    TodolistAPI.getTodolists().then((res) => setState(res.data))
  }, [])
  return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const title = 'INC'
    TodolistAPI.createTodolist(title).then((res) => setState(res.data))
  }, [])

  return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todolistId = 'fbb316fe-8574-485d-8f44-38c352f49266'
    TodolistAPI.deleteTodolist(todolistId).then((res) => setState(res.data))
  }, [])

  return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todolistId = 'a3ad5bbd-f381-4322-ad5d-856d429ee870'
    const title = '171'
    TodolistAPI.updateTodolist(todolistId, title).then((res) => setState(res.data))
  }, [])

  return <div>{JSON.stringify(state)}</div>
}
