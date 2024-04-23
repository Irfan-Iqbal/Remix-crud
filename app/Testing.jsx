import { Button } from 'antd';
import  { useState } from 'react';

function Testing() {
  const [countries, setCountries] = useState([]);
  const [countryInput, setCountryInput] = useState('');
  const [stateInput, setStateInput] = useState('');
  const [cityInput, setCityInput] = useState('');
  const [selectedCountryIndex, setSelectedCountryIndex] = useState(null);

  const addCountry = () => {
    if (countryInput.trim() !== '' && stateInput.trim() !== '' && cityInput.trim() !== '') {
      if (selectedCountryIndex !== null) {
        // Update existing country
        const updatedCountries = [...countries];
        updatedCountries[selectedCountryIndex] = {
          country: countryInput,
          state: stateInput,
          city: cityInput
        };
        setCountries(updatedCountries);
        setSelectedCountryIndex(null);
      } else {
        // Add new country
        setCountries([...countries, { country: countryInput, state: stateInput, city: cityInput }]);
      }
      setCountryInput('');
      setStateInput('');
      setCityInput('');
    }
  };

  const deleteCountry = (index) => {
    const updatedCountries = [...countries];
    updatedCountries.splice(index, 1);
    setCountries(updatedCountries);
    setSelectedCountryIndex(null);
  };

  const editCountry = (index) => {
    const selectedCountry = countries[index];
    setCountryInput(selectedCountry.country);
    setStateInput(selectedCountry.state);
    setCityInput(selectedCountry.city);
    setSelectedCountryIndex(index);
  };

  return (
    <div>
      <h1>Country and City CRUD</h1>
      <div>
        <span>Country: </span>
        <input
          type="text"
          value={countryInput}
          onChange={(e) => setCountryInput(e.target.value)}
        />
      </div>
      <div>
        <apsn>State: </apsn>
        <input
          type="text"
          value={stateInput}
          onChange={(e) => setStateInput(e.target.value)}
        />
      </div>
      <div>
        <span>City: </span>
        <input
          type="text"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
      </div>
      <button onClick={addCountry}>
        {selectedCountryIndex !== null ? 'Update' : 'Add'}
      </button>
      <table style={{border:"2px solid red", width:"100%"}}>
        <thead>
          <tr>
            <th>Country</th>
            <th>State</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => (
            <tr key={index}>
              <td>{country.country}</td>
              <td>{country.state}</td>
              <td>{country.city}</td>
              <td>
                <Button onClick={() => editCountry(index)}>Edit</Button>
                <button onClick={() => deleteCountry(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Testing;
