# Generated by Django 4.2.7 on 2023-11-16 11:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rest_app', '0007_product_image_productimages'),
    ]

    operations = [
        migrations.AddField(
            model_name='productimages',
            name='image',
            field=models.URLField(blank=True, null=True),
        ),
    ]
