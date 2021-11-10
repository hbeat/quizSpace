from django.contrib import admin
from django.contrib.auth import get_user_model

from .models import Category, Quiz

# Register your models here.
admin.site.register(Quiz)
admin.site.register(Category)