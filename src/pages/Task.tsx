import {  selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";

export default function Task() {
    // const {} = useAppSelector((state) => state.todo.tasks)
    const tasks = useAppSelector(selectTasks);

    console.log(tasks);

    return (
        <div>
            <h1>This is a Task Component.</h1>
        </div>
    );
}