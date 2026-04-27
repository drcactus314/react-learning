import { useState } from "react";
import { MyItemList } from "./MyItemList";
// import { RenderTaskList } from "./RenderTasksList";

const myTasksData = [{id:1, task: "Wash dishes"},{id:2, task: "Tidy room"},{id:3, task: "Help mam"}]

export const MyListOfTasks = () => {
  const [input, setInput] = useState("Write smth here");
  const [item, setItem] = useState(myTasksData);

  const onHandleAdd = (input) => {
    const newObjData = { id: item.length+1, task: input}
    const newElem = [...item, newObjData];
    console.log(newElem);
    
    setItem(newElem);
    setInput("");
  };

  const onDeleteItem = (id)=>{
      const updatedArray = item.filter((elem) => id !== elem.id);
      setItem(updatedArray)
  }
  const pressEnter = (e) => {
    if (e.key === "Enter") {
      onHandleAdd(input);
    }
  };

  const changeValueInput = (e) => {
    const value = e.target.value;
    setInput(value);
  };
  return (
    <>
      <input onChange={changeValueInput} value={input} onKeyDown={pressEnter} />
      <ul>
        {item.map((element, index) => (
          <MyItemList key={element.id} element={element} index={index} deleteEl = {onDeleteItem} /> 
         ))} 
       </ul> 
      <button onClick={() => onHandleAdd(input)}>Add New Task</button> 
       <div>{item.length} tasks</div> 
    </>
  );
};
