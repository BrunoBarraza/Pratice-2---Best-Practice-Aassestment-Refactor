import axios from "axios";
import "./main.scss";

type Countries = {
  name: string;
  capital: string;
  region: string;
  language: string;
  population: number;
  flag: string;
};

type GetCountrysResponse = {
  data: Countries[];
};

async function getCountries() {
  try {
    // const data: GetCountriesResponse
    const { data, status } = await axios.get<GetCountrysResponse>("https://restcountries.com/v3.1/all");

    // console.log(JSON.stringify(data, null, 4));
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let country of Countries) {
        out += `
        <tr>
            <td>${country.name.official}</td>
            <td>${country.capital}</td>
            <td>${country.region}</td>
            <td>${country.languages}</td>
            <td>${country.population}</td>
            <td><img src='${country.flags.png}'></img></td>
        </tr>
        `;
    }

    placeholder.innerHTML = out;

    // response status is: 200
    console.log("Response status is: ", status);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error ocurred";
    }
  }
}

getCountries();
