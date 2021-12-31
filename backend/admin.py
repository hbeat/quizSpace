from django.contrib import admin
from django.contrib.auth import get_user_model

from .models import Category, Quiz, Question#,  Question

# Register your models here.
admin.site.register(Quiz)
admin.site.register(Category)
# admin.site.register(Question)
admin.site.register(Question)