import React, { useEffect, useState } from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';


const GetBCMAAP = () => {

    const [sensor, setBC1] = useState([]);

    useEffect(() => {
        async function obtenerDatos() {
            const response = await fetch('/api/bc-maap');
            const data = await response.json();
            setBC1(data.BC);
        }

        obtenerDatos();
    }, []);

    const graphData = {
        labels : sensor.map((data) => data.ts),
        datasets: [
            {
                label: "BC",
                data: sensor.map((data) => data.value),
                backgroundColor: "#55b169",
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

export default GetBCMAAP;
  