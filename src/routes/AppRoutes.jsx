import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import CreateProjects from '../pages/CreateProjects'
import Project from '../pages/Project'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-projects" element={<CreateProjects />} />
                <Route path="/project/:id" element={<Project />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
