from django.contrib.auth import get_user_model
from django.shortcuts import render

# Create your views here.
from rest_framework import generics, viewsets
from .models import Category, Question, Quiz
from .serializers import CategorySerializer, QuestionSerializer, QuizSerializer, UserSerializer

# class ListQuiz(generics.ListAPIView):
#     queryset = Quiz.objects.all()
#     serializer_class = QuizSerializer

# class DetailQuiz(generics.RetrieveAPIView):
#     queryset = Quiz.objects.all()
#     serializer_class = QuizSerializer


# class UserList(generics.ListCreateAPIView):
#     queryset = get_user_model().objects.all()
#     serializer_class = UserSerializer

# class UserDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = get_user_model().objects.all()
#     serializer_class = UserSerializer

class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
class UserViewSet(viewsets.ModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

