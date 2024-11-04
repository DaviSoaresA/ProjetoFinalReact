import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cadastro, setCadastro] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .get(`https://6722c0412108960b9cc5775c.mockapi.io/login`, {
        params: { email, password },
      })
      .then((response) => {
        if (response.data.length > 0) {
          alert("Login realizado com sucesso!");
          setError("");
        } else {
          setError("Usuário ou senha inválidos");
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          setError("Usuário ou senha inválidos");
        } else if (err.response && err.response.status === 401) {
          setError("Acesso não autorizado. Verifique suas credenciais.");
        } else {
          setError("Ocorreu um erro ao conectar-se ao servidor");
        }
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={() => setCadastro(!cadastro)}>
        {cadastro ? "trocar para login" : "trocar para cadastro"}
      </button>
      <button
        onClick={() => {
          axios
            .post("https://6722c0412108960b9cc5775c.mockapi.io/login", {
              email,
              password,
            })
            .then(() => {
              setEmail("");
              setPassword("");
            });
        }}
      >
        teste cadastro
      </button>
    </div>
  );
};

export default Login;
