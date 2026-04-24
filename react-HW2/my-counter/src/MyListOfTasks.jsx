import { useState } from "react";
import { MyItemList } from "./MyItemList";

export const MyListOfTasks = () => {
  const [input, setInput] = useState("Write smth here");
  const [item, setItem] = useState(["First task"]);

  const onHandleAdd = (input) => {
    const newElem = [...item, input];
    setItem(newElem);
    setInput("");
  };
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
          <MyItemList element={element} index={index} />
        ))}
      </ul>
      <button onClick={() => onHandleAdd(input)}>Add New Task</button>
      <div>{item.length} tasks</div>
    </>
  );
};
