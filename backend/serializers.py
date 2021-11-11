from django.db.models import fields
from rest_framework import serializers
from .models import Category, Question, Quiz
from django.contrib.auth import get_user_model
class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = ('id','title','picture','category','creator',)

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ('id','question','answer','choices','quiz',)
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name','image','detail',)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id','username',)