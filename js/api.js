const API_KEY = "6d55f3b46d25d4bf10c4e425c3234bc4";

const fetchWeatherData = async (city, units) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
    );

    if (!response.ok) {
      throw new Error("istek başarılı değil");
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export default fetchWeatherData;
