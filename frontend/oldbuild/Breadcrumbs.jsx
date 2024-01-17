import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Box,
  Badge,
  Container,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Breadcrumbs() {
  const location = useLocation();

  const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "");

  return (
    <Container>

    <Box mb={4}>
      <Breadcrumb
        separator={<ChevronRightIcon color="gray.500" />}
        fontSize="sm"
      >
        {crumbs.map((crumb, index) => {
          const currentLink = "/" + crumbs.slice(0, index + 1).join("/");

          return (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink as={Link} to={currentLink}>
                <Badge colorScheme="green">{crumb}</Badge>
              </BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </Box>
    </Container>
  );
}
