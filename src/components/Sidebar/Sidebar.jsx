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
  ArrowBack,
  ArrowForward,
} from "@mui/icons-material";
import PropTypes from "prop-types";
import { useState } from "react";

import {
  SidebarContainer,
  SidebarContent,
  CollapseColumn,
  MenuSection,
  SectionTitle,
  MenuItem,
  ItemText,
  SubMenu,
  NotificationBadge,
  CollapseIcon,
} from "./styles";

const Sidebar = ({
  activeMenuItem,
  handleMenuItemClick,
  analyticsOpen,
  setAnalyticsOpen,
  settingsOpen,
  setSettingsOpen,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapseClick = () => {
    setCollapsed(!collapsed);
  };

  return (
    <SidebarContainer collapsed={collapsed}>
      <SidebarContent collapsed={collapsed}>
        <MenuSection>
          <SectionTitle>Main Menu</SectionTitle>
          <MenuItem
            onClick={() => handleMenuItemClick("dashboard")}
            className={activeMenuItem === "dashboard" ? "active" : ""}
          >
            <ItemText>
              <HomeIcon style={{ display: collapsed ? "none" : "block" }} />{" "}
              Dashboard
            </ItemText>
          </MenuItem>
          <MenuItem
            onClick={() => setAnalyticsOpen(!analyticsOpen)}
            className={activeMenuItem === "analytics" ? "active" : ""}
          >
            <ItemText>
              <AnalyticsIcon
                style={{ display: collapsed ? "none" : "block" }}
              />{" "}
              Analytics
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
                  <ReportsIcon
                    style={{ display: collapsed ? "none" : "block" }}
                  />{" "}
                  Reports
                </ItemText>
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick("trends")}
                className={activeMenuItem === "trends" ? "active" : ""}
              >
                <ItemText>
                  <TrendsIcon
                    style={{ display: collapsed ? "none" : "block" }}
                  />{" "}
                  Trends
                </ItemText>
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick("overview")}
                className={activeMenuItem === "overview" ? "active" : ""}
              >
                <ItemText>
                  <OverviewIcon
                    style={{ display: collapsed ? "none" : "block" }}
                  />{" "}
                  Overview
                </ItemText>
              </MenuItem>
            </SubMenu>
          )}
          <MenuItem
            onClick={() => handleMenuItemClick("schedule")}
            className={activeMenuItem === "schedule" ? "active" : ""}
          >
            <ItemText>
              <ScheduleIcon style={{ display: collapsed ? "none" : "block" }} />{" "}
              Schedule
            </ItemText>
          </MenuItem>
          <MenuItem
            onClick={() => handleMenuItemClick("members")}
            className={activeMenuItem === "members" ? "active" : ""}
          >
            <ItemText>
              <MembersIcon style={{ display: collapsed ? "none" : "block" }} />{" "}
              Members
            </ItemText>
          </MenuItem>
          <MenuItem
            onClick={() => handleMenuItemClick("notifications")}
            className={activeMenuItem === "notifications" ? "active" : ""}
          >
            <ItemText>
              <NotificationsIcon
                style={{ display: collapsed ? "none" : "block" }}
              />{" "}
              Notifications
            </ItemText>
            <NotificationBadge>8</NotificationBadge>
          </MenuItem>
        </MenuSection>

        <MenuSection>
          <SectionTitle>Settings</SectionTitle>
          <MenuItem
            onClick={() => handleMenuItemClick("help")}
            className={activeMenuItem === "help" ? "active" : ""}
          >
            <ItemText>
              <HelpIcon style={{ display: collapsed ? "none" : "block" }} />{" "}
              Help Center
            </ItemText>
          </MenuItem>
          <MenuItem
            onClick={() => setSettingsOpen(!settingsOpen)}
            className={activeMenuItem === "settings" ? "active" : ""}
          >
            <ItemText>
              <SettingsIcon style={{ display: collapsed ? "none" : "block" }} />{" "}
              Settings
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
                  <SecurityIcon
                    style={{ display: collapsed ? "none" : "block" }}
                  />{" "}
                  Security
                </ItemText>
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick("account")}
                className={activeMenuItem === "account" ? "active" : ""}
              >
                <ItemText>
                  <AccountIcon
                    style={{ display: collapsed ? "none" : "block" }}
                  />{" "}
                  Account
                </ItemText>
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick("tools")}
                className={activeMenuItem === "tools" ? "active" : ""}
              >
                <ItemText>
                  <ToolsIcon
                    style={{ display: collapsed ? "none" : "block" }}
                  />{" "}
                  Tools
                </ItemText>
              </MenuItem>
            </SubMenu>
          )}
        </MenuSection>
      </SidebarContent>
      <CollapseColumn>
        <CollapseIcon onClick={handleCollapseClick}>
          {collapsed ? <ArrowForward /> : <ArrowBack />}
        </CollapseIcon>
      </CollapseColumn>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  activeMenuItem: PropTypes.string.isRequired,
  handleMenuItemClick: PropTypes.func.isRequired,
  analyticsOpen: PropTypes.bool.isRequired,
  setAnalyticsOpen: PropTypes.func.isRequired,
  settingsOpen: PropTypes.bool.isRequired,
  setSettingsOpen: PropTypes.func.isRequired,
};

export default Sidebar;
