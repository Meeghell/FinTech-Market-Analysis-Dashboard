document.addEventListener('DOMContentLoaded', function() {
    // This event listener ensures that the script runs after the DOM content is fully loaded.
    const loadDataButton = document.getElementById('loadDataButton');
    loadDataButton.addEventListener('click', fetchData);
});

function fetchData() {
    // This function gets called when the user clicks the 'Load Data' button.
    const dataType = document.getElementById('dataTypeSelect').value;
    const displayDiv = document.getElementById('dataDisplay');

    // Display a loading message in the dataDisplay div while fetching data.
    displayDiv.innerHTML = '<p>Loading data...</p>';

    // Determine which API URL to use based on the data type selected in the dropdown.
    let apiUrl;
    if (dataType === 'stocks') {
        apiUrl = 'https://paper-api.alpaca.markets/v2/stocks'; // Modify as needed
    } else if (dataType === 'crypto') {
        apiUrl = 'https://paper-api.alpaca.markets/v2/crypto'; // Modify as needed
    }

    // Prepare headers for the API request including API keys for authentication.
    // This is a critical security concern if done in client-side code in production.
    const headers = new Headers({
        'APCA-API-KEY-ID': 'PKHRIE1T8QEDTBN7ONLV',
        'APCA-API-SECRET-KEY': 'nB9cguxMyLQFx8JXtn5OU9kn7Ye5Rpz7VmrY7q7Q'
    });

    // Make the API request using the fetch API.
    fetch(apiUrl, {
        method: 'GET', // Most data fetching will use the GET method.
        headers: headers
    })
    .then(response => {
        if (!response.ok) {
            // If the response is not 2xx, throw an error.
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json(); // Parse JSON data from the response
    })
    .then(data => {
        // Handle the data received from the API.
        displayDiv.innerHTML = `<p>Data loaded successfully! Here are details.</p>`;
        console.log('Data fetched:', data); // Output data to console for debugging.
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch operation.
        console.error('Error fetching data:', error);
        displayDiv.innerHTML = '<p>Error loading data. Please try again.</p>';
    });
}
