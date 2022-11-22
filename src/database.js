var mysql = require("mysql");

export const pool = mysql.createPool({
  host: "us-cdbr-east-06.cleardb.net",
  user: "bcbbfa23540b29",
  password: "8eedf331",
  database: "heroku_b431d5eb0f8d695",
  port: 3306,
});
