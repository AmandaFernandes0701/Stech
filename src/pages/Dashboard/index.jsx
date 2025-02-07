import {
  AccessTime,
  SwapVert,
  FilterList,
  ViewModule,
  Menu,
  ChevronLeft,
  ChevronRight,
  GetApp,
  Search,
} from "@mui/icons-material";
import { IconButton, Button } from "@mui/material";
import PropTypes from "prop-types";
import { useState, useMemo, useEffect } from "react";

import person1 from "../../assets/person1.jpg";
import theme from "../../styles/theme";

import {
  Container,
  Header,
  Sidebar,
  MainContent,
  AttendanceGrid,
  AttendanceRow,
  AttendanceCard,
  AttendanceHeader,
  Controls,
  PaginationControls,
  SearchContainer,
  EmployeeCardContainer,
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
  <EmployeeCardContainer>
    <img src={person1} alt="Profile" className="employee-photo" />
    <div className="employee-details">
      <div className="employee-name">{employee.name}</div>
      <div className="employee-info">
        <div className="info-column">
          <div className="info-label">Role:</div>
          <div className="info-item">{employee.position}</div>
        </div>
        <div className="info-column">
          <div className="info-label">Phone:</div>
          <div className="info-item">{employee.phone}</div>
        </div>
        <div className="info-column">
          <div className="info-label">Email Address:</div>
          <div className="info-item">{employee.email}</div>
        </div>
      </div>
    </div>
  </EmployeeCardContainer>
);

EmployeeCard.propTypes = {
  employee: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);
  const [activeButtons, setActiveButtons] = useState([]);
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
      setFadeOut(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setFadeOut(false);
        setFadeIn(true);
        setTimeout(() => setFadeIn(false), 500);
      }, 500);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setFadeOut(false);
        setFadeIn(true);
        setTimeout(() => setFadeIn(false), 500);
      }, 500);
    }
  };

  const handlePageClick = (pageNumber) => {
    if (currentPage !== pageNumber) {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentPage(pageNumber);
        setFadeOut(false);
        setFadeIn(true);
        setTimeout(() => setFadeIn(false), 500);
      }, 500);
    }
  };

  const handleFilterButtonClick = (buttonName) => {
    setActiveButtons((prev) =>
      prev.includes(buttonName)
        ? prev.filter((name) => name !== buttonName)
        : [...prev, buttonName]
    );
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
        <SearchContainer>
          <Search className="search-icon" />
          <input type="text" placeholder="Search here..." />
        </SearchContainer>
        <AttendanceGrid>
          <Header>
            <p>Employee Details</p>
            <div className="header-right">
              <select defaultValue="2025">
                <option value="2025">This Year</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
              </select>
              <Button className="download-button" startIcon={<GetApp />}>
                Download Info
              </Button>
            </div>
          </Header>
          <EmployeeCard
            employee={{
              name: "Amanda Fernandes Alves",
              position: "Staff Software Engineer",
              phone: "(123) 456-7890",
              email: "amanda.fernandes@example.com",
            }}
          />
        </AttendanceGrid>

        <AttendanceGrid>
          <AttendanceHeader>
            <p>Attendance History</p>
            <Controls>
              <IconButton
                className={`icon-button ${
                  activeButtons.includes("viewModule") ? "active" : ""
                }`}
                onClick={() => handleFilterButtonClick("viewModule")}
              >
                <ViewModule />
              </IconButton>
              <IconButton
                className={`icon-button ${
                  activeButtons.includes("menu") ? "active" : ""
                }`}
                onClick={() => handleFilterButtonClick("menu")}
              >
                <Menu />
              </IconButton>
              <Button
                className={`icon-button ${
                  activeButtons.includes("sort") ? "active" : ""
                }`}
                startIcon={<SwapVert />}
                onClick={() => handleFilterButtonClick("sort")}
              >
                {!isSmallScreen && "Sort"}
              </Button>
              <Button
                className={`icon-button ${
                  activeButtons.includes("filter") ? "active" : ""
                }`}
                startIcon={<FilterList />}
                onClick={() => handleFilterButtonClick("filter")}
              >
                {!isSmallScreen && "Filter"}
              </Button>
            </Controls>
          </AttendanceHeader>
          <AttendanceRow>
            {currentCards.map((card, index) => (
              <AttendanceCard
                key={index}
                className={`${fadeOut ? "fade-out" : ""} ${
                  fadeIn ? "fade-in" : ""
                }`}
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
                  onClick={() => handlePageClick(number)}
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
