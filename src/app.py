from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

app = Flask(__name__, template_folder='../templates')
CORS(app)  # Enable CORS if needed

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/fetch-data', methods=['POST'])
def get_data():
    data_type = request.json.get('type')
    # Dummy data for frontend testing
    if data_type == 'stocks':
        data = {"message": "Stocks data would be here"}
    elif data_type == 'crypto':
        data = {"message": "Crypto data would be here"}
    else:
        return jsonify({'error': 'Invalid data type'}), 400

    return jsonify(data)

@app.route('/query-data', methods=['GET'])
def query_data():
    # Return dummy data for frontend development
    results = [{"id": 1, "name": "Sample Data"}]
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
