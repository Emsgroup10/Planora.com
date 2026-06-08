import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {logout} from "../redux/AuthSlice"
import {useEffect} from "react"

export default function LogoutComp(){
    const dispatch=useDispatch();
    const navigate=useNavigate();

    useEffect(()=>{
    dispatch(logout())
    navigate("/")
}, [])

    return null;
}