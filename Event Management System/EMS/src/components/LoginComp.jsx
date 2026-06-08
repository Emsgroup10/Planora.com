import {useState} from "react"
import {useDispatch} from "react-redux"
import {login} from "../redux/AuthSlice"
import {useNavigate} from "react-router-dom"

export default function LoginComp(){
    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")
    const [msg, setMsg]=useState("")
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const reqoptions={
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
            username:username,
            password:password
    })
        }
        fetch("http://localhost:3000/login", reqoptions)
        .then(resp=>{
            if(resp.status===200){
                return resp.json();
            } else if(resp.status===401){
                setMsg("Invalid credentials")
                return {}
            }
        })  
        .then(data=>{
            console.log(JSON.stringify(data));
            //redux state modify
            dispatch(login({user:data.user, token:data.token}))

            if(data.user.role === 1){//admin
                //navigate to admin dashboard
                navigate("/admin")
            }
            else if(data.user.role === 2){//user
                //navigate to user dashboard
                navigate("/user")
            }
        })
    }
    return(
        <>
        <h1>Login Form</h1>
        <form>
            Enter username:
            <input type="text" name="username"
            value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
            <br/>
            Enter password:
            <input type="text" name="password"
            value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <br/>
            <input type="submit" value="Login"
            onClick={handleSubmit}/>
        </form>
        <p>{msg}.</p>
        <p>{username}</p>
        <p>{password}</p>
        </>
    )
}