import { useState } from "react";
import { MyItemList } from "./MyItemList";
import styled from "styled-components";

// import { RenderTaskList } from "./RenderTasksList";

const myTasksData = [
  { id: 1, task: "Wash dishes" },
  { id: 2, task: "Tidy room" },
  { id: 3, task: "Help mom" },
];

const ListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  list-style: none;
  margin-left: 1em;
`;
const ButtonStyle = styled.button`
  width: 10em;
  height: 3em;
  border-radius: 10px;
  border: solid 3px orange;
  background-color: gray;
  color: white;
  box-shadow: 2px 2px 2px light-gray;
  font-size: 1.5em;
  font-family: monospace;
`;

const InputStyle = styled.input`
  width: 15em;
  height: 2em;
  border-radius: 20px;
  margin-top: 1em;

`;

export const MyListOfTasks = () => {
  const [input, setInput] = useState("Write smth here");
  const [item, setItem] = useState(myTasksData);

  const onHandleAdd = (input) => {
    const newObjData = { id: item.length + 1, task: input };
    const newElem = [...item, newObjData];
    console.log(newElem);

    setItem(newElem);
    setInput("");
  };

  const onDeleteItem = (id) => {
    const updatedArray = item.filter((elem) => id !== elem.id);
    setItem(updatedArray);
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
      <InputStyle onChange={changeValueInput} value={input} onKeyDown={pressEnter} />
      <ListStyle>
        {item.map((element, index) => (
          <MyItemList
            key={element.id}
            element={element}
            index={index}
            deleteEl={onDeleteItem}
          />
        ))}
      </ListStyle>
      <ButtonStyle onClick={() => onHandleAdd(input)}>Add New Task</ButtonStyle>
      <div>{item.length} tasks</div>
    </>
  );
};
