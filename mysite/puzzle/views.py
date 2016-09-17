from django.shortcuts import render
from django.views.generic import View
from django.http import HttpResponse
from django.contrib.auth.models import Group, User
from jwt_auth.compat import json
from jwt_auth.mixins import JSONWebTokenAuthMixin

import simplejson
from django.views.decorators.csrf import csrf_exempt
import xlrd

from puzzle.models import *

from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

from django.contrib.auth import authenticate



def ValuesQuerySetToDict(vqs):

    return [item for item in vqs]



class JSONResponse(HttpResponse):
    """
    An HttpResponse that renders its content into JSON.
    """
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)

# Create your views here.


@csrf_exempt
def puzzle(request):


	if request.method == 'GET':

		puzzle = Puzzle.objects.all().values('id','src','rows','cols').order_by('-id')

		puzzle = ValuesQuerySetToDict(puzzle)

		data_json = simplejson.dumps(puzzle)

		return HttpResponse(data_json, content_type="application/json")


	if request.method == 'POST':

		data =  json.loads(request.body)['data']
		src = data['src']
		rows = data['rows']
		cols = data['cols']

		Puzzle(src=src,rows=rows,cols=cols).save()

        data_json = simplejson.dumps('rooms....')

        return HttpResponse(data_json, content_type="application/json")

@csrf_exempt
def puzzleid(request,id):


	if request.method == 'GET':

		puzzle = Puzzle.objects.filter(id=id).values('id','src','rows','cols')

		puzzle = ValuesQuerySetToDict(puzzle)

		data_json = simplejson.dumps(puzzle)

		return HttpResponse(data_json, content_type="application/json")


	if request.method == 'POST':

		print json.loads(request.body)


		#rooms = ValuesQuerySetToDict(rooms)

        data_json = simplejson.dumps('rooms')

        return HttpResponse(data_json, content_type="application/json")

	if request.method == 'DELETE':

		Puzzle.objects.filter(id=id).delete()

		data_json = simplejson.dumps('rooms')

		return HttpResponse(data_json, content_type="application/json")