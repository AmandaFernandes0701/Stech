import { theme } from "../styles/theme";

export const generateAttendanceData = () =>
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
    }));
