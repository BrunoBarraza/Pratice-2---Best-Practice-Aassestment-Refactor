import axios from "axios";
import "./main.scss";

interface Country {
  name: string;
  capital: string;
  region: string;
  language: string;
  population: number;
  flag: string;
};

type GetCountrysResponse = {
  data: Country[];
};

async function getCountries() {
  try {
    // const data: GetCountriesResponse
    const { data, status } = await axios.get<GetCountrysResponse>("https://restcountries.com/v3.1/all");

    console.log(JSON.stringify(data, null, 4));

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
