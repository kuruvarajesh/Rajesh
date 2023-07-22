
// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Legend,
//   ResponsiveContainer,
//   Tooltip,
//   ReferenceLine,
// } from "recharts";

// const data = [
//   {
//     group_name: "Group A",
//     boys: 200,
//     girls: 400,
//   },
//   {
//     group_name: "Group B",
//     boys: 300,
//     girls: 500,
//   },
//   {
//     group_name: "Group C",
//     boys: 300,
//     girls: 550,
//   },
//   {
//     group_name: "Group D",
//     boys: 200,
//     girls: 300,
//   },
// ];

// const BarChartComponent = () => {
//   const DataFormatter = (number) => {
//     if (number > 1000) {
//       return `${(number / 1000).toString()}k`;
//     }
//     return number.toString();
//   };

//   const CustomBarShape = (props) => {
//     const { x, y, width, height, fill } = props;
//     return <rect x={x} y={y} width={30} height={height} fill={fill} rx={8} ry={8} />;
//   };

//   return (
//     <div style={{ width: "1000px", height: "500px" }}>
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart
//           data={data}
//           margin={{
//             top: 20,
//             right: 30,
//             left: 20,
//             bottom: 50, // Adjust bottom margin to make space for x-axis labels
//           }}
//           barCategoryGap={0} // Adjust gap between bars for x-axis labels
//         >
//           {/* Add ReferenceLines */}
//           <ReferenceLine y={100} stroke="#F3F3F5" strokeWidth={2} />
//           <ReferenceLine y={200} stroke="#F3F3F5" strokeWidth={2} />
//           <ReferenceLine y={300} stroke="#F3F3F5" strokeWidth={2} />
//           <ReferenceLine y={400} stroke="#F3F3F5" strokeWidth={2} />
//           <ReferenceLine y={500} stroke="#F3F3F5" strokeWidth={2} />

//           <XAxis
//             dataKey="group_name" // Use 'group_name' as the dataKey for X-axis
//             tick={{
//               stroke: "gray",
//               strokeWidth: 1,
//             }}
//             interval={0}
//             textAnchor="end"
//             // tickLine={false}
//             axisLine={{ stroke: "gray", strokeWidth: 1 }}
//             tickMargin={10}
//             tickSize={10}
//             dy={10} // Adjust distance from axis for x-axis labels
//             // tickFormatter={(tick) => (
//             //   <div style={{ borderRadius: "5px", backgroundColor: "lightgray", padding: "5px" }}>
//             //     {tick}
//             //   </div>
//             // )}
//           />
//           <YAxis
//             tickFormatter={DataFormatter}
//             tickCount={5} // Set the number of ticks on the y-axis
//             tick={{
//               stroke: "gray",
//               strokeWidth: 0,
//             }}
//             ticks={[100, 200, 300, 400, 500]}
//           />
//           <Legend
//             wrapperStyle={{
//               paddingTop: 20,
//             }}
//           />
//           <Tooltip formatter={DataFormatter} />
//           <Bar dataKey="boys" name="Boys" fill="#4D78FF" barSize="235" shape={<CustomBarShape />}/>
//           <Bar dataKey="girls" name="Girls" fill="#FCAA0B" barSize="235" shape={<CustomBarShape />}/>
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default BarChartComponent;

import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Barchart = (props)=>{
 
    return (
      <ResponsiveContainer width={1056} height={364} border="1px solid red">
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
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="amt" stackId="a" fill="#82ca9d"  />
          <Bar dataKey="uv" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
     
    );
  
}

export default Barchart