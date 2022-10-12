import { DataSource } from "typeorm";

const DATABASE_URI =
  "postgres://postgres:postgres098234@localhost:5433/manager_db";

const connection = new DataSource({
  type: "postgres",
  url: DATABASE_URI,
  logging: false,
  synchronize: true,
  entities: ["src/entity/*.ts"],
  // extra: {
  //   ssl: {
  //     rejectUnauthorized: true,
  //   },
  // },
});

connection
  .initialize()
  .then(() => {
    console.log(`Conexão ao banco de dados efetuada com sucesso ✅`);
  })
  .catch((err) => {
    console.error(`Erro na conexão com o banco de dados ❌`, err);
  });

export default connection;
