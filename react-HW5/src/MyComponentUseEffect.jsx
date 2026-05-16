import {useEffect,} from 'react';
import {useState} from 'react';
 
export const MyComponentUseEffect = ()=>{
    const names = ['Artem', 'Yura', 'Nata', 'Olia', 'Mariia'];
    const [newName, setNewName] = useState(0);

    const addName= ()=>{
         const randomName = Math.floor(Math.random()* names.length);
        setNewName(
            randomName
        )
        
    }

    useEffect(()=>{
        localStorage.setItem('Name', JSON.stringify(newName));
        console.log('useEffect is working');
        
    }, [newName])
    return(
        <>
        <p>Hello {names[newName]}</p>
        <button onClick={addName}>AddName</button>
        </>
    )
}