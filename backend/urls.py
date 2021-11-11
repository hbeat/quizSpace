from django.urls import path
from .views import CategoryViewSet, QuestionViewSet, QuizViewSet,UserViewSet#ListQuiz,DetailQuiz,UserList,UserDetail
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register('users',UserViewSet,basename = 'users')
router.register('category',CategoryViewSet,basename='category')
router.register('question',QuestionViewSet,basename='questions')
router.register('',QuizViewSet, basename='quizes')
urlpatterns = router.urls

# [
#     path('users/',UserList.as_view(), name = "list_user"),
#     path('users/<int:pk>/',UserDetail.as_view()),
# 	path('', ListQuiz.as_view(), name = "list_quiz"),
# 	path('<int:pk>/',DetailQuiz.as_view()),
# ]
