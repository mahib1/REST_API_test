import express, { Application } from "express";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 3000;

const app : Application= express(); 

export const runApp = () => {
  app.listen(PORT, () => {
    console.log(`App running at : http://localhost:${PORT}`);
  });
};

