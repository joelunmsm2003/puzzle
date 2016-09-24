from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.conf.urls import patterns

from project.views import *

from django.conf.urls import url
from django.contrib import admin


urlpatterns = [


    url(r'^admin/', admin.site.urls),

    url(r'^api-token-auth/', 'jwt_auth.views.obtain_jwt_token'),

    #Hotels

    url(r'^puzzle/$', 'project.views.puzzle'),


   




    #url(r'^api-token-auth/', 'jwt_auth.views.obtain_jwt_token'),

    #Hotels

    url(r'^puzzle$', 'puzzle.views.puzzle'),
    url(r'^puzzle/(\d+)', 'puzzle.views.puzzleid'),
    url(r'^control/', 'puzzle.views.control'),
    url(r'^fan$', 'puzzle.views.fan'),
    url(r'^fan/puzzle$', 'puzzle.views.fanpuzzle'),



    ]

