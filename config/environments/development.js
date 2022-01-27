
module.exports = {
  PORT: process.env.PORT,
  DB: {
    user: "postgres",
    password: "mysecretpassword",
    database: "school_dev",
    host: "localhost",
    dialect: "postgres",
  },
};
