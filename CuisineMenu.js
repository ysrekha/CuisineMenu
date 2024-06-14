/*

Requirements - 

Create a menu app that meets the following requirements:

Use at least one array.
Use at least two classes.
Menu should have the options to create, view, and delete elements.

*/


// A class to represent a food item.
class FoodItem {
    constructor(name) {
        this.name = name; // Initialize the food item with a name
    }
}

// A class to represent the menu.
class Menu {
    constructor() {
        this.cuisines = []; // Initialize an array to store cuisines names.
    }

    // Method to start the menu application.
    start() {
        let selection = this.showMainMenuOptions(); // Shows the main menu options to the user.

        
        // Continues displaying the Main menu until the user chooses to exit the loop (selection = 0).
        // switch (selection) calls different methods to create, delete and display the cuisines as well as add, 
        // delete and display all food items within the cuisines depending on the user's selection.

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createCuisine(); 
                    break;
                case '2':
                    this.displayAllCuisine(); 
                    break;
                case '3':
                    this.deleteCuisine(); 
                    break;
                case '4':
                    this.addFoodToCuisine(); 
                    break;
                case '5':
                    this.deleteFoodFromCuisine(); 
                    break;
                default:
                    selection = 0; // Exits the loop.
            }
            selection = this.showMainMenuOptions(); // Shows the main menu options again.
        }

        alert(`Goodbye!`); // Displays a Goodbye! message when exiting the application.
    }

    // Method to display the main menu options and get user input.

    showMainMenuOptions() {
        return prompt(`
        0) Exit
        1) Create new Cuisine
        2) Display all Cuisine
        3) Delete Cuisine
        4) Add Food to Cuisine
        5) Delete Food from Cuisine
        `);              // Returns the user's selection
    }
 

    // Method to create a new cuisine prompts the user to enter the new cuisine name and adds it to the cuisines array.
    // cuisines array/object has a second property -an empty foods array to add food items later.
    createCuisine() {
        let name = prompt('Enter name for new Cuisine:'); 
        this.cuisines.push({ 
            name: name, 
            foods: [] 
        }); console.log(`cuisine ${name} created`);
    }

    // Method to display all cuisines and their associated food items.

    displayAllCuisine() {
        let cuisineString = '';
        for (let i = 1; i <= this.cuisines.length; i++) {
            cuisineString += i + ') ' + this.cuisines[i-1].name + '\n';     // Add cuisine name to the output string
            if (this.cuisines[i-1].foods.length > 0) {
                cuisineString += '   Foods:\n'; // Add header for food items
                for (let j = 1; j <= this.cuisines[i-1].foods.length; j++) {
                    cuisineString += `      ${j}) ${this.cuisines[i-1].foods[j-1].name}\n`; // Add each food item to the output string
                }
            }
        }
        console.log(cuisineString); // Display the cuisine information in the console
    }

    // Method to delete a cuisine prompts the user to enter the index of the cuisine to delete, checks if the index is valid
    // and removes it.
    deleteCuisine() {
        let index = prompt(`Enter the index of the cuisine you wish to delete: `); 
        if ((index > 0) && (index <= this.cuisines.length)) { 
            let deletedCuisine = this.cuisines[index-1].name;
            this.cuisines.splice(index-1, 1); 
            console.log(`${deletedCuisine} is deleted`);
        }    
    }

    // Method to add a food item to a cuisine prompts the user to enter the index of the cuisine, checks if the index is valid
    // then prompts the user to enter the name of the food item, creates a FoodItem object with the given name
    // and adds it to the foods array of the selected cuisine.
    addFoodToCuisine() {
        let cuisineIndex = prompt(`Enter the index of the cuisine you wish to add food to: `); 
        if ((cuisineIndex > 0) && (cuisineIndex <= this.cuisines.length)) { 
            let foodName = prompt(`Enter the name of the food item: `); 
            let foodItem = new FoodItem(foodName); 
            this.cuisines[cuisineIndex-1].foods.push(foodItem);
            console.log (`Food item added`); 
        }
    }

    // Method to delete a food item from a cuisine prompts the user to enter the index of the cuisine and the food item to delete,
    // checks if the indices are valid and removes it from the foods array inside the cuisines array.
    // It also logs the deleted food item as well as index out of range messages to the console.
    deleteFoodFromCuisine() {
        let cuisineIndex = prompt(`Enter the index of the cuisine you wish to delete food from: `); 
        if (cuisineIndex > 0 && cuisineIndex <= this.cuisines.length) { 
            let cuisine = this.cuisines[cuisineIndex-1]; 
            let foodIndex = prompt(`Enter the index of the food item: `); 
            if (foodIndex > 0 && foodIndex <= cuisine.foods.length) { 
                cuisine.foods.splice(foodIndex-1, 1); 
                console.log(`Food item deleted from cuisine.`); 
            } else {
                console.log(`Food item index out of range.`); 
            }
        } else {
            console.log(`Cuisine index out of range.`); 
        }
    }
}

let menu = new Menu(); // Creates a new Menu object
menu.start(); // Start the menu application

