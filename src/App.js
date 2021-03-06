import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const App = () => {
    const [countries, setCountry] = useState([])
    const [countryName, setCountryName] = useState('');
    const [countryToShow, setCountryToShow] = useState([]);
    const [showSingleCountry, setShowSingleCountry] = useState(false);
    const [singleCountryDetail, setSingleCountryDetail] = useState({});

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                console.log('promise fulfilled')
                setCountry(response.data)
            })
    }, [])

    useEffect(() => {
        let countryInput = countries.filter(x => x.name.search(new RegExp(countryName, "i")) !== -1)
        setCountryToShow(countryInput);

        if (countryInput.length === 1) {
            showCountryDetail(countryInput[0])
        }
    }, [countryName, countries])

    const changeName = (event) => {
        setCountryName(event.target.value);
        setShowSingleCountry(false);
    }

    const showCountryDetail = (countryDetail) => {
        setShowSingleCountry(true);
        setSingleCountryDetail(countryDetail);
    }

    const DisplayCountryOption = ({ country }) => {
        return (
            <div className="innerDiv">
                <p>{country.name}</p>
                <button onClick={() => showCountryDetail(country)} >show</button>
            </div>
        )
    }


    return (
        <div className="main-div">
            <h1>Explorer</h1>
            <p id="findCountry">Find Countries Details</p>
            <input placeholder='Enter Country Name' value={countryName} onChange={changeName} className="input" />

            <div>
                {showSingleCountry ?
                    <div key={singleCountryDetail.name}>
                        <h2>{singleCountryDetail.name}</h2>
                        <p><u>Capital: </u> {singleCountryDetail.capital}</p>
                        <p><u>Population: </u> {singleCountryDetail.population}</p>
                        <p><u>Languages: </u></p>
                        {singleCountryDetail.languages.map(lang => <p key={lang.name}>{lang.name}</p>)}
                        <img src={singleCountryDetail.flag} alt="flag" height="100" width="100" />
                    </div>
                    : ''
                }
            </div>

            <div>

                {
                    countryToShow.length > 10 ?

                        <p>Too many matches,specify another filter</p>
                        :
                        countryToShow.length === 0 ?

                            <p>No Country Found :(</p>
                            :
                            <div className="countryList">
                                {
                                    countryToShow.length > 1 && countryToShow.map(x =>
                                        <DisplayCountryOption key={x.name} country={x} />
                                    )
                                }
                            </div>
                }

            </div>

            <div id="footer">
                Made with <span role="img" aria-label="heart"> 💙</span> by Anuradha Aggarwal
                <div>
                    <a href="https://github.com/anuradha9712"  ><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/anuradha-aggarwal-4a2751107/"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://twitter.com/Anuradh06359394/"><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
            </div>
        </div>
    )
}

export default App;