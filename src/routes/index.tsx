import App from '@/App';
import BookList from '@/pages/BookList';
// import BookList from '@/components/ui/BookList';
import Task from '@/pages/Task';
import User from '@/pages/User';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
      path: "/",
    //   element: <div>Hello World</div>,
    Component:App,
    children:[
        // {
        //     index:true,
        //     // path: 'tasks',
        //     Component:Task
        // },
        {
            path: 'users',
            Component:User
        },
        {
            path: 'tasks',
            Component:Task
        },
        {
            path: 'books',
            Component:BookList
        },

    ]
    },
  ]);

export default router;