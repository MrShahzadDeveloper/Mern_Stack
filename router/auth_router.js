const express = require("express");
const router = express.Router();
const authcontroller = require("../controllers/auth_controllers");

// Define routes
router.route("/").get(authcontroller.home); // Home Page Route
router.route("/register").get(authcontroller.register); // Registration Page Route

module.exports = router;


// Router
// A Router in Express.js is a mechanism to define and manage different routes in your application. It allows you to handle HTTP requests (like GET, POST, PUT, DELETE) to specific endpoints.

// Key Characteristics:
// Organizes Routes:

// Helps modularize your application by grouping related routes together.
// Makes code more readable and maintainable.
// Uses Middleware:

// Can attach middleware functions specific to certain routes.
// Attach to Application:

// A router is mounted on a path (e.g., /api/auth) using app.use().