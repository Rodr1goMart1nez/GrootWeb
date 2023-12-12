mails = ['correo1gmail.com','correo2@gmail.com ']
nombre = ['JOSE ROBERTO','MARIA BECERRA']
monto = [1500,2000]
comercio = ['GOOOGLE','AMAZON']
tarjeta = [56439917481,564183783731]


for i in range(len(mails)):
    while " " in mails[i]:
        print(mails[i])
        break

for i in range(len(mails)):
    while "@" in mails[i]:
        continue
    else:
        print(mails[i])
        break

for i in range(len(mails)):
    #PROCESO DE ENVIO
    print(f"Se envio el monto {monto[i]}, al cliente {nombre[i]}, con el comercio {comercio[i]} y el numero de tarjeta: {tarjeta[i]}")
