import { useState } from "react";
import { useMemo } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    console.log('parent component rendered')
    const [count, setCount] = useState(0);
    const [name,setName] = useState('');
    // const [memorizedData,setMemorizedData] = useState(0);
    const changeCount = () => {
        setCount(count + 1)
    }
    const memorizedDataFun = useMemo(() => {
        console.log('memorizedDataFun re-rendered')
        return { name: name }
    }, [name])

    const changeMemorizedDataFun = ()=>{
        console.log("update the memorizedDataFun")   
        // setName(e.target.value)
    }
    
    return <>
        <div style={{ border: "1px solid red" }}>
            <div style={{padding:"20px"}}>
                <h1>Parent Component</h1>
                <h1>count - {count}</h1>
                <input type="text"  value={name} placeholder="enter you name" />
                <button onClick={changeMemorizedDataFun}>change name</button>
                <button onClick={changeCount}>increment count</button>
            </div>
            <ChildComponent data={memorizedDataFun} />
        </div>
    </>
}

export default ParentComponent; 