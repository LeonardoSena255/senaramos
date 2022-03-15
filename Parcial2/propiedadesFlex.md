# Flexbox
Tradicionalmente, en CSS se ha utilizado el posicionamiento (_static, relative, absolute..._), los elementos en línea o en bloque (_y derivados_) o los **float**, lo que a grandes rasgos no dejaba de ser un sistema de creación de diseños bastante tradicional que no encaja con los retos que tenemos hoy en día: sistemas de escritorio, dispositivos móviles, múltiples resoluciones, etc...

**Flexbox** es un sistema de **elementos flexibles** que llega con la idea de olvidar estos mecanismos y acostumbrarnos a una mecánica más potente, limpia y personalizable, en la que los elementos HTML se adaptan y colocan automáticamente y es más fácil personalizar los diseños. Está especialmente diseñado para crear, mediante CSS, estructuras de **una sóla dimensión**.
## Conceptos
Para empezar a utilizar **flexbox** lo primero que debemos hacer es conocer algunos de los elementos básicos de este nuevo esquema, que son los siguientes:
![enter image description here](https://lenguajecss.com/css/maquetacion-y-colocacion/flexbox/flexbox-como-funciona.png)
- **Contenedor**: Es el elemento padre que tendrá en su interior cada uno de los ítems flexibles. Observa que al contrario que muchas otras estructuras CSS, por norma general, en Flex establecemos las propiedades al elemento padre.
    
    -   **Eje principal**: Los contenedores flexibles tendrán una orientación principal específica. Por defecto, es en horizontal (_en fila_).
    -   **Eje secundario**: De la misma forma, los contenedores flexibles tendrán una orientación secundaria, perpendicular a la principal. Si la principal es en horizontal, la secundaria será en vertical, y viceversa.
-   **Ítem**: Cada uno de los hijos flexibles que tendrá el contenedor en su interior.

### Propiedades del contenedor flex

| Propiedad       | Funcion                                                                                                                                                                            | Ejemplo                                                                                                    |   
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| display         | Si su valor es flex o inline ,la propiedad display define un contenedor flex (flexbox)                                                                                             | .flex-container{ display: -webkit-flex; display: -ms-flexbox; display: flex; }                             |   |   |
| flex-direction  | Establece la direccion del  principal y por tanto la  de los elementos flex                                                                                                        | .flex-container{ -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }              |   |   |
| flex-wrap       | Especifica si puede haber un  de linea (wrap) o no (nowrap) El valor por defecto es nowrap                                                                                         | .flex-container{ -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap; wrap; }                          |   |   |
| flex-flow       | Es la forma abreviada para las propiedades flex-direction y  flex-wrap. El valor por defect es row nowrap.                                                                         | .flex-container{ -webkit-flex-flow: row nowrap; -ms-flex-flow: row nowrap; flex-flow: row nowrap; }        |   |   |
| align-items     | Define como se colocan los  elementos dentro de una caja flexible flexbox relativamente al eje transversal. El valor  es stretch.                                                  | .flex-container{ -webkit-align-items: flex-start; -ms-flex-align: start; align-items: flex-start; }        |   |   |
| justify-content | Define como se colocan los  elementos dentro de una caja flexible relativamente al eje principal, cuando los elementos no ocupan toda la caja. El  valor por defecto es flex-start | flex-container{ -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; }  |   |   |
| align-content   | Alinea los elementos del  contenedor flex cuando los  elementos no utilizan todo el espacio disponible en el eje transversal. El valor por  defecto es stretch.                    | flex-container{ -webkit-align-content: flex-start; -ms-flex-line-pack: start; align-content: flew-start; } |   |   |


### Propiedades de los elementos (items) flex.

| Propiedad   | Funcion                                                                                                                               | Ejemplo                                                                                       |
|-------------|---------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| align-self  | Reposiciona elementos individuales relativamente al eje transversal. Generalmente se trata de elementos posicionados con align-items. | .item{ -webkit-align-self: flex-start; -ms-flex-item-align: start; align-self: flex-start;  } |
| flex-grow   | Define cuanto puede crecer un  elemento flex, si fuera necesario. El valor por defecto es 0.                                          | .item{ -webkit-flex-grow: 2; -ms-flex-grow: 2; flex-grow: 2; }                                |
| flex-shrink | Define cuanto puede disminuir un elemento flex, si fuera necesario. El valor por defecto es 1.                                        | .item{ -webkit-flex-shrink: 2; -ms-flex-shrink: 2; flex-shrink; 2; }                          |
| flex-basis  | Especifica el valor inicial del  tamaño principal de un elemento flex. El valor por defecto es auto                                   | .item{ -webkit-flex-basis: auto; -ms-flex-basis: auto; flex-basis: auto; }                    |
| flex        | La forma abreviada para flex-grow, flex-shrink y flex-basis juntos. El valor por defecto es 0, 1 y auto                               | .item{ -webkit-flex: 1; -ms-flex: 1; flex: 1; }                                               |
| order       | Se utiliza para cambiar el orden en el que aparecen los elementos  individuales.                                                      | item{ -webkit-order: 2; -ms-order: 2; order: 2; }                                             |