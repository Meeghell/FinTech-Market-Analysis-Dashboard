import requests

def fetch_data(url):
    """
    Fetch data from a specified URL (API endpoint).
    """
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raises an HTTPError for bad responses
        return response.json()
    except requests.RequestException as e:
        print(f"Error fetching data: {e}")
        return None
