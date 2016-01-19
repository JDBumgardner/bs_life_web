import logging

from lib.tornado.web import BaseHandler

logger = logging.getLogger(__name__)

class HomeHandler(BaseHandler):

    def get(self):
        self.render_j("home.html")


class HandleDataHandler(BaseHandler):

    def get(self):
        data = self.get_argument('meow')
        logger.info(data)
        self.write("meow")
