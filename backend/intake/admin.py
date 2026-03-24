from django.contrib import admin
from .models import Inquiry


@admin.register(Inquiry)
class InquiryAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'email', 'company', 'nda_requested', 'created_at']
    list_filter = ['nda_requested', 'created_at']
    search_fields = ['full_name', 'email', 'company', 'vision']
    readonly_fields = ['created_at']
    ordering = ['-created_at']

    fieldsets = (
        ('Contact', {
            'fields': ('full_name', 'email', 'phone', 'company'),
        }),
        ('Vision', {
            'fields': ('vision', 'nda_requested'),
        }),
        ('Meta', {
            'fields': ('created_at',),
        }),
    )
