const Pet = require("../../models/Pet")

const postAnimal = async (req, res) => {
  try {
    const { entry } = req.body
    console.log(entry)
    Pet.create(entry)
    res.status(200).json({ message: "Successfully posted the new pet." })
  } catch (err) {
    res.status(500).json({ message: "Error posting pet: " + err.message })
  }
}

module.exports = postAnimal
