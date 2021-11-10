from django.urls import path
from .views import ListQuiz,DetailQuiz

urlpatterns = [
	path('', ListQuiz.as_view(), name = "list"),
	path('<int:pk>/',DetailQuiz.as_view()),
]
