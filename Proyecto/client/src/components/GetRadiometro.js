import React, { useEffect, useState } from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';


const GetRadiometro = () => {

    const [sensor, setData] = useState([]);

    useEffect(() => {
        async function obtenerDatos() {
            const response = await fetch('/api/radiometro');
            const data = await response.json();
            setData(data.Albedo);
        }

        obtenerDatos();
    }, []);

    const graphData = {
        labels : sensor.map((data) => data.ts),
        datasets: [
            {
                label: "Albedo",
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

export default GetRadiometro;
  