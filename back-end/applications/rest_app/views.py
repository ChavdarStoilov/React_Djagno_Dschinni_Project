from .models import Product
from .serializers import ProductListSerializer
from rest_framework import generics

class ListProduct(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductListSerializer
    # permission_classes = [IsAdminUser]