import styled from "styled-components";
import { CheckBoxComp } from "./CheckBoxComp";

const LiStyle = styled.li`
  display: flex;
  gap: 2em;
  font-size: 2em;
  font-family: monospace;
`;
const BtnStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4em;
  width: 4em;
  border-radius: 50%;
  border: solid 3px black;
  background-color:;
  color: black;
  font-family: monospace;
  font-weight: 600;
`;
const Task = styled.span`
  text-decoration: ${(props) => (props.$isCompleted ? "line-through" : "none")};
`;

export const MyItemList = (props) => {
  return (
    <>
      <LiStyle key={`${props.element.id}`}>
        <CheckBoxComp
          id={props.element.id}
          isCompleted={props.element.completed}
          toggleTaskCompleted={props.toggleTaskCompleted}
        />{" "}
        <Task $isCompleted={props.element.completed}>{props.element.task}</Task>
        <BtnStyle
          type="button"
          onClick={(e) => props.deleteEl(props.element.id)}
        >
          Delete
        </BtnStyle>
      </LiStyle>
    </>
  );
};
