import { DataSourceOptions } from "typeorm";
import { user } from "./server/Entities/user";

export const dbOptions : DataSourceOptions = {
  type : "postgres", 
  host : "localhost",
  port : 5432,
  username : "MAHIB1502",
  password : "admin", 
  database : "RestApi1",
  entities : [user],
  synchronize : true, 
  logging : true
};
