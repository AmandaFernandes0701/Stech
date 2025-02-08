import styled from "styled-components";

import { theme } from "../../styles/theme";

export const EmployeeCardContainer = styled.div`
  border-radius: 8px;
  display: flex;
  align-items: center;

  .employee-photo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 20px;
    object-fit: cover;

    @media (max-width: 681px) {
      margin-right: 0px;
    }
  }

  .employee-details {
    display: flex;
    flex-direction: column;
    padding: 15px;
    height: 100%;
    justify-content: space-between;
    align-items: space-between;

    .employee-name {
      font-size: ${theme.fontSizes.title};
      font-weight: normal;
      color: ${theme.colors.text};
      margin-bottom: 10px;

      @media (max-width: 768px) {
        font-size: 22px;
      }

      @media (max-width: 480px) {
        font-size: 18px;
      }
    }

    .employee-info {
      display: flex;
      gap: 3.5rem;

      .info-column {
        display: flex;
        flex-direction: column;
        gap: 5px;

        .info-item {
          font-size: ${theme.fontSizes.text};
          color: ${theme.colors.text};
          font-weight: normal;

          @media (max-width: 480px) {
            font-size: 14px;
          }
        }

        .info-label {
          font-size: ${theme.fontSizes.text};
          color: ${theme.colors.textSecondary};

          @media (max-width: 480px) {
            font-size: 12px;
          }
        }
      }
    }
  }

  @media (max-width: 1250px) {
    .employee-details {
      .employee-info {
        flex-direction: column;
        gap: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    .employee-photo {
      margin-bottom: 15px;
    }

    .employee-details {
      align-items: flex-start;

      .employee-info {
        flex-direction: column;
        gap: 10px;
      }
    }
  }

  @media (max-width: 681px) {
    align-items: center;
    text-align: center;

    .employee-details {
      align-items: center;

      .employee-info {
        align-items: center;
      }
    }
  }
`;
