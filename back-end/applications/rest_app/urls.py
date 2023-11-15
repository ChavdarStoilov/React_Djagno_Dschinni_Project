from django.urls import path
from .views import ListProduct, LoginView, UserCreateView, UserProfileView, \
    LogoutViewEx, CheckOutView

urlpatterns = [
    path('all_products/', ListProduct.as_view(), name="all_products_list"),
    
    path('checkout/', CheckOutView.as_view(), name="checkout_rest_api"),
    
    path('login/', LoginView.as_view(), name="login_view"),
    path('register/', UserCreateView.as_view(), name='register_view'),
    path('profile/<int:pk>', UserProfileView.as_view(), name='profile_view'),
    path('logout/', LogoutViewEx.as_view(), name='logout_view'),
]
