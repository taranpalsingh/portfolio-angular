import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkList from './components/WorkList'
import About from './components/About'
import Footer from './components/Footer'
import ProjectDetail from './pages/ProjectDetail'

function Home() {
  return (
    <div className="relative min-h-screen font-sans bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <WorkList />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
    </Routes>
  )
}
