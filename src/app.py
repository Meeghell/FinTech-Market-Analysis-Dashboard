from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

app = Flask(__name__, template_folder='../templates')
CORS(app)  # Enable CORS to allow resources to be shared across different origins if needed

@app.route('/')
def home():
    # Serve the main page
    return render_template('index.html')

@app.route('/fetch-data', methods=['POST'])
def get_data():
    # Endpoint to handle data requests based on the type (stocks or crypto)
    data_type = request.json.get('type')
    if data_type == 'stocks':
        # Simulate fetching stock data
        data = {"message": "Stocks data would be here"}
    elif data_type == 'crypto':
        # Simulate fetching cryptocurrency data
        data = {"message": "Crypto data would be here"}
    else:
        # Handle cases where the data type is neither 'stocks' nor 'crypto'
        return jsonify({'error': 'Invalid data type'}), 400

    return jsonify(data)

@app.route('/query-data', methods=['GET'])
def query_data():
    # Simulated endpoint to fetch general data, useful for testing
    results = [{"id": 1, "name": "Sample Data"}]
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
