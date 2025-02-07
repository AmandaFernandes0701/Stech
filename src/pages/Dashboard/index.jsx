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
  ExpandLess,
  ExpandMore,
  HomeOutlined as HomeIcon,
  BarChartOutlined as AnalyticsIcon,
  EventOutlined as ScheduleIcon,
  GroupOutlined as MembersIcon,
  NotificationsOutlined as NotificationsIcon,
  SettingsOutlined as SettingsIcon,
  HelpOutline as HelpIcon,
  AssessmentOutlined as ReportsIcon,
  TrendingUpOutlined as TrendsIcon,
  PieChartOutlined as OverviewIcon,
  SecurityOutlined as SecurityIcon,
  AccountCircleOutlined as AccountIcon,
  BuildOutlined as ToolsIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { IconButton, Button, CircularProgress } from "@mui/material";
import axios from "axios";
import PropTypes from "prop-types";
import { useState, useMemo, useEffect } from "react";
import Draggable from "react-draggable";

import theme from "../../styles/theme";

import {
  Container,
  Header,
  MainContent,
  AttendanceGrid,
  AttendanceRow,
  AttendanceCard,
  AttendanceHeader,
  Controls,
  PaginationControls,
  SearchContainer,
  EmployeeCardContainer,
  LoadingContainer,
  SidebarContainer,
  MenuSection,
  SectionTitle,
  MenuItem,
  ItemText,
  SubMenu,
  NotificationBadge,
  HamburgerMenu,
  Overlay,
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
    <img src={employee.photo} alt="Profile" className="employee-photo" />
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
    photo: PropTypes.string.isRequired,
  }).isRequired,
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
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        const userData = response.data;
        setEmployee({
          name: userData.name,
          position: userData.company.bs,
          phone: userData.phone,
          email: userData.email,
          photo: `https://i.pravatar.cc/150?img=${userData.id}`,
        });
      } catch (error) {
        console.error("Error fetching employee data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployeeData();
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

  const handlePageClick = (pageNumber) => {
    if (currentPage !== pageNumber) {
      setCurrentPage(pageNumber);
    }
  };

  const handleFilterButtonClick = (buttonName) => {
    setActiveButtons((prev) =>
      prev.includes(buttonName)
        ? prev.filter((name) => name !== buttonName)
        : [...prev, buttonName]
    );
  };

  if (loading) {
    return (
      <LoadingContainer>
        <CircularProgress style={{ color: theme.colors.primary }} />
      </LoadingContainer>
    );
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
              <SidebarContainer>
                <MenuSection>
                  <SectionTitle>Main Menu</SectionTitle>
                  <MenuItem
                    onClick={() => handleMenuItemClick("dashboard")}
                    className={activeMenuItem === "dashboard" ? "active" : ""}
                    style={{
                      backgroundColor:
                        activeMenuItem === "dashboard"
                          ? theme.colors.hover
                          : "transparent",
                    }}
                  >
                    <ItemText
                      style={{
                        color:
                          activeMenuItem === "dashboard"
                            ? theme.colors.primary
                            : "inherit",
                      }}
                    >
                      <HomeIcon /> Dashboard
                    </ItemText>
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnalyticsOpen(!analyticsOpen)}
                    className={activeMenuItem === "analytics" ? "active" : ""}
                    style={{
                      backgroundColor:
                        activeMenuItem === "analytics"
                          ? theme.colors.hover
                          : "transparent",
                    }}
                  >
                    <ItemText
                      style={{
                        color:
                          activeMenuItem === "analytics"
                            ? theme.colors.primary
                            : "inherit",
                      }}
                    >
                      <AnalyticsIcon /> Analytics
                    </ItemText>
                    {analyticsOpen ? <ExpandLess /> : <ExpandMore />}
                  </MenuItem>
                  {analyticsOpen && (
                    <SubMenu>
                      <MenuItem>
                        <ItemText>
                          <ReportsIcon /> Reports
                        </ItemText>
                      </MenuItem>
                      <MenuItem>
                        <ItemText>
                          <TrendsIcon /> Trends
                        </ItemText>
                      </MenuItem>
                      <MenuItem>
                        <ItemText>
                          <OverviewIcon /> Overview
                        </ItemText>
                      </MenuItem>
                      <MenuItem>
                        <ItemText>
                          <ScheduleIcon /> Schedules
                        </ItemText>
                      </MenuItem>
                    </SubMenu>
                  )}
                  <MenuItem
                    onClick={() => handleMenuItemClick("members")}
                    className={activeMenuItem === "members" ? "active" : ""}
                    style={{
                      backgroundColor:
                        activeMenuItem === "members"
                          ? theme.colors.hover
                          : "transparent",
                    }}
                  >
                    <ItemText
                      style={{
                        color:
                          activeMenuItem === "members"
                            ? theme.colors.primary
                            : "inherit",
                      }}
                    >
                      <MembersIcon /> Members
                    </ItemText>
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleMenuItemClick("notifications")}
                    className={
                      activeMenuItem === "notifications" ? "active" : ""
                    }
                    style={{
                      backgroundColor:
                        activeMenuItem === "notifications"
                          ? theme.colors.hover
                          : "transparent",
                    }}
                  >
                    <ItemText
                      style={{
                        color:
                          activeMenuItem === "notifications"
                            ? theme.colors.primary
                            : "inherit",
                      }}
                    >
                      <NotificationsIcon /> Notifications
                    </ItemText>
                    <NotificationBadge>8</NotificationBadge>
                  </MenuItem>
                </MenuSection>

                <MenuSection>
                  <SectionTitle>Settings</SectionTitle>
                  <MenuItem
                    onClick={() => setSettingsOpen(!settingsOpen)}
                    className={activeMenuItem === "settings" ? "active" : ""}
                    style={{
                      backgroundColor:
                        activeMenuItem === "settings"
                          ? theme.colors.hover
                          : "transparent",
                    }}
                  >
                    <ItemText
                      style={{
                        color:
                          activeMenuItem === "settings"
                            ? theme.colors.primary
                            : "inherit",
                      }}
                    >
                      <SettingsIcon /> Settings
                    </ItemText>
                    {settingsOpen ? <ExpandLess /> : <ExpandMore />}
                  </MenuItem>
                  {settingsOpen && (
                    <SubMenu>
                      <MenuItem>
                        <ItemText>
                          <SecurityIcon /> Security
                        </ItemText>
                      </MenuItem>
                      <MenuItem>
                        <ItemText>
                          <AccountIcon /> Account
                        </ItemText>
                      </MenuItem>
                      <MenuItem>
                        <ItemText>
                          <ToolsIcon /> Tools
                        </ItemText>
                      </MenuItem>
                      <MenuItem>
                        <ItemText>
                          <HelpIcon /> Help Center
                        </ItemText>
                      </MenuItem>
                    </SubMenu>
                  )}
                </MenuSection>
              </SidebarContainer>
            </>
          )}
        </>
      ) : (
        <SidebarContainer>
          <MenuSection>
            <SectionTitle>Main Menu</SectionTitle>
            <MenuItem
              onClick={() => handleMenuItemClick("dashboard")}
              className={activeMenuItem === "dashboard" ? "active" : ""}
              style={{
                backgroundColor:
                  activeMenuItem === "dashboard"
                    ? theme.colors.hover
                    : "transparent",
              }}
            >
              <ItemText
                style={{
                  color:
                    activeMenuItem === "dashboard"
                      ? theme.colors.primary
                      : "inherit",
                }}
              >
                <HomeIcon /> Dashboard
              </ItemText>
            </MenuItem>
            <MenuItem
              onClick={() => setAnalyticsOpen(!analyticsOpen)}
              className={activeMenuItem === "analytics" ? "active" : ""}
              style={{
                backgroundColor:
                  activeMenuItem === "analytics"
                    ? theme.colors.hover
                    : "transparent",
              }}
            >
              <ItemText
                style={{
                  color:
                    activeMenuItem === "analytics"
                      ? theme.colors.primary
                      : "inherit",
                }}
              >
                <AnalyticsIcon /> Analytics
              </ItemText>
              {analyticsOpen ? <ExpandLess /> : <ExpandMore />}
            </MenuItem>
            {analyticsOpen && (
              <SubMenu>
                <MenuItem>
                  <ItemText>
                    <ReportsIcon /> Reports
                  </ItemText>
                </MenuItem>
                <MenuItem>
                  <ItemText>
                    <TrendsIcon /> Trends
                  </ItemText>
                </MenuItem>
                <MenuItem>
                  <ItemText>
                    <OverviewIcon /> Overview
                  </ItemText>
                </MenuItem>
                <MenuItem>
                  <ItemText>
                    <ScheduleIcon /> Schedules
                  </ItemText>
                </MenuItem>
              </SubMenu>
            )}
            <MenuItem
              onClick={() => handleMenuItemClick("members")}
              className={activeMenuItem === "members" ? "active" : ""}
              style={{
                backgroundColor:
                  activeMenuItem === "members"
                    ? theme.colors.hover
                    : "transparent",
              }}
            >
              <ItemText
                style={{
                  color:
                    activeMenuItem === "members"
                      ? theme.colors.primary
                      : "inherit",
                }}
              >
                <MembersIcon /> Members
              </ItemText>
            </MenuItem>
            <MenuItem
              onClick={() => handleMenuItemClick("notifications")}
              className={activeMenuItem === "notifications" ? "active" : ""}
              style={{
                backgroundColor:
                  activeMenuItem === "notifications"
                    ? theme.colors.hover
                    : "transparent",
              }}
            >
              <ItemText
                style={{
                  color:
                    activeMenuItem === "notifications"
                      ? theme.colors.primary
                      : "inherit",
                }}
              >
                <NotificationsIcon /> Notifications
              </ItemText>
              <NotificationBadge>8</NotificationBadge>
            </MenuItem>
          </MenuSection>

          <MenuSection>
            <SectionTitle>Settings</SectionTitle>
            <MenuItem
              onClick={() => setSettingsOpen(!settingsOpen)}
              className={activeMenuItem === "settings" ? "active" : ""}
              style={{
                backgroundColor:
                  activeMenuItem === "settings"
                    ? theme.colors.hover
                    : "transparent",
              }}
            >
              <ItemText
                style={{
                  color:
                    activeMenuItem === "settings"
                      ? theme.colors.primary
                      : "inherit",
                }}
              >
                <SettingsIcon /> Settings
              </ItemText>
              {settingsOpen ? <ExpandLess /> : <ExpandMore />}
            </MenuItem>
            {settingsOpen && (
              <SubMenu>
                <MenuItem>
                  <ItemText>
                    <SecurityIcon /> Security
                  </ItemText>
                </MenuItem>
                <MenuItem>
                  <ItemText>
                    <AccountIcon /> Account
                  </ItemText>
                </MenuItem>
                <MenuItem>
                  <ItemText>
                    <ToolsIcon /> Tools
                  </ItemText>
                </MenuItem>
                <MenuItem>
                  <ItemText>
                    <HelpIcon /> Help Center
                  </ItemText>
                </MenuItem>
              </SubMenu>
            )}
          </MenuSection>
        </SidebarContainer>
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
