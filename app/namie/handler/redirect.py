#!/usr/bin/python
# -*- coding: utf-8 -*-
""" Handlers
"""

import tornado
import tornado.web
import tornado.gen
import logging

from ..lib.base62 import Base62
from baseHandle import BaseHandler
from ..dal.redirect import Dal

__author__ = 'Jamais'


class RedirectHandler(BaseHandler):
    PREFIX = 'cc_namie_url_id_'

    @tornado.gen.coroutine
    def get(self, url_id):
        self.add_header('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate')
        self.add_header('Pragma', 'no-cache')

        rdbc = self.conn.rdbc
        redirect_id_base_10 = Base62.decode(url_id)
        data_url = rdbc.get(self.PREFIX + str(redirect_id_base_10))
        if data_url is None:
            data_url = Dal.query_url(self.conn.dbc, redirect_id_base_10)
            if data_url is not None:
                rdbc.setex(self.PREFIX + str(redirect_id_base_10), 3600 * 24 * 7, data_url)

        if data_url is None:
            self.finish('No such url.')
            logging.warning('redirect url not exists: %s', url_id)
            return

        self.redirect(data_url, False, 301)