const generateAccessToken = require("./accesstoken")
const User = require("../../models/User")

const register = async (req, res) => {
  try {
    const { username, email, password, name } = req.body
    const newUser = new User({
      username: username,
      email: email,
      name: name,
    })

    User.register(newUser, password, (err, user) => {
      if (err) {
        console.error("Registration error:", err)
        return res.status(500).json({
          message: "Error when registering",
          error: err.message,
        })
      }

      // If user is not properly created, return an error
      if (!user) {
        return res.status(500).json({
          message: "User registration failed",
          error: "User object is undefined",
        })
      }

      req.login(user, (loginErr) => {
        if (loginErr) {
          console.error("Login error:", loginErr)
          return res.status(500).json({
            message: "Error logging in after registration",
            error: loginErr.message,
          })
        }

        let token
        try {
          token = generateAccessToken(user)
        } catch (tokenErr) {
          console.error("Token generation error:", tokenErr)
          return res.status(500).json({
            message: "Error generating access token",
            error: tokenErr.message,
          })
        }

        res.status(201).json({
          message: "Registration successful!",
          user: {
            id: user._id,
            username: user.username,
          },
        })
      })
    })
  } catch (err) {
    console.error("Catch block error:", err)
    res.status(500).json({
      message: "Error when registering: ",
      error: err.message,
    })
  }
}

module.exports = register
