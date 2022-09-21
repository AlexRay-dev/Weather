export const API = {
    KEY: '0b415ddb8205ef6c5d8ed08f138fdfe1',
    URL_MAIN: 'https://api.openweathermap.org/data/2.5/weather',
    URL_FORECAST: 'https://api.openweathermap.org/data/2.5/forecast',
};

export async function weatherData(serverUrl, cityName) {
    const url = `${serverUrl}?q=${cityName}&cnt=4&appid=${API.KEY}`;
    const response = await fetch(url);

    return response.json();
}
