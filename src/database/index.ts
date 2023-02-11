import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "postgres",
  host: "database",
  username: "admin",
  password: "admin",
  database: "rentx",
  migrations: ["./src/database/migrations/*.ts"],
  entities: ["./src/modules/**/models/*.ts"],
});

dataSource
  .initialize()
  .then(() => {
    console.log("DB initialized...");
  })
  .catch((err) => {
    console.log(err);
  });

export default dataSource;
