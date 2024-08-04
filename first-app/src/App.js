
import AddTask from "./components/Addtask";
import ToDoScreen from "./screens/ToDoSceen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {TaskProvider} from "./context/taskContext";


const router = createBrowserRouter([
    {
        path:'/',
        element: <ToDoScreen/>
    },
    {
        path:"/add-task",
        element: <AddTask/>
    }
])
function App(){

    // const {taskList, addNewTask}=useContext(TaskContext);
    return(
        <TaskProvider>
        <RouterProvider router={router}/>
        </TaskProvider>
    )
}

export default App;