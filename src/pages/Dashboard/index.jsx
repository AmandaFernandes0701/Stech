import { AccessTime } from "@mui/icons-material";
import { SwapVert, FilterList, ViewModule, Menu } from "@mui/icons-material";
import { IconButton, Button } from "@mui/material";
import { useState } from "react";

import {
  Container,
  Header,
  Sidebar,
  MainContent,
  Card,
  AttendanceGrid,
  AttendanceRow,
  AttendanceCard,
  AttendanceHeader,
  Controls,
} from "./styles";

const Dashboard = () => {
  const attendanceData = Array(24)
    .fill({
      date: "March 8, 2023",
      checkIn: "08:53",
      checkOut: "17:15",
    })
    .map((item, index) => ({
      ...item,
      date: new Date(2023, 2, 8 + index),
    }));

  const sortedAttendanceData = attendanceData.sort((a, b) => a.date - b.date);

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = sortedAttendanceData.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  const handleNextPage = () => {
    if (currentPage * cardsPerPage < sortedAttendanceData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Container>
      <Sidebar>
        <h1>Findez</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Analytics</li>
            <li>Schedule</li>
            <li>Members</li>
          </ul>
        </nav>
        <footer>
          <ul>
            <li>Settings</li>
            <li>Help Center</li>
          </ul>
        </footer>
      </Sidebar>
      <MainContent>
        <Header>
          <h2>Employee Details</h2>
        </Header>
        <Card>
          <div className="employee-info">
            <img src="profile.png" alt="Profile" />
            <h3>Natashia Khaleira</h3>
            <p>Head of UX Design</p>
          </div>
          <div className="employee-stats">
            <p>Total Attendance: 309</p>
            <p>Avg Check-In Time: 08:46</p>
            <p>Avg Check-Out Time: 17:04</p>
          </div>
        </Card>

        <AttendanceGrid>
          <AttendanceHeader>
            <p>Attendance History</p>
            <Controls>
              <IconButton className="icon-button">
                <ViewModule />
              </IconButton>
              <IconButton className="icon-button">
                <Menu />
              </IconButton>
              <Button className="icon-button" startIcon={<SwapVert />}>
                Sort
              </Button>
              <Button className="icon-button" startIcon={<FilterList />}>
                Filter
              </Button>
            </Controls>
          </AttendanceHeader>

          <AttendanceRow>
            {currentCards.map((card, index) => (
              <AttendanceCard key={index}>
                <div className="attendance-header">
                  <AccessTime />
                  <p>{card.date.toLocaleDateString()}</p>
                </div>
                <div className="attendance-times">
                  <div>
                    <p>Check-In</p>
                    <p>{card.checkIn}</p>
                  </div>
                  <div>
                    <p>Check-Out</p>
                    <p>{card.checkOut}</p>
                  </div>
                </div>
              </AttendanceCard>
            ))}
          </AttendanceRow>

          <div className="pagination-controls">
            <Button onClick={handlePrevPage} disabled={currentPage === 1}>
              Prev
            </Button>
            <Button
              onClick={handleNextPage}
              disabled={
                currentPage * cardsPerPage >= sortedAttendanceData.length
              }
            >
              Next
            </Button>
          </div>
        </AttendanceGrid>
      </MainContent>
    </Container>
  );
};

export default Dashboard;
