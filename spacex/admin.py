from django.contrib import admin
from .models import MenuItemModels
admin.site.site_encoding = 'utf-8'
# Register your models here.
# @admin.site.register(MenuItemModels)
class MenuItemAdmin(admin.ModelAdmin):
	list_display = ['title', 'pathname']
	fields=['title', 'pathname']


admin.site.register(MenuItemModels, MenuItemAdmin)