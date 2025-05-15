import { Routes, Route, useLocation } from 'react-router-dom'
import CV from './pages/cv/Index.tsx'
import Experience from './pages/cv/Experience.tsx'

import Education from './pages/cv/Education.tsx'
import Course from './pages/cv/Course.tsx'
import Skill from './pages/cv/Skill.tsx'
import Contact from './pages/cv/Contact.tsx'
import { AnimatePresence } from 'framer-motion'
export default function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<CV />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/education" element={<Education />} />
                <Route path="/course" element={<Course />} />
                <Route path="/skill" element={<Skill />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    );
}