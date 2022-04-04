from rest_framework.views import APIView

from api.helpers.HandlerResponse import HandlerResponse
from api.models import Article
from api.serializer.Article import ArticleSerializer


class ArticlesController(APIView):
    serializer_class = ArticleSerializer
    filter_class = ArticleSerializer
    paginate_by = 100

    @staticmethod
    def get(request, pk=None, *args, **kwargs):
        if not pk:
            player_object = Article.objects.all()
            serializer = ArticleSerializer(player_object, many=True)
            return HandlerResponse(serializer.data)

        try:
            player_object = Article.objects.get(id=pk)
            serializer = ArticleSerializer(player_object)

        except Exception as e:
            return HandlerResponse(str(e), status=500)

        return HandlerResponse(serializer.data)
