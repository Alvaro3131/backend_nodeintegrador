import { verify } from "jsonwebtoken";

const secret = "leidy-decret-access-token";
const refreshTokenSecret = "leidy-decret-refresh-access-token";

export function checkToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    const token = bearerToken;
    verify(token, secret, (err, decoded) => {
      if (err) {
        res.json({
          success: 0,
          message: "Invalid token",
        });
      } else {
        next();
      }
    });
  } else {
    res.json({
      success: 0,
      message: "Access denied unautorized user",
    });
  }
}
