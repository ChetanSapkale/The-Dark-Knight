import React, { useState } from "react";
import styled from "styled-components";

export const Login = () => {
  
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()
    let userdata={
      email,
      password
    }
    console.log(userdata)
  }

  return (
    <DIV onSubmit={handleSubmit}>
      <h2>Log In</h2>
      <input data-testid="user-email" type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <button data-testid="user-login">Log In</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;
  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }
  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;

export default Login