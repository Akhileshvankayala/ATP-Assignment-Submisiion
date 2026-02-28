function validateTitle(title) {
    if(!title){
        console.log("title required")
        return false
    }
    if(title.length<3){
        console.log("length of title os not sufficient")
        return false
    }
    return true
}
function validatePriority(priority) {
    if(priority==="low" || priority=== "medium" || priority==="high"){
        console.log("valid priority")
        return true;
    }
    return false
}
function validateDueDate(date) {
    let dueDate=new Date('2024-10-20')//yyyy-mm-dd
    let today=Date()
    if(dueDate>today){
        return true
    }
    return false
}

export {validateTitle,validatePriority,validateDueDate}