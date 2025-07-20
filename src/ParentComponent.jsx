import { useState } from "react";
import ChildComponent from "./ChildComponent";
// import { useMemo } from "react";

const ParentComponent = ()=>{
    console.log('parent component rendered')
    const [count,setCount] = useState(0);
    const [memorizedData,setMemorizedData] = useState(0);
    const changeCount = ()=>{
        setCount(count+1)
    }
    const changeMemorizedData = ()=>{
        setMemorizedData(memorizedData+1)
    }
    // const memorizedData = useMemo(()=>{
    //     return "this is memorized value";
    // },[])
    // const memorizedData = {value:"this is memorized"}
    return <>
    <div style={{border: "1px solid red"}}>
        <h1>Parent Component</h1>
        <h1>count - {count}</h1>
        <button onClick={changeCount}>increment count</button>
        <button onClick={changeMemorizedData}>increment memorizedData</button>
        <ChildComponent data={memorizedData}/>
    </div>
    </>
}

export default ParentComponent;