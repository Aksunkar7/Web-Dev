from django.http import JsonResponse
from .models import Product, Category

def product_list(request):
    products = Product.objects.all()
    data = [
        {
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "count": p.count,
            "is_active": p.is_active,
            "category_id": p.category_id,
        }
        for p in products
    ]
    return JsonResponse(data, safe=False) # it expects dictionary, but we gave list. So that False



def product_detail(request, id):
    try:
        p = Product.objects.get(id=id)
    except Product.DoesNotExist:
        return JsonResponse({"Error": "Not found"}, status=404)
    
    data = {
        "id": p.id,
        "name": p.name,
        "price": p.price,
        "description": p.description,
        "count": p.count,
        "is_active": p.is_active,
        "category_id": p.category_id,
    }
    return JsonResponse(data) # didn't put safe=False. Because, expected dict and obtained dict, not list as product_list\
        
    
def category_list(request):
    categories = Category.objects.all()
    data = [
        {
            "id": c.id,
            'name': c.name,
        }
        for c in categories
    ]
    
    return JsonResponse(data, safe=False)


def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist:
        return JsonResponse({"error": 'Not Found'}, status=404)
    
    return JsonResponse({"id": category.id, 
                         "name": category.name})
    
    
def category_products(request, id):
    try:
        c = Category.objects.get(id=id)
    except Category.DoesNotExist:
        return JsonResponse({"error": "Not Found"}, status=404)
    
    
    products = c.products.all()
    # models ішінде форайн кей берген болатынбыз related_name='products' арқылы байланысып тұрмыз
    # category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')

    data = [
        {
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "count": p.count,
            "is_active": p.is_active,
        }
        for p in products
    ]
    
    return JsonResponse(data, safe=False)