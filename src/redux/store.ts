
// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from './features/counterSlice'
// import taskReducer from './features/task/taskSlice'

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     todo: taskReducer
//   },
// })

// // Infer types
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch




import { api } from '@/app/api';
import { configureStore } from '@reduxjs/toolkit';
// import { api } from './app/api';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
