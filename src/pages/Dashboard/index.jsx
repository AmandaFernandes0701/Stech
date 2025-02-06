import {
  Container,
  Header,
  Sidebar,
  MainContent,
  Card,
  AttendanceGrid,
  AttendanceCard,
} from "./styles";

const Dashboard = () => (
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
          <span>Total Attendance: 309</span>
          <span>Avg Check-In Time: 08:46</span>
          <span>Avg Check-Out Time: 17:04</span>
        </div>
      </Card>
      <AttendanceGrid>
        <AttendanceCard>
          <span>Date: March 8, 2023</span>
          <span>Check-In: 08:53</span>
          <span>Check-Out: 17:15</span>
        </AttendanceCard>
        <AttendanceCard>
          <span>Date: March 7, 2023</span>
          <span>Check-In: 08:27</span>
          <span>Check-Out: 17:09</span>
        </AttendanceCard>
      </AttendanceGrid>
    </MainContent>
  </Container>
);

export default Dashboard;
