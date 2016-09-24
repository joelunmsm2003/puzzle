from django.shortcuts import render
from django.views.generic import View
from django.http import HttpResponse
from django.contrib.auth.models import Group, User
from jwt_auth.compat import json
from jwt_auth.mixins import JSONWebTokenAuthMixin

from ipware.ip import get_real_ip

from ipware.ip import get_ip
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

		puzzle = Puzzle.objects.all().values('id','src','rows','cols','name').order_by('-id')

		for i in range(len(puzzle)):

			p =Puzzlefan.objects.filter(puzzle_id=puzzle[i]['id']) 

			c=0
			
			for p in p:

				c = p.nclicks +c
			
			puzzle[i]['nclicks'] = c 

		puzzle = ValuesQuerySetToDict(puzzle)

		data_json = simplejson.dumps(puzzle)

		return HttpResponse(data_json, content_type="application/json")


	if request.method == 'POST':

		data =  json.loads(request.body)['data']

		print data
		src = data['src']
		rows = data['rows']
		cols = data['cols']
		name =data['name']

		Puzzle(src=src,rows=rows,cols=cols,name=name).save()

        data_json = simplejson.dumps('rooms....')

        return HttpResponse(data_json, content_type="application/json")

@csrf_exempt
def puzzleid(request,id):


	print 'sjsjsjsjjsjsjs',request.method

	
	if str(request.method) == str("DELETE"):

		print 'Deleting..........'

		Puzzle.objects.filter(id=id).delete()

		data_json = simplejson.dumps('rooms')

		return HttpResponse(data_json, content_type="application/json")


	if request.method == 'GET':

		puzzle = Puzzle.objects.filter(id=id).values('id','src','rows','cols','name')

		puzzle = ValuesQuerySetToDict(puzzle)

		data_json = simplejson.dumps(puzzle)

		return HttpResponse(data_json, content_type="application/json")


	if request.method == 'POST':

		print json.loads(request.body)


		#rooms = ValuesQuerySetToDict(rooms)

        data_json = simplejson.dumps('rooms')

        return HttpResponse(data_json, content_type="application/json")


@csrf_exempt
def control(request):


	if request.method == 'GET':

		puzzle = Control.objects.all().values('id','nclicks').order_by('-id')

		puzzle = ValuesQuerySetToDict(puzzle)

		data_json = simplejson.dumps(puzzle)

		return HttpResponse(data_json, content_type="application/json")


	if request.method == 'POST':

		data =  json.loads(request.body)['data']

		

		Puzzle(src=src,rows=rows,cols=cols).save()

        data_json = simplejson.dumps('rooms....')

        return HttpResponse(data_json, content_type="application/json")


@csrf_exempt
def fan(request):


	if request.method == 'GET':

		puzzle = Control.objects.all().values('id','nclicks').order_by('-id')

		puzzle = ValuesQuerySetToDict(puzzle)

		data_json = simplejson.dumps(puzzle)

		return HttpResponse(data_json, content_type="application/json")

	if request.method == 'POST':

		data =  json.loads(request.body)


		print 'Fan...',data


		ip = get_ip(request)

		if ip is not None:

			cip = ip

			if Fan.objects.filter(ip=cip).count()==0:

				Fan(ip=str(cip)).save()

		else :

			cip = ""




        data_json = simplejson.dumps('rooms....')

        return HttpResponse(data_json, content_type="application/json")



@csrf_exempt
def fanpuzzle(request):


	if request.method == 'POST':

		data =  json.loads(request.body)['data']

		ip = get_ip(request)

		print data

		puzzle = data['id']

		if Puzzlefan.objects.filter(fan__ip=ip,puzzle_id=puzzle).count() > 0:

			puzzlefan = Puzzlefan.objects.get(fan__ip=ip,puzzle_id=puzzle)

			nclicks = puzzlefan.nclicks

			nclicks = nclicks + 1

			puzzlefan.nclicks = nclicks

			puzzlefan.save()

		else:

			fan =Fan.objects.get(ip=ip)

			Puzzlefan(fan_id=fan.id,puzzle_id=puzzle,nclicks=0).save()




        data_json = simplejson.dumps('rooms....')

        return HttpResponse(data_json, content_type="application/json")





