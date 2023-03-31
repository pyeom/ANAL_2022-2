import React, { useEffect, useState } from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';


const GetRadon = () => {

    const [sensor, setData] = useState([]);

    useEffect(() => {
        async function obtenerDatos() {
            const response = await fetch('/api/radon');
            const data = await response.json();
            setData(data.Radon);
        }

        obtenerDatos();
    }, []);

    const graphData = {
        labels : sensor.map((data) => data.ts),
        datasets: [
            {
                label: "Radon",
                data: sensor.map((data) => data.value),
                backgroundColor: "#F45B69",
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

export default GetRadon;
  