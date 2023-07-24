import './App.css';
import { useState } from "react"
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import 'animate.css/animate.min.css';




export default function App() {
  const [page, setPage] = useState("Home");

  if (page === "Home") {
    return (
      <>
        <Navbar setPage={setPage} />
        <Home />
      </>
    );
  } else if (page === "About") {
    return (
      <>
        <Navbar setPage={setPage} />
        <About />
      </>
    );
  } else {
    return (
      <>
        <Navbar setPage={setPage} />

      </>
    );
  }
}