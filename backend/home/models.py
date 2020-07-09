from django.conf import settings
from django.db import models

# Create your models here.

from django.db import models


class CustomText(models.Model):
    title = models.CharField(max_length=150,)

    def __str__(self):
        return self.title

    @property
    def api(self):
        return f"/api/v1/customtext/{self.id}/"

    @property
    def field(self):
        return "title"


class HomePage(models.Model):
    body = models.TextField()

    @property
    def api(self):
        return f"/api/v1/homepage/{self.id}/"

    @property
    def field(self):
        return "body"


class Testabc(models.Model):
    "Generated Model"
    test = models.BigIntegerField()


class Hjgjh(models.Model):
    "Generated Model"
    jhgjhgjh = models.SmallIntegerField()


class Hgffjhfjhg(models.Model):
    "Generated Model"
    uiyiuyiuy = models.BigIntegerField()


class Tjhgjhgfjhg(models.Model):
    "Generated Model"
    mhkjhkjhk = models.BigIntegerField()
