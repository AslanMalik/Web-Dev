from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import Product, Category
from api.serializers import *

@api_view(['GET', 'POST'])
def product_list(request):
    if request.method == 'GET':
        products = Product.objects.all()
        serialize = ProductSerializer(products, many=True)
        return Response(serialize.data)

    elif request.method == 'POST':
        serialize = ProductSerializer(data=request.data)
        if serialize.is_valid():
            serialize.save()
            return Response(serialize.data, status=201)
        return Response(serialize.errors, status=400)


@api_view(['GET', 'PUT', 'DELETE'])
def product_detail(request, product_id):
    try:
        product = Product.objects.get(pk=product_id)
    except Product.DoesNotExist as e:
        return Response({"message": str(e)}, status=404)

    if request.method == 'GET':
        serialize = ProductSerializer(product)
        return Response(serialize.data)

    elif request.method == 'PUT':
        serialize = ProductSerializer(data=request.data, instance=product)
        if serialize.is_valid():
            serialize.save()
            return Response(serialize.data, status=201)
        return Response(serialize.errors, status=400)

    elif request.method == 'DELETE':
        product.delete()
        return Response({'message': 'Product deleted'})


@api_view(['GET', 'POST'])
def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serialize = CategorySerializer(categories, many=True)
        return Response(serialize.data, status=200)

    elif request.method == 'POST':
        serialize = CategorySerializer(data=request.data)
        if serialize.is_valid():
            serialize.save()
            return Response(serialize.data, status=201)
        return Response(serialize.errors, status=400)

@api_view(['GET', 'PUT', 'DELETE'])
def category_detail(request, category_id):
    try:
        category = Category.objects.get(pk=category_id)
    except Category.DoesNotExist as e:
        return Response( {'message': str(e)}, status=400)

    if request.method == 'GET':
        serialize = CategorySerializer(category)
        return Response(serialize.data)

    elif request.method == 'PUT':
        serialize = CategorySerializer(data=request.data, instance=category)
        if serialize.is_valid():
            serialize.save()
            return Response(serialize.data, status=201)
        return Response(serialize.errors, status=400)

    elif request.method == 'DELETE':
        category.delete()
        return Response({'message': 'Product deleted'})


@api_view(['GET'])
def category_products(request, category_id):
    if request.method == 'GET':
        try:
            category = Category.objects.get(pk=category_id)
        except Category.DoesNotExist as e:
            return Response({'message': str(e)}, status=400)

        products = Product.objects.filter(category=category)
        serialize = ProductSerializer(products, many=True)
        return Response(serialize.data)