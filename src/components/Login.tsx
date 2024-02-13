import { useContext, useEffect } from "react";
import { Context } from "../App";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button =styled.button(()=>({
    color: 'green',
    fontSize: '1em',
    margin: '1em',
    padding: '0.25em 1em',
    border: '2px solid green',
    borderRadius: '3px',
    cursor: 'pointer'
}))

const ButtonContainer = styled.div(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
}))

function Login () {
    const {isAuthenticated, setIsAuthenticated}:any = useContext(Context);
    
    const changePage = useNavigate();

    const goHome = ()=>{
        changePage("/")
    }

    useEffect(()=>{
        if (isAuthenticated) goHome()}, [isAuthenticated])
    

    return (
        <ButtonContainer>
            <Button onClick={()=> setIsAuthenticated(true)}>Login</Button>
        </ButtonContainer>
    )
}

export default Login;