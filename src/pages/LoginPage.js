import { useRef, useState } from "react";

const LoginPage = () => {
  const usernameRef = useRef();
  const passOneRef = useRef();

  const [error, setError] = useState(null);

  function loginUser() {
    setError(null);
    const user = {
      username: usernameRef.current.value,
      password: passOneRef.current.value,
    };

    const option = {
      method: "POST",
      haeders: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    };

    fetch("http://loalhost:4000/login", option)
      .then((res) => res.json())
      .then((data) => {
        console.log("data");
      });

    // const myUser = users.find(
    //   (x) => x.username === user.username && x.password === user.password
    // );

    // if (!myUser) return setError("bad user credentials");

    // setCurrentUser(myUser);
    // nav("/profile");
  }

  return (
    <div className="login-box">
      <div className="d-flex fl-col g20">
        <input ref={usernameRef} type="text" placeholder="email" />
        <input ref={passOneRef} type="text" placeholder="password" />
      </div>

      <div className="error">{error && <h3>{error}</h3>}</div>

      <button onClick={loginUser}>Login</button>
    </div>
  );
};

export default LoginPage;
