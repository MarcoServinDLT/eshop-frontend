# Bsale Prueba E-Shop (Front-end) 馃洅
Aplicaci贸n front-end vanilla js que simula el stock de una tienda en l铆nea.

La aplicaci贸n permite consultar el stock de productos de una base de datos, de igual manera se puedan realizar varias consultas a la base de datos a trav茅s de la aplicaci贸n, tales como; realizar b煤squeda de productos, filtrado por categor铆as y b煤squeda por categor铆as.

Ver aplicaci贸n:
[Sitio de la aplicaci贸n](https://e-shop-front-end-example.herokuapp.com/)

## Construido con ... 馃敡
Esta aplicaci贸n fue construida principalmente con Vanilla JS, es decir JavaScript puro sin ning煤n framework, no obstante, para el apartado de estilos se requiri贸 de la biblioteca bootstrap.
* [![Bootstrap][Bootstrap.com]](https://getbootstrap.com/)
## Scripts y su funci贸n 馃搫
### render.js
Este es el script principal de la aplicaci贸n, en el se codific贸 toda la l贸gica para renderizar los elementos consultados a la API y donde, a grandes rasgos se sigue la siguiente l贸gica:
* Tratamiento de la URL para verificar si tiene par谩metros de b煤squeda en la consulta.
* Obtenci贸n de los elementos HTML donde se renderizar谩n los datos consultados.
* Consulta de los datos a la API.
* Renderizado de los datos obtenidos.

### httpRequest.js
Este script cuenta 煤nicamente con un funci贸n gen茅rica para realizar llamadas a la API, funci贸n que requiere la URL de consulta y una lista de los par谩metros de la solicitud.
### templates
Este es un directorio en el cual se encuentran funciones de JavaScript que se encargan de generar la estructura HTML de los elementos que se van a renderizar, como lo son las cartas de productos y las opciones de categor铆a.
## Despliegue de la aplicaci贸n 馃殌
Para el despliegue de la aplicaci贸n se opt贸 por la plataforma de Heroku. 

Heroku es una plataforma que se encarga de construir la aplicaci贸n que desees desplegar 煤nicamente enlazando un repositorio de git, no obstante para que esto sea posible debe seguir una configuraci贸n para construir la aplicaci贸n, pero Heroku da principalmente soporte a buildpacks para aplicaciones con ciertas tecnolog铆as.

Se encontr贸 con un buidlpack para aplicaciones en HTML denominado **static** el cual permite configurar la construcci贸n de la app mediante un archivo extensi贸n json donde se especifican rutas y configuraciones para un servidor apache, no obstante de acuerdo con el repositorio de *Heroku* donde se encuentra, este buildpack est谩 obsoleto.

Por lo anterior se decidi贸 crear un archivo de extensi贸n PHP que hace el llamado a la p谩gina principal del sitio para que Heroku construyera la app con el buildpack de PHP.

[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white