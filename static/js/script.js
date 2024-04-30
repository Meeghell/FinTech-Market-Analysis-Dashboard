document.addEventListener('DOMContentLoaded', function() {
    const loadDataButton = document.getElementById('loadDataButton');
    loadDataButton.addEventListener('click', fetchData);
});

function fetchData() {
    const dataType = document.getElementById('dataTypeSelect').value;
    const displayDiv = document.getElementById('dataDisplay');

    displayDiv.innerHTML = '<p>Loading data...</p>'; // Show loading text

    // Example URL for API call; you should replace this with your actual API URL
    const apiUrl = '/fetch-data'; // Assuming you have a Flask route set up for this URL

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: dataType })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Assume data is an array of items for demonstration
        displayDiv.innerHTML = `<p>Data loaded successfully! Here are ${data.length} items.</p>`;
        console.log('Data fetched:', data); // Output data to console for debugging
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        displayDiv.innerHTML = '<p>Error loading data. Please try again.</p>';
    });
}
