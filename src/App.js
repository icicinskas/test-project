import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPost from "./components/AddPost";
import AllPosts from "./components/AllPosts";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Toolbar />
        <Routes>
          <Route path="/" element={<AddPost />} />
          <Route path="/allPosts" element={<AllPosts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
