import "./RegisterPage.css";

function Register() {
    return (
        <div className="register-container">
            <div className="register-box">
                <h1 className="register-title">Cadastrar</h1>
                <form className="register-form">
                    <div className="input-row">
                        <input type="username" placeholder="Nome de usuário" className="register-input"/>
                        <input type="name" placeholder="Nome completo" className="register-input"/>
                    </div>
                    <div className="input-row">
                        <input type="phone" placeholder="Telefone" className="register-input"/>
                        <input type="email" placeholder="Email" className="register-input"/>
                    </div>
                    <div className="input-row">
                        <input type="password" placeholder="Senha" className="register-input"/>
                        <input type="password" placeholder="Confirmação de senha" className="register-input"/>
                    </div>
                    <button className="register-button">Cadastrar</button>
                </form>
                <a href="/login" className="login-link">Já tem uma conta? Faça login</a>
            </div>
        </div>
    );
}

export default Register;