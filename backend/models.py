from django.db import models
from django.contrib.postgres.fields import ArrayField
# Create your models here.
class Quiz(models.Model):
    title = models.CharField(max_length = 50)
    category = models.CharField(max_length=50)
    creator = models.CharField(max_length=50)
    picture = models.ImageField()
    def __str__(self):
        return self.title+" "+self.creator

class Category(models.Model):
    name = models.CharField(max_length=50)
    image = models.ImageField()
    detail = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Question(models.Model):
    question = models.CharField(max_length=200)
    options = models.CharField(max_length=200)
    answer = models.CharField(max_length=200)

    def __str__(self):
        return self.question
# class Question(models.Model):
#     question = models.CharField(max_length=200)
#     options = ArrayField(models.CharField(max_length=50))
#     answer = models.CharField(max_length=50)

#     def __str__(self):
#         return self.question