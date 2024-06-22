import {Counter} from "./components/Counter/Counter";
import {TextSizeChange} from "./components/TextSizeChange/TextSizeChange";
import {NumbersData} from "./components/NumbersData/NumbersData";

function App() {


    return (
        <div className={'app-tag'}>
            {/*<Counter/>*/}
            {/*<TextSizeChange text={'Barev dzez vooonc eq inch ka chka ?'}/>*/}
            <NumbersData arr={[3,4,5,6,7,8]} number1={23} number2={221}/>
        </div>
    );
}

export default App;

