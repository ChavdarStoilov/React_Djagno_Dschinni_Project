from django.contrib import admin
from .models import Product, CustomerComment, ShopCart
# Register your models here.
@admin.register(Product)
class Product(admin.ModelAdmin):
    pass

@admin.register(CustomerComment)
class CustomerComment(admin.ModelAdmin):
    pass

@admin.register(ShopCart)
class ShopCart(admin.ModelAdmin):
    pass
