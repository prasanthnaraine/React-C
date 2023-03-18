import React from 'react'

const About = () => {
    return (
        <div className='pt-20 md:pt-32  text-center max-w-[90%] mx-[5%]'>
            <div className=''>
                <h2 className='text-3xl md:text-4xl m-2 font-bold'>
                    Trusted by Millions
                </h2>
                <p className='text-md md:text-xl m-1 '>Example text to fill the description of the headings Example text to fill the description of the heading Example text to fill the description of the headings
                </p>
            </div>

            <div className='grid md:grid-cols-3 gap-1 text-center py-5'>
                <div className='shadow-xl rounded-xl border border-gray-200 p-10 my-2 md:my-0 md:mx-5 hover:bg-blue-300 hover:font-bold'>
                    <p className='text-5xl text-blue-700 mb-2'>
                        100%
                    </p>
                    <p>
                        Completion
                    </p>
                </div>
                <div className='shadow-xl rounded-xl border border-gray-200 p-10 my-2 md:my-0 md:mx-5 hover:bg-blue-300 hover:font-bold'>
                    <p className='text-5xl text-blue-700 mb-2'>
                        100%
                    </p>
                    <p>
                        Completion
                    </p>
                </div>
                <div className='shadow-xl rounded-xl border border-gray-200 p-10 my-2 md:my-0 md:mx-5 hover:bg-blue-300 hover:font-bold'>
                    <p className='text-5xl text-blue-700 mb-2'>
                        100%
                    </p>
                    <p>
                        Completion
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About