import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Modal,
  SimpleGrid,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Badge,
  Radio,
  RadioGroup,
  IconButton,
  Slider,
  Stack,
  Button,
  Text,
  Icon,
  Divider,
  Image,
  Container,
  ButtonGroup,
  GridItem,
  Grid,
  HStack,
  InputGroup,
  InputLeftElement,
  Tag,
  TagLeftIcon,
  TagLabel,
  Spinner,
} from "@chakra-ui/react";
import {
  FaCalendarWeek,
  FaClock,
  FaCoins,
  FaFilter,
  FaInfo,
  FaMapPin,
  FaTrash,
  FaUser,
  FaWatchmanMonitoring,
} from "react-icons/fa";
import { FaArrowTrendUp, FaRightLong } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import axios from "axios";

const FilterBox = ({ filters, onChange, onApply, onClear }) => {
  const [position, setPosition] = useState("");
  const [locations, setLocations] = useState([]);
  const [workType, setWorkType] = useState("");
  const [salary, setSalary] = useState([0, 1000000]);
  const [experience, setExperience] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleFilterChange = () => {
    const searchState = {
      position,
      locations,
      workType,
      salary,
      experience,
    };

    onChange(searchState);
    onApply(searchState);
  };

  const handleClearAll = () => {
    setPosition("");
    setLocations([]);
    setWorkType("");
    setSalary([0, 1000000]);
    setExperience("");
    onClear();
  };

  return (
    <Box
      p={[4, 6]}
      boxShadow="xl"
      borderRadius="xl"
      bg="white"
      textAlign="left"
      position="sticky"
      top="6rem"
    >
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Filters
      </Text>
      <Box display={{ base: "inline", md: "none" }}>
        <Button
          leftIcon={<Icon as={FaFilter} />}
          colorScheme="teal"
          variant="solid"
          width="full"
          onClick={onOpen}
        >
          Filter
        </Button>
      </Box>

      <Box display={{ base: "none", md: "block" }}>
        <strong>Position:</strong>
        <Input
          placeholder="Search by position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          mb={2}
        />

        <Box mb={2}>
          <Box>
            <strong>Locations:</strong>
          </Box>
          {locations.map((location) => (
            <Badge key={location} variant="outline" colorScheme="teal" mr={2}>
              {location}
            </Badge>
          ))}
          <Input
            placeholder="Add location"
            value=""
            onChange={() => {}}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                if (!e.target.value.trim()) return;
                setLocations([...locations, e.target.value.trim()]);
                e.target.value = "";
              }
            }}
          />
        </Box>

        <Box mb={2}>
          <strong>Work Type:</strong>
          <RadioGroup value={workType} onChange={(e) => setWorkType(e)}>
            <Stack direction="column">
              <Radio value="remote">Work from Home</Radio>
              <Radio value="partTime">Part Time</Radio>
              <Radio value="hybrid">Hybrid</Radio>
            </Stack>
          </RadioGroup>
        </Box>

        <Box mb={2}>
          <strong>Salary Range:</strong>
          <Slider
            colorScheme="teal"
            min={0}
            max={1000000}
            step={10000}
            value={salary[1]}
            onChange={(value) => setSalary([0, value])}
          />
          {`$${salary[0]} - $${salary[1]}`}
        </Box>

        <Box mb={2}>
          <strong>Years of Experience:</strong>
          <Input
            placeholder="Enter experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </Box>

        <Button
          colorScheme="teal"
          onClick={handleFilterChange}
          mb={2}
          width="full"
          leftIcon={<Icon as={TiTick} />}
        >
          Apply Filters
        </Button>

        <Button
          variant="outline"
          colorScheme="red"
          onClick={handleClearAll}
          width="full"
          leftIcon={<Icon as={FaTrash} />}
        >
          Clear All
        </Button>
      </Box>

      {/* Modal for smaller screens */}
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Filter Box</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Render the same content as in the Box for smaller screens */}
            {/* ... */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const JobList = ({ jobs, loading }) => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <Box width={{ base: "full", md: "10/12" }} p={4}>
      {loading && (
        <Box py={6} textAlign="center">
          <Spinner size="lg" color="teal.500" />
          <Text mt={2} color="gray.500">
            Loading jobs...
          </Text>
        </Box>
      )}
      {jobs.map((job) => (
        <Box
          key={job.id}
          boxShadow="md"
          borderWidth="1px"
          borderRadius="lg"
          p={4}
          mb={2}
          bg="white"
        >
          <Text
            align={"left"}
            alignItems={"center"}
            size={"lg"}
            borderRadius={"full"}
          >
            <Badge variant={"outline"}>
              <Icon as={FaArrowTrendUp} mr={2} />
              ACTIVELY HIRING
            </Badge>
          </Text>
          <Flex direction={"row"} justify="space-between" align="center" mt={2}>
            <Text fontSize="3xl" fontWeight="bold" align={"left"}>
              {job.position}
            </Text>
            <Image
              src={job.thumbnail}
              alt={job.company}
              w={10}
              h={10}
              borderRadius="full"
              fallbackSrc="https://placehold.co/40x40?text=%F0%9F%92%BC"
            />
          </Flex>

          <Flex
            direction="row"
            justify="space-between"
            align="center"
            color={"gray.500"}
            fontWeight={"bold"}
            mb={1}
          >
            <Text fontSize="lg">{job.company}</Text>
          </Flex>
          <Divider my={2} />
          <HStack spacing={2} flexWrap="wrap" mb={2}>
            <Tag size="md" variant="subtle" colorScheme="blue">
              <TagLeftIcon as={FaMapPin} />
              <TagLabel>{job.place || "Anywhere"}</TagLabel>
            </Tag>
            <Tag size="md" variant="subtle" colorScheme="purple">
              <TagLeftIcon as={FaLocationArrow} />
              <TagLabel>{job.modeOfWork || "Flexible"}</TagLabel>
            </Tag>
          </HStack>

          <Flex>
            <ButtonGroup spacing={2} ml={1}>
              <Button
                leftIcon={<FaCalendarWeek />}
                variant="link"
                colorScheme="gray"
                mb={2}
              >
                Posted At {job.postDate}
              </Button>
              <Button
                leftIcon={<FaWatchmanMonitoring />}
                variant="link"
                colorScheme="gray"
                mb={2}
              >
                Start At {job.startDate}
              </Button>
              <Button
                leftIcon={<FaClock />}
                variant="link"
                colorScheme="gray"
                mb={2}
              >
                {job.contract}
              </Button>
              <Button
                leftIcon={<FaCoins />}
                variant="link"
                colorScheme="gray"
                mb={2}
              >
                {job.ctc}
              </Button>
              <Button
                leftIcon={<FaUser />}
                variant="link"
                colorScheme="gray"
                mb={2}
              >
                Experience
                {job.experience == "" ? "Any" : job.experience}
              </Button>
            </ButtonGroup>
          </Flex>

          <Divider my={2} />
          <Flex justify={"space-between"}>
            <Button leftIcon={<FaLocationArrow />} variant="link" m={2}>
              {job.via}
            </Button>
            <Button
              variant={"outline"}
              colorScheme={"teal"}
              bordersize={"lg"}
              m={2}
              onClick={() => setSelectedJob(job)}
            >
              View Details
            </Button>
          </Flex>
        </Box>
      ))}
      <Modal
        isOpen={!!selectedJob}
        onClose={() => setSelectedJob(null)}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedJob?.position}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box maxHeight="60vh" overflowY="auto" pr={2}>
              {selectedJob?.description || "No description available."}
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              width={"full"}
              mr={3}
              onClick={() => setSelectedJob(null)}
            >
              Close
            </Button>
            {selectedJob?.applyLink ? (
              <Button
                as="a"
                href={selectedJob.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                colorScheme="teal"
                width={"full"}
              >
                Apply
              </Button>
            ) : (
              <Button colorScheme="teal" width={"full"} isDisabled>
                Apply
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const JobBoard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [dummyJobData, setDummyJobData] = useState([
    {
      id: 1,
      position: "Software Engineer",
      company: "TechCo",
      ctc: "$100,000",
      modeOfWork: "Remote",
      place: "Any",
      startDate: "ASAP",
      experience: "2+ years",
      description: "Exciting job opportunity for a software engineer...",
      postDate: "2024-01-20",
    },
    {
      id: 2,
      position: "Product Manager",
      company: "ProductX",
      ctc: "$120,000",
      modeOfWork: "Hybrid",
      place: "New York",
      startDate: "2024-03-01",
      experience: "5+ years",
      description:
        "Join our team as a product manager and lead innovative projects...",
      postDate: "2024-01-15",
    },
    {
      id: 3,
      position: "Data Scientist",
      company: "DataTech",
      ctc: "$90,000",
      modeOfWork: "On-site",
      place: "San Francisco",
      startDate: "2024-02-15",
      experience: "3+ years",
      description:
        "Exciting opportunity for a data scientist to work on cutting-edge projects...",
      postDate: "2024-01-10",
    },
  ]);
  const [filteredJobs, setFilteredJobs] = useState(dummyJobData);
  const [filters, setFilters] = useState({
    position: "",
    locations: [],
    workType: "",
    salary: [0, 1000000],
    experience: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // const query="data scientist"

  const fetchData = async (query) => {
    console.log(query);
    try {
      if (!query || !query.trim()) {
        return;
      }
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:8000/jobs?query=${encodeURIComponent(
          "job in " + query + " for disabled people",
        )}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Add any additional headers if needed
          },
          // You can add a request body if your server expects it
        },
      );

      // Use await to get the actual data from the response
      const responseData = await response.json();
      console.log(responseData);

      const jobDataFromAPI = responseData.jobs_results.map((job, index) => {
        const postedAt =
          job.extensions.find((ext) => ext.includes("ago")) || "";
        const yearlySalary =
          job.extensions.find((ext) => ext.includes("year")) || "";

        return {
          id: index + 1,
          position: job.title || "",
          company: job.company_name || "",
          ctc: yearlySalary,
          modeOfWork: job.detected_extensions?.schedule_type || "",
          place: job.location?.trim() || "",
          startDate: job.posted_at || postedAt,
          experience: job.experience || "",
          description: job.description || "",
          postDate: job.posted_at || "",
          thumbnail: job.thumbnail || "",
          via: job.via || "",
          applyLink:
            job.apply_options?.[0]?.link || job.related_links?.[0]?.link || "",
        };
      });

      console.log(jobDataFromAPI);
      // Use jobDataFromAPI in your setDummyJobData function
      setDummyJobData(jobDataFromAPI);
      setFilteredJobs(jobDataFromAPI);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching job data:", error);
      setIsLoading(false);
    }
  };

  const applyFilters = (nextFilters = filters) => {
    const filtered = dummyJobData.filter((job) => {
      const positionMatch = nextFilters.position
        ? job.position
            .toLowerCase()
            .includes(nextFilters.position.toLowerCase())
        : true;

      const workTypeMatch = nextFilters.workType
        ? job.modeOfWork
            .toLowerCase()
            .includes(nextFilters.workType.toLowerCase())
        : true;

      const locationMatch = nextFilters.locations.length
        ? nextFilters.locations.some((loc) =>
            job.place.toLowerCase().includes(loc.toLowerCase()),
          )
        : true;

      const experienceMatch = nextFilters.experience
        ? job.experience
            .toLowerCase()
            .includes(nextFilters.experience.toLowerCase())
        : true;

      return positionMatch && workTypeMatch && locationMatch && experienceMatch;
    });

    setFilteredJobs(filtered);
  };

  const [query, setQuery] = useState("");
  const [responseData, setResponseData] = useState(null);

  // useEffect(() => {

  // }, []);

  return (
    <Container maxW="container.xl" py={6}>
      <Flex direction={{ base: "column", md: "row" }} gap={6}>
        <Box w={{ base: "full", md: "320px" }} flexShrink={0}>
          <FilterBox
            filters={filters}
            onChange={(state) => setFilters(state)}
            onApply={(state) => applyFilters(state)}
            onClear={() => {
              const cleared = {
                position: "",
                locations: [],
                workType: "",
                salary: [0, 1000000],
                experience: "",
              };
              setFilters(cleared);
              setFilteredJobs(dummyJobData);
            }}
          />
        </Box>
        <Box flex="1">
          <Box p={6} boxShadow="lg" rounded="lg" bg="white" mb={4}>
            <HStack spacing={3}>
              <Input
                placeholder="Search job titles or keywords"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button
                colorScheme="teal"
                onClick={() => {
                  fetchData(query);
                }}
                isLoading={isLoading}
                loadingText="Searching"
              >
                Search
              </Button>
            </HStack>
          </Box>

          <Text fontWeight="bold" mb={2} color="gray.600">
            Showing {filteredJobs.length} jobs
          </Text>
          <JobList jobs={filteredJobs} loading={isLoading} />
        </Box>
      </Flex>
    </Container>
  );
};

export default JobBoard;
