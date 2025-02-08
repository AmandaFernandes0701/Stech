# STech – Authentication and Dashboard System  

## Table of Contents  

1. [Project Overview](#project-overview)  
2. [Technologies Used](#technologies-used)  
3. [Features and Functionalities](#features-and-functionalities)  
4. [Architectural Decisions](#architectural-decisions)  
5. [Project Structure](#project-structure)  
6. [Project Conventions and Naming Standards](#project-conventions-and-naming-standards)  
7. [Error Handling and Validation](#error-handling-and-validation)  
8. [Deployment Process](#deployment-process)  
9. [Installation and Setup](#installation-and-setup)  
10. [Final Considerations](#final-considerations)  

---  

## Project Overview  

This project was developed as part of a **Software Development Internship Test**, requiring the implementation of a **Login System** and a **Dashboard**. My goal was to build a **scalable, well-structured, and maintainable** application following **modern frontend development best practices**.  

The solution was designed with **clean architecture principles**, ensuring **code reusability, separation of concerns, and an intuitive user experience**.  

The live version is available at: [STech - Amanda](https://stech-amanda.vercel.app/)  

---  

## Technologies Used  

To ensure **high performance, maintainability, and scalability**, I selected the following technologies:  

- **React.js** – A component-based library for building UIs efficiently.  
- **Vite** – A fast development and build tool optimized for performance.  
- **Material UI** – A modern UI component library ensuring accessibility and design consistency.  
- **React Router DOM** – Manages client-side navigation seamlessly.  
- **React Toastify** – Provides user-friendly notification feedback.  
- **Styled Components** – CSS-in-JS for dynamic and modular styling.  
- **Framer Motion** – Enables smooth animations for an enhanced UX.
- **Zod** – For schema validation, ensuring strict input validation throughout the application.
- **React-Draggable** – Used for draggable elements to enhance the user experience with flexible UI components.
- **Vercel** – A cloud platform for quick and efficient deployment.  
- **Git Commitizen** – Enforces a **conventional commit format**, improving version control and documentation.  

Each technology was carefully selected to **maximize maintainability, performance, and user experience**.  

---  

## Features and Functionalities  

This project incorporates **key features** to enhance usability and maintainability:  

### Authentication System  
- **Login form with real-time validation** for email and password fields using Zod to validate the input formats strictly.
- **Error messages for invalid inputs**, empty fields, and incorrect formats.  
- **Toggle password visibility** for improved user experience.
- **Password requirements guidance** through **Tooltips**, which guide users on valid password format and criteria.
- **Toast notifications** providing immediate login feedback.  

### Dashboard  
- **Displays mock user data** fetched from JSONPlaceholder.  
- **Material UI cards** to present structured information clearly.
- **Collapsible sections** to display data in a clean and organized manner.
- **Pagination** added to the cards to limit the data displayed at once, improving readability and performance.
- **Responsive design**, ensuring usability across all devices.
- **Loading state handling**: To avoid showing an empty screen, loading states are displayed until images and data from the API are fully loaded.

### UI/UX Enhancements  
- **Keyboard accessibility improvements** for better usability.  
- **Smooth transitions** using Framer Motion for a polished experience.  
- **Consistent design system** using a global theme for styling.  

---  

## Architectural Decisions  

I designed this project with a **modular, scalable, and maintainable architecture**. The key principles followed include:  

### Componentization and Reusability  
- **UI components (buttons, inputs) are reusable and isolated** to prevent redundancy.  
- **Each page has its own structure**, ensuring clear separation of concerns.  

### Modularization  
- **Business logic is separate from UI logic**, improving maintainability.  
- **Validation logic is centralized**, making it easy to modify or expand.  

### State Management  
- **useState is used for local state management**, keeping the project lightweight.  
- **State lifting is applied where necessary**, ensuring a clear data flow.  

These **architectural decisions enhance maintainability, scalability, and long-term project sustainability**.  

---  

## Project Structure  

```
📦 stech  
 ┣ 📂 src                         # Main source code directory  
 ┃ ┣ 📂 assets                    # Folder for static assets like images and icons  
 ┃ ┣ 📂 components                # Folder with reusable components (buttons, inputs, etc.)  
 ┃ ┣ 📂 pages                     # Folder with pages, such as Login, Dashboard  
 ┃ ┣ 📂 routes                    # Folder for managing the routes of the project  
 ┃ ┣ 📂 styles                    # Folder for global styles and themes, including Styled Components  
 ┃ ┣ 📂 utils                     # Folder for utility functions, such as validation logic (e.g., email and password)  
 ┣ 📂 .vercel                     # Vercel-specific configuration files  
 ┣ 📜 .gitignore                  # File to ignore files/folders from being committed to Git  
 ┣ 📜 eslint.config.js            # ESLint configuration to ensure code consistency and quality  
 ┣ 📜 index.html                  # Main HTML file for the project, entry point  
 ┣ 📜 package-lock.json           # Automatically generated file by npm to ensure consistent versions  
 ┣ 📜 package.json                # npm configuration file with dependencies and scripts for the project  
 ┣ 📜 README.md                   # Project documentation file, containing development information  
 ┣ 📜 vite.config.js              # Configuration file for Vite, the module bundler used in the project  
```

---  

## Installation and Setup  

To run the project locally, follow these steps:  

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```sh
   cd stech
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```

The application will now be running locally. Open **http://localhost:5173/** (or the port shown in your terminal) to access it.  

---  

## Final Considerations  

This project demonstrates my ability to:  
- **Architect a scalable frontend system** using modern technologies.  
- **Implement best practices in clean code, modularization, and componentization**.  
- **Standardize naming conventions and commit messages** for better maintainability.  
- **Deploy and manage a React application effectively using Vercel**.  

By prioritizing **code quality, maintainability, and user experience**, I ensured this project aligns with **industry standards** for frontend development.

