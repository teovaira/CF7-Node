# Coding Factory 7 - Node.js Course

A comprehensive educational repository for learning Node.js, Express.js, and backend development. This project contains progressive examples from basic Node.js concepts to a full-featured e-commerce backend API.

## 📚 Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Basic Examples](#basic-examples)
- [Express Applications](#express-applications)
- [Testing with Jest](#testing-with-jest)
- [E-Shop Backend API](#e-shop-backend-api)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Learning Path](#learning-path)

## 🎯 Overview

This repository is designed for students learning Node.js development at Coding Factory 7. It provides hands-on examples progressing from basic Node.js concepts to building a production-ready e-commerce backend.

## 📁 Project Structure

```
coding-factory7-nodejs/
├── example1-5.js          # Basic Node.js examples
├── math.js               # Module export example
├── jestApp/              # Jest testing fundamentals
├── myapp1/               # Express basics - routing
├── myapp2/               # Express middleware & static files
├── myapp3/               # Express with EJS templating
├── myapp4/               # Express with TypeScript
└── usersApp/             # Full e-commerce backend API
```

## 🚀 Basic Examples

### Example 1: Hello World
Basic Node.js script demonstrating console output.

### Example 2: HTTP Server
Creating a simple HTTP server without Express.

### Example 3: File Operations (Async)
Demonstrates asynchronous file reading/writing with the `fs` module.

### Example 4: File Operations (Sync)
Shows synchronous file operations and their differences.

### Example 5: Module System
Introduction to CommonJS modules with `require` and `module.exports`.

## 🌐 Express Applications

### MyApp1: Express Fundamentals
- Basic routing (GET requests)
- Query parameters (`/user?name=Bob&surname=Dylan`)
- URL parameters (`/user/:name/:surname/:age`)

### MyApp2: Middleware & Static Files
- Custom middleware implementation
- Request body parsing
- Static file serving
- POST request handling

### MyApp3: Template Engine
- EJS template integration
- Dynamic HTML rendering
- Form handling
- Data passing to views

### MyApp4: TypeScript Integration
- Express with TypeScript
- Type-safe development
- Module imports in TypeScript

## 🧪 Testing with Jest

The `jestApp` directory contains:
- Unit testing examples
- Test coverage configuration
- Math operations testing suite

Run tests with:
```bash
cd jestApp
npm test
```

## 🛍️ E-Shop Backend API

A production-ready backend API for an e-commerce platform featuring:

### Features
- **User Authentication**: JWT-based authentication system
- **RESTful API**: Full CRUD operations for users and products
- **Database**: MongoDB integration with Mongoose ODM
- **API Documentation**: Swagger/OpenAPI specification
- **Security**: Password hashing with bcrypt, CORS configuration
- **Logging**: Winston logger with daily rotation
- **Testing**: Comprehensive test suite with Jest and Supertest
- **Containerization**: Docker support for easy deployment

### API Endpoints

#### Authentication
- `POST /api/auth/login` - User login

#### Users
- `GET /api/users` - Get all users
- `POST /api/users` - Create new user
- `GET /api/users/:username` - Get user by username
- `PATCH /api/users/:username` - Update user
- `DELETE /api/users/:username` - Delete user

#### User Products
- `GET /api/user-product/:username` - Get user with their products

### API Documentation
Access the interactive API documentation at:
```
http://localhost:3000/api-docs
```

## 📋 Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- MongoDB (for usersApp)
- Basic knowledge of JavaScript

## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd coding-factory7-nodejs
```

2. Install dependencies for each application:
```bash
# For basic examples
npm install

# For individual apps
cd myapp1 && npm install
cd ../myapp2 && npm install
cd ../myapp3 && npm install
cd ../myapp4 && npm install
cd ../jestApp && npm install
cd ../usersApp && npm install
```

3. For the e-shop backend, create a `.env` file in `usersApp/`:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/usersapp
JWT_SECRET=your-secret-key
```

## 📖 Learning Path

1. **Start with Basic Examples** (example1-5.js)
   - Understand Node.js runtime
   - Learn module system
   - Practice file operations

2. **Progress to Express Basics** (myapp1-3)
   - Learn routing concepts
   - Understand middleware
   - Practice with templates

3. **Explore TypeScript** (myapp4)
   - Type-safe backend development
   - Modern JavaScript features

4. **Master Testing** (jestApp)
   - Write unit tests
   - Understand test coverage

5. **Build Production Apps** (usersApp)
   - Implement authentication
   - Design RESTful APIs
   - Work with databases
   - Deploy applications

## 🤝 Contributing

This is an educational repository. Students are encouraged to:
- Add their own examples
- Improve existing code
- Share learning experiences
- Report issues

## 📄 License

This project is for educational purposes as part of the Coding Factory 7 curriculum.

## 👥 Author

Created for Coding Factory 7 - Node.js Course

---

**Note**: This repository is incomplete and continuously updated as part of the learning journey. Each example builds upon previous concepts to provide a comprehensive understanding of Node.js development.