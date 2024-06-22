import {useState} from "react";
import './style.css'

export const TextSizeChange = ({text}) => {
    const [isCapitalText, setIsCapitalText] = useState(false)

    function changeTextSize() {
        setIsCapitalText(!isCapitalText)
    }

    return <div className={`${isCapitalText ? 'capital-text' : 'small-text'}`}>
        <p style={{textTransform: isCapitalText ? 'uppercase' : 'lowercase'}}>{text}</p>
        <button onClick={changeTextSize}>{isCapitalText ? `Change small` : `Change capital`}</button>
    </div>
}