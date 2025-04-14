import React, { useState } from 'react'
import { createProject } from '../api/projectApi';
import { useNavigate } from 'react-router-dom';

const CreateProjects = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const handleCreateProject = async (e) => {
        e.preventDefault();
        const data = await createProject(input);
        navigate('/');
        setInput("");
    }

    return (
        <main className="flexY h-screen bg-gray-100 p-2">
            <section className="bg-white p-6 shadow-md rounded-lg">
                <h1 className="text-2xl font-bold text-center mb-8">Create Projects</h1>
                <form onSubmit={handleCreateProject}>
                    <div className="space-y-3">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" id="project-name" className="input" placeholder='Enter Project Name' />
                        <button type="submit" className="button">Create Project</button>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default CreateProjects
