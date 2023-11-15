from .models import Product, ShopCart
from rest_framework import serializers
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .validators import CustomUniqueValidator
from django.contrib.auth import get_user_model

User_Model = get_user_model()

class ProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
        
class UserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_Model
        fields = ['username','first_name','last_name','email',]
        
class RegisterUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
            required=True,
            validators=[CustomUniqueValidator(queryset=User.objects.all())]
            )
    username = serializers.CharField(
            validators=[CustomUniqueValidator(queryset=User.objects.all())]
            )
    password = serializers.CharField(min_length=8)

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'],
             validated_data['password'])
        return user

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')

class LoginSerializer(serializers.Serializer):

    username = serializers.CharField(
        label="Username",
        write_only=True
    )
    password = serializers.CharField(
        label="Password",
        style={'input_type': 'password'},
        trim_whitespace=False,
        write_only=True
    )

    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')

        if username and password:
            user = authenticate(request=self.context.get('request'),
                                username=username, password=password)
            if not user:
                msg = 'Access denied: wrong username or password.'
                raise serializers.ValidationError(msg, code='authorization')
        else:
            msg = 'Both "username" and "password" are required.'
            raise serializers.ValidationError(msg, code='authorization')

        attrs['user'] = user
        return attrs
    
class CheckOut(serializers.ModelSerializer):
    
    class Meta:
        model = ShopCart
        fields = '__all__'