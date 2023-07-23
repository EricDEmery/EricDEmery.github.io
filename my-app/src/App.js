import './App.css';
import { useState } from "react"
import Navbar from './Navbar';


export default function App() {
  const [page, setPage] = useState([]);

  if (page === "Home") {
    return (
      <>
        <Navbar setPage={setPage}/>
      </>
    );
  }
}