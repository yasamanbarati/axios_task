import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
// import {baseURL} from '../../server-api/server';

const CatAPI_Info = () => {

    const [factData, setFactData] = useState("");
    const [lengthData, setLengthData] = useState(0);

    const catApiInfo = () =>{
        axios.get("https://catfact.ninja/fact")
        .then((res) =>{
            setFactData(res.data.fact);
            setLengthData(res.data.length);
        });
    };

    return (
        <Fragment>
            <div>
                <h4>{factData}</h4>
                <h4>{lengthData}</h4>
            </div>
        </Fragment>
    );
}

export default CatAPI_Info;