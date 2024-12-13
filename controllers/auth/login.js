const generateAccessToken = require("./accesstoken")

const login = async (req, res) => {
  try {
    if (req.user) {
      const user = req.user
      await user.updateLastLogin()

      const token = generateAccessToken(user)

      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        // sameSite: 'strict', //TODO: make sure this is enabled later in prod
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
      })

      res.json({
        message: "Login successful",
        user: {
          id: user._id,
          username: user.username,
        },
      })
    } else {
      res.status(401).json({ message: "Authentication failed." })
    }
  } catch (err) {
    res.status(500).json({
      message: "Error logging in:",
      error: err.message,
    })
  }
}

module.exports = login
