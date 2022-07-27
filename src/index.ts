import axios from "axios";
import "./main.scss";

const url = "https://restcountries.com/v3.1/all";

const getCountries = async () => {
  const countriesTable: HTMLElement = document.getElementById("data-output");

  try {
    const response = await axios.get(url);

    let data = response.data;

    if (response.status === 200) {
      console.log(data);

      data.forEach((country: any) => {
        countriesTable.innerHTML += `
        <tbody>
          <tr>
            <th>
                ${country.name.common}
            </th>
            <th>${hasCapital(country.capital)}</th>
            <th>${country.region}</th>
            <th style="word-break: break-word;">
              ${hasLanguage(Object.values(country.languages))}
            </th>
            <th>${country.population}</th>
            <th><img src="${country.flags.png}" style="max-height: 50px"></img></th>
          </tr>
        </tbody>
        `;
      });
    }
  } catch (err) {
    console.log(err);
  }
};

function hasCapital<T>(capital: string) {
  return capital ? capital : "No capital";
}

function hasLanguage(language: string[]) {
  return language ? language : "No Language to display";
}

getCountries();
