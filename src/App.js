import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MainContext from "./context/MainContext";
import LoginPage from "./pages/LoginPage";

import io from "socket.io-client";
import AppPage from "./pages/AppPage";
import Toolbar from "./components/Toolbar";
const socket = io.connect("http://localhost:4000");

function App() {
  const [user, setUser] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [movies, setMovies] = useState([]);
  const [oneMovie, setOneMovie] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [modal, setModal] = useState(false);
  const [showTickets, setShowTickets] = useState(false);

  const state = {
    socket,
    user,
    setUser,
    tickets,
    setTickets,
    movies,
    setMovies,
    oneMovie,
    setOneMovie,
    currentUser,
    setCurrentUser,
    modal,
    setModal,
    showTickets,
    setShowTickets,
  };

  useEffect(() => {
    socket.on("tickets", (data) => setTickets(data));
  }, []);

  useEffect(() => {
    socket.on("movies", (data) => setMovies(data));
  }, []);

  return (
    <div className="App nmnn">
      <MainContext.Provider value={state}>
        <BrowserRouter>
          <Toolbar />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/app" element={<AppPage />} />
          </Routes>
        </BrowserRouter>
      </MainContext.Provider>
    </div>
  );
}

export default App;
