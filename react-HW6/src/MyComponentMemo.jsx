import { useMemo } from "react";
import { useState } from "react";

export const MyComponentMemo = ()=>{

    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

    const sumNumbers = useMemo(()=>{
        return numbers.reduce((acc, numb)=>{
           return acc+=numb
        }, 0)
    }, [numbers]);
    return(
        <>
        <p>{sumNumbers}</p>
        </>
    )
}