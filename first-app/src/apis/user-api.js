import { TaskApplicationBackend } from "./TasksApplicationApis"

export const loginuser=({email,password})=>{
    TaskApplicationBackend.post("/users/login",{email,password});
};