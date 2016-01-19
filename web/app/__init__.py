
import os
import tornado.web

#from lib.config import config
from web.app.amiup import AmIUpHandler
from web.app.home import HomeHandler, HandleDataHandler
from web.app.slides import *


class App(tornado.web.Application):

    def __init__(self):

        handlers = [
            (r"/amiup", AmIUpHandler),
            (r"/", HomeHandler),
            (r"/data", HandleDataHandler),
        ]

        settings = dict(
            template_path=os.path.join(os.path.dirname(__file__), "templates"),
            #static_path=os.path.join(config['build']['public_dir'])
            static_path="./public_dist"
        )
        tornado.web.Application.__init__(self, handlers, **settings)

