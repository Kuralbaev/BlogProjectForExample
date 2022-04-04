import json

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from api.helpers.HandlerResponse import HandlerResponse
from api.models import ArticleComment
from api.serializer.Comment import CommentSerializer


@api_view(['GET'])
def get(request, pk=None, *args, **kwargs):
    commit = ArticleComment.objects.filter(article_id=pk)
    serializer = CommentSerializer(commit, many=True)

    return HandlerResponse(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def post(request, **kwargs):
    _body = json.loads(request.body)
    _comment = _body.get('comment')
    _author = _body.get('author_id')
    _article = _body.get('article_id')

    ArticleComment(
        article_id=_article,
        author_id=_author,
        description=_comment
    ).save()

    return HandlerResponse(True)
