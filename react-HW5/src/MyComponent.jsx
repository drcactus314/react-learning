import { useState } from "react";

export const MyComponent = () => {
  const name = ["Artem", "Nata", "Mykhailo", "Olia", "Nazar"];
  const [currentName, setCurrentName] = useState("");
  const sayGreetings = () => {
    const randomIndex = Math.floor(Math.random() * name.length);
    setCurrentName(name[randomIndex]);
  };

  return (
    <>
      <div>UseState</div>
      <p> Hello {currentName} </p>
      <button onClick={sayGreetings}>addName</button>
    </>
  );
};
