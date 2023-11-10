// Define a function to count and display froyo flavors
function countFlavors() {
    // Get user input from the input field
    const input = document.getElementById('flavorsInput').value;

    // Store the user input in an array for history
    userInputs.push(input);

    // Clear the input field
    document.getElementById('flavorsInput').value = '';

    // Split the input into an array of flavors
    const flavors = input.split(',');

    // Create an object to track flavor counts
    const flavorCounts = {};

    // Iterate through the array of flavors and update the counts
    for (const flavor of flavors) {
        if (flavorCounts[flavor]) {
            flavorCounts[flavor]++;
        } else {
            flavorCounts[flavor] = 1;
        }
    }

    // Display the flavor counts in the table
    const table = document.getElementById('flavorTable').getElementsByTagName('tbody')[0];
    table.innerHTML = '';
    for (const flavor in flavorCounts) {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = flavor;
        cell2.textContent = flavorCounts[flavor];
    }

    // Display the user input history
    const historyList = document.getElementById('inputHistory');
    historyList.innerHTML = '';
    for (const input of userInputs) {
        const listItem = document.createElement('li');
        listItem.textContent = input;
        historyList.appendChild(listItem);
    }
}

// Add an event listener to the button to trigger the counting function
document.getElementById('countButton').addEventListener('click', countFlavors);

// Create an array to store user inputs
const userInputs = [];
