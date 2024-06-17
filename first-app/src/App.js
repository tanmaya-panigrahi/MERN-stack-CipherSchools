// import { Component } from "react";
// import { useContext } from "react";
import ToDoScreen from "./screens/ToDoSceen";
import Addtask from "./components/Addtask";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TaskProvider } from "./context/taskContext";



// class App extends Component {
//   render(){
//     return (
//       <ToDoScreen />
//     );
//   }
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <ToDoScreen />
  },
  {
    path: "/add-task",
    element: <Addtask />
  }
]);
const App = () => {
  // const { taskList, addNewTask } = useContext(taskContext);


  return (
    <TaskProvider>
      <RouterProvider router={router} />;
    </TaskProvider>
  );
}
export default App;