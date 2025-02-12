# STech – Authentication and Dashboard System

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features and Functionalities](#features-and-functionalities)
- [Architectural Decisions](#architectural-decisions)
- [Project Structure](#project-structure)
- [Project Conventions and Naming Standards](#project-conventions-and-naming-standards)
- [Error Handling and Validation](#error-handling-and-validation)
- [Deployment Process](#deployment-process)
- [Installation and Setup](#installation-and-setup)
- [Potential Improvements](#potential-improvements)
- [Final Considerations](#final-considerations)

---

## Project Overview
This project was developed as part of a Software Development Internship Test, requiring the implementation of a Login System and a Dashboard. My goal was to build a scalable, well-structured, and maintainable application following modern frontend development best practices.

The solution was designed with clean architecture principles, ensuring code reusability, separation of concerns, and an intuitive user experience.

The live version is available at: [STech - Amanda](https://stech-amanda.vercel.app/)  

---

## Technologies Used
To ensure high performance, maintainability, and scalability, I selected the following technologies:

- **React.js** – A component-based library for building UIs efficiently.
- **Vite** – A fast development and build tool optimized for performance.
- **Material UI** – A modern UI component library ensuring accessibility and design consistency.
- **React Router DOM** – Manages client-side navigation seamlessly.
- **React Toastify** – Provides user-friendly notification feedback.
- **Styled Components** – CSS-in-JS for dynamic and modular styling.
- **Framer Motion** – Enables smooth animations for an enhanced UX.
- **Zod** – Schema-based validation for form inputs.
- **React Draggable** – Allows drag-and-drop functionality for UI elements.
- **Tooltip** – Displays password validation rules in a user-friendly way.
- **Vercel** – A cloud platform for quick and efficient deployment.
- **Git Commitizen** – Enforces a conventional commit format, improving version control and documentation.

Each technology was carefully selected to maximize maintainability, performance, and user experience.

---

## Features and Functionalities
This project incorporates key features to enhance usability and maintainability:

### Authentication System
- Login form with real-time validation for email and password fields.
- Error messages for invalid inputs, empty fields, and incorrect formats.
- Toggle password visibility for improved user experience.
- Tooltip with password validation criteria.
- Toast notifications providing immediate login feedback.

### Dashboard
- Displays mock user data fetched from JSONPlaceholder.
- Material UI cards to present structured information clearly.
- Responsive design, ensuring usability across all devices.
- Drag-and-drop functionality using React Draggable.

### UI/UX Enhancements
- Keyboard accessibility improvements for better usability.
- Smooth transitions using Framer Motion for a polished experience.
- Consistent design system using a global theme for styling.

---

## Architectural Decisions
I designed this project with a modular, scalable, and maintainable architecture. The key principles followed include:

### Componentization and Reusability
- UI components (buttons, inputs) are reusable and isolated to prevent redundancy.
- Each page has its own structure, ensuring clear separation of concerns.

### Modularization
- Business logic is separate from UI logic, improving maintainability.
- Validation logic is centralized, making it easy to modify or expand.

### State Management
- `useState` is used for local state management, keeping the project lightweight.
- State lifting is applied where necessary, ensuring a clear data flow.

These architectural decisions enhance maintainability, scalability, and long-term project sustainability.

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

## Project Conventions and Naming Standards
To ensure consistency, readability, and maintainability, I followed strict naming conventions and commit standards throughout the project:

### Naming Conventions
- **Folders**: Named using kebab-case (e.g., `pages`, `components/input-field`).
- **JavaScript Files**: Named using camelCase (e.g., `validation.js`).
- **React Components**: Named using PascalCase (e.g., `InputField.jsx`).
- **Styled Components**: Follow the same name as the component file, keeping a 1:1 mapping between style and component (e.g., `InputField.jsx` and `styles.js`).
- **Theme Variables**: Defined in `theme.js`, ensuring consistent design system usage across all components.
- **Global Styles**: Managed in `GlobalStyles.js` using Styled Components, enforcing uniform styling.

### Commit Message Standardization
To maintain a clear and structured commit history, I integrated Git Commitizen to enforce Conventional Commits.

### Commit Types
<details>
  <summary>Click here to expand the full list of commit types</summary>

  - **feat:** A new feature
  - **fix:** A bug fix
  - **docs:** Documentation changes only
  - **style:** Changes that do not affect code behavior (e.g., formatting, missing semicolons)
  - **refactor:** Code refactoring that does not change functionality
  - **perf:** Performance improvements
  - **test:** Adding or modifying tests
  - **chore:** Maintenance or build process changes (e.g., CI/CD, dependencies updates)
  - **build:** Changes that affect the build system or external dependencies
  - **ci:** Changes to the CI configuration files or scripts
  - **revert:** Reverting a previous commit
  - **hotfix:** Urgent bug fix deployed immediately

</details>

#### Commit Format
```
<type>(<scope>): <short description>
[optional blank line]
<long description (if necessary)>
```
#### Example Commit Messages:
```
git commit -m "feat(validation): add email validation to login form"
git commit -m "fix(button): correct padding issue on submit button"
git commit -m "refactor(inputComponent): modularize input component code"
```

This ensures readability, better tracking of changes, and a standardized workflow.

---

## Error Handling and Validation
- **Zod** is used to validate email and password inputs.
- Errors are displayed in real time, guiding users towards valid inputs.
- **React Toastify** provides immediate feedback on authentication success or failure.
- **Tooltip** explains password strength requirements interactively.

---

## Deployment Process
This project is deployed on Vercel for fast and efficient hosting.

### Deployment Steps
1. Install the Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```
2. Log in to your Vercel account:
   ```bash
   vercel login
   ```
3. Deploy the project:
   ```bash
   vercel --prod
   ```
4. Follow the prompts to link the project to your Vercel account and deploy it.

This enables continuous deployment by integrating with GitHub.

---

## Installation and Setup
To set up and run the project locally:
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd stech
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## Potential Improvements
Here are some ideas for future enhancements to the project:

### 1. **Backend Implementation**
   - Integrate a backend service (e.g., Node.js with Express or Django) to handle authentication and data fetching.
   - Use JWT (JSON Web Tokens) for secure user authentication.
   - Implement a database (e.g., MongoDB, PostgreSQL) to store user data and dashboard information.

### 2. **Accessibility Enhancements**
   - Ensure all components are fully accessible using ARIA attributes.
   - Add keyboard navigation support for all interactive elements.
   - Conduct accessibility audits using tools like **Lighthouse** or **axe**.

### 3. **Testing**
   - Add unit tests using **Jest** and **React Testing Library**.
   - Implement end-to-end testing with **Cypress**.
   - Use snapshot testing to ensure UI consistency.

---

## Final Considerations
This project demonstrates my ability to:

- Architect a scalable frontend system using modern technologies.
- Implement best practices in clean code, modularization, and componentization.
- Standardize naming conventions and commit messages for better maintainability.
- Deploy and manage a React application effectively using Vercel.

By prioritizing code quality, maintainability, and user experience, I ensured this project aligns with industry standards for frontend development.
