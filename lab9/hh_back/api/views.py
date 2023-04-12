import http.client

from django.shortcuts import render
from api.models import Company, Vacancy
from django.http.response import JsonResponse
import json


# Create your views here.
def company_list(request):
    companies = Company.objects.all()
    companies = [c.to_json() for c in companies]
    return JsonResponse(companies, safe=False)


def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
        return JsonResponse(company.to_json())
    except Company.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=http.client.BAD_REQUEST)


def company_vacancies(request, id):
    try:
        company = Company.objects.get(pk=id)
        vacancies = company.vacancy_set.all()
        vacancies = [v.to_json() for v in vacancies]
        return JsonResponse({f"{company.name}'s vacancies": vacancies}, safe=False)
    except Company.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=http.client.BAD_REQUEST)


def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies, safe=False)


def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
        return JsonResponse(vacancy.to_json())
    except Vacancy.DoesNotExist as e:
        return JsonResponse({"error": str(e)})


def vacancy_topten(request):
    vacancy = Vacancy.objects.all().order_by("-salary")[:10]
    vacancy = [v.to_json() for v in vacancy]
    print(vacancy)
    return JsonResponse(vacancy, safe=False)