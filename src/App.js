import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPost from "./components/AddPost";
import AllPosts from "./components/AllPosts";
import Toolbar from "./components/Toolbar";

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="app">
      <BrowserRouter>
        <Toolbar />
        <Routes>
          <Route
            path="/"
            element={<AddPost posts={posts} setPosts={setPosts} />}
          />
          <Route
            path="/allPosts"
            element={<AllPosts posts={posts} setPosts={setPosts} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
