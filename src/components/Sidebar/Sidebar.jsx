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
import { PanelLeftClose, PanelRightClose } from "lucide-react";
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

const menus = [
  {
    title: "Main Menu",
    items: [
      { key: "dashboard", icon: HomeIcon, label: "Dashboard" },
      {
        key: "analytics",
        icon: AnalyticsIcon,
        label: "Analytics",
        subItems: [
          { key: "reports", icon: ReportsIcon, label: "Reports" },
          { key: "trends", icon: TrendsIcon, label: "Trends" },
          { key: "overview", icon: OverviewIcon, label: "Overview" },
        ],
      },
      { key: "schedule", icon: ScheduleIcon, label: "Schedule" },
      { key: "members", icon: MembersIcon, label: "Members" },
      {
        key: "notifications",
        icon: NotificationsIcon,
        label: "Notifications",
        badge: 8,
      },
    ],
  },
  {
    title: "Settings",
    items: [
      { key: "help", icon: HelpIcon, label: "Help Center" },
      {
        key: "settings",
        icon: SettingsIcon,
        label: "Settings",
        subItems: [
          { key: "security", icon: SecurityIcon, label: "Security" },
          { key: "account", icon: AccountIcon, label: "Account" },
          { key: "tools", icon: ToolsIcon, label: "Tools" },
        ],
      },
    ],
  },
];

const menuVariants = {
  open: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  collapsed: { opacity: 0, y: -10, transition: { duration: 0.5 } },
};

const SidebarMenuSection = ({
  section,
  activeMenuItem,
  handleMenuItemClick,
  collapsed,
  openStates,
  setOpenStates,
}) => (
  <MenuSection>
    <SectionTitle>{section.title}</SectionTitle>
    {section.items.map(({ key, icon: Icon, label, subItems, badge }) => {
      const isOpen = openStates[key];
      return (
        <>
          <SidebarMenuItem
            key={key}
            icon={<Icon style={{ display: collapsed ? "none" : "block" }} />}
            label={label}
            isActive={activeMenuItem === key}
            onClick={() =>
              subItems
                ? setOpenStates({ ...openStates, [key]: !isOpen })
                : handleMenuItemClick(key)
            }
            badge={badge}
            hasSubItems={!!subItems}
            isOpen={isOpen}
          />
          {isOpen && subItems && (
            <SubMenu>
              {subItems.map(({ key, icon: SubIcon, label }) => (
                <SidebarMenuItem
                  key={key}
                  icon={
                    <SubIcon
                      style={{ display: collapsed ? "none" : "block" }}
                    />
                  }
                  label={label}
                  isActive={activeMenuItem === key}
                  onClick={() => handleMenuItemClick(key)}
                />
              ))}
            </SubMenu>
          )}
        </>
      );
    })}
  </MenuSection>
);

const SidebarMenuItem = ({
  icon,
  label,
  isActive,
  onClick,
  badge,
  hasSubItems,
  isOpen,
}) => (
  <MenuItem onClick={onClick} className={isActive ? "active" : ""}>
    <ItemText>
      {icon} {label}
    </ItemText>
    {badge && <NotificationBadge>{badge}</NotificationBadge>}
    {hasSubItems && (isOpen ? <ExpandLess /> : <ExpandMore />)}
  </MenuItem>
);

const Sidebar = ({ activeMenuItem, handleMenuItemClick }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [openStates, setOpenStates] = useState({
    analytics: false,
    settings: false,
  });

  return (
    <SidebarContainer collapsed={collapsed}>
      <SidebarContent
        variants={menuVariants}
        initial="collapsed"
        animate={collapsed ? "collapsed" : "open"}
        exit="collapsed"
        collapsed={collapsed}
      >
        {menus.map((section) => (
          <SidebarMenuSection
            key={section.title}
            section={section}
            activeMenuItem={activeMenuItem}
            handleMenuItemClick={handleMenuItemClick}
            collapsed={collapsed}
            openStates={openStates}
            setOpenStates={setOpenStates}
          />
        ))}
      </SidebarContent>
      <CollapseColumn collapsed={collapsed}>
        <CollapseIcon onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? (
            <PanelRightClose strokeWidth={1} />
          ) : (
            <PanelLeftClose strokeWidth={1} />
          )}
        </CollapseIcon>
      </CollapseColumn>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  activeMenuItem: PropTypes.string.isRequired,
  handleMenuItemClick: PropTypes.func.isRequired,
};

export default Sidebar;
