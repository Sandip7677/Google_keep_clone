import { createClient } from '@supabase/supabase-js';


const supabaseUrl = "https://yrngafkieectwejdfjoa.supabase.co";
const supabaseKey= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlybmdhZmtpZWVjdHdlamRmam9hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI0MTU5NjQsImV4cCI6MjAwNzk5MTk2NH0.y20Aw_1uWfHQiXS0eA4Q61wuE0oJrQl2h2VsdwRjH_I";


export const supabase = createClient(supabaseUrl, supabaseKey);

export const getUser=async ()=>{
    const user =await supabase.auth.getUser();
    const userData=user.data.user;
    return userData
}
