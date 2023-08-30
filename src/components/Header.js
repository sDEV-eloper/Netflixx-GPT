import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/slices/userSlice'
import { netflixLogo } from '../utils/constant'

const Header = () => {
  const dispatch=useDispatch()
const user=useSelector(store=>store.user)
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
  return (
    <div className='absolute bg-gradient-to-b from-black z-10 w-full flex justify-between items-center p-2'>
    <img src={netflixLogo} alt="" className='w-40'/>    
  { user &&  <div className='flex justify-between items-center gap-2'>
      <img src={user?.photoURL} alt="user-icon" className='w-10 rounded-lg '/>
    <button onClick={handleSignOut} className='bg-red-500 text-white hover:bg-red-700 px-4 py-2 h-1/2 items-center rounded-lg'>Sign out</button>
    </div>}

      </div>
  )
}

export default Header