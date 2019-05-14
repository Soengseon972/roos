from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def mainPage(request):
	return render(request,'robot/mainPage/mainPage.html')
def index(request):
	return render(request,'robot/index.html')
def helper(request):
	return render(request,'robot/helper/helper.html')
def login(request):
	return render(request,'robot/login/login.html')
def userInfo(request):
	return render(request,'robot/userInfo/userInfo.html')
def robotmove(request):
	import os
	spStart = "roslaunch wpb_home_apps shopping.launch"
	os.system(spStart);
	return render(request,'robot/robotConsole/robotConsole.html')

def robotgrab(request):
	import os
	spStart = "roslaunch wpb_home_tutorials grab_demo.launch"
	os.system(spStart);
	return render(request,'robot/robotConsole/robotConsole.html')
def robotstart(request):
	import os
	spStart = "roslaunch wpb_home_apps shopping.launch"
	os.system(spStart);
	return render(request,'robot/robotConsole/robotConsole.html')
def robotvoice(request):
	import os
	spStart = "roslaunch wpb_home_apps shopping.launch"
	os.system(spStart);
	return render(request,'robot/robotConsole/robotConsole.html')
def robotstop(request):
	import os
	spStart = "rostopic pub /move_base/cancel actionlib_msgs/GoalID -- {}"
	os.system(spStart);
	return render(request,'robot/robotConsole/robotConsole.html')
def robotConsole(request):
	return render(request,'robot/robotConsole/robotConsole.html')
