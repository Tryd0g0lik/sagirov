from django.shortcuts import render
from .models import MenuItemModels, StatisticModels
from rest_framework.viewsets import ModelViewSet
from .serializers import MenuSerializer, StatisticSerializer

def home_page(request):
    ''' BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    file_js = os.listdir(os.path.join(BASE_DIR,
    'spacex\\static\\spacex\\javascripts'))[-1]
    file_css = os.listdir(os.path.join(BASE_DIR,
    'spacex\\static\\spacex\\css'))[-1] '''

    return render(request, 'index.html')


class MenuApiViews(ModelViewSet):
    serializer_class = MenuSerializer
    queryset = MenuItemModels.objects.all().values()


class StatusticViews(ModelViewSet):
    serializer_class = StatisticSerializer
    queryset = StatisticModels.objects.all().values()
