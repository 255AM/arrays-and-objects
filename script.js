var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32];

let todaysWeather = {
    temperature: {
      high: 55,
      low: 32
    },
    conditions: "sunny",
    astronomy: {
      sunrise: "7:43 AM",
      sunset: "5:09 PM"
    }
  }

  let weatherForecast = [
    {
     day: "Today",
     temperature: {
       high: 55,
       low: 32
     },
     conditions: "sunny",
     astronomy: {
       sunrise: "7:43 AM",
       sunset: "5:09 PM"
     }
    },
    {
     day: "Saturday",
     temperature: {
       high: 50,
       low: 29
      },
     conditions: "cloudy",
     astronomy: {
       sunrise: "7:44 AM",
       sunset: "5:08 PM"
     }
    },
    {
     day: "Sunday",
     temperature: {
       high: 47,
       low: 35
      },
     conditions: "chance of rain",
     astronomy: {
       sunrise: "7:45 AM",
       sunset: "5:07 PM"
     }
    }
   ]

   console.log(todaysWeather)
   console.log(weatherForecast[0].temperature.high)
   console.log(weatherForecast[1].astronomy.sunrise)
   console.log(weatherForecast[1].conditions)
   console.log(weatherForecast[1].astronomy.sunset)
   console.log(`weatherForecast[1].astronomy.sunrise`)

   



   