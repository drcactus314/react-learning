import styled from "styled-components";
const CheckInput = styled.input`
  height: 2em;
  width: 2em;
  border: 1px solid black;
  border-radius: 50%;
`;

export const CheckBoxComp = (props) => {
  return (
    <>
      <label htmlFor="checkbox"></label>
      <CheckInput
        type="checkbox"
        id={`checkbox-${props.id}`}
        checked={props.isCompleted}
        onChange={() => {
          props.toggleTaskCompleted(props.id);
        }}
      />
    </>
  );
};
