const CounterUseReducer = ()=>{
    // reducer = state, action
    // switch action.type == "increment"
    return <>
        <h1>Counter - </h1>
        <button onClick={dispatch({type:"increment"})}>Increment +</button>
        <button onClick={dispatch({type:"decrement"})}>Decrement -</button>
        <button onClick={dispatch({type:"reset"})}>Reset</button>
    </>
}

export default CounterUseReducer;