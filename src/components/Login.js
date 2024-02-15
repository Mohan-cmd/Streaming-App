import Header from "./Header"
import { HOME_PAGE_IMG } from "../utils/Constants";
import { useState,useRef } from "react";
import { ValidateSignUpForm } from "../utils/Validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { UseDispatch, useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login =()=>{
     const navigate =useNavigate();
    const[isSignIn,setIsSignIn] =useState(true);
    const[errorMsg,setErrorMsg] =useState(null)
    const dispatch= useDispatch();
    const toggleSignInForm=()=>{
        setIsSignIn(!isSignIn)
    }
    const email= useRef(null)
    const password =useRef(null)
    //var isDataValid="";
    const ValidateData=()=>{
        // console.log(email)
        // console.log(password)
       const isDataValid=ValidateSignUpForm(email.current.value,password.current.value);
       setErrorMsg(isDataValid);

       if(!isSignIn){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
                displayName: "Namee", photoURL: "https://t3.ftcdn.net/jpg/04/00/47/88/240_F_400478854_eAL87XQTJyakxh1XSadIxSojtBjm7z8b.jpg"
              }).then(() => {
                const {uid,email,displayName,photoURL} =auth.currentUser;
                dispatch(addUser({uid:uid, email:email, displayName: displayName, photoURL:photoURL}));
                navigate("/browse")
              }).catch((error) => {
                // An error occurred
                // ...
              });
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(errorCode+" - "+errorMessage)
        });
       }
       else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("Hurry you signed in correctly")
            
            navigate("/browse")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(errorCode+" - "+errorMessage)
        });
        navigate("/browse")
       }
    }

    
    return(
    <div>
     <div>
       <Header/>
       <div className="absolute ">
         <img className="h-screen object-cover" src={HOME_PAGE_IMG}></img>
        </div>
    
        <form onSubmit={(e)=>e.preventDefault()} className="absolute py-10 px-10 bg-black bg-opacity-80 md:w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-sm">
            <div className="flex-row">
            <h1 className="m-2">{isSignIn? "Sign In" : "Sign Up"}</h1> 
            {!isSignIn && <input className="p-2 my-2 w-full bg-gray-700" placeholder="Full name"></input>}
            <input type="text" ref={email} placeholder="Email Address" className="p-2 my-2 w-full bg-gray-700"></input>
            <input type="password" ref={password} placeholder="Password" className="p-2 my-2 w-full bg-gray-700"></input>
            {errorMsg!=null && <p className="text-sm text-red-700">{errorMsg}</p>}
            <button className="p-2 my-2 bg-red-700 justify-center w-full" onClick={ValidateData}>{isSignIn ? "Sign In":"Sign Up"}</button>
            <p className="mx-2 my-3 text-xs cursor-pointer" onClick={toggleSignInForm}>{isSignIn ? "New to Netflix Sign Up Now" : "* Tearms & Conditions    "}</p>
            </div>
        </form>
     </div>
     
    </div>

    )

}

export default Login