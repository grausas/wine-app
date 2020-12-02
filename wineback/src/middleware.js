const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  validateUserData: (req, res, next) => {
    const data = req.body;
    if (!data.email || data.email < 6 || data.email > 256) {
      return res
        .status(400)
        .json({ msg: "Error: Email does not follow the rules" });
    }

    if (!data.password || data.password < 8 || data.password > 64) {
      return res
        .status(400)
        .json({ msg: "Error: Password does not follow the rules" });
    }

    next();
  },

  isLoggedIn: (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
      req.userData = decodedToken;
      next();
    } catch (err) {
      return res.status(401).send({ msg: "Your session is no longer valid" });
    }
  },
};
