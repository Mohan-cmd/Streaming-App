
import { Logo } from "../utils/Constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { removeUser } from "../utils/userSlice";
const Header =() =>{
    
    const navigate =useNavigate();

    const dispatch= useDispatch();
    const user= useSelector((store)=> store.user)
   //  console.log("user dats is: ")
   //  console.log(user)
    const handleSignOut =()=>{
       signOut(auth).then(()=>{
         navigate("/")
       }).catch((error)=>{
          navigate("/error")
       })
    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,(user)=>{
         if(user){
           const {uid,email,displayName,photoURL} =user;
           dispatch(addUser({uid:uid, email:email, displayName: displayName,photoURL}));
           navigate("/browse")
         }
         else{
           dispatch(removeUser());
           navigate("/")
         }
        })
 //onAuthStateChanged gives a subscribe which unmounts it after login (unsubcribe when component unmounts )
        return ()=> unsubscribe(); 
     },[])

    return(
        <div className="z-10 w-screen absolute bg-gradient-to-b from-black flex justify-between">
          
            <div className="w-36 ml-6 mt-2">
               <img src={Logo} alt="logo"></img>
            </div>
            {user && <div className="my-4 flex flex-row">
                <img className="w-10 h-10 mt-2 rounded-lg" src={user.photoURL}></img>
                <button onClick={handleSignOut} className="text-white py-0 mr-4 h-10 mt-2 rounded-sm text-xs font-bold">
                    (Sign Out)
                </button>
            </div>}
       </div>
    )
}

export default Header;