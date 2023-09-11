# image_viewer/views.py
from django.shortcuts import render
import requests
from django.conf import settings

def home(request):
    url = 'https://api.unsplash.com/photos/random'
    params = {
        'client_id': settings.UNSPLASH_API_KEY,
        'count': 20,  
    }
    response = requests.get(url, params=params)

    if response.status_code == 200:

        images = response.json()
        return render(request, 'home.html', {'images': images})
    else:
        return render(request, 'image_viewer/error.html')