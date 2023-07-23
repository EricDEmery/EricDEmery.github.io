import './App.css';
import { useState } from "react"
import Navbar from './Navbar';
import About from './About';


export default function App() {
  const [page, setPage] = useState("Home");

  if (page === "Home") {
    return (
      <>
        <Navbar setPage={setPage}/>
        <About />
      </>
    );
  }
}