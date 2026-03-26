import logging

from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import InquirySerializer

logger = logging.getLogger(__name__)

ADMIN_RECIPIENTS = ['kelsey@verifesto.com', 'adam@verifesto.com']


@api_view(['POST'])
def submit_inquiry(request):
    serializer = InquirySerializer(data=request.data)
    if serializer.is_valid():
        inquiry = serializer.save()
        _send_inquiry_emails(inquiry)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def _send_inquiry_emails(inquiry):
    """Send admin notification and client confirmation emails for a new inquiry.

    Email failures are logged but never allowed to surface to the caller —
    the inquiry is already saved and the 201 response must not be blocked.
    """
    try:
        _send_admin_notification(inquiry)
    except Exception:
        logger.exception("Failed to send admin notification for inquiry %s", inquiry.pk)

    try:
        _send_client_confirmation(inquiry)
    except Exception:
        logger.exception("Failed to send client confirmation for inquiry %s", inquiry.pk)


def _send_admin_notification(inquiry):
    subject = f"New Verifesto Inquiry: {inquiry.full_name}"
    html_body = render_to_string('emails/admin_notification.html', {'inquiry': inquiry})
    plain_body = strip_tags(html_body)

    msg = EmailMultiAlternatives(
        subject=subject,
        body=plain_body,
        from_email=settings.DEFAULT_FROM_EMAIL,
        to=ADMIN_RECIPIENTS,
        reply_to=[inquiry.email],
    )
    msg.attach_alternative(html_body, 'text/html')
    msg.send()


def _send_client_confirmation(inquiry):
    subject = "We've Received Your Vision | Verifesto Studios"
    html_body = render_to_string('emails/client_confirmation.html', {'inquiry': inquiry})
    plain_body = strip_tags(html_body)

    msg = EmailMultiAlternatives(
        subject=subject,
        body=plain_body,
        from_email=settings.DEFAULT_FROM_EMAIL,
        to=[inquiry.email],
    )
    msg.attach_alternative(html_body, 'text/html')
    msg.send()
