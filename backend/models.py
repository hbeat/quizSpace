from django.db import models
from django.db.models.deletion import CASCADE
from django.urls import reverse
# Create your models here.
class Quiz(models.Model):
    title = models.CharField(max_length = 50)
    category = models.CharField(max_length=50)
    creator = models.CharField(max_length=50)
    picture = models.ImageField()
#creator
#category
#ID
    def __str__(self):
        return self.title+" "+self.creator

class Category(models.Model):
    name = models.CharField(max_length=50)
    image = models.ImageField()
    detail = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Question(models.Model):
    question = models.TextField()
    answer = models.IntegerField()
    choices = models.TextField()
    quiz = models.ForeignKey('Quiz', on_delete= models.CASCADE)

    def __str__(self):
        return str(self.id)+""+self.question

    def get_absolute_url(self):
        """Returns the url to access a detail record for this book."""
        return reverse('Quiz', args=[str(self.id)])
