# Ajax

Ajax es una tecnología que permite hacer consultas por HTTP de manera asíncrona contra el servidor. Bajo esta definición, que puede no ser demasiado clara para algunas personas con poca experiencia en el entorno web, encontramos una de las herramientas más comunes en sitios, que han permitido evolucionar las aplicaciones web para que sean tan complejas como las conocemos hoy.

En palabras llanas, Ajax permite acceder a datos existentes en el servidor sin necesidad de recargar la página completamente. Estas consultas contra el servidor se realizan por medio de Javascript y los datos se procesan mediante éste mismo lenguaje, permitiendo actualizar el contenido de la página justamente donde sea preciso.

## Qué es asíncrono

Asíncrono en términos generales quiere decir que no tiene una relación temporal con otro proceso, o con la causa que lo produce. La definición linguística del término no acaba de aclarar el concepto en sí. En resumen, asíncrono en Ajax indica que la solicitud es no bloqueante y por tanto, mientras espera el navegador podrá atender otras instrucciones de Javascript, así como la interacción con los elementos de la página. Cuando recibe la respuesta, en el momento que sea, el navegador podrá retomar la ejecución de un código, que generalmente realizará acciones sobre la página que tengan que ver con el resultado recibido de la solicitud al servidor.

## ¿Como funciona AJAX?

Teniendo en cuenta que AJAX no es una sola tecnología, ni es un lenguaje de programación. Como se dijo antes, AJAX es un conjunto de técnicas de desarrollo web. El sistema generalmente comprende:

- HTML/XHTML para el lenguaje principal y CSS para la presentación.
- El Modelo de objetos del documento (DOM) para datos de visualización dinámicos y su interacción.
- XML para el intercambio de datos y XSLT para su manipulación. Muchos desarrolladores han comenzado a reemplazarlo por JSON porque es más similar a JavaScript en su forma.
- El objeto XMLHttpRequest para la comunicación asíncrona.
- Finalmente, el lenguaje de programación JavaScript para unir todas estas tecnologías.

Es necesario algún conocimiento técnico para entenderlo completamente. Sin embargo, el procedimiento general de cómo funciona AJAX es bastante simple.

![](https://www.hostinger.es/tutoriales/wp-content/uploads/sites/7/2019/05/que-es-ajax-diagrama.jpg)

### Modelo AJAX

1. El navegador crea una llamada de JavaScript que luego activará XMLHttpRequest.
2. En segundo plano, el navegador web crea una solicitud HTTP al servidor.
3. El servidor recibe, recupera y envía los datos al navegador web.
4. El navegador web recibe los datos solicitados que aparecerán directamente en la página. No se necesita recargar.