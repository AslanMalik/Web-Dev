from rest_framework.views import APIView
from rest_framework.response import Response

from api.models import Product, Category
from api.serializers import *

class ProductListAPIVIEW(APIView):
    def get(self, request):
        products = Product.objects.all()
        serialize = ProductSerializer(products, many=True)
        return Response(serialize.data)

    def post(self, request):
        serialize = ProductSerializer(data=request.data)
        if serialize.is_valid():
            serialize.save()
            return Response(serialize.data)

class ProductDetailsAPIVIEW(APIView):

    def get_object(self,  product_id):
        try:
             return Product.objects.get(pk=product_id)
        except Product.DoesNotExist as e:
            return Response({"message": str(e)}, status=404)

    def get(self, request, product_id=None):
        product  = self.get_object(product_id)
        serialize = ProductSerializer(product)
        return Response(serialize.data, status=200)

    def put(self, request, product_id=None):
        product = self.get_object(product_id)
        serialize = ProductSerializer(data=request.data, instance=product)

        if serialize.is_valid():
            serialize.save()
            return Response(serialize.data, status=201)

        return Response(serialize.errors, status=400)

    def delete(self, request, product_id = None):
        product = self.get_object(product_id)
        product.delete()
        return Response({"message": "successfully removed"})


class CategoryListAPIVIEW(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serialize = CategorySerializer(categories, many=True)
        return Response(serialize.data)

    def post(self, request):
        serialize = CategorySerializer(data=request.data)

        if serialize.is_valid():
            serialize.save()
            return Response(serialize.data, status=201)

        return Response(serialize.errors, status=400)

class CategoryDetailsAPIVIEW(APIView):
    def get_object(self, category_id=None):
        try:
            return Category.objects.get(pk=category_id)
        except Category.DoesNotExist as e:
            return Response({"error": str(e)}, status=400)


    def get(self, request, category_id=None):
        category = self.get_object(category_id)
        serialize = CategorySerializer(category)
        return Response(serialize.data, status=200)

    def put(self, request, category_id=None):
        category = self.get_object(category_id)
        serialize = CategorySerializer(data=request.data, instance=category)

        if serialize.is_valid():
            serialize.save()
            return Response(serialize.data, status=201)

        return Response(serialize.errors, status=400)

    def delete(self, request, category_id=None):
        category = self.get_object(category_id)
        category.delete()
        return Response({"message": "successfully removed"})


class ProductCategoryAPIVIEW(APIView):
    def get(self, request, category_id=None):
        try:
            category =  Category.objects.get(pk=category_id)
        except Category.DoesNotExist as e:
            return Response({"error": str(e)}, status=400)

        products = Product.objects.filter(category=category)
        serialize = ProductSerializer(products, many=True)
        return Response(serialize.data, status=200)







