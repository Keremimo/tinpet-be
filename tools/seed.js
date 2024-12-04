const Pet = require('../models/Pet.js')
const { v4: uuidv4 } = require('uuid')
require('dotenv').config()
const mongoose = require('mongoose')

async function seedDatabase() {
	const pets = [
		{
			id: uuidv4(),
			name: "Bella",
			age: 3,
			species: "Dog",
			stats: { house: "Large", children: true, trained: true },
			picture: "https://example.com/bella.jpg"
		},
		{
			id: uuidv4(),
			name: "Whiskers",
			age: 2,
			species: "Cat",
			stats: { house: "Apartment", children: false, trained: false },
			picture: "https://example.com/whiskers.jpg"
		},
		{
			id: uuidv4(),
			name: "Charlie",
			age: 4,
			species: "Dog",
			stats: { house: "Medium", children: true, trained: true },
			picture: "https://example.com/charlie.jpg"
		},
		{
			id: uuidv4(),
			name: "Goldie",
			age: 1,
			species: "Fish",
			stats: { house: "Small", children: true, trained: false },
			picture: "https://example.com/goldie.jpg"
		},
		{
			id: uuidv4(),
			name: "Coco",
			age: 2,
			species: "Bird",
			stats: { house: "Apartment", children: false, trained: true },
			picture: "https://example.com/coco.jpg"
		},
		{
			id: uuidv4(),
			name: "Max",
			age: 5,
			species: "Dog",
			stats: { house: "Large", children: true, trained: true },
			picture: "https://example.com/max.jpg"
		},
		{
			id: uuidv4(),
			name: "Mittens",
			age: 3,
			species: "Cat",
			stats: { house: "Apartment", children: false, trained: false },
			picture: "https://example.com/mittens.jpg"
		},
		{
			id: uuidv4(),
			name: "Bubbles",
			age: 1,
			species: "Fish",
			stats: { house: "Small", children: true, trained: false },
			picture: "https://example.com/bubbles.jpg"
		},
		{
			id: uuidv4(),
			name: "Sunny",
			age: 3,
			species: "Bird",
			stats: { house: "Medium", children: false, trained: true },
			picture: "https://example.com/sunny.jpg"
		},
		{
			id: uuidv4(),
			name: "Daisy",
			age: 4,
			species: "Dog",
			stats: { house: "Large", children: true, trained: true },
			picture: "https://example.com/daisy.jpg"
		}
	];

	try {
		// Connect to MongoDB
		mongoose.connect(process.env.MONGO_URI);

		console.log("Connected to the database!");

		// Clear existing data
		await Pet.deleteMany();
		console.log("Existing data cleared!");

		// Insert new data
		await Pet.insertMany(pets);
		console.log("Database seeded successfully!");

		mongoose.connection.close();
	} catch (error) {
		console.error("Error seeding the database:", error);
		mongoose.connection.close();
	}
}

seedDatabase()
