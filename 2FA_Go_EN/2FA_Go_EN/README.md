# 2FA Code Generator

This is a simple 2FA (Two-Factor Authentication) code generator built using Go.

## Environment

- Go

## Installation

1. Clone the repository or download the project files.
2. Navigate to the project directory.

```bash
cd 2FA_Go_EN
```

## Running the Project

1. Start the server.

```bash
go run main.go
```

2. Open your browser and navigate to `http://localhost:8080`.

## Project Structure

```
2FA_Go_EN/
│
├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css
└── main.go
```

## Description

- `public/index.html`: The main HTML file that includes the form to input the secret key and generate the OTP.
- `public/script.js`: JavaScript file that handles the OTP generation and clipboard copy functionality.
- `public/style.css`: CSS file for styling the HTML page.
- `main.go`: Go server file that serves the static files and starts the server.
