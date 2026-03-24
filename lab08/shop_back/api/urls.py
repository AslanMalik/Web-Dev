from . import views

from django.urls import path




urlpatterns = [
    path('products/', views.product_list),
    path('products/<int:id>/', views.product),
    path('categories/', views.categories_list),
    path('categories/<int:id>/', views.product_by_id),
    path('categories/<int:id>/products/', views.products_by_category)
]
