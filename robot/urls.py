from django.urls import path

from . import views
app_name = 'robot'
urlpatterns = [
    path('', views.index, name='index'),
    path(r'robotmove/', views.robotmove, name='robotmove'),
    path(r'helper/', views.helper, name='helper'),
    path(r'login/', views.login, name='login'),

    path(r'userInfo/', views.userInfo, name='userInfo'),
	path(r'robotConsole/',views.robotConsole,name='robotConsole'),
	path(r'mainPage/',views.mainPage,name='mainPage')
	]
