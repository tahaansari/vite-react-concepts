import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const Timer = ()=>{
    console.log('component rendered')
    const [tick,setTick] = useState(0);
    const intervalID = useRef();
    const startTimer = ()=>{
        console.log('start timer called')
        intervalID.current = setInterval(()=> setTick(prev=>prev+1),1000)
    }
    const stopTimer = ()=>{
        console.log('stop timer called')
        clearInterval(intervalID.current)
    }
    useEffect(()=>{
        console.log('useEffect called')
        startTimer();
        return ()=> {
            console.log('component un-mount happned')
            clearInterval(intervalID.current)
        }
    },[])
    return <>
        <h1>Timer - {tick}</h1>
        <button onClick={()=>stopTimer()}>Stop</button>
        <button onClick={()=>startTimer()}>Re-Start</button>
    </>
}

export default Timer;