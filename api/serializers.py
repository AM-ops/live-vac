from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .models import Animal

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        token = Token.objects.create(user=user)
        return user

class AnimalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Animal
        fields = ('user', 'id', 'animalid', 'category', 'breed', 'vacdate', 'nextdate','interval')