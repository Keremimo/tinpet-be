const Pet = require('../models/Pet.js')
const { v4: uuidv4 } = require('uuid')
require('dotenv').config()
const mongoose = require('mongoose')

async function seedDatabase() {
	const pets = [
		// Dogs
		{ id: uuidv4(), name: "Bella", age: 3, species: "Dog", breed: "Labrador", gender: "Female", stats: { house: "Large", children: true, trained: true }, picture: "1.jpg" },
		{ id: uuidv4(), name: "Max", age: 5, species: "Dog", breed: "German Shepherd", gender: "Male", stats: { house: "Large", children: true, trained: true }, picture: "2.jpg" },
		{ id: uuidv4(), name: "Charlie", age: 4, species: "Dog", breed: "Beagle", gender: "Male", stats: { house: "Medium", children: true, trained: true }, picture: "3.jpg" },
		{ id: uuidv4(), name: "Rocky", age: 6, species: "Dog", breed: "Bulldog", gender: "Male", stats: { house: "Medium", children: true, trained: false }, picture: "4.jpg" },
		{ id: uuidv4(), name: "Daisy", age: 4, species: "Dog", breed: "Golden Retriever", gender: "Female", stats: { house: "Large", children: true, trained: true }, picture: "5.jpg" },
		{ id: uuidv4(), name: "Oliver", age: 2, species: "Dog", breed: "Poodle", gender: "Male", stats: { house: "Apartment", children: false, trained: true }, picture: "6.jpg" },
		{ id: uuidv4(), name: "Teddy", age: 5, species: "Dog", breed: "Boxer", gender: "Male", stats: { house: "Large", children: true, trained: true }, picture: "7.jpg" },
		{ id: uuidv4(), name: "Milo", age: 1, species: "Dog", breed: "Husky", gender: "Male", stats: { house: "Large", children: false, trained: true }, picture: "8.jpg" },
		{ id: uuidv4(), name: "Luna", age: 2, species: "Dog", breed: "Doberman", gender: "Female", stats: { house: "Medium", children: false, trained: false }, picture: "9.jpg" },
		{ id: uuidv4(), name: "Bailey", age: 3, species: "Dog", breed: "Corgi", gender: "Female", stats: { house: "Small", children: true, trained: true }, picture: "10.jpg" },
		{ id: uuidv4(), name: "Buddy", age: 4, species: "Dog", breed: "Dalmatian", gender: "Male", stats: { house: "Medium", children: true, trained: true }, picture: "11.jpg" },
		{ id: uuidv4(), name: "Zoe", age: 6, species: "Dog", breed: "Shiba Inu", gender: "Female", stats: { house: "Apartment", children: false, trained: true }, picture: "12.jpg" },
		{ id: uuidv4(), name: "Finn", age: 3, species: "Dog", breed: "Mastiff", gender: "Male", stats: { house: "Large", children: true, trained: false }, picture: "13.jpg" },
		{ id: uuidv4(), name: "Rex", age: 2, species: "Dog", breed: "Rottweiler", gender: "Male", stats: { house: "Medium", children: false, trained: true }, picture: "14.jpg" },
		{ id: uuidv4(), name: "Pedro", age: 1, species: "Dog", breed: "Chihuahua", gender: "Male", stats: { house: "Apartment", children: false, trained: true }, picture: "15.jpg" },
		{ id: uuidv4(), name: "Ruby", age: 3, species: "Dog", breed: "Samoyed", gender: "Female", stats: { house: "Medium", children: true, trained: true }, picture: "16.jpg" },
		{ id: uuidv4(), name: "Shadow", age: 5, species: "Dog", breed: "Great Dane", gender: "Male", stats: { house: "Large", children: true, trained: false }, picture: "17.jpg" },
		{ id: uuidv4(), name: "Ginger", age: 2, species: "Dog", breed: "Border Collie", gender: "Female", stats: { house: "Large", children: true, trained: true }, picture: "18.jpg" },
		{ id: uuidv4(), name: "Jake", age: 6, species: "Dog", breed: "Terrier", gender: "Male", stats: { house: "Medium", children: false, trained: false }, picture: "19.jpg" },
		{ id: uuidv4(), name: "Ellie", age: 4, species: "Dog", breed: "Yorkshire Terrier", gender: "Female", stats: { house: "Small", children: true, trained: true }, picture: "20.jpg" },

		// Cats
		{ id: uuidv4(), name: "Whiskers", age: 2, species: "Cat", breed: "Persian", gender: "Male", stats: { house: "Apartment", children: false, trained: false }, picture: "21.jpg" },
		{ id: uuidv4(), name: "Mittens", age: 3, species: "Cat", breed: "Siamese", gender: "Female", stats: { house: "Medium", children: true, trained: false }, picture: "22.jpg" },
		{ id: uuidv4(), name: "Luna", age: 4, species: "Cat", breed: "Maine Coon", gender: "Female", stats: { house: "Large", children: true, trained: true }, picture: "23.jpg" },
		{ id: uuidv4(), name: "Oscar", age: 5, species: "Cat", breed: "Bengal", gender: "Male", stats: { house: "Apartment", children: false, trained: false }, picture: "24.jpg" },
		{ id: uuidv4(), name: "Simba", age: 6, species: "Cat", breed: "Ragdoll", gender: "Male", stats: { house: "Large", children: true, trained: true }, picture: "25.jpg" },
		{ id: uuidv4(), name: "Chloe", age: 3, species: "Cat", breed: "Siberian", gender: "Female", stats: { house: "Medium", children: true, trained: true }, picture: "26.jpg" },
		{ id: uuidv4(), name: "Daisy", age: 4, species: "Cat", breed: "Scottish Fold", gender: "Female", stats: { house: "Small", children: true, trained: false }, picture: "27.jpg" },
		{ id: uuidv4(), name: "Tom", age: 5, species: "Cat", breed: "Abyssinian", gender: "Male", stats: { house: "Large", children: false, trained: false }, picture: "28.jpg" },
		{ id: uuidv4(), name: "Lily", age: 1, species: "Cat", breed: "Turkish Angora", gender: "Female", stats: { house: "Medium", children: true, trained: true }, picture: "29.jpg" },
		{ id: uuidv4(), name: "Leo", age: 2, species: "Cat", breed: "British Shorthair", gender: "Male", stats: { house: "Apartment", children: false, trained: true }, picture: "30.jpg" },

		// Birds
		{ id: uuidv4(), name: "Tweety", age: 1, species: "Bird", breed: "Canary", gender: "Female", stats: { house: "Apartment", children: true, trained: false }, picture: "31.jpg" },
		{ id: uuidv4(), name: "Sky", age: 2, species: "Bird", breed: "Parakeet", gender: "Male", stats: { house: "Small", children: true, trained: false }, picture: "32.jpg" },
		{ id: uuidv4(), name: "Rio", age: 3, species: "Bird", breed: "Macaw", gender: "Male", stats: { house: "Large", children: true, trained: true }, picture: "33.jpg" },
		{ id: uuidv4(), name: "Sunny", age: 1, species: "Bird", breed: "Cockatiel", gender: "Female", stats: { house: "Medium", children: true, trained: true }, picture: "34.jpg" },
		{ id: uuidv4(), name: "Polly", age: 4, species: "Bird", breed: "African Grey Parrot", gender: "Female", stats: { house: "Large", children: false, trained: true }, picture: "35.jpg" },
		{ id: uuidv4(), name: "Buddy", age: 2, species: "Bird", breed: "Cockatoo", gender: "Male", stats: { house: "Medium", children: false, trained: true }, picture: "36.jpg" },
		{ id: uuidv4(), name: "Coco", age: 3, species: "Bird", breed: "Conure", gender: "Female", stats: { house: "Small", children: true, trained: false }, picture: "37.jpg" },
		{ id: uuidv4(), name: "Jasper", age: 5, species: "Bird", breed: "Budgie", gender: "Male", stats: { house: "Apartment", children: false, trained: false }, picture: "38.jpg" },
		{ id: uuidv4(), name: "Pepper", age: 4, species: "Bird", breed: "Lovebird", gender: "Female", stats: { house: "Small", children: true, trained: true }, picture: "39.jpg" },
		{ id: uuidv4(), name: "Blue", age: 2, species: "Bird", breed: "Quaker Parrot", gender: "Male", stats: { house: "Medium", children: false, trained: true }, picture: "40.jpg" },

		// Fish
		{ id: uuidv4(), name: "Goldie", age: 1, species: "Fish", breed: "Goldfish", gender: "Female", stats: { house: "Small", children: false, trained: false }, picture: "41.jpg" },
		{ id: uuidv4(), name: "Bubbles", age: 2, species: "Fish", breed: "Betta Fish", gender: "Male", stats: { house: "Small", children: false, trained: true }, picture: "42.jpg" },
		{ id: uuidv4(), name: "Finn", age: 1, species: "Fish", breed: "Guppy", gender: "Male", stats: { house: "Small", children: true, trained: false }, picture: "43.jpg" },
		{ id: uuidv4(), name: "Nemo", age: 3, species: "Fish", breed: "Clownfish", gender: "Male", stats: { house: "Small", children: true, trained: false }, picture: "44.jpg" },
		{ id: uuidv4(), name: "Aqua", age: 2, species: "Fish", breed: "Angelfish", gender: "Female", stats: { house: "Medium", children: false, trained: false }, picture: "45.jpg" },
		{ id: uuidv4(), name: "Marlin", age: 3, species: "Fish", breed: "Neon Tetra", gender: "Male", stats: { house: "Small", children: false, trained: false }, picture: "46.jpg" },
		{ id: uuidv4(), name: "Splash", age: 1, species: "Fish", breed: "Betta", gender: "Female", stats: { house: "Small", children: true, trained: false }, picture: "47.jpg" },
		{ id: uuidv4(), name: "Coral", age: 2, species: "Fish", breed: "Guppy", gender: "Female", stats: { house: "Small", children: true, trained: true }, picture: "48.jpg" },
		{ id: uuidv4(), name: "Whiskers", age: 3, species: "Fish", breed: "Swordtail", gender: "Male", stats: { house: "Medium", children: true, trained: true }, picture: "49.jpg" },
		{ id: uuidv4(), name: "Rainbow", age: 2, species: "Fish", breed: "Zebra Danio", gender: "Female", stats: { house: "Small", children: true, trained: true }, picture: "50.jpg" }
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
