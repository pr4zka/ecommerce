const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/index");

const generateToken = async (user) => {
  const token = await jwt.sign({ id: user.id }, JWT_SECRET, {
    expiresIn: "7d",
  });
  return token;
};

const verifyToken = async (user) => {
  const token = await jwt.verify(user, JWT_SECRET);
  return token;
};

module.exports = {
  generateToken,
  verifyToken,
};
