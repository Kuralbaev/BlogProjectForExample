# Generated by Django 4.0.3 on 2022-03-31 09:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_remove_articlecommit_article_article_commit'),
    ]

    operations = [
        migrations.AddField(
            model_name='articlecommit',
            name='create_at',
            field=models.DateField(auto_now_add=True, default='2032-1-12'),
            preserve_default=False,
        ),
    ]