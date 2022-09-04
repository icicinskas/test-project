import React, { useContext, useRef } from "react";
import MainContext from "../context/MainContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const refs = {
    regName: useRef(),
    regAge: useRef(),
    regPassOne: useRef(),
    regPassTwo: useRef(),
    loginName: useRef(),
    loginPass: useRef(),
  };
  const nav = useNavigate();

  const { setUser, socket } = useContext(MainContext);

  const http = async (url, data) => {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const res = await fetch("http://localhost:4000" + url, options);
    return res.json();
  };

  const register = async () => {
    const user = {
      username: refs.regName.current.value,
      age: refs.regAge.current.value,
      passOne: refs.regPassOne.current.value,
      passTwo: refs.regPassTwo.current.value,
    };

    const result = await http("/register", user);
    console.log(result);
  };

  const login = async () => {
    const user = {
      username: refs.loginName.current.value,
      password: refs.loginPass.current.value,
    };

    const result = await http("/login", user);
    console.log(result);
    if (!result.error) {
      setUser(result.data);
      socket.emit("login", result.data);
      nav("/app");
    }
  };

  return (
    <div className="p100">
      <div className="d-flex">
        <div className="reg grow1 d-flex j-center a-center flex-column g10">
          <input ref={refs.regName} type="text" placeholder="enter username" />
          <input ref={refs.regAge} type="text" placeholder="enter your age" />
          <input
            ref={refs.regPassOne}
            type="text"
            placeholder="enter password"
          />
          <input
            ref={refs.regPassTwo}
            type="text"
            placeholder="confirm password"
          />
          <button onClick={register}>Register</button>
        </div>

        <div className="log grow1 d-flex j-center a-center flex-column g10">
          <input ref={refs.loginName} type="text" placeholder="username" />
          <input ref={refs.loginPass} type="text" placeholder="password" />
          <button onClick={login}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
