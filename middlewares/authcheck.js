function isAuthenticated(req, res, next) {
  console.log(req.user)
  if (req.user) {
    console.log("Authenticated successfully")
    return next()
  }
  console.log("Not authenticated!")
  return res.redirect("/login")
}

module.exports = isAuthenticated
