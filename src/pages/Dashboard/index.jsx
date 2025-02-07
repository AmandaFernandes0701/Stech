import {
  AccessTime,
  SwapVert,
  FilterList,
  ViewModule,
  Menu,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import { IconButton, Button } from "@mui/material";
import PropTypes from "prop-types";
import { useState, useMemo, useEffect } from "react";

import theme from "../../styles/theme";

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
  PaginationControls,
} from "./styles";

const generatePaginationNumbers = (currentPage, totalPages) => {
  const paginationNumbers = [1];

  if (currentPage > 3) {
    paginationNumbers.push("...");
  }

  for (
    let i = Math.max(2, currentPage - 1);
    i <= Math.min(currentPage + 1, totalPages - 1);
    i++
  ) {
    paginationNumbers.push(i);
  }

  if (currentPage < totalPages - 2) {
    paginationNumbers.push("...");
  }

  if (totalPages > 1) {
    paginationNumbers.push(totalPages);
  }

  return paginationNumbers;
};

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "2-digit" };
  return date.toLocaleDateString("en-US", options).replace(",", ",");
};

const EmployeeCard = ({ employee }) => (
  <Card>
    <div className="employee-info">
      <img src="profile.png" alt="Profile" />
      <h3>{employee.name}</h3>
      <p>{employee.position}</p>
    </div>
    <div className="employee-stats">
      <p>Total Attendance: {employee.totalAttendance}</p>
      <p>Avg Check-In Time: {employee.avgCheckIn}</p>
      <p>Avg Check-Out Time: {employee.avgCheckOut}</p>
    </div>
  </Card>
);

EmployeeCard.propTypes = {
  employee: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    totalAttendance: PropTypes.number.isRequired,
    avgCheckIn: PropTypes.string.isRequired,
    avgCheckOut: PropTypes.string.isRequired,
  }).isRequired,
};

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const cardsPerPage = 6;

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 681);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const attendanceData = useMemo(
    () =>
      Array(50)
        .fill({ date: "March 8, 2023", checkIn: "08:53", checkOut: "17:15" })
        .map((item, index) => ({
          ...item,
          date: new Date(2023, 2, 8 + index),
          status: [
            {
              text: "On Time",
              color: theme.colors.primary,
              backgroundColor: "rgba(67, 177, 126, 0.15)",
            },
            {
              text: "Late",
              color: theme.colors.warning,
              backgroundColor: "rgba(243, 156, 18, 0.15)",
            },
            {
              text: "Absent",
              color: theme.colors.error,
              backgroundColor: "rgba(255, 77, 77, 0.15)",
            },
            {
              text: "Early",
              color: theme.colors.info,
              backgroundColor: "rgba(74, 144, 226, 0.15)",
            },
            {
              text: "Overtime",
              color: "#b015ed",
              backgroundColor: "rgba(176, 21, 237, 0.15)",
            },
          ][index % 5],
        })),
    []
  );

  const sortedAttendanceData = useMemo(
    () => attendanceData.sort((a, b) => a.date - b.date),
    [attendanceData]
  );
  const totalPages = useMemo(
    () => Math.ceil(sortedAttendanceData.length / cardsPerPage),
    [sortedAttendanceData.length, cardsPerPage]
  );
  const paginationNumbers = useMemo(
    () => generatePaginationNumbers(currentPage, totalPages),
    [currentPage, totalPages]
  );

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

        <EmployeeCard
          employee={{
            name: "Natashia Khaleira",
            position: "Head of UX Design",
            totalAttendance: 309,
            avgCheckIn: "08:46",
            avgCheckOut: "17:04",
          }}
        />

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
                {!isSmallScreen && "Sort"}
              </Button>
              <Button className="icon-button" startIcon={<FilterList />}>
                {!isSmallScreen && "Filter"}
              </Button>
            </Controls>
          </AttendanceHeader>
          <AttendanceRow>
            {currentCards.map((card, index) => (
              <AttendanceCard
                key={index}
                color={card.status.color}
                backgroundColor={card.status.backgroundColor}
              >
                <div className="attendance-header">
                  <div className="header-left">
                    <AccessTime />
                    <p>{formatDate(card.date)}</p>
                  </div>
                  <span className="status-flag">{card.status.text}</span>
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
          <PaginationControls>
            <Button
              className="pagination-button"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              <ChevronLeft fontSize="small" />
            </Button>
            {paginationNumbers.map((number, index) =>
              number === "..." ? (
                <span key={index} className="pagination-ellipsis">
                  {number}
                </span>
              ) : (
                <Button
                  key={index}
                  className={`pagination-button ${
                    currentPage === number ? "active" : ""
                  }`}
                  onClick={() => setCurrentPage(number)}
                  disabled={currentPage === number}
                >
                  {number}
                </Button>
              )
            )}
            <Button
              className="pagination-button"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <ChevronRight fontSize="small" />
            </Button>
          </PaginationControls>
        </AttendanceGrid>
      </MainContent>
    </Container>
  );
};

export default Dashboard;
