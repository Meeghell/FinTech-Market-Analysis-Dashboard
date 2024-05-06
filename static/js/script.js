document.addEventListener('DOMContentLoaded', function() {
    // This event listener ensures that the script runs after the DOM content is fully loaded.
    const loadDataButton = document.getElementById('loadDataButton');
    loadDataButton.addEventListener('click', fetchData);
});

function fetchData() {
    // This function gets called when the user clicks the 'Load Data' button.
    const dataType = document.getElementById('dataTypeSelect').value;
    const displayDiv = document.getElementById('dataDisplay');
    const stockImage = document.getElementById('stockImage');
    const cryptoImage = document.getElementById('cryptoImage');

    // Clear previous content and show a loading message.
    displayDiv.innerHTML = '<p>Loading data...</p>';
    stockImage.style.display = 'none';
    cryptoImage.style.display = 'none';

    // Determine which Flask endpoint to use based on the data type selected in the dropdown.
    let apiUrl = `/fetch-data?dataType=${dataType}`;

    // Make the API request using the fetch API.
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            // If the response is not 2xx, throw an error.
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json(); // Parse JSON data from the response
    })
    .then(data => {
        // Update the display based on the data type and data received.
        if (dataType === 'stocks') {
            stockImage.src = 'path/to/generated/stock_visualization.png'; // Update with actual generated path
            stockImage.style.display = 'block';
        } else if (dataType === 'crypto') {
            cryptoImage.src = 'path/to/generated/crypto_visualization.png'; // Update with actual generated path
            cryptoImage.style.display = 'block';
        }
        displayDiv.innerHTML = `<p>Data loaded successfully! Here are details: ${data.message}</p>`;
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch operation.
        console.error('Error fetching data:', error);
        displayDiv.innerHTML = '<p>Error loading data. Please try again.</p>';
    });
}
