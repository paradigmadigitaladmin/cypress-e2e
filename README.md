##Proyecto base de Cypress para seguimiento del blog de Cypress

Este proyecto base de Cypress esta creado con el objetivo de ser una guía sobre pruebas e2e y algunas de las 
funcionalidades de Cypress, que se explican en el post del blog de Paradigma: Cypress, un framework de pruebas todo en uno.

###Instalación

Para utilizar el proyecto, hay que abrir la consola, situarnos en el directorio del proyecto e introducir el siguiente comando.

```console
npm install
```
Antes de ejecutar el proyecto hay que cambiar dos secciones de código dentro del fichero poc_cypress.js, que se encuentra dentro
de la carpeta integración.

En la linea 19 y 20 insertar user y password de GitHub:
```javascript
        login: 'user',
        password: 'pass'
```

En la línea 82 y 83, insertar el user y pass de la página de AS:
```javascript
                Email1: "user",
                Password:"password",
```

###Ejecución visual
 
Para ejecutar el proyecto sobre un navegador de manera visual, basta con introducir el siguiente comando en la consola:

```console
cypress open
```

Una vez abierto, basta con seleccionar el fichero poc_cypress.js para que se ejecuten las pruebas sobre el navegador
y genere un reporte.

###Ejecución en consola sobre navegador headless

Para ejecutar el proyecto sobre la consola hay que introducir el siguiente comando:

```console
cypress run
```

Los test se ejecutar sobre un navegador headless, realizando un reporte de pruebas sobre la consola y generarando un
un video de las pruebas.

###Reporte de pruebas
Para obtener un reporte de pruebas diferente al que nos aporta Cypress basta con insertar el siguiente comando:

```console
cypress run --reporter mochawesome
```

