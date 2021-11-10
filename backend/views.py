from django.shortcuts import render

# Create your views here.
from rest_framework import generics, serializers
from .models import Quiz
from .serializers import QuizSerializer

class ListQuiz(generics.ListAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

class DetailQuiz(generics.RetrieveAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer