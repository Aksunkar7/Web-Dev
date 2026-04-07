from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views


router = DefaultRouter()
router.register('categories', views.CategoryViewSet)
router.register('products', views.ProductViewSet)

# GET    /api/products/       → list
# POST   /api/products/       → create
# GET    /api/products/1/     → retrieve
# PUT    /api/products/1/     → update
# DELETE /api/products/1/     → destroy

# астыдагы паттерндарды бұрын өзіміз жазып отырсақ, қазір Router өзі жасап береді жоғарыдағыларды, viewsetқа қарап

# urlpatterns = [
#     path('products/', views.product_list),
#     path('products/<int:id>/', views.product_detail),
#     path('categories/', views.category_list),
#     path('categories/<int:id>/', views.category_detail),
#     path('categories/<int:id>/products/', views.category_products),
# ]


urlpatterns = [
    path('', include(router.urls)),
]
