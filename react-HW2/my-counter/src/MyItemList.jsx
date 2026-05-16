import styled from "styled-components";

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
  height: 3.5em;
  width: 3.5em;
  border-radius: 50%;
  border: solid 3px orange;
  background-color: yellow;
  color: green;
  font-family: monospace;
  font-weight: 600;
`;

export const MyItemList = (props) => {
  return (
    <LiStyle key={`${props.element.id}`}>
      {" "}
      {props.element.task}
      <BtnStyle type="button" onClick={(e) => props.deleteEl(props.element.id)}>
        Delete
      </BtnStyle>
    </LiStyle>
  );
};
