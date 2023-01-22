const { verifyToken } = require("./jwt");
const jwwt = require("jsonwebtoken");

const requrieAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ msg: "No token, authorization denied" });

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

   jwwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ msg: "Token is not valid" });
    req.user = user;
     next();
   })

};

module.exports = requrieAuth;
