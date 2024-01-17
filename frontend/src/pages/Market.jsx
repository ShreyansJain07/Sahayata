
//THIS IS A Test market file main page in on marketDisplay ,route =  /dashboard/display
import React, { useState, useEffect } from 'react';
import { AreaChart,Area, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,CartesianGrid } from 'recharts';
import { CheckCircleIcon, DownloadIcon } from '@chakra-ui/icons'
import { Box, SimpleGrid, Text, Heading ,  Avatar,Stat,StatHelpText,StatArrow,StatNumber,StatLabel} from "@chakra-ui/react";
import priceData from "./priceData.json"
const Market = () => {
  const [stocksData, setStocksData] = useState([
    { name: 'Nifty', icon: 'N', change: 23.36 },
    { name: 'AMAZON', icon: 'A', change: 23.36 },
    { name: 'SENSEX', icon: 'S', change: -23.36 },
    { name: 'TATA STEEL', icon: 'T', change: 23.36 },
  ]);
  const [newpriceData, setNewPriceData] = useState([]);

  const generateRandomData = () => {
    const timestamp = Date.now();
    const price = Math.random() * 2000 + 10000; // 10000 to 11000
    return [timestamp, price];
  };
  
  useEffect(() => {
    // Generate initial data
    const initialData = Array.from({ length: 30 }, () => generateRandomData());
    setNewPriceData(initialData);
  
    // Update data every 3 seconds
    const interval = setInterval(() => {
      // Generate new data point
      const newDataPoint = generateRandomData();
  
      // Update state with new data point
      setNewPriceData(prevData => {
        // Remove the first element (dequeue)
        const updatedData = prevData.slice(1);
        // Add the new data point at the end of the array
        return [...updatedData, newDataPoint];
      });
    }, 3000);
  
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []); 
  

  return (
  <Box style={{ backgroundColor: '#1A202C', color: 'white', height: '100vh', padding: '20px' }}>
    <Box>
      <SimpleGrid p="20px" columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
        {stocksData.map(stock => (
          <Box
            bg={'#1A202C'}
            key={stock.name}
            p="3"
            maxWidth={400}
            boxShadow="md"
            borderRadius="md"
            borderWidth="2px"
            borderColor={
              stock.name === 'Nifty'
                ? 'blue.500'
                : stock.name === 'AMAZON'
                ? 'yellow.500'
                : stock.name === 'SENSEX'
                ? 'violet'
                : 'orange.500'
            }
          >
            <Stat>
              <StatLabel>{stock.name}</StatLabel>
              <StatNumber>345,670</StatNumber>
              <StatHelpText>
                <StatArrow type={stock.change >= 0 ? 'increase' : 'decrease'} />
                {stock.change}%
              </StatHelpText>
            </Stat>
          </Box>
        ))}
      </SimpleGrid>

      <h1>Bitcoin Stock Price</h1>

      <ResponsiveContainer width="100%" height={400}>
      <AreaChart
          data={priceData.concat(newpriceData)} // Concatenate initial data with new data
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
            <CartesianGrid strokeDasharray="3 3" />

          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey={data => {
              const date = new Date(data[0]);
              const formattedDate = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}th ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
              return formattedDate;
            }}
            tick={{ fill: 'white' }}
          />
          <YAxis tick={{ fill: 'white' }} />
          <Tooltip
            labelFormatter={value => {
              const date = new Date(value);
              const formattedDate = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}th ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
              return formattedDate;
            }}
          />
          <Legend />
          <Area
            type="monotone"
            dataKey={data => data[1]}
            name="Price"
            stroke="#8884d8"
            fill="url(#areaGradient)" // Apply the gradient fill
          />
        </AreaChart>


      </ResponsiveContainer>
    </Box>
  </Box>
);

};

export default Market;
