const Pet = require("../../models/Pet")

const getAllAnimals = async (req, res) => {
  try {
    const petList = await Pet.find({})
    res.status(200).json(petList)
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching pets: ", error: err.message })
  }
}

module.exports = getAllAnimals
