const dateFormatter=new Intl.DateTimeFormat("en-IN",{
    
    hour12:true,
    hour:"numeric",
    minute:"numeric",
    year:"numeric",
    month:"short",
    day:"numeric",
})

export const formatDate=(date)=>{
    return dateFormatter.format(date);
}