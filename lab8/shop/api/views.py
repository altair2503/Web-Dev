from django.http.response import JsonResponse
from api.models import Product, Category


def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)


def product_detail(request, id):
    products = Product.objects.all()

    for pr in products:
        if pr.id == id:
            return JsonResponse(pr.to_json())

    return JsonResponse({
        "error": "Not such product"
    })


def category_list(request):
    category = Category.objects.all()
    category_json = [c.to_json() for c in category]
    return JsonResponse(category_json, safe=False)


def category_detail(request, id):
    category = Category.objects.all()

    for cat in category:
        if cat.id == id:
            return JsonResponse(cat.to_json())

    return JsonResponse({
        "error": "Not such category"
    })


def category_products(request, id):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products if p.category_id == id]
    if len(products_json):
        return JsonResponse(products_json, safe=False)

    return JsonResponse({
        "error": "Not such category products"
    })