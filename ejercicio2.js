// const API_KEY = "Inserte aquí su Api key personal e intransferible y descomente esta línea de código"
async function obtenerDatosClimaticos() {
  try {
    // Obtener y formatear el nombre de la ciudad ingresado por el usuario
    const ciudad = document
      .getElementById("ciudad")
      .value.toLowerCase() // Convertir a minúsculas
      .trim() //Eliminar los espacios al principio y al final
      .normalize("NFD") // Normalizar caracteres Unicode
      .replace(/[\u0300-\u036f]/g, ""); // Eliminar diacríticos

    // Lista de ciudades capitales de América Latina
    const ciudadesCapitalesLATAM = [
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
    ];

    // Verificar si la ciudad ingresada es una capital de América Latina
    if (!ciudadesCapitalesLATAM.includes(ciudad)) {
      // Mostrar mensaje de error en la sección de datos climáticos
      let advertenciaError = document.getElementById("advertenciaError");
      advertenciaError.insertAdjacentHTML(
        "afterbegin",
        `La palabra ingresada no es una ciudad capital de Latinoamérica, por favor intentelo nuevamente.`
      );

      // Mostrar mensaje de error en la consola
      console.warn(
        "La palabra ingresada no es una ciudad capital de Latinoamérica, por favor intentelo nuevamente."
      );

      // Ocultar el mensaje de error después de 5 segundos
      setTimeout(() => {
        advertenciaError.innerHTML = "";
      }, 5000);

      return;
    }

    // URL para obtener datos climáticos de la ciudad
    const URL = `https://api.openweathermap.org/data/2.5/weather?lang=es&q=${ciudad}&appid=${API_KEY}&units=metric`;

    // Realizar solicitud a la API
    const response = await fetch(URL);
    if (!response.ok) throw new Error("WARN", response.status);

    // Obtener los datos climáticos
    const data = await response.json();

    // Mostrar los datos climáticos en la sección de datos climáticos
    let datosClimaticosSection = document.getElementById("datosClimaticos");
    datosClimaticosSection.insertAdjacentHTML(
      "afterbegin",
      `
      <h2>${data.name}</h2>
      <ul>
      <li>País: ${data.sys.country}</li>
      <li>Descripción del clima: ${data.weather[0].description}</li>
      <li>Sensación Térmica: ${data.main.feels_like} Cº</li>
      <li>Presión: ${data.main.pressure} hPa</li>
      <li>Humedad: ${data.main.humidity} g/m³</li>
      <li>Temperatura mínima: ${data.main.temp_min} Cº</li>
      <li>Temperatura máxima: ${data.main.temp_max} Cº</li>
      </ul>
      <hr>
    `
    );

    // Mostrar los datos climáticos en la consola
    return console.log(`
    Nombre de la capital: ${data.name},
    País: ${data.sys.country},
    Descripción del clima: ${data.weather[0].description},
    Sensación Térmica: ${data.main.feels_like} Cº,
    Presión: ${data.main.pressure} hPa,
    Humedad: ${data.main.humidity} g/m³,
    Temperatura mínima: ${data.main.temp_min} Cº,
    Temperatura máxima: ${data.main.temp_max} Cº
   `);
  } catch (error) {
    // Manejo de errores
    console.error("Algo salió mal");
    let datosClimaticosSection = document.getElementById("datosClimaticos");
    datosClimaticosSection.insertAdjacentHTML(
      "afterbegin",
      `<p>Se produjo un error al obtener los datos de la API. Por favor, asegúrese de que su API KEY esté configurada correctamente e intente nuevamente. Si el error persiste, es posible que esta ciudad no esté disponible en la API OpenWeatherMap.</p>`
    );
  }
}
