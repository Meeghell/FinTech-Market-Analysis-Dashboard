from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from src.api.data_fetcher import fetch_data
from src.database.db_operations import execute_query, fetch_query

app = Flask(__name__, template_folder='../templates')
CORS(app)  # Enable CORS if needed

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/fetch-data', methods=['POST'])
def get_data():
    data_type = request.json.get('type')
    if data_type == 'stocks':
        url = "your_api_url_for_stocks"
    elif data_type == 'crypto':
        url = "your_api_url_for_crypto"
    else:
        return jsonify({'error': 'Invalid data type'}), 400

    data = fetch_data(url)
    if data:
        return jsonify(data)
    else:
        return jsonify({'error': 'Failed to fetch data'}), 500

@app.route('/query-data', methods=['GET'])
def query_data():
    # Example query
    results = fetch_query("SELECT * FROM your_table LIMIT 10")
    if results:
        return jsonify(results)
    else:
        return jsonify({'error': 'Failed to retrieve data'}), 500

if __name__ == '__main__':
    app.run(debug=True)
