import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link, Outlet, Route, Routes} from "react-router-dom";
import Home from "./Home.tsx";
import About from "./About.tsx";

function Layout() {
    return (<>
        <h1>This is the app</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
        <Outlet/>
        <footer>(c) AK</footer>
    </>)
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default App
