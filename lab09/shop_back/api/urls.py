from . import views

from django.urls import path


urlpatterns = [
    path('categories/', views.category_list),
    path('categories/<int:category_id>/products/', views.category_products),
    path('categories/<int:category_id>/', views.category_detail),
    path('products/', views.product_list),
    path('products/<int:product_id>/', views.product_detail),
]


#
# urlpatterns = [
#     path('products/', views.product_list),
#     path('products/<int:id>/', views.product),
#     path('categories/', views.categories_list),
#     path('categories/<int:id>/', views.product_by_id),
#     path('categories/<int:id>/products/', views.products_by_category)
# ]
