import {
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
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import PropTypes from "prop-types";

import {
  SidebarContainer,
  MenuSection,
  SectionTitle,
  MenuItem,
  ItemText,
  SubMenu,
  NotificationBadge,
} from "./styles";

const Sidebar = ({
  activeMenuItem,
  handleMenuItemClick,
  analyticsOpen,
  setAnalyticsOpen,
  settingsOpen,
  setSettingsOpen,
}) => (
  <SidebarContainer>
    <MenuSection>
      <SectionTitle>Main Menu</SectionTitle>
      <MenuItem
        onClick={() => handleMenuItemClick("dashboard")}
        className={activeMenuItem === "dashboard" ? "active" : ""}
      >
        <ItemText>
          <HomeIcon /> Dashboard
        </ItemText>
      </MenuItem>
      <MenuItem
        onClick={() => setAnalyticsOpen(!analyticsOpen)}
        className={activeMenuItem === "analytics" ? "active" : ""}
      >
        <ItemText>
          <AnalyticsIcon /> Analytics
        </ItemText>
        {analyticsOpen ? <ExpandLess /> : <ExpandMore />}
      </MenuItem>
      {analyticsOpen && (
        <SubMenu>
          <MenuItem
            onClick={() => handleMenuItemClick("reports")}
            className={activeMenuItem === "reports" ? "active" : ""}
          >
            <ItemText>
              <ReportsIcon /> Reports
            </ItemText>
          </MenuItem>
          <MenuItem
            onClick={() => handleMenuItemClick("trends")}
            className={activeMenuItem === "trends" ? "active" : ""}
          >
            <ItemText>
              <TrendsIcon /> Trends
            </ItemText>
          </MenuItem>
          <MenuItem
            onClick={() => handleMenuItemClick("overview")}
            className={activeMenuItem === "overview" ? "active" : ""}
          >
            <ItemText>
              <OverviewIcon /> Overview
            </ItemText>
          </MenuItem>
        </SubMenu>
      )}
      <MenuItem
        onClick={() => handleMenuItemClick("schedule")}
        className={activeMenuItem === "schedule" ? "active" : ""}
      >
        <ItemText>
          <ScheduleIcon /> Schedule
        </ItemText>
      </MenuItem>
      <MenuItem
        onClick={() => handleMenuItemClick("members")}
        className={activeMenuItem === "members" ? "active" : ""}
      >
        <ItemText>
          <MembersIcon /> Members
        </ItemText>
      </MenuItem>
      <MenuItem
        onClick={() => handleMenuItemClick("notifications")}
        className={activeMenuItem === "notifications" ? "active" : ""}
      >
        <ItemText>
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
      >
        <ItemText>
          <SettingsIcon /> Settings
        </ItemText>
        {settingsOpen ? <ExpandLess /> : <ExpandMore />}
      </MenuItem>
      {settingsOpen && (
        <SubMenu>
          <MenuItem
            onClick={() => handleMenuItemClick("security")}
            className={activeMenuItem === "security" ? "active" : ""}
          >
            <ItemText>
              <SecurityIcon /> Security
            </ItemText>
          </MenuItem>
          <MenuItem
            onClick={() => handleMenuItemClick("account")}
            className={activeMenuItem === "account" ? "active" : ""}
          >
            <ItemText>
              <AccountIcon /> Account
            </ItemText>
          </MenuItem>
          <MenuItem
            onClick={() => handleMenuItemClick("tools")}
            className={activeMenuItem === "tools" ? "active" : ""}
          >
            <ItemText>
              <ToolsIcon /> Tools
            </ItemText>
          </MenuItem>
        </SubMenu>
      )}
    </MenuSection>

    <MenuSection>
      <MenuItem
        onClick={() => handleMenuItemClick("help")}
        className={activeMenuItem === "help" ? "active" : ""}
      >
        <ItemText>
          <HelpIcon /> Help Center
        </ItemText>
      </MenuItem>
    </MenuSection>
  </SidebarContainer>
);

Sidebar.propTypes = {
  activeMenuItem: PropTypes.string.isRequired,
  handleMenuItemClick: PropTypes.func.isRequired,
  analyticsOpen: PropTypes.bool.isRequired,
  setAnalyticsOpen: PropTypes.func.isRequired,
  settingsOpen: PropTypes.bool.isRequired,
  setSettingsOpen: PropTypes.func.isRequired,
};

export default Sidebar;
