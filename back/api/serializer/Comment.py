from rest_framework import serializers

from api.models import ArticleComment


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleComment
        fields = '__all__'
        depth = 1
