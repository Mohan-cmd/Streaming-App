
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
import { displaySearch } from "../utils/searchSlice";
import { Supported_LANGUAGES } from "../utils/Constants";
import { setLanguage } from "../utils/configSlice";
const Header =() =>{
    
    const navigate =useNavigate();

    const dispatch= useDispatch();
    const user= useSelector((store)=> store.user)
    const blnvalue=useSelector((store)=>store.search?.blnDisplaySearch)
    
    console.log("blnSearchVal in Header is: ")
    console.log(blnvalue)
   //  console.log("user dats is: ")
   //  console.log(user)
    const handleSignOut =()=>{
       signOut(auth).then(()=>{
         navigate("/")
       }).catch((error)=>{
          navigate("/error")
       })
    }
    
    const handleDisplaySearch =()=>{
       
       dispatch(displaySearch(!blnvalue))
    }

   const handleLangChange=(e)=>{
      dispatch(setLanguage(e.target.value))
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
        <div className="z-10 w-screen absolute bg-gradient-to-b from-black flex flex-col md:flex-row justify-between md:mt-3">
          
            <div className="w-36 md:ml-6 mx-auto mt-2">
               <img src={Logo} alt="logo"></img>
            </div>
            {user && 
            <div className="md:my-4 h-8 flex flex-row justify-center mr-2">
             {blnvalue&& <div className="mr-4 ">
             <select className="p-[6px] text-sm bg-purple-700 rounded-md" onChange={handleLangChange}>
                {Supported_LANGUAGES.map(val=><option key={val.identifier} value={val.identifier}>{val.name} </option>)}
              </select>
             </div>}
               <button className="bg-purple-800 rounded-md mr-2  text-sm px-1" onClick={handleDisplaySearch}>{blnvalue? "Home":"GPT Search"}</button>
                <img className="w-8  rounded-lg" src={user.photoURL}></img>
                <button onClick={handleSignOut} className="text-white mr-4 rounded-sm text-xs font-bold">
                    (Sign Out)
                </button>
            </div>}
       </div>
    )
}

export default Header;