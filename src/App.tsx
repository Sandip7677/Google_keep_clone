import { BrowserRouter } from "react-router-dom";
import RouterPage from "./Pages/RouterPage";
import { supabase } from "./Auth/loginApi";
import { useEffect, useState } from "react";
import { Session, User, UserResponse } from "@supabase/supabase-js";
import { Button } from "./components/ui/button";




function App(){
  const [user,setUser]=useState<User|null|UserResponse>();

  const handleSignIn = async () => {
 
     await supabase.auth.signInWithOAuth({
      provider: 'google', 
    })
    
  }

  useEffect(() => {
    const getuser=async () => {
      const user=await supabase.auth.getUser()
      setUser(user);
    }
     getuser();
    
  }, [])
  
  return user?(
    <BrowserRouter >
      <RouterPage />
    </BrowserRouter>
  ) : (
    <div className="p-10">
      <Button onClick={handleSignIn}>Login with Google</Button>
    </div>
   
  
  );
  
}

export default App
