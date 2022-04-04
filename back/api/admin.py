from django.contrib import admin

from api.models import Article, ArticleType, ArticleComment

admin.site.register(ArticleComment)
admin.site.register(ArticleType)
admin.site.register(Article)
