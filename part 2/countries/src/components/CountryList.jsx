import CountryDetail from "./CountryDetail";

const CountryList = ({ countries, onShowClick }) => {
  const countryLength = countries.length;

  if (countryLength > 10) {
    return <div>Too many countries, specify another filter</div>;
  } else if (countryLength <= 10 && countryLength > 1) {
    return (
      <div>
        {countries.map((country) => (
          <div key={country.name.common}>
            {country.name.common}&nbsp;
            <button type="button" onClick={() => onShowClick(country.name.common)}>Show</button>
          </div>
        ))}
      </div>
    );
  } else if (countries.length === 1) {
    return (
      <CountryDetail country={countries[0]} />
    );
  }
};

export default CountryList;
