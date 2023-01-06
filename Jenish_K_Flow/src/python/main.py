from http.server import HTTPServer, BaseHTTPRequestHandler
import mysql.connector
from delete import delete
from get_books import get_books
from get_by_id import get_by_id
from create import create
from list_by_author import list_by_author
from update import update
import json


def db_connect():
    return mysql.connector.connect(host = "localhost", user = "root", password = "Jenish@11", database = "library")


class GetHandler(BaseHTTPRequestHandler):
    

    def do_GET(self):
        if self.path == '/get_books':
            try:
                if db_connect().is_connected():
                    self.send_response(200)
                    # self.send_header('Content-Type', 'application/json')
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    # call read function from read file
                    self.wfile.write(bytes(get_books(db_connect()), "utf-8"))
            except mysql.connector.Error as error:
                self.send_response(200)
                self.end_headers()
                self.wfile.write(bytes("DB doesn't connected: {}".format(error), "utf-8"))
        
    def do_POST(self):
        if self.path == '/get_by_id':
            try:
                if db_connect().is_connected():
                    content_length = int(self.headers.get("Content-Length"))
                    body = self.rfile.read(content_length)
                    req_data = json.loads(body)
                    self.send_response(200)
                    # self.send_header('Content-Type', 'application/json')
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    # call read function from read file
                    self.wfile.write(bytes(get_by_id(db_connect(),req_data), "utf-8"))
            except mysql.connector.Error as error:
                self.send_response(200)
                self.end_headers()
                self.wfile.write(bytes("DB doesn't connected: {}".format(error), "utf-8"))
        if self.path == '/list_by_author':
            try:
                if db_connect().is_connected():
                    content_length = int(self.headers.get("Content-Length"))
                    body = self.rfile.read(content_length)
                    req_data = json.loads(body)
                    self.send_response(200)
                    # self.send_header('Content-Type', 'application/json')
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    # call read function from read file
                    self.wfile.write(bytes(list_by_author(db_connect(),req_data), "utf-8"))
            except mysql.connector.Error as error:
                self.send_response(200)
                self.end_headers()
                self.wfile.write(bytes("DB doesn't connected: {}".format(error), "utf-8"))
        elif self.path == '/delete':
            try:
                if db_connect().is_connected():
                    content_length = int(self.headers.get("Content-Length"))
                    body = self.rfile.read(content_length)
                    req_data = json.loads(body)
                    self.send_response(200)
                    # self.send_header('Content-Type', 'application/json')
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    # call read function from read file
                    self.wfile.write(bytes(delete(db_connect(),req_data), "utf-8"))
            except mysql.connector.Error as error:
                self.send_response(200)
                self.end_headers()
                self.wfile.write(bytes("DB doesn't connected: {}".format(error), "utf-8"))
                
        elif self.path == '/create':
            try:
                if db_connect().is_connected():
                    content_length = int(self.headers.get("Content-Length"))
                    body = self.rfile.read(content_length)
                    req_data = json.loads(body)
                    self.send_response(200)
                    self.send_header('Access-Control-Allow-Origin','*')
                    self.end_headers()
                    # call create function from create file
                    self.wfile.write(bytes(create(db_connect(), req_data), "utf-8"))

            except mysql.connector.Error as error:
                self.send_response(200)
                self.end_headers()
                self.wfile.write(bytes("DB doesn't connected: {}".format(error), "utf-8"))
  
        elif self.path == '/update':
            try:
                if db_connect().is_connected():
                    content_length = int(self.headers.get("Content-Length"))
                    body = self.rfile.read(content_length)
                    req_data = json.loads(body)
                    self.send_response(200)
                    self.send_header('Access-Control-Allow-Origin','*')
                    self.end_headers()
                    # call create function from create file
                    self.wfile.write(bytes(update(db_connect(), req_data), "utf-8"))

            except mysql.connector.Error as error:
                self.send_response(200)
                self.end_headers()
                self.wfile.write(bytes("DB doesn't connected: {}".format(error), "utf-8"))
  


def main():
    httpd = HTTPServer(('localhost', 7000), GetHandler)
    print("Web server has been started")
    httpd.serve_forever()


if __name__ == "__main__":
    main()
