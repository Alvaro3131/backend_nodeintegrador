import mysql from "mysql";

export const pool = mysql.createPool({
  host: "monorail.proxy.rlwy.net",
  user: "root",
  password: "HEnoDMGmkJJOpejrKYQwtijWxKGPcChd",
  database: "bd_ppp_nutricion",
  port: 18946,
});
