# Hit'em Up

Hit'em Up is a better clone of WhatsApp that supports real-time chat with other users. This project is built using Node.js, Express, MongoDB, and Socket.io.

## Features

- User authentication (signup, login, logout)
- Real-time messaging
- User profile management
- Secure JWT-based authentication
- Cookie-based session management

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- Socket.io
- JWT (JSON Web Tokens)
- bcryptjs
- dotenv

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
``` git clone https://github.com/yourusername/hit-em-up.git ```

``` cd hit-em-up ```

2. Install dependencies:
``` npm i ```

3. Create a .env file in the root directory and add the following environment variables:

`PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development`

4. Start
``` npm start ```

#### The server will start on ```http://localhost:5001```

The server will start on http://localhost:5001.

API Endpoints
Authentication
POST /api/signup - Register a new user
POST /api/login - Login a user
POST /api/logout - Logout a user
Messages
GET /api/messages - Get all messages
POST /api/messages - Send a new message
Contributing
Contributions are welcome! Please open an issue or submit a pull request.

License
This project is licensed under the MIT License.