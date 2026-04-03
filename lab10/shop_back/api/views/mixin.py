from rest_framework.views import APIView
from rest_framework.response import Response

from api.models import Product, Category
from api.serializers import *
from rest_framework import mixins, generics

class ProductListAPIVIEW(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):

    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)

class ProductDetailsAPIVIEW(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):

    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'

    def get(self, request, *args ,**kwargs ):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args ,**kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args ,**kwargs):
        return self.destroy(request, *args, **kwargs)


class CategoryListAPIVIEW(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)

class CategoryDetailsAPIVIEW(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):

    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'category_id'

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class ProductCategoryAPIVIEW(APIView):
    def get(self, request, category_id=None):
        try:
            category =  Category.objects.get(pk=category_id)
        except Category.DoesNotExist as e:
            return Response({"error": str(e)}, status=400)

        products = Product.objects.filter(category=category)
        serialize = ProductSerializer(products, many=True)
        return Response(serialize.data, status=200)







