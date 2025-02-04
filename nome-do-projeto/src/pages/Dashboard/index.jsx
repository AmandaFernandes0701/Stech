import { DashboardContainer, DashboardTitle, LogoutButton } from "./styles";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // Redireciona para a página de login
  };

  return (
    <DashboardContainer>
      <DashboardTitle>Welcome to the Dashboard!</DashboardTitle>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </DashboardContainer>
  );
};

export default Dashboard;
