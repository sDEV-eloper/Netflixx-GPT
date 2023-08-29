import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useSelector } from 'react-redux'

const Header = () => {
const user=useSelector(store=>store.user)
  const navigate=useNavigate()
  const handleSignOut=()=>{
signOut(auth).then(()=>{
  navigate("/")
}).catch((error)=>{
  console.log("Error signing out", error)
})
  }
  return (
    <div className='absolute bg-gradient-to-b from-black z-10 w-full flex justify-between items-center p-2'>
    <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" className='w-40'/>    
  { user &&  <div className='flex justify-between items-center gap-2'>
      <img src={user?.photoURL} alt="user-icon" className='w-12 rounded-full '/>
    <button onClick={handleSignOut} className='bg-red-500 text-white hover:bg-red-700 px-4 py-2 h-1/2 items-center rounded-lg'>Sign out</button>
    </div>}

      </div>
  )
}

export default Header