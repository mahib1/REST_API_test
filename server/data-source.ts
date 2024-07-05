import { DataSource } from "typeorm";
import { dbOptions } from "../ormconfig";

const apiDataSource : DataSource = new DataSource(dbOptions);

export const DataSourceInit = async () => {
  if(!apiDataSource.isInitialized){
    await apiDataSource.initialize()
      .then(() => console.log("Database connected Successfully!"))
      .catch((err) => console.log(`Trouble connecting to Database : \n ${err}`));
  }
}
