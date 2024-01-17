import {
  Grid,
  GridItem,
  Box,
  Text,
  Link as ChakraLink,
  VStack,
  IconButton,Icon
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
        <Outlet />
  );
}
