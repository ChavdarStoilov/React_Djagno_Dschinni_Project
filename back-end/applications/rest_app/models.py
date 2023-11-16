from django.db import models
from django.contrib.auth import get_user_model

UserModel = get_user_model()

class Product(models.Model):
    
    name = models.CharField(
        max_length=200,
        blank=True,
        
    )

    normal_price = models.FloatField(
        null=True,
        blank=True
        
    )
    
    promo_price = models.FloatField(
        null=True,
        blank=True
        
    )
    
    descrition = models.TextField(
        blank=True,
        max_length=355,
    )
    
    counter_orders = models.IntegerField(
        null=True,
        blank=True
    )
    
    technical_details = models.TextField(
        max_length=355,
        blank=True,
        
    )
    
    kit_scope = models.TextField(
        max_length=355,
        blank=True,
    )
    
    stock = models.IntegerField(
        null=True,
        blank=True
    )
    
    
    image = models.URLField(
        null=True,
        blank=True
    )
    
class ProductImages(models.Model):
    
    product_id = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
    )

    image = models.URLField(
        null=True,
        blank=True
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
    
    total_price= models.DecimalField(
        max_digits=14, 
        decimal_places=2, 
        blank=True, 
        null=True)
    
class Inventory(models.Model):
    product  = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        blank=True,
        null=True
    )    
    
    quantity= models.IntegerField()
    price= models.DecimalField(
        max_digits=15,
        decimal_places=2)


class Entry(models.Model):
    cart= models.ForeignKey(
        ShopCart, 
        related_name="entries", 
        on_delete=models.CASCADE,
        )
    inventory= models.ForeignKey(
        Inventory, related_name="entries", 
        on_delete=models.CASCADE,
        )
    quantity= models.PositiveSmallIntegerField(
        default=1
        )
    price= models.DecimalField(
        max_digits=14, 
        decimal_places=2, 
        blank=True,
        null=True
        )