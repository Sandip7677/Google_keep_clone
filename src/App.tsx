import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AuthState } from "./Redux/AuthReducer";
import RouterPage from "./Pages/RouterPage";
import { supabase } from "./Auth/loginApi";
import { useEffect, useState } from "react";
import { Session, User } from "@supabase/supabase-js";
import { Button } from "./components/ui/button";
import { useDispatch } from 'react-redux';
import { login } from "./Redux/AuthReducer";



function App(){
  const [user,setUser]=useState<User|null>();
  // const dispatch = useDispatch();
  // const user = useSelector((state: AuthState ) => state.user);
  // console.log(user,"user");
  const handleSignIn = async () => {
 
     await supabase.auth.signInWithOAuth({
      provider: 'google', 
    })
    
  }

  useEffect(() => {
    const getuser=async () => {
      const session=await supabase.auth.getUser();
      setUser(session.data.user)
    }
    getuser()
    
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
