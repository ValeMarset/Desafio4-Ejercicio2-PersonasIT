import requests
import os
from dotenv import load_dotenv
from unidecode import unidecode

# Cargar variables de entorno desde el archivo .env
load_dotenv()


def obtener_datos_climaticos():
    # Obtener la API_KEY desde las variables de entorno
    API_KEY = os.getenv("API_KEY")

    # Solicitar al usuario que ingrese el nombre de la ciudad, lo formatea para eliminar los diacríticos y lo pasa a minúscula
    ciudad = unidecode(input("Ingrese el nombre de la ciudad: ")).lower()

    # Lista de ciudades capitales de América Latina
    ciudades_capitales_latam = [
        "buenos aires",
      "sucre",
      "la paz",
      "brasilia",
      "santiago",
      "bogota",
      "san jose",
      "la habana",
      "quito",
      "san salvador",
      "ciudad de guatemala",
      "puerto principe",
      "tegucigalpa",
      "ciudad de mexico",
      "managua",
      "panama",
      "asuncion",
      "lima",
      "santo domingo",
      "montevideo",
      "caracas",
      "belmopan",
      "georgetown",
      "paramaribo",
      "puerto espana",
    ]

    # Verificar si la ciudad ingresada es una ciudad capital de América Latina
    if ciudad not in ciudades_capitales_latam:
        print("La ciudad ingresada no es una ciudad capital de Latinoamérica, por favor inténtelo nuevamente.")
        obtener_datos_climaticos()
        return

    # URL para obtener datos climáticos de la ciudad
    URL = "https://api.openweathermap.org/data/2.5/weather"
    parametros = {
        "q": ciudad,
        "appid": API_KEY,         
        "units": "metric", # Permite que muestre los datos climáticos con la unidad de medida Celcius
        "lang": "es"  # Devuelve los datos en español
    }

    try:
        # Realizar solicitud a la API de OpenWeatherMap
        response = requests.get(URL, params=parametros)
        response.status_code

        # Obtener los datos climáticos
        data = response.json()

        # Mostrar datos climáticos en la consola
        print(f"""
        Nombre de la capital: {data["name"]},
        País: {data["sys"]["country"]},
        Descripción del clima: {data["weather"][0]["description"]},
        Sensación Térmica: {data["main"]["feels_like"]} Cº,
        Presión: {data["main"]["pressure"]} hPa,
        Humedad: {data["main"]["humidity"]} g/m³,
        Temperatura mínima: {data["main"]["temp_min"]} Cº,
        Temperatura máxima: {data["main"]["temp_max"]} Cº
        """)

    except:
        print("Se produjo un error al obtener los datos de la API. Por favor, asegúrese de que su API KEY esté configurada correctamente e intente nuevamente. Si el error persiste, es posible que esta ciudad no esté disponible en la API OpenWeatherMap.")


# Llamada inicial a la función para obtener datos climáticos
obtener_datos_climaticos()
