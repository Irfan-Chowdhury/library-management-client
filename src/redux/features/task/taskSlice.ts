// src/redux/features/taskSlice.ts

import type { RootState } from '@/redux/store';
import type { ITask } from '@/types'
import { createSlice } from '@reduxjs/toolkit'
// import type { RootState } from '@reduxjs/toolkit/query';
// import type { PayloadAction } from '@reduxjs/toolkit'

interface InitialState {
    tasks:ITask[];
    filter: "all" | "high" | "medium" | "low";
}

// 🟡 Type for a single task
export interface Task {
  id: string
  title: string
  completed: boolean
}

// 🔵 State type
interface TaskState {
  tasks: Task[]
}

// 🟢 Initial state
// const initialState: TaskState = {
const initialState: InitialState = {
  tasks: [
    {
        id: 'testd',
        title: 'Initilize frontend',
        description: 'Create Home page and Routing',
        dueDate:'2025-11',
        isCompleted:false,
        priority: "High" ,
    }
  ],
  filter:"all",
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: 
  {
    // ✅ Add a task
    // addTask: (state, action: PayloadAction<{ title: string }>) => {
    //   const newTask: Task = {
    //     id: crypto.randomUUID(), // you can use uuid() instead
    //     title: action.payload.title,
    //     completed: false,
    //   }
    //   state.tasks.push(newTask)
    // },

    // ✅ Toggle task completion
    // toggleTask: (state, action: PayloadAction<string>) => {
    //   const task = state.tasks.find((t) => t.id === action.payload)
    //   if (task) {
    //     task.completed = !task.completed
    //   }
    // },

    // ✅ Delete a task
    // deleteTask: (state, action: PayloadAction<string>) => {
    //   state.tasks = state.tasks.filter((t) => t.id !== action.payload)
    // },
  },
})

// export const { addTask, toggleTask, deleteTask } = taskSlice.actions

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}

export const selectFilter = (state: RootState) => {
    return state.todo.filter;
}

export default taskSlice.reducer
