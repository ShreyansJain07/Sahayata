import React, { useState } from "react";
import { Box, Select, Image, Button, Wrap, WrapItem } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const resourcesData = {
    computerEngineering: [
      { id: 1, title: "Video 1", link: "https://example.com/video1", image: "image_url_1" },
      { id: 2, title: "Video 2", link: "https://example.com/video2", image: "image_url_2" },
      { id: 3, title: "Video 3", link: "https://example.com/video3", image: "image_url_3" },
      { id: 1, title: "Video 1", link: "https://example.com/video1", image: "image_url_1" },
      { id: 2, title: "Video 2", link: "https://example.com/video2", image: "image_url_2" },
      { id: 3, title: "Video 3", link: "https://example.com/video3", image: "image_url_3" },
      { id: 1, title: "Video 1", link: "https://example.com/video1", image: "image_url_1" },
      { id: 2, title: "Video 2", link: "https://example.com/video2", image: "image_url_2" },
      { id: 3, title: "Video 3", link: "https://example.com/video3", image: "image_url_3" },
    ],
    architecture: [
      { id: 1, title: "Architecture Video 1", link: "https://example.com/architecture-video1", image: "architecture_image_url_1" },
      { id: 2, title: "Architecture Video 2", link: "https://example.com/architecture-video2", image: "architecture_image_url_2" },
      { id: 3, title: "Architecture Video 3", link: "https://example.com/architecture-video3", image: "architecture_image_url_3" },
    ],
    psychology: [
      { id: 1, title: "Psychology Video 1", link: "https://example.com/psychology-video1", image: "psychology_image_url_1" },
      { id: 2, title: "Psychology Video 2", link: "https://example.com/psychology-video2", image: "psychology_image_url_2" },
      { id: 3, title: "Psychology Video 3", link: "https://example.com/psychology-video3", image: "psychology_image_url_3" },
    ],
    economics: [
      { id: 1, title: "Economics Video 3", link: "https://example.com/economics-video3", image: "economics_image_url_3" },
      { id: 2, title: "Economics Video 1", link: "https://example.com/economics-video1", image: "economics_image_url_1" },
      { id: 3, title: "Economics Video 2", link: "https://example.com/economics-video2", image: "economics_image_url_2" },
    ],
    art: [
      { id: 1, title: "Economics Video 2", link: "https://example.com/economics-video2", image: "economics_image_url_2" },
      { id: 2, title: "Economics Video 1", link: "https://example.com/economics-video1", image: "economics_image_url_1" },
      { id: 3, title: "Economics Video 3", link: "https://example.com/economics-video3", image: "economics_image_url_3" },
    ],
    business: [
      { id: 1, title: "Economics Video 1", link: "https://example.com/economics-video1", image: "economics_image_url_1" },
      { id: 2, title: "Economics Video 2", link: "https://example.com/economics-video2", image: "economics_image_url_2" },
      { id: 3, title: "Economics Video 3", link: "https://example.com/economics-video3", image: "economics_image_url_3" },
    ],
    // Add data for other categories
  };
  

const imagesAndButtons = [
  { id: 1, imageSrc: "/data-str-img.png", downloadLink: "/data-str.pptx" },
  { id: 2, imageSrc: "/data-str-img.png", downloadLink: "/data-str.pptx" },
  { id: 3, imageSrc: "/data-str-img.png", downloadLink: "/data-str.pptx" },
  { id: 4, imageSrc: "/data-str-img.png", downloadLink: "/data-str.pptx" },
];

const ResourcesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("computerEngineering");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Box p={4}>
      <Box p={4}>
      <Select mb={4} onChange={handleCategoryChange}>
        <option value="computerEngineering">Computer Engineering</option>
        <option value="architecture">Architecture</option>
        <option value="psychology">Psychology</option>
        <option value="economics">Economics</option>
        <option value="art">Art</option>
        <option value="business">Business</option>
        {/* Add options for other categories */}
      </Select>

      <Carousel responsive={responsive}>
  {resourcesData[selectedCategory].map((resource) => (
    <Box padding={2} key={resource.id}>
      {resource.id === 1 && (
        <iframe
          title={resource.title}
          width="100%"
          height="215"
          src="https://www.youtube.com/embed/zOjov-2OZ0E?si=SUp69qvV1vV-diKJ" 
          frameBorder="0"
          allowFullScreen
        />
      )}
      {resource.id === 2 && (
        <iframe
          padding="20px"
          width="460"
          height="215"
          src="https://www.youtube.com/embed/Cu3R5it4cQs?si=P34RqP3PRzfQrKXy" 
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
         
      )}
      {resource.id === 3 && (
        <iframe
          width="440"
          height="215"
          src="https://www.youtube.com/embed/Ojqdty-Oh1M?si=nzyd572jg1RDiKG3" 
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
      <p>{resource.title}</p>
    </Box>
  ))}
</Carousel>

    </Box>
    <Box height={10}>

    </Box>
      </Box>
  
      <Wrap spacing={4} p={4}>
        {imagesAndButtons.map((item) => (
          <WrapItem key={item.id}>
            <Box padding={4}>
              <Image src={item.imageSrc} alt="Data Structure Image" height={200} width={260} />
              <Box width={200}  alignContent={"center"}>
              <Button colorScheme="blue" _hover={{ backgroundColor: "lightblue" }}>
                <a href={item.downloadLink} download>
                  Download
                </a>
              </Button></Box>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </div>
  );
};

export default ResourcesPage;
