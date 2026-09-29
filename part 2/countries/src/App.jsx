import { useState } from "react";
import countriesService from "./services/countries";
import { useEffect } from "react";
import CountryList from "./components/CountryList";

const App = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState(null);

  const filteredCountries = countries
    ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase().trim()),
      )
    : [];

  useEffect(() => {
    countriesService
      .getAll()
      .then((countries) => {
        setCountries(countries);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleShowClick = (countryName) => {
    setSearch(countryName);
  }

  return (
    <div>
      <div>
        find countries
        <div>
          <input type="text" value={search} onChange={handleSearch} />
        </div>
        <CountryList
          countries={filteredCountries}
          onShowClick={handleShowClick}
        />
      </div>
    </div>
  );
};

export default App;
