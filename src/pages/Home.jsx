import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAllProjects } from '../api/projectApi';

const Home = () => {
    const [projects, setProjects] = useState([]);
    console.log(projects)
    const navigate = useNavigate();

    useEffect(() => async () => {
        const data = await getAllProjects();
        setProjects(data.projects);
    }, []);

    return (
        <main className="min-h-screen w-full bg-[#f7f7f7]">
            <section className='bg-[#ffffff] p-5 shadow'>
                <button onClick={() => navigate("/create-projects")} className='button'>Create Project</button>
            </section>
            <section className='p-10'>
                <h1 className='text-2xl font-bold mb-5'>Our Projects</h1>
                <div className='flex flex-wrap gap-5'>
                    {
                        projects.length > 0 ? (
                            projects.map((project) => (
                                <Link to={`/project/${project?._id}`} key={project?._id} className='bg-[#ffffff] p-10 shadow rounded-2xl cursor-pointer hoverEffect'>
                                    <h1 className='capitalize font-medium'>{project?.name}</h1>
                                </Link>
                            ))
                        ) : <p>No project created yet</p>
                    }
                </div>
            </section>
        </main>
    )
}

export default Home
