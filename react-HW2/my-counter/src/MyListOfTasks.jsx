import { useState } from "react";
import { MyItemList } from "./MyItemList";
import { SelectComponent } from "./SelectComponent";
import styled from "styled-components";

// import { RenderTaskList } from "./RenderTasksList";

const myTasksData = [
  { id: 1, task: "Wash dishes", completed: false },
  { id: 2, task: "Tidy room", completed: false },
  { id: 3, task: "Help mom", completed: false },
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

  const[select, setSelect] = useState("All");   //для селекту

  const [error, setError] = useState ("");  // для валідації

  const onHandleAdd = (input) => {

    
    if (input.length <=10){
      return setError('Замало символів в рядку')};
    if(input.length > 40){
      return setError('Занадто велике завдання');
      } 
      setError("");
    const newObjData = { id: item.length + 1, task: input, completed: false };
    const newElem = [...item, newObjData];

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

  const toggleTaskCompleted = (id) =>
    setItem(
      item.map((element) =>
        element.id == id
          ? { ...element, completed: !element.completed }
          : element,
      ),
    );


    const selectFilter = item.filter(selectElement=>{ 
      if (select === 'Closed') {
        return selectElement.completed === true};
      if (select === 'Active') {
        return selectElement.completed === false};
        return true
    });

  return (
    <>
      <InputStyle
        onChange={changeValueInput}
        value={input}
        onKeyDown={pressEnter}
      />
      {error && <p style={{color:"red"}}>{error}</p>}
      <SelectComponent state={select} changeState={setSelect}/>
      <ListStyle>
        {selectFilter.map((element, index) => (
          <MyItemList
            key={element.id}
            element={element}
            index={index}
            deleteEl={onDeleteItem}
            toggleTaskCompleted={toggleTaskCompleted}
          />
        ))}
      </ListStyle>
      <ButtonStyle onClick={() => onHandleAdd(input)}>Add New Task</ButtonStyle>
      <div>{item.length} tasks</div>
    </>
  );
};
