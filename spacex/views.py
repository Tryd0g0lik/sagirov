from django.shortcuts import render
import os
from .models import MenuItemModels
# Create your views here.
def home_page(request):
	# user = User.objects.get(username='root')
	BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
	file_js = os.listdir(os.path.join(BASE_DIR, 'spacex\\static\\spacex\\javascripts'))[-1]
	file_css = os.listdir(os.path.join(BASE_DIR, 'spacex\\static\\spacex\\css'))[-1]
	menu_items = list(MenuItemModels.objects.all().values())

	return render(request, 'index.html',{
		'js': file_js,
		'css': file_css,
		'menu_item':menu_items
	})

