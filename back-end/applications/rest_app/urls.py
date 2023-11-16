from django.urls import path
from .views import ListProduct, LoginView, UserCreateView, UserProfileView, \
    LogoutViewEx, CheckOutView, ImageListProductView

urlpatterns = [
    path('all_products/', ListProduct.as_view(), name="all_products_list-api"),
    path('all_products_images/<int:pk>/', ImageListProductView.as_view(), name="all_products_image_api"),
    
    path('checkout/', CheckOutView.as_view(), name="checkout_rest_api"),
    
    path('login/', LoginView.as_view(), name="login_view_api"),
    path('register/', UserCreateView.as_view(), name='register_view_api'),
    path('profile/<int:pk>', UserProfileView.as_view(), name='profile_view_api'),
    path('logout/', LogoutViewEx.as_view(), name='logout_view_api'),
]
