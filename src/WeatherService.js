
export class WeatherService
{
    /**
     * Returns forecast data for the next 7 days
     * @returns {Promise<Forecast.RootObject>}
     */
    getData()
    {
        return fetch('http://api.apixu.com/v1/forecast.json?key=69e03ca47c2d4a998f593024181807&q=Brisbane&days=7')
            .then(res => res.json())
    }
}