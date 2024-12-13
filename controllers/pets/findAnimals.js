const Pet = require("../../models/Pet")

const findAnimals = async (req, res) => {
  try {
    const { searchParams } = req.body
    console.log(searchParams)
    const foundPets = await Pet.find({ ...searchParams })
    // console.log(foundPets)
    res.status(200).json({ foundPets })
  } catch (err) {
    res.status(500).json({
      message: "An error occurred fetching the data: " + err.message,
    })
  }
}

module.exports = findAnimals
