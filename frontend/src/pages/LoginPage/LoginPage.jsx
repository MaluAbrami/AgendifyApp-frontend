import "./LoginPage.css";

function Login() {
    return (
        <div className="login-container">
            <div className="login-box">
                <h1 className="login-title">Login</h1>
                <form className="login-form">
                    <input type="email" placeholder="Email" className="login-input" />
                    <input type="password" placeholder="Senha" className="login-input" />
                    <button className="login-button">Entrar</button>
                </form>
                <a href="/register" className="register-link">Não tem uma conta? Cadastre-se</a>
            </div>
        </div>
    );
}

export default Login;