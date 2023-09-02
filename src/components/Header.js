import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/slices/userSlice'
import { SUPPORTED_LANGUAGE, netflixLogo } from '../utils/constant'
import { toggleGptView } from '../utils/slices/gptSlice'
import { changeLanguage } from '../utils/slices/configSlice'

const Header = () => {
  
  const [toggleGptButton, setToggleGptButton]=useState(false)
  const dispatch=useDispatch()
  const user=useSelector((store)=>store.user)
  const navigate=useNavigate()
  const handleSignOut=()=>{
signOut(auth).then(()=>{
  navigate("/")
}).catch((error)=>{
  console.log("Error signing out", error)
})
  }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user)=>{
      if(user){
        const {uid, email, displayName, photoURL}=user
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
        navigate("/browse")
      }
      else{
        dispatch(removeUser())
        navigate("/")
      }
    })
    return ()=> unsubscribe();
  },[])

const handleGptSearch=()=>{
  dispatch(toggleGptView())
  setToggleGptButton(!toggleGptButton)
}
const handleLanguageChange=(e)=>{
  dispatch(changeLanguage(e.target.value))
}

return (
  <div className='absolute bg-gradient-to-b from-black z-10 w-full flex justify-between items-center p-2'>
    <img src={netflixLogo} alt="" className='w-40'/>    
   <div className='ml-auto mr-5'>
    <select className='p-2 bg-gray-800 text-yellow-50 rounded ' onChange={handleLanguageChange}>
      {SUPPORTED_LANGUAGE.map((lang)=>
      <option key={lang.id} value={lang.id}>{lang.name}</option>
      )}
    </select>
   </div>
  { user &&  <div className='flex justify-between items-center gap-2'>
    <button  className='bg-green-700 text-white hover:bg-green-800 px-2 py-1 h-1/2 items-center rounded-lg' onClick={handleGptSearch}>
    {toggleGptButton ?"Back":"AI Search"}
      </button>
      <img src={user?.photoURL} alt="user-icon" className='w-8 rounded '/>
    <button onClick={handleSignOut} className='bg-red-500 text-white hover:bg-red-700 px-2 py-1 h-1/2 items-center rounded-lg'>Sign out</button>
    </div>}

      </div>
  )
}

export default Header