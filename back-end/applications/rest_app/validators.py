from rest_framework.validators import UniqueValidator, qs_filter
from django.utils.translation import gettext_lazy as _


class CustomUniqueValidator(UniqueValidator):
    message=''
    
    
    def filter_queryset(self, value, queryset, field_name):
        
        if field_name == 'email':
            self.message='Email must be unique'
        elif field_name == 'username':
            self.message='Username must be unique'

        filter_kwargs = {'%s__%s' % (field_name, self.lookup): value}
        return qs_filter(queryset, **filter_kwargs)