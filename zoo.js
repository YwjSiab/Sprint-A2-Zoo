// Declaring variables for different animal species
const elephants = 4; // Number of elephants in the zoo.
const tigers = 2; // Number of tigers in the zoo.
const pandas = 3; // Number of pandas in the zoo.

console.log("Number of Elephants:", elephants);
console.log("Number of Tigers:", tigers);
console.log("Number of Pandas:", pandas);

// Calculate total number of animals in the zoo
const totalAnimals = elephants + tigers + pandas; // Calculate total number of animals
console.log("Total number of animals in the zoo:", totalAnimals);

console.log("String Conversion:", String(totalAnimals));
console.log("Boolean Conversion:", Boolean(totalAnimals));

let zooOpen = true; // Initial zoo status (open)
zooOpen = !zooOpen;// Toggle zoo status
console.log("Is the zoo open?", zooOpen ? "Yes" : "No");

// Step 1: Create an array to store animal objects
const animals = [];

// Step 2: Create animal objects and push them into the array
// Each object represents an animal with properties like id, name, species, count, gender, and status
animals.push({ id: 1, name: 'Ellie', species: 'Elephant', count: 3, gender: 'Female', status: 'open' });
animals.push({ id: 2, name: 'Tony', species: 'Tiger', count: 2, gender: 'Male', status: 'closed' });
animals.push({ id: 3, name: 'Panda', species: 'Panda', count: 4, gender: 'Male', status: 'open' });

// Output the entire array to verify structure
console.table(animals);

// Step 3: Add a new animal using push
// push() adds an element to the end of an array
animals.push({ id: 4, name: 'Leo', species: 'Lion', count: 5, gender: 'Male', status: 'open' });
console.table(animals);

// Step 4: Remove an animal using slice (returns a new array without the second animal)
// slice() returns a shallow copy of a portion of an array without modifying the original array
const updatedAnimals = animals.slice(0, 1).concat(animals.slice(2));
console.table(updatedAnimals);

// Step 5: Filter animals by status
// filter() creates a new array with all elements that pass a test
const openAnimals = updatedAnimals.filter(animal => animal.status === 'open');
console.table(openAnimals);

// Step 6: Modify properties
// Access object properties using dot notation and assign a new value
updatedAnimals[0].count = 5; // Update count
updatedAnimals[1].status = 'open'; // Update status
console.table(updatedAnimals);

// Part 2: Interactive Features

// Zoo Statistics
// Function to calculate and display total number of animals, and number of open vs closed species
function displayZooStatistics() {
  const totalAnimals = updatedAnimals.reduce((sum, animal) => sum + animal.count, 0);
  const openSpecies = updatedAnimals.filter(animal => animal.status === 'open').length;
  const closedSpecies = updatedAnimals.filter(animal => animal.status === 'closed').length;

  console.log(`Total Number of Animals: ${totalAnimals}`);
  console.log(`Number of Open Species: ${openSpecies}`);
  console.log(`Number of Closed Species: ${closedSpecies}`);
}
displayZooStatistics();

// Search and Filter Functionality
// Function to search for an animal by name using find() method
// find() returns the first element that satisfies a condition
function searchAnimalByName(name) {
  const result = updatedAnimals.find(animal => animal.name.toLowerCase() === name.toLowerCase());
  console.log(result ? result : 'Animal not found');
}

// Function to filter animals by status using filter() method
function filterAnimalsByStatus(status) {
  const result = updatedAnimals.filter(animal => animal.status === status);
  console.table(result);
}

searchAnimalByName('Ellie'); // Example search
filterAnimalsByStatus('open'); // Example filter

// Part 3: Display and User Interaction
// Final console log to confirm the system is loaded
console.log('Zoo Data Management System Loaded');
