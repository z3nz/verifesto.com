from django.db import models


class Inquiry(models.Model):
    full_name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=30, blank=True, default='')
    company = models.CharField(max_length=200, blank=True, default='')
    vision = models.TextField()
    nda_requested = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name_plural = 'Inquiries'

    def __str__(self):
        return f"{self.full_name} — {self.email} ({self.created_at:%b %d, %Y})"
