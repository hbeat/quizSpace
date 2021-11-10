from django.db import models

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