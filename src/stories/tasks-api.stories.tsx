/* eslint-disable import/no-anonymous-default-export */

import React, { useEffect, useState } from 'react'
import { TaskAPI } from '../api/task-api'

export default {
  title: 'task-API',
}

export const GetTasks = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todolistId = '2e206594-3bab-408e-b2c9-109c8192290e'
    TaskAPI.getTasks(todolistId).then((res) => setState(res.data))
  }, [])
  return <div>{JSON.stringify(state)}</div>
}

export const CreateTasks = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todolistId = '2e206594-3bab-408e-b2c9-109c8192290e'
    const title = 'TEST-TEST-TEST'
    TaskAPI.createTasks(todolistId, title).then((res) => setState(res.data))
  }, [])
  return <div>{JSON.stringify(state)}</div>
}

export const UpdateTasks = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todolistId = '2e206594-3bab-408e-b2c9-109c8192290e'
    const taskId = '8359e6e5-fe4c-45df-8050-1411b03da608'
    const title = 'GOOOOOOOOOOOOOOOOOOOOOOOOOOD+++++++'
    TaskAPI.updateTask(todolistId, taskId, title).then((res) => setState(res.data))
  }, [])
  return <div>{JSON.stringify(state)}</div>
}

export const DeleteTasks = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todolistId = '2e206594-3bab-408e-b2c9-109c8192290e'
    const taskId = '8359e6e5-fe4c-45df-8050-1411b03da608'
    TaskAPI.removeTask(todolistId, taskId).then((res) => setState(res.data))
  }, [])
  return <div>{JSON.stringify(state)}</div>
}
