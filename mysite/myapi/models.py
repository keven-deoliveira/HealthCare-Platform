from django.db import models
import uuid

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
        ('O', 'Prefer not to say')
    )

    sex = models.CharField(max_length=1, choices=SEX)

    def __str__(self):
        return self.firstName + ' ' + self.lastName
