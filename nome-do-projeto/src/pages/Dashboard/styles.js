import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f8ff;
`;

export const DashboardTitle = styled.h2`
  font-size: 24px;
  color: #333;
`;

export const LogoutButton = styled.button`
  padding: 10px 20px;
  background-color: #dc3545;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 5px;
  &:hover {
    background-color: #c82333;
  }
`;
