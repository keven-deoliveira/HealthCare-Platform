# Generated by Django 4.0.2 on 2022-02-22 02:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapi', '0009_remove_billinginfo_name_remove_billinginfo_userid'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='medicalinfo',
            name='userID',
        ),
    ]