import { createClient } from '@supabase/supabase-js';
import { useDispatch } from 'react-redux';
import { login,logout } from '../Redux/AuthReducer';


const supabaseUrl = "https://yrngafkieectwejdfjoa.supabase.co";
const supabaseKey= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlybmdhZmtpZWVjdHdlamRmam9hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI0MTU5NjQsImV4cCI6MjAwNzk5MTk2NH0.y20Aw_1uWfHQiXS0eA4Q61wuE0oJrQl2h2VsdwRjH_I";

export const supabase = createClient(supabaseUrl, supabaseKey);
// const dispatch = useDispatch();
// export const handleSignIn = async () => {
 
//      await supabase.auth.signInWithOAuth({
//       provider: 'google', 
//     })
//     const session= await supabase.auth.getSession();
//     const sessionData=session?.data?.session;
//     dispatch(login(sessionData!));
//     // console.log(sessionData,"sessiondata")
// }

// export const handleSignOut = async () => {
//     await supabase.auth.signOut();
//   };