import "./ProfilePage.css";

function ProfilePage() {
  // Exemplo de perfil moderno
  return (
    <div className="profile-page">
      <div className="profile-card">
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Avatar" className="profile-avatar" />
        <h2>Maria Luiza Abrami</h2>
        <p>@Malu_Abrami</p>
        <p>Email: marialuizaabrami@gmail.com</p>
        <p>Telefone: 15997431804</p>
        <button className="edit-btn">Editar Perfil</button>
      </div>
    </div>
  );
}

export default ProfilePage;
