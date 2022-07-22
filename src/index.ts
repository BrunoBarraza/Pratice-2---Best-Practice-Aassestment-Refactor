import axios from "axios";

const url = "https://restcountries.com/v3.1/all";

axios
  .get(url)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
