import { AccessTime, Search, GetApp } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState, useMemo, useEffect } from "react";
import Draggable from "react-draggable";

import ControlButtons from "../../components/control-buttons/ControlButtons";
import EmployeeCard from "../../components/employee-card/EmployeeCard";
import Loading from "../../components/loading/Loading";
import Pagination from "../../components/pagination/Pagination";
import SelectDate from "../../components/select-date/SelectDate";
import Sidebar from "../../components/sidebar/Sidebar";
import { generateAttendanceData } from "../../utils/attendanceData";
import { fetchEmployeeData } from "../../utils/fetchEmployeeData";

import {
  Container,
  Header,
  MainContent,
  AttendanceGrid,
  AttendanceRow,
  AttendanceCard,
  AttendanceHeader,
  SearchContainer,
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

  const attendanceData = useMemo(() => generateAttendanceData(), []);

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
        <></>
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
              <SelectDate
                defaultValue="2025"
                options={[
                  { value: "2025", label: "This Year" },
                  { value: "2024", label: "2024" },
                  { value: "2023", label: "2023" },
                  { value: "2022", label: "2022" },
                  { value: "2021", label: "2021" },
                  { value: "2020", label: "2020" },
                  { value: "2019", label: "2019" },
                  { value: "2018", label: "2018" },
                ]}
              />
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
            <ControlButtons
              activeButtons={activeButtons}
              handleFilterButtonClick={handleFilterButtonClick}
              isSmallScreen={isSmallScreen}
            />
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
