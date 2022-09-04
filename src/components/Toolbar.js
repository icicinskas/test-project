import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainContext from "../context/MainContext";

const Toolbar = () => {
  const { user, setUser } = useContext(MainContext);

  const nav = useNavigate();

  function logout() {
    setUser(null);
    nav("/");
  }

  return (
    <div>
      {user && (
        <div className="toolbar d-flex space-btw">
          <div className="d-flex toolbar-main">
            <Link to="/app">All Movies</Link>
          </div>

          <div className="d-flex g20">
            <div>
              <b>{user.username}</b>
            </div>
            <div>
              <b>Cash: {user.cash}€</b>
            </div>
          </div>

          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Toolbar;
