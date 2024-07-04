from rest_framework.routers import DefaultRouter

from spacex.views import MenuApiViews, StatusticViews

router = DefaultRouter()
router.register(r'menu', MenuApiViews, basename='menu')
router.register(r'statistic', StatusticViews, basename='statistic')