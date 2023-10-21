import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from "../store/todoSlice"

const Somedrop = () => {
    const [countries, setCountries] = useState([]);
    const API_KEY = "izaKjaLpPasG8W79SMc4CdZWX4IC0Via";
    const dispatch = useDispatch();
    const [selectedCountry, setSelectedCountry] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://calendarific.com/api/v2/countries?api_key=${API_KEY}&country=US&year=2023`);
                const data = await response.json();
                setCountries(data.response.countries);
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedCountry(selectedValue);
        dispatch(addTodo(selectedValue.split(" : ")[1]));
    };

    return (
        <div>
            <select className="form-select" aria-label="Default select example" onChange={handleSelectChange} value={selectedCountry}>
                <option value="">Open this select menu</option>
                {countries.map((country, index) => (
                    <option key={index} value={`${country.id} : ${country.country_name}`}>
                        {`Country: ${country.country_name}`}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Somedrop;
