# Generated by Django 4.0.2 on 2022-02-21 20:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('myapi', '0005_delete_billinginfo'),
    ]

    operations = [
        migrations.CreateModel(
            name='BillingInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('userID', models.CharField(max_length=30)),
                ('name', models.CharField(max_length=60)),
                ('insurance', models.CharField(max_length=60)),
                ('card', models.IntegerField()),
                ('expiration', models.DateField()),
                ('cvv', models.IntegerField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myapi.user')),
            ],
        ),
    ]
