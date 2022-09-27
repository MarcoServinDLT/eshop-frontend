# Bsale Prueba E-Shop (Front-end) 🛒
Aplicación front-end vanilla js que simula el stock de una tienda en línea.

La aplicación permite consultar el stock de productos de una base de datos, de igual manera se puedan realizar varias consultas a la base de datos a través de la aplicación, tales como; realizar búsqueda de productos, filtrado por categorías y búsqueda por categorías.

Ver aplicación:
[Sitio de la aplicación](https://e-shop-front-end-example.herokuapp.com/)

## Construido con ... 🔧
Esta aplicación fue construida principalmente con Vanilla JS, es decir JavaScript puro sin ningún framework, no obstante, para el apartado de estilos se requirió de la biblioteca bootstrap.
* [![Bootstrap][Bootstrap.com]](https://getbootstrap.com/)
## Scripts y su función 📄
### render.js
Este es el script principal de la aplicación, en el se codificó toda la lógica para renderizar los elementos consultados a la API y donde, a grandes rasgos se sigue la siguiente lógica:
* Tratamiento de la URL para verificar si tiene parámetros de búsqueda en la consulta.
* Obtención de los elementos HTML donde se renderizarán los datos consultados.
* Consulta de los datos a la API.
* Renderizado de los datos obtenidos.

### httpRequest.js
Este script cuenta únicamente con un función genérica para realizar llamadas a la API, función que requiere la URL de consulta y una lista de los parámetros de la solicitud.
### templates
Este es un directorio en el cual se encuentran funciones de JavaScript que se encargan de generar la estructura HTML de los elementos que se van a renderizar, como lo son las cartas de productos y las opciones de categoría.
## Despliegue de la aplicación 🚀
Para el despliegue de la aplicación se optó por la plataforma de Heroku. 

Heroku es una plataforma que se encarga de construir la aplicación que desees desplegar únicamente enlazando un repositorio de git, no obstante para que esto sea posible debe seguir una configuración para construir la aplicación, pero Heroku da principalmente soporte a buildpacks para aplicaciones con ciertas tecnologías.

Se encontró con un buidlpack para aplicaciones en HTML denominado **static** el cual permite configurar la construcción de la app mediante un archivo extensión json donde se especifican rutas y configuraciones para un servidor apache, no obstante de acuerdo con el repositorio de *Heroku* donde se encuentra, este buildpack está obsoleto.

Por lo anterior se decidió crear un archivo de extensión PHP que hace el llamado a la página principal del sitio para que Heroku construyera la app con el buildpack de PHP.

[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white