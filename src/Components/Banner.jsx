import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'

import Q1 from '../assets/Q1.png'

const Banner = () => {
    return (
        <div className='max-w-[100%] h-screen bg-zinc-300 md:h-[60vh] lg:h-[70vh] flex flex-col justify-between '>
            <div className='grid md:grid-cols-2 max-w-[100%] m-0'>
                <div className='text-center md:text-left flex flex-col sm:justify-start sm:items-start xl:justify-center w-full px-5 py-8 lg:pl-40'>
                    <p className='text-2xl'>React Project Development</p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold'>Website Application Project</h1>
                    <p className='text-xl'>Project By Lakshmi Narayanan</p>
                    <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
                </div>
                <div className=' text-center pl-5 max-w-[70%]'>
                    <img className='h-72 lg:min-h-[500px]' src={Q1} alt="q1" title='Naraine' />
                </div>

                <div className='lg:absolute inset-x-0 md:bottom-90 lg:bottom-36 block lg:flex flex-col mx-10 mt-5 lg:ml-[50%] transform lg:-translate-x-1/2 bg-zinc-200 rounded-xl text-center shadow-xl lg:h-32 p-5'>
                    <p className='text-2xl'>Languages Known</p>
                    <div className='block md:flex flex-row justify-around items-center  my-3' >
                        <p className='flex justify-center py-2 text-slate-600 items-center'><CloudUploadIcon className='h-6 text-indigo-500 mr-2' /> Html5</p>
                        <p className='flex py-2 justify-center items-center text-slate-600'><DatabaseIcon className='h-6 text-indigo-500 mr-2' /> Tailwind Css</p>
                        <p className='flex py-2 justify-center items-center text-slate-600'><ServerIcon className='h-6 text-indigo-500 mr-2' /> Javascript</p>
                        <p className='flex py-2 justify-center text-slate-600 items-center'><PaperAirplaneIcon className='h-6 text-indigo-500 mr-2' /> Reactjs</p>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default Banner
