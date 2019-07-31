##Laboratorio Angular
#Nombre: Elkin Mauricio Garces Duque 

# Servicios
Para consumir datos de los **owner**
Se usan los servicios:
**getAll():** Retorna el total de los owners. Usando get HTTP.  
**getOwner(dni):** Basado en el ID o DNI mediante argumento se obtienen los demas datos del Owner asociado. Usando **get** de HTTP.  
**createOwner(owner):** Ingresa un nuevo registro para un owner que recibe como parametro. Mediante **post** de HTTP.  **deleteOwner(href):** Mediante parametro se identifica al owner asociado y se  usa **delete** de HTTP.  
**updateOwner(href, owner):** Recibe href para identificar el owner que se va a modificar actualizar o borrrar usando **put** de HTTP.  


## Componentes
**owner-list:** genera lista de *Owners*  
**owner-edit:** Edita, actualiza o elimina owners


>**Notas:** El componente car-list fue modificado de manera que mostrara el nombre del carro, la imagen asociada y el id del propietario en caso de que lo tenga. Si  No se tiene propietario este campo estara en blanco. 

>Mediante el uso de tarjetas se pudo organizar el asunto de ver los carros asociados a un owner. Tambien se agrego un boton debajo de cada tarjeta para editar el coche seleccionado.


# CarServiceClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
