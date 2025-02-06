import { useNavigate } from "react-router-dom";

import { DashboardContainer, DashboardTitle, LogoutButton } from "./styles";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <DashboardContainer>
      <DashboardTitle>Welcome to the Dashboard!</DashboardTitle>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </DashboardContainer>
  );
};

export default Dashboard;
