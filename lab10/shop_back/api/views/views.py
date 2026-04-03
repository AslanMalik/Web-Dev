from django.http import JsonResponse, Http404


from rest_framework.response import Response
from django.shortcuts import render, get_object_or_404
from lab10.shop_back.api.serializers import ProductSerializer, CategorySerializer
from rest_framework.decorators import action
from lab10.shop_back.api.models import Product, Category
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def product_list(request):
    if request.method == 'GET':
        products = Product.objects.all()
        serialize = ProductSerializer(products, many=True)
        return JsonResponse(serialize.data, safe=False)

    elif request.method == 'POST':
        data = json.loads(request.body)
        serialize = ProductSerializer(data=data)

        if(serialize.is_valid()):
            serialize.save()
            return JsonResponse(serialize.data, status=201)
        return JsonResponse(serialize.errors, status=400)



@csrf_exempt
def product_detail(request, product_id):
    try:
        product = Product.objects.get(pk=product_id)
    except Product.DoesNotExist:
        return JsonResponse({'message': 'Not Founded'}, status=404)


    if request.method == 'GET':
        serialize = ProductSerializer(product)
        return JsonResponse(serialize.data)

    elif request.method == 'PUT':
        data = json.loads(request.body)
        serialize = ProductSerializer(data=data, instance=product)
        if serialize.is_valid():
            serialize.save()
            return JsonResponse(serialize.data, status=200)
        return JsonResponse(serialize.errors, status=400)


    elif request.method == 'DELETE':
        product.delete()
        return JsonResponse({"delete": "completed"})

@csrf_exempt
def category_list(request):
    if request.method == 'GET':
        category = Category.objects.all()
        serialize = CategorySerializer(category, many=True)
        return JsonResponse(serialize.data, safe=False)

    elif request.method == 'POST':
        data = json.loads(request.body)

        serialize = CategorySerializer(data=data)

        if serialize.is_valid():
            serialize.save()
            return JsonResponse(serialize.data, status=201)
        return JsonResponse(serialize.errors, status=404)

@csrf_exempt
def category_detail(request, category_id):
    try:
        category = Category.objects.get(pk=category_id)
    except Category.DoesNotExist:
        return JsonResponse({"answer": "Not Found"}, status=404)

    if request.method == 'GET':
        serialize = CategorySerializer(category)
        return JsonResponse(serialize.data)

    elif request.method == 'PUT':
        data = json.loads(request.body)
        serialize = CategorySerializer(data=data, instance=category)

        if serialize.is_valid():
            serialize.save()
            return JsonResponse(serialize.data, status=200)
        return JsonResponse(serialize.errors, status=400)

    elif request.method == 'DELETE':
        category.delete()
        return JsonResponse({"delete": "completed"})


@csrf_exempt
def category_products(request, category_id):
    category = get_object_or_404(Category, pk=category_id)
    product = category.products.all()
    products_json = [p.to_json() for p in product]
    return JsonResponse(products_json,safe=False)

# def category_products(request, )




# class CategoryViewSet(viewsets.ModelViewSet):
#     queryset = Category.objects.all()
#     serializer_class = CategorySerializer
#
#     @action(detail=True, methods=['get'])
#     def products(self, request, pk=None):
#         category = self.get_object()
#         products = Product.objects.filter(category=category)
#         serializer = ProductSerializer(products, many=True)
#         return Response(serializer.data)
#
#
# class ProductViewSet(viewsets.ModelViewSet):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer
#




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
