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
      <ResponsiveContainer width={"100%"} height={364} >
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
          <YAxis  
            tickCount={5}
            tick={{
              stroke: "gray",
              strokeWidth: 0,
            }}
            ticks={[100, 200, 300, 400, 500]}/>
          <Tooltip />
          <Legend  
          content={"hello nlaewn wjr jr'ilwj wrj ioqwr' r'oih 'iof'w4 'o4w rhrowjr'owjf'oewhf;awonv;iaehg oaegaeri;ghiaeroah"}
            layout="horizontal" // Change the layout to horizontal to display the legend items in a row
            verticalAlign="top" // Position the legend at the top of the chart
            align="right" // Align the legend items to the center
             />
             <CartesianGrid vertical={false} /> {/* Set vertical prop to false */}
          <Bar dataKey="Debit" stackId="a" fill="#4D78FF" />
          <Bar dataKey="Credit" fill="#FCAA0B" />
        </BarChart>
      </ResponsiveContainer>
     
    );
  
}

export default Barchart