import React, { useState,useContext } from 'react';
// import { useContext } from 'react';
// import { UserContext } from '../../App';
// import { useHistory, useLocation } from 'react-router-dom';
// import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';

import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { handleGoogleSignIn, initializeLoginFramework,handleSignOut,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./loginManager";



function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
      handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }

  const signOut = () => {
      handleSignOut()
      .then(res => {
          handleResponse(res, false);
      })
  }

  const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      console.log(isFieldValid);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber =  /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
      console.log(isFieldValid);
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
      console.log('newUser in hand=',newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    // newUser &&
    if( user.email && user.password){
      createUserWithEmailAndPassword( user.email, user.password)     
      .then(res => {
          console.log('res=', res);
        handleResponse(res, true);
      })
    }

    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }
    e.preventDefault();
  }



  return (
    <div style={{textAlign: 'center',border:'1px solid pink',backgroundColor:'lightgrey',width:'25%',marginLeft:'500px'}}>

      <h1>Travelling Assistance</h1>
      <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
      <label htmlFor="newUser">New User Sign up</label>
      <form onSubmit={handleSubmit}>
        {newUser && <input name="name" type="text" onBlur={handleBlur} placeholder="Your name"/>}
        <br/>
        <input type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" required/>
        <br/>
        <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required/>
        <br/>
        <input type="submit" value={newUser ? 'Sign up' : 'Sign in'}/>
      </form>
      { user.error &&
       <p style={{color: 'red'}}>User email/password Invalid</p>}
   
    <br/><strong>-----or-----</strong><br/>
      { user.isSignedIn ? <button onClick={signOut}>Sign Out</button> :
        <button onClick={googleSignIn}>Sign In with Google</button>
      }
      <br/><br/>
    </div>
  );
}

export default Login;
