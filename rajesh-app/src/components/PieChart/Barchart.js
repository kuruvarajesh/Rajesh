import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
let numbers = [100, 200, 300, 400,500]
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      

    },
    title: {
      display: true,
      text: '$7,560 Debited & $5,420 Credited in this Week',
    },
    ticks:{numbers},
  },
};

const labels = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

 const data = {
  labels,
  datasets: [
    {
      label: 'Debit',
      data: labels.map(() => Math.floor(Math.random()*(100-1)+1)),
      backgroundColor: '#4D78FF',
    },
    {
      label: 'Credit',
      data: labels.map(() => Math.floor(Math.random()*(100-1)+1)),
      backgroundColor: '#FCAA0B',
    },
  ],
};

function Barchart() {
  return <Bar options={options} width={900} height={234} data={data} />;
}

export default Barchart