
import os
import tornado.httpserver
import tornado.ioloop
import tornado.options
from tornado.options import define, options
#from lib.config import config

from web.app import App

define("port", default=None,
    help="connect web server to given port", type=int)

def main():

    tornado.options.parse_command_line()

    http_server = tornado.httpserver.HTTPServer(App())
    http_server.listen(options.port or os.environ.get('PORT', 5000))
        #int(config['web_server']['port']))
    tornado.ioloop.IOLoop.instance().start()


if __name__ == "__main__":
    main()
