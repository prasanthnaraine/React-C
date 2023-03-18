import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='max-w-[100%] h-[5rem] z-10 bg-zinc-200 drop-shadow-lg ' >
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl mr-20 px-1 sm:text-4xl' >Naraine</h1>
                    <ul className='hidden lg:flex'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Teams</li>
                        <li>Pricing</li>

                    </ul>

                </div>
                <div className='hidden lg:flex pr-4'>
                    <button className='bg-blue-300 border border-blue-300 mr-2 p-2'>Login</button>
                    <button className='p-2'>Sign Up</button>
                </div>

                <div className='lg:hidden' onClick={handleClick}>
                { 

                    !nav ?  <MenuIcon className='w-10' /> : <XIcon className='w-10' />
                }
                   
                </div>

                {/*This is a comment*/}

            </div>


            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-5'}>
                <li className='border-b-2 border-zinc-300 rounded-none w-300'>Home</li>
                <li className='border-b-2 border-zinc-300 rounded-none w-300'>About</li>
                <li className='border-b-2 border-zinc-300 rounded-none w-300'>Contact</li>
                <li className='border-b-2 border-zinc-300 rounded-none w-300'>Teams</li>
                <li className='border-b-2 border-zinc-300 rounded-none w-300'>Pricing</li>
                <div className='flex flex-col my-4 mx-2'>
                    <button className='bg-transparent text-blue-500 border border-blue-700 px-8 py-3 mb-3 mt-3 hover:bg-blue-500 hover:text-white'>Login</button>
                    <button className='px-8 py-3 '>Sign Up</button>
                </div>
            </ul>



        </div>
    )
}

export default Navbar
