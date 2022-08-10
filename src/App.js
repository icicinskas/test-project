import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <div className="app">
      <div className="container">
        <BrowserRouter>
          <Toolbar />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
