import Children from './children'
import { UserContext } from "./UserContext";
import Header from './Header'
import { useState } from 'react';
import { useRef } from 'react';
import UseMemoExample from "./useMemoExample"
import ParentComponent from './ParentComponent';
import LifeCycle from './LifeCycle';
import Timer from './Timer';

function App() {
  console.log('app component rendered')
  const [toggle,setToggle] = useState(false)
  const [user, setUser] = useState("Taha Ansari");
  const [counterState,setCounterState] = useState(0)
  const changeCounterState = () => {
    setCounterState(counterState+1);
  }
  const counterRef = useRef(0);
  const changeCounterRef = () => {
    counterRef.current++;
  }
  return (
    <>
      {/* <UserContext.Provider value={{user, setUser}}>
        <Children>
          <h1>Component with children</h1>
        </Children>
        <Header></Header>
        <h1>State Counter is - {counterState}</h1><button onClick={changeCounterState}>increment state counter(component will re-render)</button>
        <h1>Ref Counter is - {counterRef.current}</h1><button onClick={changeCounterRef}>increment ref counter(component will not re-render)</button>
        <br />
        ..........
        <br />
        <UseMemoExample/>
      </UserContext.Provider> */}
      {/* <ParentComponent/> */}

      {/* {!toggle && <LifeCycle/>}
      <button onClick={()=>setToggle(!toggle)}>toggle component</button> */}
      <Timer/>
    </>
  )
}

export default App
