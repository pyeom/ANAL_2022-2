import React, { useEffect, useState } from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';


const GetMPGRIMM = () => {

    const [sensor, setTSP] = useState([]);
    const [sensor2, setPM10] = useState([]);
    const [sensor3, setPM4] = useState([]);
    const [sensor4, setPM25] = useState([]);
    const [sensor5, setPM1] = useState([]);

    useEffect(() => {
        async function obtenerDatos() {
            const response = await fetch('/api/mp-grimm');
            const data = await response.json();
            setTSP(data.TSP);
            setPM10(data.PM10);
            setPM4(data.PM4);
            setPM25(data.list[0]["PM25"]);
            setPM1(data.PM1);
        }

        obtenerDatos();
    }, []);

    const graphData = {
        labels : sensor.map((data) => data.ts),
        datasets: [
            {
                label: "TSP",
                data: sensor.map((data) => data.value),
                backgroundColor: "#55b169",
            },
            {
                label: "PM10",
                data: sensor2.map((data) => data.value),
                backgroundColor: "#cec845",
            },
            {
                label: "PM4",
                data: sensor3.map((data) => data.value),
                backgroundColor: "#ff8f02",
            },
            {
                label: "PM2.5",
                data: sensor4.map((data) => data.value),
                backgroundColor: "#4f5ccb",
            },
            {
                label: "PM1",
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

export default GetMPGRIMM;
  