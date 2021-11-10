from django.db.models import fields
from rest_framework import serializers
from .models import Quiz
from django.contrib.auth import get_user_model
class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = ('id','title','picture','category','creator')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id','username',)