from .models import Email
from rest_framework import viewsets, permissions
from .serializers import EmailSerializer


# Email viewset
class EmailViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = EmailSerializer

    def get_queryset(self):
        return self.request.user.emails.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)