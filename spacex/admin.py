from django.contrib import admin
from .models import MenuItemModels, StatisticModels

admin.site.site_encoding = 'utf-8'


class MenuItemAdmin(admin.ModelAdmin):
  list_display = ['title', 'pathname']
  fields = ['title', 'pathname']

admin.site.register(MenuItemModels, MenuItemAdmin)


class StatisticAdmin(admin.ModelAdmin):
  list_display = ['first', 'number', 'second']
  fields = [('first', 'number', 'second')]


admin.site.register(StatisticModels, StatisticAdmin)