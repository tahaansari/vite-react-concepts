
import {memo} from "react";

const ChildComponent = memo(({data})=>{
    console.log('child component rendered')
    return <>
    <div style={{border:"1px solid black", margin: "10px", padding:"10px"}}>
            <h1>Child Component prop is- {data}</h1>
    </div>
    </>
})

export default ChildComponent;