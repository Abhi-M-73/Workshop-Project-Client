import React from 'react'

const CreateProjects = () => {
    return (
        <main className="flexY h-screen bg-gray-100">
            <section className="bg-white p-6 shadow-md rounded-lg">
                <h1 className="text-2xl font-bold text-center mb-8">Create Projects</h1>
                <form>
                    <div className="space-y-3">
                        <input type="text" id="project-name" className="input" placeholder='Enter Project Name' />
                        <button type="submit" className="button">Create Project</button>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default CreateProjects
