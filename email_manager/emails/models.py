from django.db import models
from django.contrib.auth.models import User


class Email(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=254, unique=True)
    owner = models.ForeignKey(User,
                              related_name='emails',
                              on_delete=models.CASCADE,
                              null=True)
    creation = models.DateTimeField(auto_now_add=True)
