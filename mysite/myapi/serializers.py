from rest_framework import serializers
from .models import *

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('userID', 'firstName', 'lastName', 'DoB', 'address', 'pcp', 'sex', 'role')

class BillingInfoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = BillingInfo
        fields = ('user', 'insurance', 'card', 'expiration', 'cvv')

class MedicalInfoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MedicalInfo
        fields = ('user', 'weight', 'height', 'bp', 'glucose', 'iron')

class DeviceInfoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = DeviceInfo
        fields = ('owner', 'assigner', 'MAC')