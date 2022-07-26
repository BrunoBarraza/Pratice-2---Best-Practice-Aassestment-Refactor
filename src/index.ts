import axios from "axios";
import "./main.scss";
import html from "./template.html";

axios
  .get("https://restcountries.com/v3.1/all")
  .then(function (response) {
    return response.data.json();
  })
  .then(function (countries) {
    console.log(countries);
  });

interface Country {
  name: Name;
  capital: string[];
  region: string;
  languages: Languages;
  population: number;
  flags: CoatOfArms;
}
export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface Languages {
  kal: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  kal: Translation;
}

export interface Translation {
  official: string;
  common: string;
}
