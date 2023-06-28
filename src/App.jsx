import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Products from "./pages/Products.jsx";

function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={<Home />}  />
                <Route path='/products' element={<Products />}  />
                <Route path='/products' element={<Products />}  />
                <Route path='/contact' element={<Contact />}  />
            </Routes>
        </Router>
    </>
  )
}

export default App
