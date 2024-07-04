from django.db import models
from django.core.validators import RegexValidator, MaxLengthValidator, MinLengthValidator


# Create your models here.

class MenuItemModels(models.Model):
	title = models.CharField(
		max_length=20,
		blank=False,
		help_text="Заголовок меню уникальный и не более 20 символов",
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
				message='URL path must start and end with a forward slash and contain only letters, numbers, underscores and hyphens'
			),

		]
	)

	def __str__(self):
		return self.title

