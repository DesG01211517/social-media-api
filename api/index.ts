//Import Dotenv
require("dotenv").config();

//Import express
import express, { Request, Response, NextFunction } from "express";

import supabase from "../supabaseInstance";

//cors
const cors = require("cors");

//Import Axios
const axios = require("axios");

//Import routes
import { getAllPosts } from "./routes/post";
import  getAllComments  from "./routes/comment";
import { addPost } from "./routes/addPost";
import  addComment  from "./routes/addComment";

//Express application
const app = express();

// define port
const PORT = process.env.PORT;

const corsOptions = {
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200,
};
console.log(process.env.CLIENT_URL);

//Using CORS
app.use(cors(corsOptions));

//Using JSON middleware to parse bodies
app.use(express.json());

// Routes
//Home Route
app.get("/", ( request: Request, response: Response, next: NextFunction) => {
    response.json({ message: "Welcome to the server"});
  });

   app.post("/post", addPost );
  
   app.get("/post", getAllPosts);
  
   app.get("/post/:id/comment", getAllComments);
   
//    app.post("/comment", addComment);
  
   
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
 