from rest_framework import serializers

from .models import MenuItemModels, StatisticModels


class MenuSerializer(serializers.ModelSerializer):
	# create a meta class
	class Meta:
		model = MenuItemModels
		fields = '__all__'
class StatisticSerializer(serializers.ModelSerializer):
# create a meta class
	class Meta:
		model = StatisticModels
		fields = '__all__'
