import React, { useState, useEffect } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchData = async () => {
    if (searchTerm) {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?q=${searchTerm}`
        );
        if (response.ok) {
          const data = await response.json();
          setSearchResults(data);
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  return (
    <Box bg={"white"} p={4} m={4} rounded={4}>
      <InputGroup>
        <Input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <InputRightElement>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setSearchTerm("")}
          >
            Clear
          </Button>
        </InputRightElement>
      </InputGroup>
      {searchResults.length === 0 ? (
        <Text mt={4}>No results found</Text>
      ) : (
        <Stack spacing={2} mt={4}>
          {searchResults.map((user) => (
            <Box key={user.id} p={3} borderWidth="1px" borderRadius="md">
              <Text fontWeight="bold">{user.name}</Text>
              <Text>{user.email}</Text>
            </Box>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default SearchBar;
