# STech – Authentication and Dashboard System  

## Table of Contents  

1. [Project Overview](#project-overview)  
2. [Technologies Used](#technologies-used)  
3. [Features and Functionalities](#features-and-functionalities)  
4. [Architectural Decisions](#architectural-decisions)  
5. [Project Structure](#project-structure)  
6. [Code and Naming Conventions](#code-and-naming-conventions)  
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
- **Vercel** – A cloud platform for quick and efficient deployment.  
- **Git Commitizen** – Enforces a **conventional commit format**, improving version control and documentation.  

Each technology was carefully selected to **maximize maintainability, performance, and user experience**.  

---

## Features and Functionalities  

This project incorporates **key features** to enhance usability and maintainability:  

### Authentication System  
- **Login form with real-time validation** for email and password fields.  
- **Error messages for invalid inputs**, empty fields, and incorrect formats.  
- **Toggle password visibility** for improved user experience.  
- **Toast notifications** providing immediate login feedback.  

### Dashboard  
- **Displays mock user data** fetched from JSONPlaceholder.  
- **Material UI cards** to present structured information clearly.  
- **Responsive design**, ensuring usability across all devices.  

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
 ┣ 📂 src  
 ┃ ┣ 📂 assets  
 ┃ ┣ 📂 components  
 ┃ ┣ 📂 pages  
 ┃ ┣ 📂 routes  
 ┃ ┣ 📂 styles  
 ┣ 📂 .vercel  
 ┣ 📜 .gitignore  
 ┣ 📜 eslint.config.js  
 ┣ 📜 index.html  
 ┣ 📜 package-lock.json  
 ┣ 📜 package.json  
 ┣ 📜 README.md   
 ┣ 📜 vite.config.js  
```

---

## Code and Naming Conventions  

To ensure **consistency, readability, and maintainability**, I followed strict **naming conventions** throughout the project:  

- **Folders**: Named using **kebab-case** (e.g., `pages`, `components/input-field`).  
- **JavaScript Files**: Named using **camelCase** (e.g., `validation.js`).  
- **React Components**: Named using **PascalCase** (e.g., `InputField.jsx`).  
- **Styled Components**: Follow the **same name as the component file**, keeping a **1:1 mapping** between style and component (e.g., `InputField.jsx` and `styles.js`).  
- **Theme Variables**: Defined in `theme.js`, ensuring **consistent design system usage** across all components.  
- **Global Styles**: Managed in `GlobalStyles.js` using **Styled Components**, enforcing uniform styling across the entire application.  

---

## Commit Message Standardization  

To maintain a **clear and structured commit history**, I integrated **Git Commitizen** to enforce **Conventional Commits**.  

Example commit messages:  
```sh  
git commit -m "feat: add email validation to login form"
git commit -m "fix: correct button padding issue"
git commit -m "refactor: improve input component structure"
```
This ensures **readability, better tracking of changes, and a standardized workflow**.  

---

## Deployment Process  

This project is deployed on **Vercel** for **fast and efficient hosting**.  

### Deployment Steps  
```sh  
npm install -g vercel  
vercel --prod  
```  
This enables **continuous deployment** by integrating with GitHub.  

---

## Final Considerations  

This project demonstrates my ability to:  
- **Architect a scalable frontend system** using modern technologies.  
- **Implement best practices in clean code, modularization, and componentization**.  
- **Standardize naming conventions and commit messages** for better maintainability.  
- **Deploy and manage a React application effectively using Vercel**.  

By prioritizing **code quality, maintainability, and user experience**, I ensured this project aligns with **industry standards** for frontend development.
