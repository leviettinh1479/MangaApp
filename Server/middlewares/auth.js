const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token)
      return res.status(401).json({ msg: "No auth token, access denied" });

    const verified = jwt.verify(token, "passwordKey");
    if (!verified)
      return res
        .status(401)
        .json({ msg: "Token verification failed, authorization denied." });

    req.user = verified.id;
    req.token = token;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const authenApp = (req, res, next) => {
  let token = null;
  if (req.headers.authorization &&
      req.headers.authorization.split(' ')[0] == 'Bearer')
      token = req.headers.authorization.split(' ')[1];

  if (token) {
      jwt.verify(token, 'secret', function (error, decoded) {
          if (error) {
              return res.status(401).json({ status: false })
          } else {
              return next();
          }
      })
  } else {
      return res.status(401).json({ status: false })
  }
}
module.exports = {auth, authenApp};
