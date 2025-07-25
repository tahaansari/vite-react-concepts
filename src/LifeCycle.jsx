import { useLayoutEffect } from "react";
import { useState } from "react";
import { useEffect } from "react";

const LifeCycle = ()=>{
    console.log('life cycle component rendered')
    const [result,setResult] = useState();
    useLayoutEffect(() => {
    // runs earlier than useEffect
    console.log('this will run before useEffect')
    }, []);
    useEffect(()=>{
        console.log('useEffect called');
        // setTimeout(()=>{
        //     setResult("this will print after 5 seconds")
        // },5000)
        // (async () => {
        //     await new Promise(resolve=>setTimeout(resolve,5000))
        //     setResult("this will print after 5 seconds")
        // })()
        new Promise((resolve)=>setTimeout(resolve,5000)).then(()=>{setResult("this will print after 5 seconds")})
    },[])
    return <>
        <h1>LifeCycle Component - {result}</h1>
    </>   
}
export default LifeCycle;