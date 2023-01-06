import logging
import json
def update(mydb, req_data):
    sql = """ update books  set title=%s, author=%s, year=%s where id=%s """
    input_data = (json.dumps(req_data.get('title')),req_data.get('author'),req_data.get('year'),req_data.get('id'))
    cursor = mydb.cursor()
    cursor.execute(sql, input_data)
    # result=cursor.execute("""select *from registers where email=%s""",(req_data.get('email')))
    # result["sta"]="sucks"
    mydb.commit()
    cursor.close()
    # results = json.dumps(result)
    # logging.warning(results)

    # print(result)
    return "success"