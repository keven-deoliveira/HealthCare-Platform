# Generated by Django 4.0.2 on 2022-02-17 14:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapi', '0002_alter_user_sex'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='dob',
            new_name='DoB',
        ),
    ]
