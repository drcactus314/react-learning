import { useReducer, useState } from "react";

const initialState = { name: "", lastName: "", birthYear: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "setName":
      return {...state, name: action.text };
    case "setLastName":
      return { ...state, lastName: action.lastText };
    case "setBirthday":
      return { ...state,  birthYear: action.birthText };
  }
};

export const MyComponentReducer = () => {
    const [text, setText] = useState('');
    const [lastText, setLastText] = useState('');
    const [birthText, setBirthText] = useState('');

  const [state, dispatch] = useReducer(reducer, initialState);
  const name = () => {
    dispatch({ type: 'setName', text });
  };
  const addLastName = () => {
    dispatch({ type: "setLastName", lastText });
  };
  const addBirthYear = () => {
    dispatch({ type: "setBirthday", birthText });
  };

  const addName =()=>{
    name();
    
  }
const handleInput = (e) =>{
    setText(
        e.target.value
    )
}
const handleInputLast = (e) =>{
    setLastText(
        e.target.value
    )
}
const handleInputBirth = (e) =>{
    setBirthText(
        e.target.value
    )
}


  return (
    <>
    <p>{JSON.stringify(state)}</p>
      <input type="text" onChange={handleInput} value={text}/>
      <button onClick={addName}>Add Name</button>
      <input type="text" onChange={handleInputLast} value={lastText}/>
      <button onClick={addLastName}>Add Last Name</button>
      <input type="text" onChange={handleInputBirth} value={birthText}/>
      <button onClick={addBirthYear}>Add Birth Year</button>
    </>
  );
};
