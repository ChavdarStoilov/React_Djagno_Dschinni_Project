from django.contrib import admin
from .models import Product, CustomerComment, ShopCart, Inventory, \
    Entry, ProductImages, ServerDelaySimulation


@admin.register(ServerDelaySimulation)
class ServerDelaySimulationAdmin(admin.ModelAdmin):
    pass


@admin.register(Product)
class Product(admin.ModelAdmin):
    pass


@admin.register(ProductImages)
class ProductImagesAdmin(admin.ModelAdmin):
    pass

@admin.register(CustomerComment)
class CustomerComment(admin.ModelAdmin):
    pass


@admin.register(Inventory)
class InventoryAdmin(admin.ModelAdmin):
    pass


class EntryAdmin(admin.TabularInline):
    model = Entry
    extra = 0
    # calls my helper method
    # exclude redundant field being replaced by helper method
    exclude = ['subtotal']
    
@admin.register(ShopCart)
class ShopCart(admin.ModelAdmin):
    model = ShopCart
    inlines = (EntryAdmin,)
    # calls get_total helper method below
    exclude = ['total_price']
