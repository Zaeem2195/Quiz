
const init={
    tasks:[
        {
            id : 0,
            description : 'work out at night',
            status : 'false'
        },
        {
            id : 2,
            description : 'do the dishes',
            status : 'true'
        }
    ]
}

const TaskReducer=(state = init, action)=>{
    
    if (action.type==='CHANGE_STATUS'){
        const newTasks = state.tasks.map(task=>{
            if(task.id===action.payload.id){
                task.status=!task.id;
            }
            return task
        })
        return ({
            todo:newTasks
        })
    }
}
export default TaskReducer