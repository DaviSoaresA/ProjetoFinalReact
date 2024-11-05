import React, { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordC, setPasswordC] = useState("");
  const [error, setError] = useState("");
  const [cadastro, setCadastro] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:8080/login`, { email: email, password: password })
      .then((response) => {
        const token = response.headers["authorization"];
        // if (response.data.length > 0) {
        alert("Login realizado com sucesso!");
        console.log(token);

        setError("");
        // }
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          setError("Usuário ou senha inválidos");
        } else {
          console.log({ email, password });
          setError("Ocorreu um erro ao conectar-se ao servidor");
        }
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/user", {
        email,
        senha: password,
        confirmaSenha: passwordC,
      })
      .then(() => {
        setEmail("");
        setPassword("");
        setPasswordC("");
        setError("Usuário cadastrado com sucesso!");
        setCadastro(false);
      })
      .catch((err) => {
        if (err.response.status === 422) {
          setError(err.response.data);
          console.log(err.response.data);
        } else {
          setError("Ocorreu um erro ao conectar-se ao servidor");
        }
      });
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form
        onSubmit={!cadastro ? handleLogin : handleRegister}
        className={styles.form}
      >
        <div className={styles.inputGroup}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        {!cadastro ? (
          ""
        ) : (
          <div className={styles.inputGroup}>
            <label className={styles.label}>Confirmar senha:</label>
            <input
              type="password"
              value={passwordC}
              onChange={(e) => setPasswordC(e.target.value)}
              required
              className={styles.input}
            />
          </div>
        )}
        <button type="submit" className={styles.submitButton}>
          {cadastro ? "Cadastrar" : "Entrar"}
        </button>
      </form>
      {error && <p className={styles.message}>{error}</p>}
      <button
        onClick={() => {
          setCadastro(!cadastro);
          setError("");
        }}
        className={styles.toggleButton}
      >
        {cadastro ? "Fazer login" : "Não tem uma conta? Cadastre-se"}
      </button>
    </div>
  );
};

export default Login;
