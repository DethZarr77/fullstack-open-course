import CountryWeather from "./CountryWeather";

const CountryDetail = ({ country }) => {
  const [lat, long] = country.latlng;
  const name = country.name.common;
  const capital = country.capital ? country.capital[0] : "-";
  const areaCode = country.area;

  console.log(lat, long);
  const languages = [];
  for (const language in country.languages) {
    languages.push({ id: language, name: country.languages[language] });
  }

  return (
    <div>
      <h1>{name}</h1>
      <div>
        <div>Capital: {capital}</div>
        <div>Area: {areaCode}</div>
      </div>

      <h2>Languages</h2>
      <ul>
        {languages.map((language) => (
          <li key={language.id}>{language.name}</li>
        ))}
      </ul>
      <div style={{ width: "300px", height: "150px" }}>
        <img
          style={{
            border: "4px solid #dbdfe0",
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: "16px",
          }}
          src={country.flags.svg}
          alt={country.flags.alt}
        />
      </div>
      <CountryWeather name={name} lat={lat} long={long} />
    </div>
  );
};

export default CountryDetail;
