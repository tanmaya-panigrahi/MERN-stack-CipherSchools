import { createContext } from "react";
import { useState } from "react";
import { v4 as randomUUID } from "uuid";

const taskContext = createContext();
const TASK_EDITABLE_FIELD_LIST = ["title", "description"];

const TaskProvider = ({ children }) => {
    const [taskList, setTaskList] = useState([]);

    const addNewTask = (task) => {
        setTaskList([...taskList, { ...task, createdDate: new Date(), taskID: randomUUID() }])

    }

    const deleteTask = (taskID) => {
        setTaskList(taskList.filter((task) => task.taskID !== taskID));
    }

    const editTask = (task) => {
        let temp = [...taskList];
        for (let t of temp) {
            if (t.taskID === task.taskID) {
                TASK_EDITABLE_FIELD_LIST.forEach((field) => {
                    t[field] = task[field];
                });
                setTaskList(temp);

            }

        }

    }




    return (
        <taskContext.Provider value={{ taskList, addNewTask, deleteTask,editTask }}>
            {children}
        </taskContext.Provider>
    )
}

export { TaskProvider };
export default taskContext;