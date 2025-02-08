import axios from "axios";

export const fetchEmployeeData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const userData = response.data;
    return {
      name: userData.name,
      position: userData.company.bs,
      phone: userData.phone,
      email: userData.email,
      photo: `https://i.pravatar.cc/150?img=${userData.id}`,
    };
  } catch (error) {
    console.error("Error fetching employee data:", error);
    throw error;
  }
};
