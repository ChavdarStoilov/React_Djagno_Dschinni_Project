from .models import Product
from .serializers import ProductListSerializer, LoginSerializer, RegisterUserSerializer, UserListSerializer
from rest_framework import generics
from rest_framework import permissions
from rest_framework import views
from rest_framework.response import Response
from django.contrib.auth import login
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from django.contrib.auth import get_user_model

User_Model = get_user_model()



class UserProfileView(generics.ListAPIView, generics.UpdateAPIView):
    serializer_class = UserListSerializer
    permission_classes = (permissions.AllowAny,)
    queryset = User_Model
    
    def list(self, request, *args, **kwargs):
        queryset = User_Model.objects.all().filter(pk=kwargs['pk'])

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    
class ListProduct(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductListSerializer
    permission_classes = (permissions.AllowAny,)
    
class LoginView(ObtainAuthToken):

    def post(self, request, format=None):
        serializer = LoginSerializer(data=self.request.data,
            context={ 'request': self.request })
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        
        login(request, user)
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
                return Response(json, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)