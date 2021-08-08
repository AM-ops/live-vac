from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import AnimalViewSet, UserViewSet

router = routers.DefaultRouter()
router.register('animals', AnimalViewSet)
router.register('users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]