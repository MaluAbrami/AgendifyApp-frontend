import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./LoginPage.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-form">
        <h1 className="login-title">Bem vindo de volta!</h1>
        <Form>
          <div className="form-container">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
                <Form.Text className="text-muted">
                  Nós nunca compartilhamos seu email com ninguém.
                </Form.Text>
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <FloatingLabel controlId="floatingPassword" label="Senha">
                <Form.Control type="password" placeholder="Senha" />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Lembre-se de mim" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Entrar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
