from rest_framework_simplejwt.views import TokenVerifyView

from api.controllers import CommitController
from api.controllers.TokenController import CookieTokenObtainPairView, CookieTokenRefreshView
from api.controllers.UserController import UserController
from api.controllers.ArticleController import ArticlesController
from django.urls import path

urlpatterns = [
    path('auth/token', CookieTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh', CookieTokenRefreshView.as_view(), name='token_refresh'),
    path('auth/token/verify', TokenVerifyView.as_view(), name='token_verify'),
    path('user', UserController.as_view()),
    path('article', ArticlesController.as_view()),
    path('article/<int:pk>', ArticlesController.as_view()),
    path('comment/<int:pk>', CommitController.get),
    path('comment/create', CommitController.post)
]
