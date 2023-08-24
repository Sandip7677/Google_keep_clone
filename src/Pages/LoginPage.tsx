import React from 'react'
import { supabase } from '../Auth/loginApi'
import { Button } from '../components/ui/button'

const LoginPage = () => {
  const handleSignIn = async () => {
 
    await supabase.auth.signInWithOAuth({
     provider: 'google', 
   })
   
 }
  return (
    <>
     <div className="min-h-screen min-w-full flex items-center justify-center">
       <Button onClick={handleSignIn} className='bg-amber-300 text-amber-950'>Login with Google</Button> 
     </div>
    </>
  )
}

export default LoginPage