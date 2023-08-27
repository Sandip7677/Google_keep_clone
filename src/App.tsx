import { BrowserRouter } from "react-router-dom";
import RouterPage from "./Pages/RouterPage";
import { useEffect, useState } from "react";
import { User, UserResponse } from "@supabase/supabase-js";
import LoginPage from "./Pages/LoginPage";
import { getUser } from "./Auth/loginApi";
import { useQuery } from "react-query";




function App() {
  const [user, setUser] = useState<User | null>();
  const { data } = useQuery('user', getUser);
  // useEffect(() => {
  //   const getuser = async () => {
  //     const userData = await getUser();
  //     setUser(userData);
  //   }
  //   getuser();
  //   // if (user != null && user != undefined) {
  //   //   console.log(user.user_metadata.avatar_url, "user");
  //   // }
  // }, [])
  useEffect(() => {
    setUser(data);
  }, [data])




  return (user != null) ? (
    <BrowserRouter >
      <RouterPage />
    </BrowserRouter>
  ) : (
    <>
      <LoginPage />
    </>
  );

}

export default App
