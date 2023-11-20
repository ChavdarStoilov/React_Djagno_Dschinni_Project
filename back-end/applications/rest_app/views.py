from .models import Product, ProductImages
from .serializers import ProductListSerializer, LoginSerializer, RegisterUserSerializer, \
    UserListSerializer, CheckOut, ProductImagesListSerializer
from rest_framework import generics
from rest_framework import permissions
from rest_framework import views
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from django.contrib.auth import get_user_model, login, logout
from django.utils.translation import gettext_lazy as _
from time import sleep

User_Model = get_user_model()



class UserProfileView(generics.ListAPIView, generics.UpdateAPIView):
    serializer_class = UserListSerializer
    queryset = User_Model
    
    def list(self, request, *args, **kwargs):
        queryset = User_Model.objects.all().filter(pk=kwargs['pk'])

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    
class ListProduct(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductListSerializer
    permission_classes = (permissions.AllowAny,)
    
class ImageListProductView(generics.ListAPIView):
    serializer_class = ProductImagesListSerializer
    permission_classes = (permissions.AllowAny,)
    queryset= ProductImages
    
    def list(self, request, *args, **kwargs):
        queryset = ProductImages.objects.all().filter(product_id=kwargs['pk'])
        serializer = self.get_serializer(queryset, many=True)
        # sleep(40)
        return Response(serializer.data)
    
    
class LoginView(ObtainAuthToken):

    def post(self, request, format=None):
        serializer = LoginSerializer(data=self.request.data,
            context={ 'request': self.request })
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        
        login(request, user)
        # sleep(20)
        return Response({
            'token':token.key,
            'user_id':user.pk,
            'email':user.email,
            'status': status.HTTP_202_ACCEPTED
        })
    
class UserCreateView(views.APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request, format='json'):
        serializer = RegisterUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                token = Token.objects.create(user=user)
                json = serializer.data
                json['token'] = token.key
                sleep(10)
                
                return Response(json, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class LogoutViewEx(views.APIView):
    permission_classes = (permissions.IsAuthenticated,)

                    
    def get(self, request, *args, **kwargs):
        if self.request.user:
            try:
                request.user.auth_token.delete()
            except (AttributeError):
                pass

            logout(request)
            
            return Response({"success": _("Successfully logged out.")},status=status.HTTP_200_OK)
        
        return Response({'msg': "There not have login user!"}, status=status.HTTP_400_BAD_REQUEST)
    
class CheckOutView(generics.CreateAPIView):
    serializer_class = CheckOut
    # permission_classes = (permissions.AllowAny,)
    
    
    def get_serializer(self, instance=None, data=None, many=False, partial=False):
        print(data)
        if data is not None:
            return super(CheckOutView, self).get_serializer(instance=instance, data=data, many=True, partial=partial)
        else:
            return super(CheckOutView, self).get_serializer(instance=instance, many=True, partial=partial)