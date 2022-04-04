from django.contrib.auth.models import User
from django.db import models


class ArticleType(models.Model):
    title = models.CharField(max_length=100)

    def __str__(self):
        return "{}".format(self.title)


class Article(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=1000)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.FileField(upload_to='media/%Y/%m/%d/')
    type = models.ForeignKey(ArticleType, on_delete=models.CASCADE)
    create_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return "{}".format(self.title)


class ArticleComment(models.Model):
    description = models.TextField(max_length=1000)
    create_at = models.DateField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    article = models.ForeignKey(Article, on_delete=models.CASCADE)

    def __str__(self):
        return "{}".format(self.description)

