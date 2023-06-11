import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import AllPlayers from "./components/AllPlayers/AllPlayers";
import SinglePlayer from "./components/SinglePlayer/SinglePlayer";
import SearchBar from "./components/SearchBar";
// import NewPlayerForm from "./components/NewPlayerForm"

function App() {


  return (

    <div id="container">

      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/AllPlayers">All Players</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AllPlayers" element={<AllPlayers/>} />
          <Route path="/SinglePlayer/:id" element={<SinglePlayer/>} />
          <Route path="/SearchBar" element={<SearchBar/>} />
        </Routes>
      </div>
    </div>

  )
}

export default App
