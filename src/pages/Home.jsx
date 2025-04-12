import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    return (
        <main className="min-h-screen w-full bg-gray-100">
            <section className='w-60 h-screen bg-white p-5 shadow'>
                <button onClick={() => navigate("/create-projects")} className='button'>Create Project</button>
            </section>
            <section>

            </section>
        </main>
    )
}

export default Home
