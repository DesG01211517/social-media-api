//Import Dotenv
require("dotenv").config();

//Import express
import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

//cors
const cors = require("cors");

//Import Axios
const axios = require("axios");

//Express application
const app = express();

// define port
const PORT = process.env.PORT;

const corsOptions = {
  origin: process.env.SNACKS_CLIENT,
  optionsSuccessStatus: 200,
};

//Using CORS
app.use(cors(corsOptions));

//Using JSON middleware to parse bodies
app.use(express.json());

//defining routes
//Home Route

app.get("/", ( request: Request, response: Response, next: NextFunction) => {
    response.json({ message: "Welcome to the server"});
  });
  
  
  //error handling
  //Generic error handling
  app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    console.error(error.stack);
    response.status(500).json({
      error: "something broke!",
      errorStack: error.stack,
      errorMessage: error.message,
    });
  });
  
  //404 Resource not found
  app.use((request: Request, response: Response, next: NextFunction) => {
    response
      .status(404)
      .json({ error: "Resource not found, where are you looking" });
  });
  
  //server listening on port
  app.listen(PORT, () => {
    console.log(`the server is running on http://localhost:${PORT}`);
  });
  
  //export app for testing
  module.exports = app;
