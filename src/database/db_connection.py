import os
import psycopg2
from psycopg2 import OperationalError

def create_connection():
    """
    Create a database connection to a PostgreSQL database
    """
    try:
        conn = psycopg2.connect(
            host=os.getenv("DB_HOST", "localhost"),
            database=os.getenv("DB_NAME"),
            user=os.getenv("DB_USER"),
            password=os.getenv("DB_PASSWORD")
        )
        print("Connection to PostgreSQL DB successful")
        return conn
    except OperationalError as e:
        print(f"The error '{e}' occurred")
        return None
