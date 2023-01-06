import logging
import json
def list_by_author(mydb, req_data):
    sql = """SELECT *FROM books where author=%s"""
    input_data = (req_data.get('author'))
    cursor = mydb.cursor(dictionary=True)
    cursor.execute(sql ,(input_data,))
    result=cursor.fetchall()
    cursor.close()
    results = json.dumps(result)
    
    # logging.warning(results)
    print(result)
    return results