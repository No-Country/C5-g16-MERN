import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  
  display: flex;
  align-items: center;
  

`;

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const [errors, setErrors] = useState({});

  const [errorsLogin, setErrorsLogin] = useState("");

  const history = useHistory();

  const registro = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:8000/api/register",
        {
          name,
          email,
          password,
          confirmPassword,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((err) => setErrors(err.response.data.errors));
  };

  const login = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:8000/api/login",
        {
          email: emailLogin,
          password: passwordLogin,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);

        if (res.data.error) {
          //Si existe error
          setErrorsLogin(res.data.message);
        } else {
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2>Registro</h2>
            <form onSubmit={registro}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name ? (
                  <span className="text-danger">{errors.name.message}</span>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email ? (
                  <span className="text-danger">{errors.email.message}</span>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password ? (
                  <span className="text-danger">{errors.password.message}</span>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirmaci??n</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword ? (
                  <span className="text-danger">
                    {errors.confirmPassword.message}
                  </span>
                ) : null}
              </div>
              <input
                type="submit"
                value="Registrarme"
                className="btn btn-primary"
              />
            </form>
          </div>
          <div className="col-6">
            <h2>Iniciar Sesi??n</h2>
            <form onSubmit={login}>
              <div className="form-group">
                <label htmlFor="emailLogin">E-mail</label>
                <input
                  type="email"
                  name="emailLogin"
                  id="emailLogin"
                  className="form-control"
                  value={emailLogin}
                  onChange={(e) => setEmailLogin(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="passwordLogin">Password</label>
                <input
                  type="password"
                  name="passwordLogin"
                  id="passwordLogin"
                  className="form-control"
                  value={passwordLogin}
                  onChange={(e) => setPasswordLogin(e.target.value)}
                />
              </div>
              <div>
                {errorsLogin !== "" ? (
                  <span className="text-danger">{errorsLogin}</span>
                ) : null}
              </div>
              <input
                type="submit"
                value="Iniciar Sesi??n"
                className="btn btn-primary"
              />
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
