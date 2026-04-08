from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    path('products/', views.ProductListAPIView.as_view()),
    path('products/<int:product_id>/', views.ProductDetailAPIView.as_view()),
    path('categories/', views.CategoryListAPIView.as_view()),
    path('categories/<int:product_id>/', views.CategoryDetailAPIView.as_view()),
    path('categories/<int:product_id>/products/', views.CategoryProductsAPIView.as_view()),
]