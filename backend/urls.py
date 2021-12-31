from django.urls import path
from . import views
from .views import CategoryViewSet, QuizViewSet,UserViewSet#, QuestionViewSet#ListQuiz,DetailQuiz,UserList,UserDetail
from rest_framework.routers import SimpleRouter

urlpatterns = [
    path('questions/',views.getQuestions, name = "questions"),
    path('questions/create/',views.createQuestion, name = 'create-question'),

    path('questions/<str:pk>/',views.getQuestion,name = 'question'),
]

router = SimpleRouter()
router.register('users',UserViewSet,basename = 'users')
router.register('category',CategoryViewSet,basename='category')
router.register('quiz',QuizViewSet, basename='quiz')
# router.register('question',QuestionViewSet,basename='question')
print(router.urls)
urlpatterns += router.urls

# [
#     path('users/',UserList.as_view(), name = "list_user"),
#     path('users/<int:pk>/',UserDetail.as_view()),
# 	path('', ListQuiz.as_view(), name = "list_quiz"),
# 	path('<int:pk>/',DetailQuiz.as_view()),
# ]
