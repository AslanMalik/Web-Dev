from django.http import JsonResponse, Http404


from rest_framework import viewsets
from rest_framework.response import Response
from django.shortcuts import render
from .serializers import ProductSerializer, CategorySerializer
from rest_framework.decorators import action
from .models import Product, Category


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object()
        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer





#
#
# def product_list(request):
#     products = Product.objects.all()
#     products_json = []
#
#     for product in products:
#         products_json.append(
#             {
#                 "id": product.id,
#                 "name": product.name,
#                 "price": product.price,
#                 "description": product.description,
#                 "count": product.count,
#                 "is_active": product.is_active,
#                 # "category": product.category.name
#             }
#         )
#     return JsonResponse(products_json, safe=False)
#
#
#
# def product(request, id):
#     try:
#         product = Product.objects.get(id = id)
#
#         answer = {
#             "id": product.id,
#             "name": product.name,
#             "price": product.price,
#             "description": product.description,
#             "count": product.count,
#             "is_active": product.is_active,
#         }
#
#         return JsonResponse(answer, safe=False)
#     except Product.DoesNotExist:
#         return JsonResponse({"error": "Product not found"}, status=404)
#
#
#
# def categories_list(request):
#     categories = Category.objects.all()
#     categories_json = []
#
#     for category in categories:
#         categories_json.append(category.name)
#
#     return JsonResponse(categories_json, safe=False)
#
# def product_by_id(request, id):
#     try:
#         category = Category.objects.get(id = id)
#
#         answer = { "id": category.id , "name" :category.name}
#         return JsonResponse(answer, safe=False)
#     except Category.DoesNotExist:
#         return JsonResponse({"error": "Product not found"}, status=404)
#
#
#
# def products_by_category(request, id):
#     try:
#         products = Product.objects.filter(category_id = id)
#
#         products_json = []
#         for product in products:
#             products_json.append({
#                 "id": product.id,
#                 "name": product.name,
#                 "price": product.price,
#                 "count": product.count,
#                 # и так далее...
#             })
#
#         return JsonResponse(products_json, safe=False)
#     except Product.DoesNotExist:
#         return JsonResponse({"error": "Product not found"}, status=404)
# # Create your views here.
