# Desafío4 Ejercicio 2 PersonasIT

Esta aplicación te permite obtener datos climáticos de ciudades capitales de América Latina utilizando la API de OpenWeatherMap.

# Comentarios sobre el ejercicio en Javascript

Dado que la descripción de este ejercicio es un tanto ambigua y no queda claro si se busca obtener los datos climáticos de una o todas las ciudades capitales de Latinoamérica, decidí que mi función proporcionaría los datos climáticos de una sola ciudad capital a la vez, filtrando todas aquellas palabras que no correspondieran a ciudades capitales de Latinoamérica. Además, como se especifica que "debe devolver un documento separado por puntos y comas", consideré que sería conveniente agregar una interfaz muy sencilla para interactuar con los datos devueltos por la API, los cuales también pueden visualizarse en la consola.

## Uso

1. Clona este repositorio en tu computadora.
2. No olvodes insertar tu API_KEY, sino no podrás probar la funcionalidad.
3. Abre el archivo `index.html` en tu navegador.
4. Ingresa el nombre de una ciudad capital de América Latina en el campo de entrada.
5. Haz clic en el botón "Obtener Datos Climáticos".

## Uso de async/await en lugar de .then

Opté por utilizar `async/await` en lugar de `.then` para manejar las promesas en la función `obtenerDatosClimaticos()`. Esta elección se basa en la legibilidad y simplicidad del código, ya que `async/await` facilita la escritura y comprensión de código asíncrono al seguir una estructura más similar a la programación síncrona.

## Uso de Datos de la API

La función `obtenerDatosClimaticos()` es una función asíncrona que realiza las siguientes acciones:

- Obtiene el nombre de la ciudad ingresado por el usuario desde un campo de entrada en la página.
- Verifica si la ciudad ingresada es una ciudad capital de América Latina.
- Realiza una solicitud a la API de OpenWeatherMap para obtener los datos climáticos de la ciudad.
- Muestra los datos climáticos en la página web y en la consola del navegador.
- Maneja posibles errores, como cuando la ciudad no se encuentra o hay problemas con la API.

## Sintáxis Javascript

En la implementación en JavaScript, he utilizado la notación de Camel Case para definir el nombre de la función y las variables.

# Comentarios sobre el ejercicio en Python

Para abordar este ejercicio en Python, me basé en la implementación que ya había realizado en JavaScript. Esto me permitió comprender los pasos necesarios y la lógica subyacente para obtener los datos climáticos de ciudades capitales de América Latina.

## Archivo .env y .env.example

Además, he agregado un archivo `.env.example` en el que se proporciona una plantilla simple para que agreguen su propia API_KEY proporcionada por OpenWeatherMap. Luego, deben renombrar el archivo `.env.example` a `.env` y agregar su API_KEY en ese archivo.

## Uso de Librerías

Utilicé las siguientes librerías:

- **requests**: La librería `requests` para realizar solicitudes HTTP a la API de OpenWeatherMap y obtener los datos climáticos de la ciudad.

- **dotenv**: La librería `dotenv` me permitió cargar variables de entorno desde el archivo `.env`, lo que facilitó la protección y configuración de mi API_KEY de manera segura.

- **unidecode**: La librería `unidecode` para transformar el texto de entrada en un formato sin caracteres diacríticos, asegurando una comparación y procesamiento más uniforme

## Sintaxis Python

En la implementación en Python, he utilizado la notación de Snake Case para definir el nombre de la función y las variables.

# Aclaraciones generales

## Los Campos Temp_min y Temp_max

Es importante mencionar que en algunos casos, la API devuelve el mismo valor para los campos `temp_min` y `temp_max` en ciertas ciudades.

## Datos que devuelve la API

Tanto en Python como en Javascript, la Api no reconoce la ciudad de "Puerto Principe", y "Puerto España".

## Lista de ciudades capitales de América Latina

Esta puede contenter errores ya que fue generada por una IA.

## Fuentes:

- API OpenWeatherMap: https://openweathermap.org/api
- Librería `requests` para Python: https://docs.python-requests.org/en/master/
- Librería `dotenv` para Python: https://pypi.org/project/python-dotenv/
- Librería `unidecode` para Python: https://pypi.org/project/Unidecode/
