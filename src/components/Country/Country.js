import React from 'react';

const Country = (props) => {

    const { flag,name, population, region } = props.country;
    const handleAddtoCountry=props.handleAddtoCountry;
   
    const countryStyle=
    {
        border:'1px solid red',
        margin:'10px',
        padding:'20px'
    }
    return (
        <div style={countryStyle}>
            <h4>{name}</h4>

            <h5>{population}</h5>
            <p>{region}</p>
            <img style={{height:'50px'}} src={flag}></img>
            <br/>
            <button onClick={()=>handleAddtoCountry(props.country)}>Add Country</button>

        </div>
    );
};

export default Country;