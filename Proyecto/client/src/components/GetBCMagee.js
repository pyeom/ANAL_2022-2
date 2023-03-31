import React, { useEffect, useState } from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';


const GetBCMagee = () => {

    const [sensor, setBC1] = useState([]);
    const [sensor2, setBC2] = useState([]);
    const [sensor3, setBC3] = useState([]);
    const [sensor4, setBC4] = useState([]);
    const [sensor5, setBC5] = useState([]);
    const [sensor6, setBC6] = useState([]);
    const [sensor7, setBC7] = useState([]);

    useEffect(() => {
        async function obtenerDatos() {
            const response = await fetch('/api/bc-magee');
            const data = await response.json();
            setBC1(data.BC1);
            setBC2(data.BC2);
            setBC3(data.BC3);
            setBC4(data.BC4);
            setBC5(data.BC5);
            setBC6(data.BC6);
            setBC7(data.BC7);
        }

        obtenerDatos();
    }, []);

    const graphData = {
        labels : sensor.map((data) => data.ts),
        datasets: [
            {
                label: "BC1",
                data: sensor.map((data) => data.value),
                backgroundColor: "#55b169",
            },
            {
                label: "BC2",
                data: sensor2.map((data) => data.value),
                backgroundColor: "#cec845",
            },
            {
                label: "BC3",
                data: sensor3.map((data) => data.value),
                backgroundColor: "#ff8f02",
            },
            {
                label: "BC4",
                data: sensor4.map((data) => data.value),
                backgroundColor: "#4f5ccb",
            },
            {
                label: "BC5",
                data: sensor5.map((data) => data.value),
                backgroundColor: "#fe1fa2",
            },
            {
                label: "BC6",
                data: sensor6.map((data) => data.value),
                backgroundColor: "#F45B69",
            },
            {
                label: "BC7",
                data: sensor7.map((data) => data.value),
                backgroundColor: "#34d6dd",
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

export default GetBCMagee;
  