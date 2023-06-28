import { useState } from 'react'
import './App.scss'
import Header from "./components/Header.jsx";
import Categories from "./components/Categories.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Categories />
    </>
  )
}

export default App
