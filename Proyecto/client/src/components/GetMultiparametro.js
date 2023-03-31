import React, { useEffect, useState } from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';


const GetMultiparametro = () => {

    const [sensor, setWS] = useState([]);
    const [sensor2, setWD] = useState([]);
    const [sensor3, setTemp] = useState([]);
    const [sensor4, setRH] = useState([]);
    const [sensor5, setBP] = useState([]);

    useEffect(() => {
        async function obtenerDatos() {
            const response = await fetch('/api/multi-parametro');
            const data = await response.json();
            setWS(data.WS);
            setWD(data.WD);
            setTemp(data.Temp);
            setRH(data.RH);
            setBP(data.BP);
        }

        obtenerDatos();
    }, []);

    const graphData = {
        labels : sensor.map((data) => data.ts),
        datasets: [
            {
                label: "WS",
                data: sensor.map((data) => data.value),
                backgroundColor: "#55b169",
            },
            {
                label: "WD",
                data: sensor2.map((data) => data.value),
                backgroundColor: "#cec845",
            },
            {
                label: "Temp",
                data: sensor3.map((data) => data.value),
                backgroundColor: "#ff8f02",
            },
            {
                label: "RH",
                data: sensor4.map((data) => data.value),
                backgroundColor: "#4f5ccb",
            },
            {
                label: "BP",
                data: sensor5.map((data) => data.value),
                backgroundColor: "#fe1fa2",
            }
        ]
    }

    const options = {
        responsive: true
    }


    return(
        <div>
            <Bar options={options} data={graphData} />
        </div>
    );
    
}

export default GetMultiparametro;
  