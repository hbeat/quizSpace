from django.contrib.auth import get_user_model
from django.shortcuts import render

# Create your views here.
from rest_framework import generics, serializers, views, viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
#own implementation
from .models import Category, Quiz, Question
from .serializers import CategorySerializer, QuizSerializer, UserSerializer, QuestionSerializer
#new rest_framework
class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
class UserViewSet(viewsets.ModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

@api_view(['Get'])
def getQuestions(request):
    questions = Question.objects.all()
    serializer = QuestionSerializer(questions, many = True)
    return Response(serializer.data)

@api_view(['Get'])
def getQuestion(request,pk):
    notes = Question.objects.get(id=pk)
    serializers = QuestionSerializer(notes,many=False)
    return Response(serializers.data)

@api_view(['POST'])
def createQuestion(request):
    data = request.data
    question = Question.objects.create(
        question = data['question'],
        options = data['options'],
        answer = data['answer'],
    )
    serializer = QuestionSerializer(Question,many=False)
    return Response(serializer.data)


# class QuestionViewSet(viewsets.ModelViewSet):
#     queryset = Question.objects.all()
#     serializer_class = QuestionSerializer


# @api_view(['Get'])
# def getQuestions(request):
#     questions = Question.objects.all()
#     serializer = QuestionSerializer(questions, many = True)
#     return Response(serializer.data)


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