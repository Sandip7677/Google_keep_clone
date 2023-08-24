import React, { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { Input } from './input'
import { Search } from 'lucide-react'
import { Settings } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { getUser } from '../../Auth/loginApi'
import { User } from '@supabase/supabase-js'

const Header = () => {
    // const [show, setShow] = useState(true);
    const [user, setUser] = useState<User | null>();
    useEffect(() => {
        const getuser = async () => {
            const userData = await getUser();
            setUser(userData.data.user);
        }
        getuser();
        console.log(user);
    }, [])
    return (
        <>
            <div className="flex flex-row py-2 items-center">
                <div className="px-4 mt-0.5 ml-1">
                    <Menu size={25} />
                </div>
                <div className='px-2 basis-2/12'>
                    <h2 className='text-2xl'>{window.location.pathname.substring(1) ? window.location.pathname.substring(1) : "Notes"}</h2>
                </div>
                <div className='flex grow items-center '>
                    <Input className='shadow-md shadow-gray-500' />
                    <Search size={20} className='relative right-8 ' />
                </div>
                <div className='mx-2'>
                    <Settings />
                </div>

                <div className='mx-2'>
                    <Avatar className='mx-2'>
                        <AvatarImage src={user != null ? `${user.user_metadata.avatar_url}` : "https://github.com/shadcn.png"} alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>



            </div>
        </>
    )
}

export default Header