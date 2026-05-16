import { useState, useMemo, memo } from "react";

export const MyNewComponent = () => {
  console.log("Рендериться");

  return (
    <>
      <p>Я сусідній компонент</p>
    </>
  );
};

const MemoizedNeighbor = memo(MyNewComponent);

export const MyComponentReactMemo = () => {
  const [list, setList] = useState([
    "Artem",
    "Volodia",
    "Ira",
    "Nazar",
    1,
    2,
    3,
  ]);
  const deleteItem = (deleteIndex) => {
    const newArr = list.filter((item, index) => deleteIndex !== index);
    setList(newArr);
  };

  return (
    <>
      <MemoizedNeighbor />
      <ul>
        {list.map((item, index) => (
          <li key={item}>
            {item}
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};


