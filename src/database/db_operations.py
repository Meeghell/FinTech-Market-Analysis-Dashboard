import psycopg2
from db_connection import create_connection

def execute_query(query, data=None):
    """
    Execute a given SQL query on the database, which can include data insertion or update.
    """
    conn = create_connection()
    cursor = conn.cursor()
    try:
        cursor.execute(query, data)
        conn.commit()
        print("Query executed successfully")
    except psycopg2.Error as e:
        print(f"The error '{e}' occurred")
    finally:
        cursor.close()
        conn.close()

def fetch_query(query, data=None):
    """
    Fetch results from the database based on a query.
    """
    conn = create_connection()
    cursor = conn.cursor()
    try:
        cursor.execute(query, data)
        result = cursor.fetchall()
        return result
    except psycopg2.Error as e:
        print(f"The error '{e}' occurred")
        return None
    finally:
        cursor.close()
        conn.close()
