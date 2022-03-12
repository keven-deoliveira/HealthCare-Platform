from difflib import restore
from django.urls import include, path
from rest_framework import routers
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<str:room_name>/', views.room, name='room'),
]