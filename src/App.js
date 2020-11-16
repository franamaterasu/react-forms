import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./app.scss";
import Image from "./components/image";
import Login from "./components/login";
import Register from "./components/register";

const App = () => {
  // Listado de usuarios registrados
  const [userList, setUserList] = useState([]);

  // Formulario de login
  const handleFormLoginClick = (loginData) => {
    const userLogin = loginData.user.user;
    const emailLogin = loginData.email.email;
    const pwdLogin = loginData.pwd.pwd;

    userLogin === null || userLogin === undefined
      ? console.log("Name is empty...")
      : console.log(`Name: ${userLogin}`);
    emailLogin === null || emailLogin === undefined
      ? console.log("Email is empty or wrong format...")
      : console.log(`Email: ${emailLogin}`);
    pwdLogin === null || pwdLogin === undefined
      ? console.log("Password is empty...")
      : console.log(`Password: ${pwdLogin}`);
  };

  // Formulario de registro
  const handleFormRegisterClick = (registerData) => {
    let userRegister = registerData.user;
    let emailRegister = registerData.email;
    let pwdRegister = registerData.pwd;

    if (
      userRegister === undefined ||
      userRegister === "" ||
      emailRegister === undefined ||
      emailRegister === "" ||
      pwdRegister === undefined ||
      pwdRegister === ""
    ) {
      alert("Name, email and password info are required");
    } else {
      setUserList([...userList, registerData]);
    }
  };

  console.log(userList);

  return (
    <div className="app">
      <Image />
      <section className="app__forms">
        <Switch>
          <Route exact path="/">
            <Login handleFormLoginClick={handleFormLoginClick} />
          </Route>
          <Route exact path="/register">
            <Register handleFormRegisterClick={handleFormRegisterClick} />
          </Route>
        </Switch>
      </section>
    </div>
  );
};

export default App;
