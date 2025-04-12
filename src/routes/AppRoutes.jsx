import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import CreateProjects from '../pages/CreateProjects'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-projects" element={<CreateProjects />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
