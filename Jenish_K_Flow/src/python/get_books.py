import logging
import json

def get_books(mydb):
    sql = """select * from books order by id desc """
    cursor = mydb.cursor(dictionary = True)
    cursor.execute(sql)
    results=cursor.fetchall()
    result = json.dumps(results)
    cursor.close()
    logging.warning(result)
    return result