// @flow
const OPEN_WEATHER_MAP_URL = "https://api.openweathermap.org/data/2.5/weather?appid=99cf78b8e2240a69ab073fd37c98cea7&units=metric";

type _ApiData = {
  code: number,
  message?: string,
  main?: { temp: number }
}


const api = {
  getTempByCityId: function (id:number) {
    const encodedLocation = encodeURIComponent(String(id));
    const requestUrl = `${OPEN_WEATHER_MAP_URL}&id=${encodedLocation}`;


    return fetch(requestUrl)
        .then((response) => {
          return response.json()
        })
        .then((data:_ApiData) => {
          if (data.cod && data.message)
          {
            let error:{ message:string, origin?:string } = new Error(data.message);
            error.origin = "api";
            throw error;
          }
          else if(data.main !== undefined)
            return data.main.temp;
          else
            throw new Error('Unable to fetch weather for that location'); // throw generalistic error
        })
        .catch( (e:{ message: string, origin?: string}) =>  {
          const {origin} = e;
          if(origin === "api")
            throw e; // throw error message returned by api service
          else
            throw new Error('Unable to fetch weather for that location'); // throw generalistic error
        });

  }

};

export default api;
