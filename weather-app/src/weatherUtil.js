const wmoWeatherCode= new Map();
wmoWeatherCode.set(0,"Clear Sky");
wmoWeatherCode.set(1,"Mainly Clear");
wmoWeatherCode.set(2,"Partly Cloudy");
wmoWeatherCode.set(3,"Overcast");
wmoWeatherCode.set(45,"Fog");
wmoWeatherCode.set(48,"Depositing Rime Fog");
wmoWeatherCode.set(51,"Drizzle: Light");
wmoWeatherCode.set(53,"Drizzle: Moderate");
wmoWeatherCode.set(55,"Drizzle: Heavy");
wmoWeatherCode.set(56,"Freezing Drizzle: Light");
wmoWeatherCode.set(57,"Freezing Drizzle: Moderate");
wmoWeatherCode.set(58,"Freezing Drizzle: Heavy");
wmoWeatherCode.set(61,"Rain: Light");
wmoWeatherCode.set(63,"Rain: Moderate");
wmoWeatherCode.set(65,"Rain: Heavy");
wmoWeatherCode.set(66,"Freezing Rain: Light");
wmoWeatherCode.set(67,"Freezing Rain: Moderate");
wmoWeatherCode.set(68,"Freezing Rain: Heavy");
wmoWeatherCode.set(71,"Snow: Light");
wmoWeatherCode.set(73,"Snow: Moderate");
wmoWeatherCode.set(75,"Snow: Heavy");
wmoWeatherCode.set(77,"Flurries");
wmoWeatherCode.set(80,"Rain Showers: Light");
wmoWeatherCode.set(81,"Rain Showers: Moderate");
wmoWeatherCode.set(82,"Rain Showers: Heavy");
wmoWeatherCode.set(85,"Snow Showers: Light");
wmoWeatherCode.set(86,"Snow Showers: Heavy");
wmoWeatherCode.set(95,"Thunderstorm");
wmoWeatherCode.set(96,"Thunderstorm with Hail");
wmoWeatherCode.set(97,"Freezing Rain Showers: Light");
wmoWeatherCode.set(98,"Freezing Rain Showers: Moderate");
wmoWeatherCode.set(99,"Freezing Rain Showers: Heavy");

const convertToFahrenheit=(celciusTemp)=>{
    return ((celciusTemp*9)/5+32).toFixed(1);
}

const getWeatherType=(code)=>{
    return wmoWeatherCode.get(code);
}

export {convertToFahrenheit,getWeatherType};