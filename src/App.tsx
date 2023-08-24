import { BrowserRouter } from "react-router-dom";
import RouterPage from "./Pages/RouterPage";
import { supabase } from "./Auth/loginApi";
import { useEffect, useState } from "react";
import { User, UserResponse } from "@supabase/supabase-js";
import LoginPage from "./Pages/LoginPage";




function App(){
  const [user,setUser]=useState<User|null|UserResponse>();

  useEffect(() => {
    const getuser=async () => {
      const user=await supabase.auth.getUser()
      //  console.log(user.data.user,"user")
      setUser(user.data.user);
    }
     getuser();
    }, [])
    
    return (user!= null)?(
      <BrowserRouter >
      <RouterPage />
    </BrowserRouter>
  ) : (
    <>
   <LoginPage/>
   </>
  );
  
}

export default App
