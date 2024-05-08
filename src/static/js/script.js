document.addEventListener('DOMContentLoaded', function() {
    // This event listener ensures that the script runs after the DOM content is fully loaded.
    const loadDataButton = document.getElementById('loadDataButton');
    loadDataButton.addEventListener('click', fetchData);
});

function fetchData() {
    // This function gets called when the user clicks the 'Load Data' button.
    const dataType = document.getElementById('dataTypeSelect').value;
    const displayDiv = document.getElementById('dataDisplay');
    const visualIframe = document.getElementById('visualIframe'); // Iframe for displaying visuals

    // Clear previous content and show a loading message.
    displayDiv.innerHTML = '<p>Loading data...</p>';
    visualIframe.style.display = 'none'; // Hide the iframe initially

    // Determine which Flask endpoint to use based on the data type selected in the dropdown.
    let apiUrl = `/fetch-data`;
    let postData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: dataType })
    };

    // Make the API request using the fetch API.
    fetch(apiUrl, postData)
    .then(response => {
        if (!response.ok) {
            // If the response is not 2xx, throw an error.
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json(); // Parse JSON data from the response
    })
    .then(data => {
        // Update the display based on the data type and data received.
        let visualPath = `static/external_data/${dataType}_visuals.html`; // Corrected path to the generated HTML file within the static folder
        visualIframe.src = visualPath;
        visualIframe.style.display = 'block'; // Show the iframe
        displayDiv.innerHTML = `<p>Data loaded successfully! Here are details: ${data.message}</p>`;
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch operation.
        console.error('Error fetching data:', error);
        displayDiv.innerHTML = '<p>Error loading data. Please try again.</p>';
    });
}
