import { Link, useNavigate } from "react-router-dom";

const Toolbar = () => {
  const nav = useNavigate();

  function logout() {
    nav("/");
  }

  return (
    <div className="toolbar d-flex g20 space-btw">
      <div className="d-flex g20">
        <Link to="/allPosts">All Posts</Link>
      </div>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Toolbar;
