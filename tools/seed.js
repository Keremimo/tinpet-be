const Pet = require('../models/Pet.js')
const { v4: uuidv4 } = require('uuid')
require('dotenv').config()
const mongoose = require('mongoose')

async function seedDatabase() {
	const pets = [
		// Dogs
		{
			id: uuidv4(),
			name: "Bella",
			age: 3,
			species: "Dog",
			breed: "Labrador",
			gender: "Female",
			size: "Large",
			stats: { house: "Large", children: true, trained: true, energetic: true, garden: true, independent: false, noise: false },
			picture: "/1.jpg",
			description: "A loving and playful Labrador who excels in family settings, especially in spacious homes."
		},
		{
			id: uuidv4(),
			name: "Max",
			age: 5,
			species: "Dog",
			breed: "German Shepherd",
			gender: "Male",
			size: "Large",
			stats: { house: "Large", children: true, trained: true, energetic: true, garden: true, independent: false, noise: true },
			picture: "/2.jpg",
			description: "A loyal and highly intelligent German Shepherd, perfect for families and large spaces."
		},
		{
			id: uuidv4(),
			name: "Charlie",
			age: 4,
			species: "Dog",
			breed: "Beagle",
			gender: "Male",
			size: "Medium",
			stats: { house: "Medium", children: true, trained: true, energetic: true, garden: true, independent: true, noise: true },
			picture: "/3.jpg",
			description: "A curious and energetic Beagle who loves to explore and is great with kids."
		},
		{
			id: uuidv4(),
			name: "Rocky",
			age: 6,
			species: "Dog",
			breed: "Bulldog",
			gender: "Male",
			size: "Medium",
			stats: { house: "Medium", children: true, trained: false, energetic: false, garden: false, independent: false, noise: false },
			picture: "/4.jpg",
			description: "A calm and lovable Bulldog who's perfect for medium-sized homes and enjoys laid-back living."
		},
		{
			id: uuidv4(),
			name: "Daisy",
			age: 4,
			species: "Dog",
			breed: "Golden Retriever",
			gender: "Female",
			size: "Large",
			stats: { house: "Large", children: true, trained: true, energetic: true, garden: true, independent: false, noise: false },
			picture: "/5.jpg",
			description: "A gentle and friendly Golden Retriever, ideal for families and large homes."
		},
		{
			id: uuidv4(),
			name: "Oliver",
			age: 2,
			species: "Dog",
			breed: "Poodle",
			gender: "Male",
			size: "Medium",
			stats: { house: "Apartment", children: false, trained: true, energetic: false, garden: false, independent: true, noise: false },
			picture: "/6.jpg",
			description: "A smart and stylish Poodle who's perfectly suited for apartments and quieter households."
		},
		{
			id: uuidv4(),
			name: "Teddy",
			age: 5,
			species: "Dog",
			breed: "Boxer",
			gender: "Male",
			size: "Large",
			stats: { house: "Large", children: true, trained: true, energetic: true, garden: true, independent: false, noise: true },
			picture: "/7.jpg",
			description: "A lively Boxer who loves to play and thrives in family-friendly environments."
		},
		{
			id: uuidv4(),
			name: "Milo",
			age: 1,
			species: "Dog",
			breed: "Husky",
			gender: "Male",
			size: "Large",
			stats: { house: "Large", children: false, trained: true, energetic: true, garden: true, independent: true, noise: true },
			picture: "/8.jpg",
			description: "An energetic Husky with a love for adventure, perfect for large homes and active owners."
		},
		{
			id: uuidv4(),
			name: "Luna",
			age: 2,
			species: "Dog",
			breed: "Doberman",
			gender: "Female",
			size: "Medium",
			stats: { house: "Medium", children: false, trained: false, energetic: true, garden: true, independent: true, noise: true },
			picture: "/9.jpg",
			description: "A sleek and alert Doberman who requires an experienced owner and a quiet home."
		},
		{
			id: uuidv4(),
			name: "Bailey",
			age: 3,
			species: "Dog",
			breed: "Corgi",
			gender: "Female",
			size: "Small",
			stats: { house: "Small", children: true, trained: true, energetic: true, garden: false, independent: false, noise: true },
			picture: "/10.jpg",
			description: "A cheerful Corgi who brings happiness to any small home or family."
		},
		{
			id: uuidv4(),
			name: "Buddy",
			age: 4,
			species: "Dog",
			breed: "Dalmatian",
			gender: "Male",
			size: "Medium",
			stats: { house: "Medium", children: true, trained: true, energetic: true, garden: true, independent: false, noise: true },
			picture: "/11.jpg",
			description: "An active and friendly Dalmatian who loves playtime and makes a great family pet."
		},
		{
			id: uuidv4(),
			name: "Zoe",
			age: 6,
			species: "Dog",
			breed: "Shiba Inu",
			gender: "Female",
			size: "Medium",
			stats: { house: "Apartment", children: false, trained: true, energetic: false, garden: false, independent: true, noise: false },
			picture: "/12.jpg",
			description: "An independent and intelligent Shiba Inu who thrives in quiet apartment living."
		},
		{
			id: uuidv4(),
			name: "Finn",
			age: 3,
			species: "Dog",
			breed: "Mastiff",
			gender: "Male",
			size: "Large",
			stats: { house: "Large", children: true, trained: false, energetic: false, garden: true, independent: false, noise: false },
			picture: "/13.jpg",
			description: "A gentle giant with a protective nature, perfect for large homes and families."
		},
		{
			id: uuidv4(),
			name: "Rex",
			age: 2,
			species: "Dog",
			breed: "Rottweiler",
			gender: "Male",
			size: "Large",
			stats: { house: "Medium", children: false, trained: true, energetic: true, garden: true, independent: true, noise: true },
			picture: "/14.jpg",
			description: "A confident and well-trained Rottweiler, ideal for experienced owners in medium homes."
		},
		{
			id: uuidv4(),
			name: "Pedro",
			age: 1,
			species: "Dog",
			breed: "Chihuahua",
			gender: "Male",
			size: "Small",
			stats: { house: "Apartment", children: false, trained: true, energetic: false, garden: false, independent: true, noise: true },
			picture: "/15.jpg",
			description: "A spunky Chihuahua who's great for apartment living and loves one-on-one attention."
		},
		{
			id: uuidv4(),
			name: "Ruby",
			age: 3,
			species: "Dog",
			breed: "Samoyed",
			gender: "Female",
			size: "Medium",
			stats: { house: "Medium", children: true, trained: true, energetic: true, garden: true, independent: false, noise: false },
			picture: "/16.jpg",
			description: "A fluffy and affectionate Samoyed who's perfect for families and medium-sized homes."
		},
		{
			id: uuidv4(),
			name: "Shadow",
			age: 5,
			species: "Dog",
			breed: "Great Dane",
			gender: "Male",
			size: "Large",
			stats: { house: "Large", children: true, trained: false, energetic: false, garden: true, independent: false, noise: true },
			picture: "/17.jpg",
			description: "A gentle Great Dane who needs a large space and patient training to shine."
		},
		{
			id: uuidv4(),
			name: "Ginger",
			age: 2,
			species: "Dog",
			breed: "Border Collie",
			gender: "Female",
			size: "Large",
			stats: { house: "Large", children: true, trained: true, energetic: true, garden: true, independent: true, noise: false },
			picture: "/18.jpg",
			description: "An energetic and intelligent Border Collie, great for families and active lifestyles."
		},
		{
			id: uuidv4(),
			name: "Jake",
			age: 6,
			species: "Dog",
			breed: "Terrier",
			gender: "Male",
			size: "Medium",
			stats: { house: "Medium", children: false, trained: false, energetic: true, garden: true, independent: true, noise: true },
			picture: "/19.jpg",
			description: "A scrappy Terrier with a lot of personality, ideal for a dedicated and active owner."
		},
		{
			id: uuidv4(),
			name: "Ellie",
			age: 4,
			species: "Dog",
			breed: "Yorkshire Terrier",
			gender: "Female",
			size: "Small",
			stats: { house: "Small", children: true, trained: true, energetic: false, garden: false, independent: false, noise: true },
			picture: "/20.jpg",
			description: "A charming Yorkshire Terrier who's great with kids and fits perfectly into small homes."
		},

		// Cats (10 items)
		{
			id: uuidv4(),
			name: "Whiskers",
			age: 2,
			species: "Cat",
			breed: "Persian",
			gender: "Male",
			size: "Medium",
			stats: { house: "Apartment", children: false, trained: false, energetic: false, garden: false, independent: true, noise: false },
			picture: "/21.jpg",
			description: "A quiet and regal Persian cat who enjoys the calm and peace of apartment living."
		},
		{
			id: uuidv4(),
			name: "Mittens",
			age: 3,
			species: "Cat",
			breed: "Siamese",
			gender: "Female",
			size: "Medium",
			stats: { house: "Medium", children: true, trained: false, energetic: true, garden: false, independent: false, noise: true },
			picture: "/22.jpg",
			description: "A talkative and playful Siamese who thrives in family environments with moderate space."
		},
		{
			id: uuidv4(),
			name: "Luna",
			age: 4,
			species: "Cat",
			breed: "Maine Coon",
			gender: "Female",
			size: "Large",
			stats: { house: "Large", children: true, trained: true, energetic: false, garden: true, independent: true, noise: false },
			picture: "/23.jpg",
			description: "A gentle giant with a loving personality, perfect for large homes with children."
		},
		{
			id: uuidv4(),
			name: "Oscar",
			age: 5,
			species: "Cat",
			breed: "Bengal",
			gender: "Male",
			size: "Medium",
			stats: { house: "Apartment", children: false, trained: false, energetic: true, garden: false, independent: true, noise: false },
			picture: "/24.jpg",
			description: "A bold and energetic Bengal cat who enjoys independence and suits a quiet, adult-only home."
		},
		{
			id: uuidv4(),
			name: "Simba",
			age: 6,
			species: "Cat",
			breed: "Ragdoll",
			gender: "Male",
			size: "Large",
			stats: { house: "Large", children: true, trained: true, energetic: false, garden: true, independent: false, noise: false },
			picture: "/25.jpg",
			description: "A friendly and laid-back Ragdoll, great for large homes and families with children."
		},
		{
			id: uuidv4(),
			name: "Chloe",
			age: 3,
			species: "Cat",
			breed: "Siberian",
			gender: "Female",
			size: "Medium",
			stats: { house: "Medium", children: true, trained: true, energetic: true, garden: true, independent: false, noise: false },
			picture: "/26.jpg",
			description: "An affectionate Siberian who loves family life and is comfortable in medium-sized homes."
		},
		{
			id: uuidv4(),
			name: "Daisy",
			age: 4,
			species: "Cat",
			breed: "Scottish Fold",
			gender: "Female",
			size: "Small",
			stats: { house: "Small", children: true, trained: false, energetic: false, garden: false, independent: true, noise: false },
			picture: "/27.jpg",
			description: "A sweet and calm Scottish Fold, perfect for smaller homes and families who can provide a quiet environment."
		},
		{
			id: uuidv4(),
			name: "Tom",
			age: 5,
			species: "Cat",
			breed: "Abyssinian",
			gender: "Male",
			size: "Large",
			stats: { house: "Large", children: false, trained: false, energetic: true, garden: true, independent: true, noise: false },
			picture: "/28.jpg",
			description: "An energetic Abyssinian, suited for larger homes where he can explore and play freely."
		},
		{
			id: uuidv4(),
			name: "Lily",
			age: 1,
			species: "Cat",
			breed: "Turkish Angora",
			size: "Medium",
			gender: "Female",
			stats: { house: "Small", children: true, trained: false, energetic: false, garden: false, independent: true, noise: false },
			picture: "/29.jpg",
			description:
				"A playful and elegant Turkish Angora, ideal for families with children and medium-sized homes."
		},
		{
			id: uuidv4(),
			name: "Leo",
			age: 2,
			species: "Cat",
			breed: "British Shorthair",
			size: "Medium",
			gender: "Male",
			stats: { house: "Medium", children: true, trained: true, energetic: true, garden: true, independent: false, noise: false },
			picture: "/30.jpg",
			description:
				"A calm and independent British Shorthair, perfect for apartment living and adults."
		},


		// Birds
		{
			id: uuidv4(),
			name: "Tweety",
			age: 1,
			species: "Bird",
			breed: "Canary",
			gender: "Female",
			size: "Large",
			stats: {
				house: "Large",
				children: true,
				trained: true,
				energetic: false,
				garden: true,
				independent: true,
				noise: false
			},
			picture: "/31.jpg",
			description: "A sweet and cheerful Canary, perfect for a lively apartment with children."
		},
		{
			id: uuidv4(),
			name: "Sky",
			age: 2,
			species: "Bird",
			breed: "Parakeet",
			gender: "Male",
			size: "Small",
			stats: {
				house: "Small",
				children: true,
				trained: false,
				energetic: true,
				garden: false,
				independent: true,
				noise: true
			},
			picture: "/32.jpg",
			description: "A playful and colorful Parakeet, great for small homes and families with kids."
		},
		{
			id: uuidv4(),
			name: "Rio",
			age: 3,
			species: "Bird",
			breed: "Macaw",
			gender: "Male",
			size: "Large",
			stats: {
				house: "Large",
				children: true,
				trained: true,
				energetic: true,
				garden: true,
				independent: false,
				noise: true
			},
			picture: "/33.jpg",
			description: "A vibrant Macaw with a friendly personality, ideal for large homes and active families."
		},
		{
			id: uuidv4(),
			name: "Sunny",
			age: 1,
			species: "Bird",
			breed: "Cockatiel",
			gender: "Female",
			size: "Medium",
			stats: {
				house: "Medium",
				children: true,
				trained: true,
				energetic: false,
				garden: true,
				independent: false,
				noise: false
			},
			picture: "/34.jpg",
			description: "A charming and sociable Cockatiel, perfect for families with children and medium-sized homes."
		},
		{
			id: uuidv4(),
			name: "Polly",
			age: 4,
			species: "Bird",
			breed: "African Grey Parrot",
			gender: "Female",
			size: "Large",
			stats: {
				house: "Large",
				children: false,
				trained: true,
				energetic: false,
				garden: false,
				independent: true,
				noise: true
			},
			picture: "/35.jpg",
			description: "An intelligent and talkative African Grey Parrot, great for experienced owners in spacious homes."
		},
		{
			id: uuidv4(),
			name: "Buddy",
			age: 2,
			species: "Bird",
			breed: "Cockatoo",
			gender: "Male",
			size: "Medium",
			stats: {
				house: "Medium",
				children: false,
				trained: true,
				energetic: true,
				garden: false,
				independent: false,
				noise: true
			},
			picture: "/36.jpg",
			description: "A loving and playful Cockatoo, best suited for medium-sized homes without young children."
		},
		{
			id: uuidv4(),
			name: "Coco",
			age: 3,
			species: "Bird",
			breed: "Conure",
			gender: "Female",
			size: "Small",
			stats: {
				house: "Small",
				children: true,
				trained: false,
				energetic: true,
				garden: true,
				independent: true,
				noise: true
			},
			picture: "/37.jpg",
			description: "A colorful and energetic Conure, perfect for small homes and families with kids."
		},
		{
			id: uuidv4(),
			name: "Jasper",
			age: 5,
			species: "Bird",
			breed: "Budgie",
			gender: "Male",
			size: "Small",
			stats: {
				house: "Apartment",
				children: false,
				trained: false,
				energetic: false,
				garden: false,
				independent: true,
				noise: false
			},
			picture: "/38.jpg",
			description: "A friendly and charming Budgie, ideal for apartment living and people who enjoy a quiet bird companion."
		},
		{
			id: uuidv4(),
			name: "Pepper",
			age: 4,
			species: "Bird",
			breed: "Lovebird",
			gender: "Female",
			size: "Small",
			stats: {
				house: "Small",
				children: true,
				trained: true,
				energetic: true,
				garden: false,
				independent: false,
				noise: false
			},
			picture: "/39.jpg",
			description: "A cute and affectionate Lovebird, great for small homes and families with children."
		},
		{
			id: uuidv4(),
			name: "Blue",
			age: 2,
			species: "Bird",
			breed: "Quaker Parrot",
			gender: "Male",
			size: "Medium",
			stats: {
				house: "Medium",
				children: false,
				trained: true,
				energetic: true,
				garden: false,
				independent: true,
				noise: true
			},
			picture: "/40.jpg",
			description: "A playful and intelligent Quaker Parrot, best suited for medium homes and adult owners."
		},

		// Fish
		{
			id: uuidv4(),
			name: "Goldie",
			age: 1,
			species: "Fish",
			breed: "Goldfish",
			gender: "Female",
			size: "Small",
			stats: {
				house: "Small",
				children: false,
				trained: false,
				energetic: false,
				garden: false,
				independent: true,
				noise: false
			},
			picture: "/41.jpg",
			description: "A bright and graceful Goldfish, perfect for small spaces with minimal maintenance."
		},
		{
			id: uuidv4(),
			name: "Bubbles",
			age: 2,
			species: "Fish",
			breed: "Betta Fish",
			gender: "Male",
			size: "Small",
			stats: {
				house: "Small",
				children: false,
				trained: true,
				energetic: false,
				garden: false,
				independent: true,
				noise: false
			},
			picture: "/42.jpg",
			description: "A beautiful and vibrant Betta Fish, ideal for small tanks and perfect for calm, solo environments."
		},
		{
			id: uuidv4(),
			name: "Finn",
			age: 1,
			species: "Fish",
			breed: "Guppy",
			gender: "Male",
			size: "Small",
			stats: {
				house: "Small",
				children: true,
				trained: false,
				energetic: true,
				garden: false,
				independent: true,
				noise: false
			},
			picture: "/43.jpg",
			description: "A lively and colorful Guppy, great for families with children and small tanks."
		},
		{
			id: uuidv4(),
			name: "Nemo",
			age: 3,
			species: "Fish",
			breed: "Clownfish",
			gender: "Male",
			size: "Small",
			stats: {
				house: "Small",
				children: true,
				trained: false,
				energetic: true,
				garden: false,
				independent: true,
				noise: false
			},
			picture: "/44.jpg",
			description: "A charming Clownfish, perfect for small aquariums and ideal for families with children."
		},
		{
			id: uuidv4(),
			name: "Aqua",
			age: 2,
			species: "Fish",
			breed: "Angelfish",
			gender: "Female",
			size: "Medium",
			stats: {
				house: "Medium",
				children: false,
				trained: false,
				energetic: false,
				garden: false,
				independent: true,
				noise: false
			},
			picture: "/45.jpg",
			description: "A graceful Angelfish, suited for medium-sized tanks and calm, peaceful environments."
		},
		{
			id: uuidv4(),
			name: "Marlin",
			age: 3,
			species: "Fish",
			breed: "Neon Tetra",
			gender: "Male",
			size: "Small",
			stats: {
				house: "Small",
				children: false,
				trained: false,
				energetic: true,
				garden: false,
				independent: true,
				noise: false
			},
			picture: "/46.jpg",
			description: "A small but striking Neon Tetra, perfect for small tanks and peaceful water environments."
		},
		{
			id: uuidv4(),
			name: "Splash",
			age: 1,
			species: "Fish",
			breed: "Betta",
			gender: "Female",
			size: "Small",
			stats: {
				house: "Small",
				children: true,
				trained: false,
				energetic: true,
				garden: false,
				independent: true,
				noise: false
			},
			picture: "/47.jpg",
			description: "A vibrant and energetic Betta, best for small tanks in a family-friendly environment."
		},
		{
			id: uuidv4(),
			name: "Coral",
			age: 2,
			species: "Fish",
			breed: "Guppy",
			gender: "Female",
			size: "Small",
			stats: {
				house: "Small",
				children: true,
				trained: true,
				energetic: true,
				garden: false,
				independent: true,
				noise: false
			},
			picture: "/48.jpg",
			description: "A colorful and playful Guppy, ideal for small homes with children and easy to care for."
		},
		{
			id: uuidv4(),
			name: "Whiskers",
			age: 3,
			species: "Fish",
			breed: "Swordtail",
			gender: "Male",
			size: "Medium",
			stats: {
				house: "Medium",
				children: true,
				trained: true,
				energetic: true,
				garden: false,
				independent: true,
				noise: false
			},
			picture: "/49.jpg",
			description: "A lively Swordtail, great for medium-sized tanks and perfect for families with kids."
		},
		{
			id: uuidv4(),
			name: "Rainbow",
			age: 2,
			species: "Fish",
			breed: "Zebra Danio",
			gender: "Female",
			size: "Small",
			stats: {
				house: "Small",
				children: true,
				trained: true,
				energetic: true,
				garden: false,
				independent: true,
				noise: false
			},
			picture: "/50.jpg",
			description: "A playful and colorful Zebra Danio, ideal for small tanks and family-friendly environments."
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
