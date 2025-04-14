import React from 'react'
import Chat from '../components/Chat'
import Code from '../components/Code'
import Review from '../components/Review'

const Project = () => {
    return (
        <main className='h-screen w-full flex gap-5 justify-between p-5 bg-[#f7f7f7]'>
            <Chat />
            <Code />
            <Review />
        </main>
    )
}

export default Project
