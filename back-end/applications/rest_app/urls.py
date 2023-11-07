from django.urls import path
from .views import ListProduct

urlpatterns = [
    path('all_products/', ListProduct.as_view(), name="all_products_list",)
]
