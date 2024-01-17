import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Button,
  Flex,
  ChakraProvider,
  extendTheme,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
   Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  Divider,
  useColorMode,
  IconButton,
  Container

} from "@chakra-ui/react";
import { SunIcon, MoonIcon, CloseIcon } from "@chakra-ui/icons"; // Chakra UI icons

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart, Line, Legend, ResponsiveContainer 
} from "recharts";
import StockChangeIndicator from "./StockChangeIndicator";
import initialPriceData from "./priceData.json"

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.100",
      },
    },
  },
});

const generateRandomDataPoint = (min, max) => {
  return Math.random() * (max - min) + min;
};

const generateDummyChartData = () => {
  const dummyData = [];
  for (let i = 0; i < 30; i++) {
    dummyData.push({
      time: `-${30 - i} mins`,
      price: 150 + generateRandomDataPoint(-15, 15),
    });
  }
  return dummyData.reverse();
};


const Sidebar = ({ boughtStocks }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} display={["block", "block"]} colorScheme="orange" mb={4}>
        Portfolio
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody p={4}>
            <Table variant="simple">
              {/* Table content remains the same */}
              <Box p={4} bg="gray.200" w={300}>
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Quantity</Th>
        </Tr>
      </Thead>
      <Tbody>
        {boughtStocks.map((stock) => (
          <Tr key={stock.id}>
            <Td>{stock.name}</Td>
            <Td>{stock.quantity}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </Box>
            </Table>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};


const Stock = () => {

  const [priceData, setPriceData] = useState(initialPriceData);

  const { colorMode, toggleColorMode } = useColorMode();

  var prevPrice=3500;
  useEffect(() => {
    const interval = setInterval(() => {
      const timestamp = Date.now();
      const priceChange = (Math.random() > 0.5 ? 1 : -1) * Math.random() * 50; // Randomly add or subtract a value between -500 and 500
      const price = prevPrice + priceChange;
      
      // The rest of your code remains the same
            prevPrice=price;
      const newDataPoint = [timestamp, price];

      setPriceData(prevData => {
        const updatedData = prevData.slice(1); // Remove the oldest data point
        return [...updatedData, newDataPoint]; // Add the new data point
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  function transformPriceDatafunction(priceData) {
    const transformedPriceData = priceData.map(([timestamp, price]) => {
      const date = new Date(timestamp);
      const formattedDate = `${getMonthName(date.getMonth())} ${date.getDate()} ${date.getFullYear()}, ${formatTime(date)}`;
  
      return {
        x: formattedDate,
        y: price,
      };
    });
  
    return transformedPriceData;
  }
  
  function getMonthName(monthIndex) {
    const monthNames = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];
  
    return monthNames[monthIndex];
  }
  
  function formatTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${padZero(minutes)}`;
  }
  
  function padZero(number) {
    return number < 10 ? `0${number}` : `${number}`;
  }
  
  
  const [balance, setBalance] = useState(
    () => Number(localStorage.getItem("balance")) || 11000
  );
  const [stocks, setStocks] = useState(() => {
    const storedValue = localStorage.getItem("stocks");
    return storedValue
      ? JSON.parse(storedValue)
      : [
          // Indian stock data
          { id: "TCS", name: "Tata Consultancy Services", price: 3450.75,quantity: 0 },
          { id: "HDFCBANK", name: "HDFC Bank", price: 1480.35,quantity: 0 },
          { id: "RELIANCE", name: "Reliance Industries", price: 2500.90,quantity: 0 },
          { id: "TATASTEEL", name: "Tata Steel", price: 150.45,quantity: 0 },
          { id: "INFY", name: "Infosys Limited", price: 1785.20,quantity: 0 },
          { id: "HDFC", name: "Housing Development Finance Corporation", price: 2800.60 ,quantity: 0},
          { id: "ICICIBANK", name: "ICICI Bank", price: 780.90,quantity: 0 },
          { id: "HINDUNILVR", name: "Hindustan Unilever", price: 2450.30 ,quantity: 0},
          { id: "ITC", name: "ITC Limited", price: 210.75,quantity: 0 },
          { id: "WIPRO", name: "Wipro Limited", price: 580.15 ,quantity: 0},
          { id: "BAJAJ-AUTO", name: "Bajaj Auto", price: 3200.95 ,quantity: 0},
          { id: "CIPLA", name: "Cipla Limited", price: 920.40 ,quantity: 0},
          { id: "LT", name: "Larsen & Toubro", price: 1685.75 ,quantity: 0},
          { id: "SBI", name: "State Bank of India", price: 450.35 ,quantity: 0},
          { id: "HEROMOTOCO", name: "Hero MotoCorp", price: 2650.10 ,quantity: 0},
          { id: "HCLTECH", name: "HCL Technologies", price: 1105.25 ,quantity: 0},
          { id: "KOTAKBANK", name: "Kotak Mahindra Bank", price: 2050.50,quantity: 0 },
          // Add more Indian stocks here
        ];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const [chartData, setChartData] = useState(generateDummyChartData());

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedStocks = stocks.map((stock) => ({
        ...stock,
        prevPrice: stock.price,
        price: stock.price + generateRandomDataPoint(-10, 10),
      }));
      setStocks(updatedStocks);

      const newPrice = stocks[0].price + generateRandomDataPoint(-15, 15);
      const updatedChartData = [
        ...chartData.slice(1),
        { time: "0 mins", price: newPrice },
      ];

      setChartData(updatedChartData);
    }, 10000);

    return () => clearInterval(interval);
  }, [stocks, chartData]);

  const handleModalToggle = (stock) => {
    setSelectedStock(stock);
    setIsModalOpen(!isModalOpen);
  };
  
  const [boughtStocks, setBoughtStocks] = useState([]);

  const buyStock = (stock) => {
    const existingStock = boughtStocks.find((s) => s.id === stock.id);

    if (balance >= stock.price) {
      setBalance(balance - stock.price);
      const updatedStocks = stocks.map((s) => {
        if (s.id === stock.id) {
          return { ...s, quantity: (s.quantity || 0) + 1 };
        }
        return s;
      });
      setStocks(updatedStocks);

      if (existingStock) {
        
        const updatedBoughtStocks = boughtStocks.map((s) => {
          if (s.id === stock.id) {
            return { ...s, quantity: s.quantity + 1 };
          }
          return s;
        });
        setBoughtStocks(updatedBoughtStocks);
      } else {
        
        setBoughtStocks([...boughtStocks, { ...stock, quantity: 1 }]);
      }
    }
  };
  const toast = useToast(); 

  const sellStock = (stock) => {
    const existingStock = boughtStocks.find((s) => s.id === stock.id);
    const targetStock = stocks.find((s) => s.id === stock.id);

    if (existingStock && existingStock.quantity > 0) {
      setBalance(balance + targetStock.price);
      const updatedStocks = stocks.map((s) => {
        if (s.id === stock.id) {
          return { ...s, quantity: s.quantity - 1 };
        }
        return s;
      });
      setStocks(updatedStocks);

      const updatedBoughtStocks = boughtStocks
        .map((s) => {
          if (s.id === stock.id) {
            return { ...s, quantity: s.quantity - 1 };
          }
          return s;
        })
        .filter((s) => s.quantity > 0);

      setBoughtStocks(updatedBoughtStocks);

      if (existingStock.quantity === 0) {
        toast({
          title: `Quantity of ${targetStock.name} is 0`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } else {
      
      toast({
        title: `Quantity of ${targetStock.name} is already 0`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };


  useEffect(() => {
    // Define a function to update the selected stock in real-time
    const updateSelectedStock = () => {
      if (selectedStock) {
        const updatedStock = stocks.find((stock) => stock.id === selectedStock.id);
        if (updatedStock) {
          setSelectedStock(updatedStock);
        }
      }
    };
  
    // Run the update function immediately and at a regular interval
    updateSelectedStock();
    const stockUpdateInterval = setInterval(updateSelectedStock, 1000);
  
    // Cleanup the interval on component unmount
    return () => {
      clearInterval(stockUpdateInterval);
    };
  }, [stocks, selectedStock]);

  
  
  useEffect(() => {
    localStorage.setItem("balance", balance.toString());
  }, [balance]);

  useEffect(() => {
    localStorage.setItem("stocks", JSON.stringify(stocks));
  }, [stocks]);

  useEffect(() => {
   

    const intervalId = setInterval(() => {
      const updatedStocks = stocks.map((stock) => ({
        ...stock,
        prevPrice: stock.price,
        price: stock.price + generateRandomDataPoint(-10, 10),
      }));
      setStocks(updatedStocks);
      console.log("This runs every 1 second.");
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);


  function formatDate(value) {
    const date = new Date(value);
    const formattedDate = `${getMonthName(date.getMonth())} ${date.getDate()} ${date.getFullYear()}, ${formatTime(date)}`;
    return formattedDate;
  }
  
  function getMonthName(monthIndex) {
    const monthNames = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];
  
    return monthNames[monthIndex];
  }
  
  function formatTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${padZero(minutes)}`;
  }
  
  function padZero(number) {
    return number < 10 ? `0${number}` : `${number}`;
  }

  
  return (
    <ChakraProvider theme={theme}>
      <Box p={6} display="flex">
      <Box flex={1} mt={[12, 24]}>
        <Text fontSize="6xl" mb={4}>
          Balance: ₹{balance.toFixed(2)}
        </Text>
        <Text fontSize="xl" mb={4}>
          Point: {(balance/10).toFixed(0)}
          </Text>
        <Divider/>
        <Sidebar boughtStocks={boughtStocks} />
      <Divider/>

        </Box>
      
      
             {selectedStock && (
        
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} size={"full"} minWidth="1000%">
      <ModalOverlay />
      <ModalContent bg="gray.900">
        <ModalHeader color="white">{selectedStock.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize="4xl" mb={4} color="white">
            Balance: ₹{balance.toFixed(2)}
          </Text>
    
          <Text fontSize="xl" mb={2} color="white">
            {selectedStock.name} - Current Price: ${selectedStock.price.toFixed(2)}
          </Text>
    
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={transformPriceDatafunction(priceData)} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <defs>
                <linearGradient id="glowingAreaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4FD1C5" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#4FD1C5" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="x" tick={{ fill: 'white' }} />
              <YAxis tick={{ fill: 'white' }} />
              <Tooltip labelFormatter={value => formatDate(value)} />
              <Legend />
              <Area
                type="monotone"
                dataKey="y"
                name="Price"
                stroke="#4FD1C5"
                fill="url(#glowingAreaGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            _hover={{ bg: "#b6c5fa", color: "white" }}
            borderRadius={"30px"}
            bg="blue.500"
            color="white"
            onClick={() => buyStock(stock)}
          >
            Buy
          </Button>
          <Button
            margin={"5px"}
            borderRadius={"30px"}
            colorScheme="red"
            _hover={{ bg: "#ffa0a0", color: "white" }}
            bg="red.500"
            color="white"
            onClick={() => sellStock(stock)}
          >
            Sell
          </Button>
          <IconButton colorScheme="teal" mr={3} onClick={() => setIsModalOpen(false)} isRound icon={<CloseIcon />} />
        </ModalFooter>
      </ModalContent>
    </Modal>
    
      )}

      </Box>
      <Box
      className="table-responsive rounded-3 customscroll"
      p={4}
      borderRadius="lg"
      bg="white"
      overflowY="scroll"
      overflowX="auto"
      boxSizing="border-box"
    >
      <TableContainer >
      <Table variant="striped" colorScheme="gray" size={"sm"} minWidth="100%">
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Price</Th>
        <Th>Change</Th>
        <Th>Actions</Th>
      </Tr>
    </Thead>
    <Tbody>
      {stocks.map((stock) => (
        <Tr key={stock.id}>
          <Td>{stock.name}</Td>
          <Td>₹ {stock.price.toFixed(2)}</Td>
          <Td>
            {typeof stock.price === "number" && typeof stock.prevPrice === "number" ? (
              <StockChangeIndicator stock={stock} />
            ) : (
              <></>
            )}
          </Td>
          <Td>
            <Flex justify="space-around">
              <Button
                colorScheme="blue"
                _hover={{ bg: "#b6c5fa", color: "white" }}
                borderRadius={"30px"}
                bg="blue.500"
                color="white"
                onClick={() => buyStock(stock)}
              >
                Buy
              </Button>
              <Button
                borderRadius={"30px"}
                colorScheme="red"
                _hover={{ bg: "#ffa0a0", color: "white" }}
                bg="red.500"
                color="white"
                onClick={() => sellStock(stock)}
              >
                Sell
              </Button>
              <Button
                colorScheme="teal"
                _hover={{ bg: "#b6c5fa", color: "white" }}
                borderRadius={"30px"}
                bg="teal.500"
                color="white"
                onClick={() => handleModalToggle(stock)}
              >
                Stats
              </Button>
            </Flex>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
      </TableContainer>
    </Box>
    </ChakraProvider>
  );
};

export default Stock;