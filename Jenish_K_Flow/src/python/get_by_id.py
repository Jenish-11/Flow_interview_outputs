import logging
import json
def get_by_id(mydb, req_data):
    sql = """SELECT *FROM books where id=%s"""
    input_data = (req_data.get('id'))
    cursor = mydb.cursor(dictionary=True)
    cursor.execute(sql ,(input_data,))
    result=cursor.fetchall()
    cursor.close()
    results = json.dumps(result)
    
    # logging.warning(results)
    print(result)
    return results