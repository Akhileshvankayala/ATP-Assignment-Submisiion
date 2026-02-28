import { validateTitle,validatePriority,validateDueDate } from './validator.js';
const tasks=[]
let i=0
function addTask(title, priority, dueDate) {
    try{
        let v1=validateTitle(title)
        let v2=validatePriority(priority)
        let v3=validateDueDate(dueDate)
        if(v1 && v2 && v3){
            tasks.splice(i,0,{
                // taskname:{title},//doubt here...why are we getting { priority: 'low' }, when we just sent low?
                // taskPriority:{priority},
                // taskDueDate:{dueDate}
                title,priority,dueDate
            })
            i++
        }
    }catch(err){
        console.log(err.message)
    }finally{
        console.log("error handled")
    }
}
function getAllTasks() {
    for(let taskObj of tasks){
        console.log(taskObj)
    }
                      // Return all tasks
}
function completeTask(taskId) {
        // Find task and mark as complete
        console.log(`marked ${taskId} as complete`)
        tasks.splice(taskId,1)
}
export {addTask,getAllTasks,completeTask}