import {useState} from "react";

export const Counter = ()=>{
    // useState hook

    // const [ popoxakan, funkcia vor@ popoxelu e tvyal popoxakan@] = useState(naxnakan arjeq)
        const [counter, setCounter] = useState(0)
    let counterLocal = 0

    function incrementCounter(){
        counterLocal++;
        setCounter(counter+1)
        console.log(counter)
    }


    return <div>
        <p>{counterLocal}</p>
        <p>{counter}</p>
        <button onClick={incrementCounter}>Click me</button>
    </div>
}