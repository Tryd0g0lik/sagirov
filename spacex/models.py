from django.db import models
from django.core.validators import RegexValidator


class MenuItemModels(models.Model):
  title = models.CharField(
    max_length=20,
    blank=False,
    help_text="Заголовок меню не более 20 символов",
    validators=[
      RegexValidator(
        regex=r'^[\u0400-\u04FF\w\s_-]+$',
        message='Name must contain only letters and spaces'
      ),

    ]
  )
  pathname = models.CharField(
    max_length=200,
    validators=[
      RegexValidator(
        regex=r'^\/?[a-zA-Z0-9_-]+/?$',
        message='''URL path must start and end with a forward slash and contain only letters, numbers, \
         underscores and hyphens'''
      ),

    ]
  )

  def __str__(self):
    return self.title

class StatisticModels(models.Model):
  first = models.CharField(
    max_length=20,
    blank=False,
    help_text="Первая строка не более 20 символов",
    validators=[
      RegexValidator(
        regex=r'^[\u0400-\u04FF- _a-zA-Z]{1,20}$',
        message='Name must contain only letters'
      ),

    ]
  )
  number = models.CharField(
    max_length=4,
    validators=[
      RegexValidator(
        regex=r'^\/?[0-9%]{1,4}/?$',
        message='URL path must start and end with a forward slash and contain only letters, numbers, \
         underscores and hyphens'
      ),

    ]
  )
  second = models.CharField(
    max_length=20,
    blank=False,
    help_text="Последняя строка и не более 20",
    validators=[
      RegexValidator(
        regex=r'^[\u0400-\u04FF- _a-zA-Z]{1,20}$',
        message='Line must contain only letters'
      ),

    ]
  )
  def __str__(self):
    return self.first

