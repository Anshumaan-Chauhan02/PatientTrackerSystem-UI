# Patient Tracker System UI

Welcome to the repository for the Frontend implementation of the Patient Tracker System using the Angular Framework.

## Technical Skills
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## Prerequisites

Before you begin, ensure that you have the following prerequisites installed on your system:

1. [Node.js](https://nodejs.org/en/download): Install Node.js, and add it to the System PATH variable (default installation directory is `C:\Program Files\nodejs\` on Windows).
2. Open Command Prompt and run the following command to install Angular CLI globally:
    ```bash
    npm install -g @angular/cli
    ```
3. If you encounter a build error when running the application, install the Angular DevKit package using:
    ```bash
    npm install @angular-devkit/build-angular
    ```

## Versions

Ensure you have the following versions installed:

1. Node.js: `v20.9.0` (Check with `node --version`).
2. Angular CLI: `16.2.9` (Check with `ng version`).
3. Chart.js: `4.4.1` (Check with `npm show chart.js version`).

## Running the Application

To run the application, follow these steps:

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/Varun9198/PatientTrackerSystem-UI
    ```
2. Open the project folder in the command line.
3. Serve the application on localhost using the following command:
    ```bash
    ng serve --proxy-config proxy.conf.json
    ```
    Note: This setup utilizes proxy services to avoid CORS (Cross Origin Resource Sharing) errors during Backend API calls.
4. Navigate to `http://localhost:4200/` (default port).

## File Description

- All files follow a `userType-page-function` format. For instance, the doctor's dashboard is in the `doctor-dashboard` folder.
- Backend service calls are implemented in the services folder.
- Routing information for components is defined in `app-routing.module.ts`.
- Images used are stored in the `assets/images/` folder.
- Proxy paths for successful backend API calls are configured in `proxy.conf.json`.
