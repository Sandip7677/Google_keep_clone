import React, { useState } from 'react'
import { Menu } from 'lucide-react'
import { Input } from './input'
import { Search } from 'lucide-react'
import { Settings } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'

const Header = () => {
    // const [show,setShow]=useState(true);
    return (
        <>
            <div className="flex flex-row py-2 items-center">
                <div className="px-4 mt-0.5 ml-1">
                    <Menu size={25} />
                </div>
                <div className='px-2 basis-2/12'>
                    <h2 className='text-2xl'>{window.location.pathname.substring(1)}</h2>
                </div>
                <div className='flex grow items-center '>
                    <Input className='shadow-lg shadow-gray-500' />
                    <Search size={20} className='relative right-8 ' />
                </div>
                <div className='mx-2'>
                    <Settings />
                </div>

                <div className='mx-2'>
                    <Avatar className='mx-2'>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>



            </div>
        </>
    )
}

export default Header