import {useState} from "react";

export const NumbersData = ({number1, number2})=>{
    const [result, setResult] = useState(0)

    function setSumNumbers() {
        setResult(number1 + number2)
    }

    return <div>
        <p>{number1}</p>
        <p>{number2}</p>
        <p>{result}</p>
        <button onClick={setSumNumbers}>Click me</button>
    </div>
}