import { BrowserRouter } from "react-router-dom";
import RouterPage from "./Pages/RouterPage";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import LoginPage from "./Pages/LoginPage";
import { getUser } from "./Auth/loginApi";
import { useQuery } from "react-query";




function App() {
  const [user, setUser] = useState<User | null>();
  const { data } = useQuery('user', getUser);

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
