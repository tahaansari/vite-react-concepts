import Children from './children'
import { UserContext } from "./UserContext";
import Header from './Header'
import { useState } from 'react';

function App() {
  const [user, setUser] = useState("Taha Ansari");
  // const [count,setCount] = 
  return (
    <>
      <UserContext.Provider value={{user, setUser}}>
        <Children>
          <h1>Component with children</h1>
        </Children>
        <Header></Header>
        <h1>Counter count is - </h1><button>Increment</button>
      </UserContext.Provider>
    </>
  )
}

export default App
