module.exports = {
  PORT: process.env.PORT,
  DB: {
    user: "postgres",
    password: "mysecretpassword",
    database: "school",
    host: "localhost",
    dialect: "postgres",
  },
};
