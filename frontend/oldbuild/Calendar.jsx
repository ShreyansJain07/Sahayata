
import React, { useState } from "react";
import { Box, Grid, Heading, Text, Button, Flex, Input } from "@chakra-ui/react";

const CalendarPage = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [eventText, setEventText] = useState("");
  const [eventDay, setEventDay] = useState(1); // Default day is 1

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  );
  const startingDay = firstDayOfMonth.getDay();
  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const [eventData, setEventData] = useState([
    //{ day: 5, eventName: "Meeting" },
    //{ day: 15, eventName: "Birthday" },
  ]);

  const renderCalendar = () => {
    const calendar = [];
    const totalDays = daysInMonth + startingDay;

    for (let day = 1; day <= totalDays; day++) {
      const events = eventData.filter((event) => event.day === day - startingDay);

      if (day <= startingDay) {
        calendar.push(<Box key={day} p={2} />);
      } else {
        const dayOfMonth = day - startingDay;
        calendar.push(
          <Box
            key={day}
            p={2}
            border="1px solid #e1e1e1"
            minH="80px"
            display="flex"
            flexDirection="column"
            bg={eventDay === dayOfMonth ? "blue.100" : "white"}
          >
            <Text fontSize="lg" fontWeight="bold">
              {dayOfMonth}
            </Text>
            {events.map((event, index) => (
              <Box key={index} mt={2}>
                {event.eventName}
              </Box>
            ))}
          </Box>
        );
      }
    }

    return calendar;
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handlePreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleEventTextChange = (e) => {
    setEventText(e.target.value);
  };

  const handleEventDayChange = (e) => {
    setEventDay(parseInt(e.target.value));
  };

  const handleAddEvent = () => {
    if (eventText && eventDay >= 1 && eventDay <= daysInMonth) {
      setEventData([...eventData, { day: eventDay, eventName: eventText }]);
    }
    setEventText("");
    setEventDay(1);
  };

  return (
    <Box p={4}>
      <Flex justify="space-between" align="center" mb={4}>
        <Button onClick={handlePreviousMonth}>Previous Month</Button>
        <Heading as="h1">
          {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </Heading>
        <Button onClick={handleNextMonth}>Next Month</Button>
      </Flex>
      <Grid templateColumns="repeat(7, 1fr)" gap={2} mb={4}>
        <Text fontWeight="bold">Sun</Text>
        <Text fontWeight="bold">Mon</Text>
        <Text fontWeight="bold">Tue</Text>
        <Text fontWeight="bold">Wed</Text>
        <Text fontWeight="bold">Thu</Text>
        <Text fontWeight="bold">Fri</Text>
        <Text fontWeight="bold">Sat</Text>
        {renderCalendar()}
      </Grid>
      <Flex mb={4}>
        <Input
          placeholder="Enter event"
          value={eventText}
          onChange={handleEventTextChange}
          mr={2}
        />
        <Input
          type="number"
          placeholder="Day (1 to 31)"
          value={eventDay}
          onChange={handleEventDayChange}
          mr={2}
        />
        <Button colorScheme="teal" onClick={handleAddEvent}>
          Add Event
        </Button>
      </Flex>
    </Box>
  );
};

export default CalendarPage;
