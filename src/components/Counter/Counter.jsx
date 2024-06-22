import {useState} from "react";

export const Counter = () => {
    // Model
    // useState karucvacq
    // const [popoxakan, funkcia] = useState(naxnakan arjeq)
    // 1. handisanum e popoxakan vor@  menq ogtagorcelu enq kodi makardakov
    // 2. handisanum e funkcia vor@ naxatesvac e tvyal popoxakani arjeq@ popoxelu hamar
    // 3. useState() argumentum haytararum enq tvyal popoxakani naxnakan arjeq@

    const [newText, setNewText] = useState('Barev dzez vooonc eq inch ka chka ?')

    const [isShow, setIsShow] = useState(false)
    // let text = 'Barev dzez vooonc eq inch ka chka ?'


    // Controls
    function changeName() {
        // text = 'baxtt berec voncvor ?'
        setNewText('baxtt berec voncvor ?')
        // console.log(text)
    }

    function showText() {
        // setIsShow(true)
        setIsShow(!isShow)   // !false = true   !true = false
    }

    // View
    // iravunq unenq kam gone  inch vor 1 tegov return anel durs
    //  kam ete cheqn uzum inch vor t egov durs hanenq
    //  menq karox enq return anel mi qani element datark tegi mijocov
    // <></>
    return <>
        {/*<p>{text}</p>*/}
        <p>{newText}</p>
        {isShow ? <p>barevner bolorin</p> : null}
        <button onClick={changeName}>Click to change text</button>
        <button onClick={showText}>Show text</button>
    </>

}


function foo() {
    let firstName = "Anahit";
    let lastName = "Hovhannisyan";
    return {
        firstName,
        lastName
    }
}