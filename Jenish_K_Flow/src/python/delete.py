import logging
import json
def delete(mydb, req_data):
    sql = """ DELETE FROM books WHERE id=%s """
    input_data = json.dumps(req_data.get('id'))
    cursor = mydb.cursor()
    cursor.execute(sql % input_data)
    # result=cursor.execute("""select *from registers where email=%s""",(req_data.get('email')))
    # result["sta"]="sucks"
    mydb.commit()
    cursor.close()
    # results = json.dumps(result)
    # logging.warning(results)

    # print(result)
    return "success"