# Generated by Django 4.0.3 on 2022-04-01 04:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_user'),
    ]

    operations = [
        migrations.DeleteModel(
            name='User',
        ),
    ]