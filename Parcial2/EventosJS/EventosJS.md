# Proceso de captura y propagacion de los eventos en JavaScript

Los eventos en JavaScript actúan como notificaciones de que se ha producido una interacción del usuario u otra acción. Por ejemplo, cuando hace clic en un botón de formulario, su navegador genera un evento para indicar que esto ha sucedido. Escribir en un cuadro de búsqueda también genera eventos, y así es como suele funcionar la sugerencia automática en línea.

En JavaScript, los eventos que involucran la interacción del usuario generalmente se activan contra elementos específicos. Por ejemplo, hacer clic en un botón genera un evento contra ese botón. Pero los eventos también se propagan: disparan a otros elementos de la jerarquía del documento.

## ¿Qué es el manejo de eventos en JavaScript?

Puede utilizar código JavaScript para capturar y responder a eventos generados por una página web. Puede hacer esto para anular el comportamiento predeterminado o tomar medidas cuando no hay ningún valor predeterminado. Un ejemplo común es la validación de formularios. El manejo de eventos le permite detener el proceso normal de envío de formularios.

Considere este ejemplo:

    <div>
    <button id="button">Click Me</button>
    </div>

    <script>
    const button = document.getElementById("button");

    button.addEventListener("click", ()=>{
    alert("Hello World");
    });
    </script>

El código anterior tiene un elemento de botón con una identificación llamada botón. Tiene un detector de eventos de clic que muestra una advertencia con el mensaje Hola Mundo.

## ¿Qué es la propagación de eventos?

La propagación de eventos describe el orden en que los eventos viajan a través del árbol DOM cuando el navegador web los activa.

Supongamos que hay una etiqueta de formulario dentro de una etiqueta div y ambas tienen detectores de eventos onclick. La propagación de eventos describe cómo un detector de eventos puede activarse tras otro.

Hay dos tipos de propagación:

- Evento burbujeante, con el que los eventos gorgotean hacia arriba, de niño a padre.
-  Captura de eventos, con la cual los eventos viajan hacia abajo, de padres a hijos. 

## ¿Qué es la propagación de eventos en JavaScript?

La propagación de eventos significa que la dirección de la propagación del evento será desde el elemento secundario a su elemento principal.

Considere el siguiente ejemplo. Tiene tres elementos anidados: div, form y button. Cada elemento tiene un hacer clic detector de eventos El navegador muestra un alerta con un mensaje cuando se hace clic en cada elemento.

De forma predeterminada, el orden en el que el navegador web muestra las alertas será botón, formulario y luego div. Los eventos se desarrollan de un niño a otro.

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event propagation example</title>
    </head>
    <body>
    <div id="div" style="background:#22577E; color:white">
    div
    <form id="form" style="background:#5584AC; color:white">
    form <br/><br/>
    <button id="button" style="background:#95D1CC; color:#22577E; border: solid 2px #22577E;
    padding: 15px 40px;">
    Button
    </button>
    </form>
    </div>
    <script>
    const div = document.getElementById("div");
    const form = document.getElementById("form");
    const button = document.getElementById("button");

    div.addEventListener("click", ()=>{
    alert("div");
    });
    form.addEventListener("click", ()=>{
    alert("form")
    });
    button.addEventListener("click", ()=>{
    alert("button")
    });
    </script> 
    </body>
    </html>

## ¿Qué es la captura de eventos?

Con la captura de eventos, el orden de propagación es el opuesto al burbujeo. De lo contrario, el concepto es idéntico. La única diferencia con la adquisición es que los eventos ocurren de padres a hijos. A diferencia del ejemplo anterior, con la captura de eventos, el navegador mostrará las advertencias en este orden: div, formulario y botón.

Para obtener la captura de eventos, solo necesita realizar un cambio en el código. El segundo parámetro de addEventListener () define el tipo de propagación. Es falso por defecto, para representar burbujeo. Para habilitar la captura de eventos, el segundo parámetro debe establecerse en verdadero.

    div.addEventListener("click", ()=>{
    alert("div")
    }, true);
    form.addEventListener("click", ()=>{
    alert("form")
    }, true);
    button.addEventListener("click", ()=>{
    alert("button")
    }, true);

## ¿Cómo se puede prevenir la propagación de eventos?

Puede detener la propagación de eventos utilizando el detener la propagación () método. El addEventListener () acepta un nombre de evento y una función de controlador. El controlador acepta un objeto de evento como parámetro. Este objeto contiene toda la información sobre el evento.

Cuando invocas el detener la propagación () método, el evento dejará de propagarse desde ese punto. Por ejemplo, cuando usa detener la propagación () en el elemento de formulario, los eventos dejarán de propagarse al div. Si hace clic en el botón, verá los eventos generados en el botón y el formulario, pero no el div.

    form.addEventListener("click", (e)=>{
    e.stopPropagation(); 
    alert("form");
    });