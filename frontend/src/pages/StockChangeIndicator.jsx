import { Box, HStack, Stat, StatArrow, Text } from "@chakra-ui/react";

export default function StockChangeIndicator({ stock }) {
  const isPriceIncreased = stock.price > stock.prevPrice;
  const changeType = isPriceIncreased ? "increase" : "decrease";
  const bgClass = isPriceIncreased ? "green.100" : "red.100";
  const borderColorClass = isPriceIncreased ? "green.500" : "red.500";

  const percentageChange = (((stock.price - stock.prevPrice) / stock.prevPrice) * 100).toFixed(2);

  return (
    <HStack align="center">
      <Box
        p={1}
        bg={bgClass}
        borderColor={borderColorClass}
        borderWidth="1px"
        borderRadius="lg"
        roundedLeft="full"
        roundedRight="full"
        display="flex"
        alignItems="center"
      >
        <Stat>
          <StatArrow type={changeType} color={borderColorClass} />
          <Text
            as="span"
            fontSize="sm"
            fontWeight="bold"
            textAlign="center"
          >
            {percentageChange}%
          </Text>
        </Stat>
      </Box>
    </HStack>
  );
}
