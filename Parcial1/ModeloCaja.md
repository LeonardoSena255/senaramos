# Modelo de Caja

Cuando hablamos del modelo de cajas en CSS, estamos haciendo referencia a un sistema que tiene el navegador de interpretar las diferentes partes de lo que solemos denominar «caja»: un elemento HTML con unas ciertas dimensiones.

La representación básica del modelo de cajas se basa en varios conceptos importantes, como veremos a continuación:

- El borde (border), es el límite que separa el interior del exterior del elemento.
- El márgen (margin), es la parte exterior del elemento, por fuera del borde.
- El relleno (padding), es la parte interior del elemento, entre el contenido y el borde.
- El contenido, es la parte interior del elemento, excluyendo el relleno.

## Margen

El margen es un espacio invisible que hay alrededor de la caja. Aleja el resto de elementos de la caja. Los márgenes pueden tener valores positivos o negativos. Establecer un margen negativo para un lado de tu caja puede hacer que se superponga con otros elementos de la página. Tanto si utilizas el modelo de cajas estándar como el alternativo, el margen siempre se añade después de haber calculado el tamaño de la caja que se ve.

Podemos controlar todos los márgenes de un elemento a la vez usando la propiedad margin, o cada lado individualmente usando las propiedades equivalentes sin abreviar:

- margin-top
- margin-right
- margin-bottom
- margin-left

## Bordes

El borde se dibuja entre el margen y el área de relleno de una caja. Si utilizas el modelo de cajas estándar, el tamaño del borde se añade a los elementos width y height que establecen el alto y el ancho de la caja. Si utilizas el modelo de cajas alternativo, el tamaño del borde reduce el tamaño de la caja de contenido, porque ocupa una parte del alto y el ancho disponibles.

Hay una gran cantidad de propiedades que sirven para aplicar estilo a los bordes: hay cuatro bordes y cada borde tiene un estilo, un ancho y un color que podemos modificar.

Puedes establecer el ancho, el estilo o el color de los cuatro bordes a la vez utilizando la propiedad border.

Para establecer las propiedades de cada lado de forma individual, puedes utilizar:

- border-top
- border-right
- border-bottom
- border-left

Para establecer el ancho, el estilo o el color de todos los lados, usa lo siguiente:

- border-width
- border-style
- border-color

Para establecer el ancho, el estilo o el color de un solo lado, puedes usar una de las propiedades no abreviadas:

- border-top-width
- border-top-style
- border-top-color
- border-right-width
- border-right-style
- border-right-color
- border-bottom-width
- border-bottom-style
- border-bottom-color
- border-left-width
- border-left-style
- border-left-color

## Relleno

El relleno se encuentra entre el borde y el área de contenido. A diferencia de los márgenes, el relleno no puede tomar valores negativos, por lo que el valor debe ser 0 o positivo. Cualquier fondo aplicado a tu elemento se mostrará detrás del área de relleno y, generalmente, se usa para mantener el contenido alejado del borde.

Podemos controlar el área de relleno para todos los lados de un mismo elemento usando la propiedad padding, o para cada lado uno de los lados usando las propiedades equivalentes:

- padding-top
- padding-right
- padding-bottom
- padding-left