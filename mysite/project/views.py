from django.shortcuts import render
from django.views.generic import View
from django.http import HttpResponse
from django.contrib.auth.models import Group, User
from jwt_auth.compat import json
from jwt_auth.mixins import JSONWebTokenAuthMixin

import simplejson
from django.views.decorators.csrf import csrf_exempt
import xlrd

from project.models import *

from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt


from django.contrib.auth import authenticate
# Create your views here.


def ValuesQuerySetToDict(vqs):

    return [item for item in vqs]


@csrf_exempt
def puzzle(request):


	if request.method == 'GET':

		rooms = ValuesQuerySetToDict(rooms)

        data_json = simplejson.dumps(rooms)

        return HttpResponse(data_json, content_type="application/json")


	if request.method == 'POST':

		print json.loads(request.body)


		#rooms = ValuesQuerySetToDict(rooms)

        data_json = simplejson.dumps('rooms')

        return HttpResponse(data_json, content_type="application/json")