
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Sidebar = styled.aside`
  background: #1a1c23;
  color: #fff;
  width: 20%;
  padding: 20px;

  h1 {
    font-size: 1.5rem;
  }

  nav ul, footer ul {
    list-style: none;
    padding: 0;
  }

  nav ul li, footer ul li {
    margin: 15px 0;
  }
`;

export const MainContent = styled.div`
  background: #f8f9fa;
  flex: 1;
  padding: 20px;
`;

export const Header = styled.header`
  background: #333;
  color: #fff;
  padding: 10px;
  border-radius: 8px;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 20px;

  .employee-info {
    display: flex;
    align-items: center;
  }

  .employee-stats span {
    display: block;
    margin: 10px 0;
  }
`;

export const AttendanceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

export const AttendanceCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;

  span {
    display: block;
    margin: 5px 0;
  }
`;
