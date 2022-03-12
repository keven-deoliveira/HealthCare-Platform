from django.shortcuts import render
from rest_framework import viewsets

from .serializers import *
from .models import *

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('lastName')
    serializer_class = UserSerializer

class BillingInfoViewSet(viewsets.ModelViewSet):
    queryset = BillingInfo.objects.order_by('user')
    serializer_class = BillingInfoSerializer

class MedicalInfoViewSet(viewsets.ModelViewSet):
    queryset = MedicalInfo.objects.order_by('user')
    serializer_class = MedicalInfoSerializer

class DeviceInfoViewSet(viewsets.ModelViewSet):
    queryset = DeviceInfo.objects.order_by('owner')
    serializer_class = DeviceInfoSerializer