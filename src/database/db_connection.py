import psycopg2
from psycopg2 import OperationalError

def create_connection():
    """
    Create a database connection to a PostgreSQL database
    """
    try:
        conn = psycopg2.connect(
            host="localhost",
            database="your_database_name",
            user="your_username",
            password="your_password"
        )
        print("Connection to PostgreSQL DB successful")
        return conn
    except OperationalError as e:
        print(f"The error '{e}' occurred")
        return None
