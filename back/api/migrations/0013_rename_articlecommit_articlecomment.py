# Generated by Django 4.0.3 on 2022-04-02 16:01

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0012_alter_article_image'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='ArticleCommit',
            new_name='ArticleComment',
        ),
    ]
