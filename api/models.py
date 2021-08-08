from enum import unique
from django.db import models
from django.contrib.auth.models import User
from django.db.models.deletion import CASCADE
import datetime

# Create your models here.
class Animal(models.Model):
    user = models.ForeignKey(User, on_delete=CASCADE,)
    animalid = models.CharField(max_length=20,)
    category = models.CharField(max_length=10, default='Sheep',)
    breed = models.CharField(max_length=10, default='Merino',)
    vacdate = models.DateField(auto_now=False, auto_now_add=False,default='2021-08-01')
    nextdate = models.DateField(auto_now=False, auto_now_add=False,default='2021-08-01')
    interval = models.IntegerField(default=0)

    def save(self, *args, **kwargs):
        self.set_date()
        super().save(*args, **kwargs)

    def set_date(self, *args, **kwargs):
        if self.interval > 0:
            #old = datetime.datetime.strptime(self.vacdate, '%m/%d/%y')
            self.nextdate = self.vacdate + datetime.timedelta(days=self.interval)
        else:
            self.nextdate = self.vacdate

    class Meta:
        unique_together = ('user','animalid','category','breed','vacdate', 'interval')

