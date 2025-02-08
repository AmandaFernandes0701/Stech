import PropTypes from "prop-types";

import { EmployeeCardContainer } from "./styles";

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

export default EmployeeCard;
