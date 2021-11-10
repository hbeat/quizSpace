from django.contrib import admin
from django.contrib.auth import get_user_model

from .models import Quiz

# Register your models here.
admin.site.register(Quiz)