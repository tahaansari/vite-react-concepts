import { useMemo } from "react";
import { useState } from "react";

const useMemoExample = () => {
    console.log('usememoexample component render')
    const [count,setCount] = useState(0)
    const [otherValue,setOtherValue] = useState(0)
    const expensiveFunction = useMemo(() => {
        console.log('calculating...')
        let result = 0;
        for(let i=0;i<100;i++){
            result+=i;
        }
        return result+count;
    },[count])
    return <>
    <h1>Result - {expensiveFunction}</h1>
    <button onClick={()=>setCount(count+1)}>count</button>
    <button onClick={()=>setOtherValue(otherValue+1)}>othervalue</button>
    </>
}
export default useMemoExample;