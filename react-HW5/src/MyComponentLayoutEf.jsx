import { useLayoutEffect, useState } from "react";

export const MyComponentLayoutEf = () => {
  const [paragraph, setParagraph] = useState(false);

  const addPar = () => {
    setParagraph(
        true
    );
  };

  useLayoutEffect(() => {
    const p = document.querySelector('p');
    console.log('Я зловив тег p');
    
  }, [paragraph]);

  return (
    <>
    { paragraph && <p>Новий абзаццццц</p>}
      <p>
        Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        cumque tempore ut cum officiis debitis quaerat repudiandae
        exercitationem, distinctio harum, voluptatem sint, suscipit doloribus
        deserunt iusto sequi eligendi culpa ullam!
      </p>
      <button onClick={addPar}>Add paragraph</button>
    </>
  );
};
