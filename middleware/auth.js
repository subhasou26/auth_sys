// middleware/auth.js
const jwt = require("jsonwebtoken");


require("dotenv").config();

const auth = (req, res, next) => {
 
  const accesstoken = req.cookies.accessToken;

  if (!accesstoken) {
    if (renewToken(req, res)) {
      next();
    }
  } else {
    try {
      const decoded = jwt.verify(accesstoken, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({ msg: "Token is not valid" });
    }
  }
};

const adminAuth = (req, res, next) => {
  if (req.user.role !== "admin")
    return res.status(403).json({ msg: "Access denied" });
  next();
};
const municipal = (req, res, next) => {
  if (req.user.role == "municipal") {
    next();
  } else {
    return res.status(403).json({ msg: "Access denied" });
  }
};

const public = (req, res, next) => {
  if (req.user.role == "public") {
    next();
  } else {
    return res.status(403).json({ msg: "Access denied" });
  }
};


const renewToken = (req, res) => {
  const refreshtoken = req.cookies.refreshToken;
  let exist = false;
  if(!refreshtoken) {
      return res.json({valid: false, message: "No Refresh token"})
  } else {
      jwt.verify(refreshtoken,process.env.JWT_REFRESH_TOKEN, (err ,decoded) => {
          if(err) {
              return res.json({valid: false, message: "Invalid Refresh Token"})
          } else {
            const accessToken = jwt.sign(
              { id: decoded._id, role: decoded.role },
              process.env.JWT_SECRET,
              { expiresIn: "1h" }
            );
          req.user = decoded;

            res.cookie('accessToken', accessToken, {maxAge: 60000})
              exist = true;
          }
      })
  }
  return exist;
}
module.exports = { auth, adminAuth, municipal, public };
