from rest_framework.views import APIView
from rest_framework.response import Response

from api.models import Product, Category
from api.serializers import *
from rest_framework import mixins, generics

class ProductListAPIVIEW(generics.ListCreateAPIView):

    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetailsAPIVIEW(generics.RetrieveUpdateDestroyAPIView):

    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'


class CategoryListAPIVIEW(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetailsAPIVIEW(generics.RetrieveUpdateDestroyAPIView):

    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'category_id'


class ProductCategoryAPIVIEW(APIView):
    def get(self, request, category_id=None):
        try:
            category =  Category.objects.get(pk=category_id)
        except Category.DoesNotExist as e:
            return Response({"error": str(e)}, status=400)

        products = Product.objects.filter(category=category)
        serialize = ProductSerializer(products, many=True)
        return Response(serialize.data, status=200)







