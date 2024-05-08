from flask import Flask, render_template, request, jsonify, send_from_directory
from flask_cors import CORS
import nbformat
from nbconvert.preprocessors import ExecutePreprocessor
import os

# Determine the base directory
base_dir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__,
            static_folder=os.path.join(base_dir, 'static'),
            template_folder=os.path.join(base_dir, 'templates'))
CORS(app)

def run_notebook(notebook_name):
    # Path to the notebook
    notebook_path = os.path.join(base_dir, '../notebooks', notebook_name)
    # Load the notebook, execute it, and save the output
    with open(notebook_path) as f:
        nb = nbformat.read(f, as_version=4)
    ep = ExecutePreprocessor(timeout=600, kernel_name='python3')
    ep.preprocess(nb, {'metadata': {'path': os.path.join(base_dir, '../notebooks')}})
    with open(notebook_path, 'wt') as f:
        nbformat.write(nb, f)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/fetch-data', methods=['POST'])
def get_data():
    data_type = request.json.get('type')
    if data_type == 'stocks':
        run_notebook('data_analysis.ipynb')
        data = {"message": "Stocks data processed"}
    elif data_type == 'crypto':
        run_notebook('crypto_data.ipynb')
        data = {"message": "Crypto data processed"}
    elif data_type == 'sp500':
        run_notebook('sp500_data.ipynb')
        data = {"message": "S&P 500 data processed"}
    else:
        return jsonify({'error': 'Invalid data type'}), 400

    return jsonify(data)

@app.route('/visualizations/<path:filename>')
def visualization_files(filename):
    # Serve files from the external_data directory
    return send_from_directory(os.path.join(base_dir, '../external_data'), filename)

@app.route('/query-data', methods=['GET'])
def query_data():
    results = [{"id": 1, "name": "Sample Data"}]
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
