import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Sat',
    Debit:350,
    Credit:600
  },
  {
    name: 'Sun',
    Debit:250,
    Credit:500
  },
  {
    name: 'Mon',
    Debit:250,
    Credit:370
  },
  {
    name: 'Tue',
    Debit:570,
    Credit:350
  },
  {
    name: 'Wed',
    Debit:400,
    Credit:550
  },
  {
    name: 'Thu',
    Debit:450,
    Credit:250
  },
  {
    name: 'Fri',
    Debit:390,
    Credit:490
  },
];

const Barchart = (props)=>{
 
    return (
      <ResponsiveContainer width={1356} height={364} border="1px solid red">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis  />
          <Tooltip />
          <Legend />
          <Bar dataKey="Debit" stackId="a" fill="#4D78FF" />
          <Bar dataKey="Credit" fill="#FCAA0B" />
        </BarChart>
      </ResponsiveContainer>
     
    );
  
}

export default Barchart