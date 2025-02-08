import {
  AccessTime,
  SwapVert,
  FilterList,
  ViewModule,
  Menu,
  Search,
  Menu as MenuIcon,
  Close as CloseIcon,
  GetApp,
} from "@mui/icons-material";
import { IconButton, Button } from "@mui/material";
import { useState, useMemo, useEffect } from "react";
import Draggable from "react-draggable";

import EmployeeCard from "../../components/employee-card/EmployeeCard";
import Loading from "../../components/loading/Loading";
import Pagination from "../../components/pagination/Pagination";
import Sidebar from "../../components/sidebar/Sidebar";
import theme from "../../styles/theme";
import { fetchEmployeeData } from "../../utils/fetchEmployeeData";

import {
  Container,
  Header,
  MainContent,
  AttendanceGrid,
  AttendanceRow,
  AttendanceCard,
  AttendanceHeader,
  Controls,
  SearchContainer,
  HamburgerMenu,
  Overlay,
} from "./styles";

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "2-digit" };
  return date.toLocaleDateString("en-US", options).replace(",", ",");
};

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [activeButtons, setActiveButtons] = useState([]);
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [analyticsOpen, setAnalyticsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("");

  const cardsPerPage = 6;

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const getEmployeeData = async () => {
      try {
        const employeeData = await fetchEmployeeData();
        setEmployee(employeeData);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      } finally {
        setLoading(false);
      }
    };

    getEmployeeData();
  }, []);

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

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

  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = sortedAttendanceData.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterButtonClick = (buttonName) => {
    setActiveButtons((prev) =>
      prev.includes(buttonName)
        ? prev.filter((name) => name !== buttonName)
        : [...prev, buttonName]
    );
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      {isSmallScreen ? (
        <>
          <HamburgerMenu onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
          </HamburgerMenu>
          {sidebarOpen && (
            <>
              <Overlay onClick={() => setSidebarOpen(false)} />
              <Sidebar
                activeMenuItem={activeMenuItem}
                handleMenuItemClick={handleMenuItemClick}
                analyticsOpen={analyticsOpen}
                setAnalyticsOpen={setAnalyticsOpen}
                settingsOpen={settingsOpen}
                setSettingsOpen={setSettingsOpen}
              />
            </>
          )}
        </>
      ) : (
        <Sidebar
          activeMenuItem={activeMenuItem}
          handleMenuItemClick={handleMenuItemClick}
          analyticsOpen={analyticsOpen}
          setAnalyticsOpen={setAnalyticsOpen}
          settingsOpen={settingsOpen}
          setSettingsOpen={setSettingsOpen}
        />
      )}

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
                {isSmallScreen ? "Download" : "Download Info"}
              </Button>
            </div>
          </Header>
          {employee && <EmployeeCard employee={employee} />}
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
              <Draggable
                key={index}
                position={{ x: 0, y: 0 }}
                bounds={{ top: -60, left: -60, right: 60, bottom: 60 }}
                onStop={(e, data) => {
                  data.node.style.transition = "transform 0.5s ease";
                }}
              >
                <AttendanceCard
                  id={`attendance-card-${index}`}
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
              </Draggable>
            ))}
          </AttendanceRow>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </AttendanceGrid>
      </MainContent>
    </Container>
  );
};

export default Dashboard;
