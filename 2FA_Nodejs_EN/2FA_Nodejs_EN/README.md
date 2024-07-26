# 2FA Code Generator

This is a simple 2FA (Two-Factor Authentication) code generator built using Node.js and Express.

## Environment

- Node.js
- npm

## Installation

1. Clone the repository or download the project files.
2. Navigate to the project directory.

```bash
cd 2FA_Nodejs_EN
```

3. Install the dependencies.

```bash
npm install
```

## Running the Project

1. Start the server.

```bash
npm start
```

2. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
2FA_Nodejs_EN/
│
├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css
└── server.js
```

## Description

- `public/index.html`: The main HTML file that includes the form to input the secret key and generate the OTP.
- `public/script.js`: JavaScript file that handles the OTP generation and clipboard copy functionality.
- `public/style.css`: CSS file for styling the HTML page.
- `server.js`: Node.js server file that serves the static files and starts the server.
