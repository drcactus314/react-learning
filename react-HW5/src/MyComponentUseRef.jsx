import {useRef} from 'react'

export const MyComponentUseRef = ()=>{
    const myRef = useRef();

    const onFocus =()=>{
        myRef.current.focus();
    }
    const outFocus =()=>{
         myRef.current.blur();
    }
   


    return(<>
    <input type="text" ref={myRef}/>
    <button onClick={onFocus}>Focus</button>
    <button onClick={outFocus}>Bluuur</button>
    </>)
}