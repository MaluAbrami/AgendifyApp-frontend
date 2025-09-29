import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./LoginPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService/AuthService";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = await AuthService.login(email, password);
      // Salva o token JWT e refreshToken no localStorage
      localStorage.setItem("tokenJwt", data.tokenJwt);
      localStorage.setItem("refreshToken", data.refreshToken);
      // Redireciona para a página de serviços
      navigate("/services");
    } catch (err) {
      setError(err.message || "Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h1 className="login-title">Bem vindo de volta!</h1>
        <Form onSubmit={handleSubmit}>
          <div className="form-container">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <FloatingLabel controlId="floatingPassword" label="Senha">
                <Form.Control
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Lembre-se de mim" />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </Button>
            {error && <div className="text-danger mt-2">{error}</div>}
            <div className="login-links">
              <a href="#">Esqueceu a senha?</a>
              <a href="#">É novo? Criar conta</a>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
