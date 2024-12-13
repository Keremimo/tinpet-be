const jwt = require("jsonwebtoken")

function generateAccessToken(user) {
  // JWT Generation
  return jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "24h",
    }
  )
}

module.exports = generateAccessToken
