import { useContext } from "react";
import Task from "../components/Task";
import taskContext from "../context/taskContext";
import {useNavigate } from "react-router-dom";
// import Addtask from "../components/Addtask";

// import { Component } from "react";

// class ToDoScreen extends Component {
//     state={
//         taskCount: 0,
//     }
//     taskCount = 0;
//     render() {
//         return (
//             <div className="screen">
//                 <h1 className="ui heading center">ToDo List App</h1>
//                 <div>
//                     <button onClick={
//                         ()=>{
//                             this.setState({...this.state,
//                                 taskCount:this.state.taskCount+1
//                             });
//                             console.log(this.state.taskCount);

//                         }
//                     } className="ui secondary button">Add Task</button>

//                     <p>The number of tasks are: {this.state.taskCount} </p>
//                 </div>
//             </div>
//         )
//     }
// }

const ToDoScreen = () => {

    const {taskList} = useContext(taskContext);

    const navigate=useNavigate();

    // let addNewTask=(task)=>{
    //     setTaskList([...taskList,{...task,createdDate:new Date()}]);
    // }

    return (
        <div className="screen">
            <h1 className="ui heading center">ToDo List App</h1>
            <div>
                <button onClick={
                    () => {
                        navigate("/add-task");
                        
                    }} className="ui secondary button">Add Task</button>

                {/* <p>The number of tasks are: {taskList.length} </p> */}
                <section>

                    <div className="ui cards">

                        {
                            taskList.map((task,index) => (
                                <Task task={task} key={task.taskID}/>
                            ))
                        }
                    </div>
                </section>

            </div>
           {/* <Addtask onSubmit={addNewTask}/> */}
        </div>

    )
}
export default ToDoScreen;
