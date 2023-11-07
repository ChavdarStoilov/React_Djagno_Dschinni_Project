from django.db import models
from django.contrib.auth import get_user_model

UserModel = get_user_model()

class Product(models.Model):
    
    name = models.CharField(
        max_length=200,
        blank=True,
        
    )

    normal_price = models.FloatField(
        blank=True,
        
    )
    
    promo_price = models.FloatField(
        blank=True,
        
    )
    
    descrition = models.TextField(
        blank=True,
        max_length=255,
    )
    
    counter_orders = models.IntegerField(
        blank=True
    )
    
    technical_details = models.TextField(
        max_length=255,
        blank=True,
        
    )
    
    kit_scope = models.TextField(
        max_length=255,
        blank=True,
    )
    
    stock = models.IntegerField(
        blank=True,
    )

class CustomerComment(models.Model):
    
    user_name = models.CharField(
        blank=True,
        max_length=255,
    )
    
    comment = models.TextField(
        max_length=555,
        blank=True,
    )


class ShopCart(models.Model):
    
    user_id = models.ForeignKey(
        UserModel,
        on_delete=models.CASCADE,
    )    
    
    products = models.ManyToManyField(
        to=Product,
    )