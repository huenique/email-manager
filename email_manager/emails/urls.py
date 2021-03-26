from rest_framework import routers
from .api import EmailViewSet

router = routers.DefaultRouter()
router.register('api/emails', EmailViewSet, 'emails')

urlpatterns = router.urls
