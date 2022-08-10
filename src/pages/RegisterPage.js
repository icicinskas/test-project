import { useRef } from "react";

const RegisterPage = () => {
  const emailRef = useRef();
  const passOneRef = useRef();
  const passTwoRef = useRef();

  function register() {
    const user = {
      email: emailRef.current.value,
      passOne: passOneRef.current.value,
      passTwo: passTwoRef.current.value,
    };

    const option = {
      method: "POST",
      haeders: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    };

    fetch("http://loalhost:4000/register", option)
      .then((res) => res.json())
      .then((data) => {
        console.log("data");
      });
  }

  // function passValidation(password) {
  //   return String(password).match(
  //     /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/
  //   );
  // }

  // function registerUser() {
  //   const user = {
  //     email: emailRef.current.value,
  //     passOne: passOneRef.current.value,
  //     passTwo: passTwoRef.current.value,
  //   };

  //   let formValid = true;

  //   for (let i = 0; i < users.length; i++) {
  //     if (users[i].username === user.username) {
  //       setError("The name already exist");
  //       formValid = false;
  //     }
  //   }

  //   if (user.username.length < 4 || user.username > 20) {
  //     setError("Username should be min 4 char and max 20 char");
  //     formValid = false;
  //   }

  //   if (!passValidation(user.passOne)) {
  //     setError(
  //       "Password should contain at least one cap letter, number and special symbol"
  //     );
  //     formValid = false;
  //   }

  //   if (user.passOne.length < 4 || user.passOne.length > 20) {
  //     setError("Password should be min 4 char and max 20 char");
  //     formValid = false;
  //   }
  //   if (user.passOne !== user.passTwo) {
  //     setError("Password and confirm password should be same");
  //     formValid = false;
  //   }

  //   if (!formValid) return error;

  //   addNewUser(user);
  //   nav("/");
  // }

  return (
    <div className="register-box">
      <div className="d-flex fl-col g20">
        <input ref={emailRef} type="text" placeholder="Enter email" />
        <input ref={passOneRef} type="text" placeholder="Enter password" />
        <input ref={passTwoRef} type="text" placeholder="Confirm password" />
      </div>

      <button onClick={register}>Register</button>
    </div>
  );
};

export default RegisterPage;
