//Get which icon should be placed by condition if you want to use the custom images instead of the dynamic ones
export const getWeatherIcon = (weatherData:any):string =>{
    const weatherId = weatherData.weather[0].id
    //https://openweathermap.org/weather-conditions
      if (weatherId >= 200 && weatherId <= 232)
          return "cloud-lightning"
      else if (weatherId >= 300 && weatherId <= 321)
          return "cloud-drizzle"
      else if (weatherId >= 500 && weatherId <= 531)
          return "cloud-rain"
      else if (weatherId >= 600 && weatherId <= 622)
          return "cloud-snow"
      else if (weatherId >= 701 && weatherId <= 781)
          return "wind"
      else if (weatherId==800)
          return "sun"
      else if (weatherId >= 801 && weatherId <= 804)
          return "cloud"
      else
          return "cloud"
}