import { useContext, useEffect } from "react";
import { Context } from "../App";
import { useNavigate } from "react-router-dom";



function Login () {
    const {isAuthenticated, setIsAuthenticated}:any = useContext(Context);
    
    const changePage = useNavigate();

    const goHome = ()=>{
        changePage("/")
    }

    useEffect(()=>{
        if (isAuthenticated) goHome()}, [isAuthenticated])
    

    return (
        <>
        <h1>Login</h1>
            <button onClick={()=> setIsAuthenticated(true)}>Login</button>
        </>
    )
}

export default Login;