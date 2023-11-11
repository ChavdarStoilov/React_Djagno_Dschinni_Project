from django.urls import path
from .views import ListProduct, LoginView, UserCreateView

urlpatterns = [
    path('all_products/', ListProduct.as_view(), name="all_products_list"),
    path('login/', LoginView.as_view(), name="login_view"),
    path('register/', UserCreateView.as_view(), name='register_view'),]
