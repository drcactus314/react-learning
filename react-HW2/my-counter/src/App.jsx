import { useState } from 'react';
import { MyListOfTasks } from './MyListOfTasks';
import { MyClassComponent } from './MyClassComponent';
import styled  from 'styled-components';


const StyleToDo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  min-height: 100vh;
  background-color: ${props => props.$isDark ? '#282c34' : '#f0f2f5' };
  color: ${props => props.$isDark ? '#f0f2f5':'#282c34' };
  `;
  const TitleStyle = styled.div`
  font-size: 1.5em;
  font-family: monospace;
  font-weight: 600;
  
  `

function App() {
  const isMyList = false;

  const[memory, setMemory] = useState(false);
  
  const toggleTheme = ()=>{
    setMemory(!memory)
  }

  return (
    
      <StyleToDo $isDark={memory}>
        <TitleStyle>My TO DO List</TitleStyle>
        {isMyList ? <MyClassComponent /> : <MyListOfTasks />}
        <button onClick={toggleTheme}>Change Theme</button>
      </StyleToDo>
  
  );
}

export default App;
