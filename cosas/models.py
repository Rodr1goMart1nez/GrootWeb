from django.db import models

# Create your models here.

class Clientes(models.Model):

    montoTrans=models.PositiveSmallIntegerField()

    fecha=models.DateField()

    comercio=models.CharField(max_length=1000)

    numtarjeta=models.PositiveSmallIntegerField()

    nombreCliente=models.CharField(max_length=500)

    numeroCliente=models.PositiveSmallIntegerField()

    cedulaCliente=models.CharField(max_length=100)

    emailCliente=models.CharField(max_length=1000)

    celular=models.PositiveSmallIntegerField()

    comentarioBPM=models.CharField(max_length=1500)

    fechaBPM=models.DateField()

    fechaCarga=models.DateField()

    estadoMail=models.CharField(max_length=100)

    dictamen=models.CharField(max_length=1000)

    estado=models.CharField(max_length=200)

    fechaCreacion=models.DateField()

    comentarioDictamen=models.CharField(max_length=200)

    class Meta:

        db_table='clientes'