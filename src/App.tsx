import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './pages/cv/Footer.tsx'
import AnimatedRoutes from './AnimatedRoutes.tsx'


function App() {

  return <>
    <Router>
       <AnimatedRoutes />
      <Footer />
    </Router>
  </>
}

export default App
