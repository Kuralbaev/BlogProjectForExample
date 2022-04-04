from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework_simplejwt.exceptions import TokenError
from rest_framework_simplejwt.tokens import AccessToken

from api.helpers.HandlerResponse import HandlerResponse


class UserController(APIView):
    def get(self, request, *args, **kwargs):
        try:
            access_token = AccessToken(request.GET.get('id'))
            user = User.objects.get(id=access_token['user_id'])

            return HandlerResponse({
                'name': user.username,
                'email': user.email
            })

        except TokenError:
            return HandlerResponse('Неправильный токен', status=500)

