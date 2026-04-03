# from .views import fbv as views

from django.urls import path

from .views.generic import *

urlpatterns = [
    path('categories/', CategoryListAPIVIEW.as_view()),
    path('categories/<int:category_id>/products/', ProductCategoryAPIVIEW.as_view()),
    path('categories/<int:category_id>/', CategoryDetailsAPIVIEW.as_view()),
    path('products/', ProductListAPIVIEW.as_view()),
    path('products/<int:product_id>/', ProductDetailsAPIVIEW.as_view()),
]


#
# urlpatterns = [
#     path('products/', views.product_list),
#     path('products/<int:id>/', views.product),
#     path('categories/', views.categories_list),
#     path('categories/<int:id>/', views.product_by_id),
#     path('categories/<int:id>/products/', views.products_by_category)
# ]
