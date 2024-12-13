require("dotenv").config()
const e = require("express")
const session = require("express-session")

const passport = require("passport")
const mongoose = require("mongoose")

const cors = require("cors")
const User = require("./models/User")

const login = require("./controllers/auth/login")
const register = require("./controllers/auth/register")

const findAnimals = require("./controllers/pets/findAnimals")
const getAllAnimals = require("./controllers/pets/getAllAnimals")
const postAnimal = require("./controllers/pets/postAnimal")

const isAuthenticated = require("./middlewares/authcheck")

const app = e()

const port = process.env.PORT

const corsOptions = {
  credentials: true,
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

//TODO: Move middlewares to an exported module later
app.use(e.urlencoded({ extended: true })) // For parsing req.body
app.use(e.json()) // For parsing incoming JSON
app.use(cors(corsOptions))
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      //TODO: Add sameSite later to prevent CSRF
      maxAge: 14 * 24 * 60 * 60 * 1000, //INFO: Expires in 14 days
    },
  })
)

app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB Atlas."))

app.get("/api/v1/pets/get-all", isAuthenticated, getAllAnimals)

app.post("/api/v1/pets/find", findAnimals)

app.post("/api/v1/pets/add", postAnimal)

app.post("/api/v1/logout", async function (req, res, next) {
  try {
    console.log('Logout triggered!')
    res.clearCookie("token", 'deleted')
    res.clearCookie("connect.sid", 'deleted')
    res.status(200).json({ message: "Logout success." })
  } catch (err) {
    console.log(err.toString())
    res.status(500).json({ message: err.toString() })
  }
})

app.post("/api/v1/register", register)

app.post("/api/v1/login", passport.authenticate("local"), login)

app.listen(port, () => {
  console.log(`The pets are up for adoption in the API port ${port}`)
})
