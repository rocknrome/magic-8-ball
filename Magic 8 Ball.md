
![8ball-main](https://github.com/rocknrome/magic-8-ball/assets/126816805/fcfbb890-0bfc-4f0c-86fb-656b48e4e7dd)

# Magic 8 Ball

The Magic 8 Ball is an interactive web application that provides mystical answers to user's questions. It utilizes JavaScript, HTML, and CSS for the frontend, and Node.js with Express for the backend.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/example-user/magic8ball.git
   ```

2. Navigate to the project directory:

   ```
   cd magic8ball
   ```

3. Install dependencies:

   ```
   npm install
   ```

## Usage

1. Start the server:

   ```
   node server.js
   ```

2. Open your web browser and visit `http://localhost:3001`.

3. Follow the on-screen instructions to ask a question and receive a mystical answer from the Magic 8 Ball.

## Files

- `index.html`: The main HTML file that contains the structure and content of the Magic 8 Ball application.
- `styles.css`: The CSS file that defines the styles and layout of the Magic 8 Ball application.
- `main.js`: The JavaScript file that handles the logic and functionality of the Magic 8 Ball application, including handling user input and fetching answers from the server.
- `server.js`: The Node.js backend server file that serves the HTML, handles API requests for answers, and provides static file hosting.

## API Endpoints

- `GET /answer`: Retrieves a random answer from the main set of answers.
- `GET /answer-daffy`: Retrieves a random answer from Daffy's set of answers.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue.

## License

This project is not licensed and is intended for educational and study purposes only.
