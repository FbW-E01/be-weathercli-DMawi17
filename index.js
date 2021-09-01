import axios from "axios";
import { argv } from "process";

const API_KEY = "2bc4a47ea23fa9725545289cb0ff5fd3";

const city = argv[2];
const country = argv[3];
const unit = "units=metric";

const URL = `https://api.openweathermap.org/data/2.5/find?q=${city},${country}&${unit}&appid=${API_KEY}`;

axios
    .get(URL)
    .then((res) => {
        const list = res.data.list[0];
        console.log(
            `It is now ${list.main.temp} ºC in ${list.name}, ${list.sys.country}`
        );
        console.log(
            `The current conditions are: ${list.weather[0].description}`
        );
    })
    .catch((err) => console.error("Ops!", err));
