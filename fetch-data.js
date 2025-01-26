// Define the async function to fetch user data
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the HTML element where data will be displayed
    const dataContainer = document.getElementById('api-data');

    // Use try-catch to handle the fetch operation and errors
    try {
        // Fetch the data asynchronously from the API
        const response = await fetch(apiUrl);

        // Convert the response to JSON format
        const users = await response.json();

        // Clear the existing loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element to hold the list of users
        const userList = document.createElement('ul');

        // Loop through each user in the users array
        users.forEach(user => {
            // Create a <li> element for each user
            const listItem = document.createElement('li');

            // Set the text content of the <li> to the user's name
            listItem.textContent = user.name;

            // Append the <li> element to the <ul> list
            userList.appendChild(listItem);
        });

        // Append the user list to the dataContainer element
        dataContainer.appendChild(userList);

    } catch (error) {
        // In case of an error, clear the content and display an error message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Add an event listener to call fetchUserData after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
