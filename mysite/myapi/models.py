from random import choices
from django.db import models
import uuid
from multiselectfield import MultiSelectField

# Create your models here.

class User(models.Model):
    userID = models.UUIDField(
        'userID',
        primary_key = True,
        default = uuid.uuid4,
        editable = False
    )
    firstName = models.CharField(max_length=60)
    lastName = models.CharField(max_length=60)
    DoB = models.CharField(max_length=10)
    address = models.CharField(max_length=60)
    pcp = models.CharField('PCP', max_length=30)

    SEX = (
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Prefer not to say'),
    )

    sex = models.CharField(max_length=1, choices=SEX)

    ROLES = (
        ('P', 'Patient'),
        ('D', 'Provider'),
    )

    role = MultiSelectField(max_length=3, choices=ROLES)

    def __str__(self):
        return str(self.firstName) + ' ' + str(self.lastName)

class BillingInfo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    insurance = models.CharField(max_length=60)
    card = models.IntegerField()
    expiration = models.DateField()
    cvv = models.IntegerField()

    def __str__(self):
        return str(self.user)

class MedicalInfo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    weight = models.IntegerField()
    height = models.IntegerField()
    bp =  models.CharField(max_length=10)
    glucose = models.IntegerField()
    iron = models.IntegerField()

    def __str__(self):
        return str(self.user)

class DeviceInfo(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='owner')
    assigner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='assigner')
    MAC = models.CharField(max_length=20)

    def __str__(self):
        return str(self.owner)
