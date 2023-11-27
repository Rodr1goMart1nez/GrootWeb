from django.shortcuts import render, redirect
from .models import Clientes
from django.http.response import JsonResponse

# Create your views here.

def menu(request):
    return render(request,"index.html")

def dash(request):
    return render(request,"dashboard.html")

def buscarmc(request):
    return render(request,"buscar_mc.html")

def buscarvs(request):
    return render(request,"buscar_vs.html")

def enviarmc(request):
    return render(request,"Envio_Correo_mc.html")

def enviarvs(request):
    return render(request,"Envio_Correo_vs.html")

def list_clientes(_request):
    clientes=list(Clientes.objects.values())
    data={'Clientes':clientes}
    return JsonResponse(data)

def enviarCliente(request, montoTrans):
    cliente = Clientes.objects.get(montoTrans=montoTrans)
    return render(request, "enviarCliente.html", {"Clientes":cliente})

def edicionCliente(request):
    montoTrans = request.POST['txtMontoTrans']
    nombre = request.POST['txtNombre']
    emailCliente = request.POST['txtemail']

    clientes = Clientes.objects.get(montoTrans=montoTrans)
    clientes.nombreCliente = nombre
    clientes.emailCliente = emailCliente
    clientes.save()

    return redirect('/enviarmc')