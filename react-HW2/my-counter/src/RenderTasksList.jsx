import { RenderTask } from "./RenderTask"

export const RenderTaskList = () => {

    const arrayData = [{id:1 , task: "Tidy room"}, 
        {id:2, task: "Wash dishes"}, 
        {id:3, task: "Take out the garbage"},
        {id:4, task: "Help mam"},
        {id:5, task: "Shopping"},
        {id:6, task: "Do homework"}]
    return(
        <>
        <div>
            {arrayData.map((todo) =>{
                console.log(todo);
               return <RenderTask task={todo.task} />
            })}
        </div>
        
        </>
    )
}