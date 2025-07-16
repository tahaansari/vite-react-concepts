import { useContext } from "react";
import { UserContext } from "./UserContext";
const Profile = ()=>{
    const { user, setUser } = useContext(UserContext)
    const changeName = ()=>{
        setUser('John Doe')
    }
    return <>
        <h1>Profile Component - Hello My name is {user}</h1>
        <button onClick={changeName}>change name</button>
    </>
}
export default Profile;