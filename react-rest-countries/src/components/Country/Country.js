import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country);
    const {area,region,population,name,flags} = props.country;
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Area:{area}</p>
            
        </div>
    );
};

export default Country;