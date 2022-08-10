import { Link, useNavigate } from "react-router-dom";

const Toolbar = () => {
  const nav = useNavigate();

  function logout() {
    nav("/");
  }

  return (
    <div className="toolbar d-flex g20 space-btw">
      <div className="d-flex g20">
        <Link to="/">Login</Link>
        <Link to="/register">Register</Link>
      </div>

      <div className="d-flex toolbar-main">
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Toolbar;
