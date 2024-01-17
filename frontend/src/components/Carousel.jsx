import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box } from '@chakra-ui/react';

const CarouselComponent = () => {
  return (
    <Box bg="green.100" maxWidth="100%" mx="auto" padding="20px"> {/* Full width, margin, and padding */}
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Box flex="1" padding="20px"> {/* Adjust padding */}
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.Ew_CwkY6GsOnrWjEy2iRBQHaFj&pid=Api&P=0&h=180"
              alt="Image 1"
              style={{ maxWidth: '25%', height: '150px' }}  /* Adjust image size */
            />
          </Box>
          <Box flex="1" padding="20px"> {/* Adjust padding */}
            
            <p>Dr. Michael Brown is an excellent dentist.</p>
            <p> He's gentle, thorough, and ensures a pain-free dental experience.</p>
          </Box>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Box flex="1" padding="20px"> {/* Adjust padding */}
            <img
              src="https://images.huffingtonpost.com/2014-02-05-headshot.jpg"
              alt="Image 2"
              style={{ maxWidth: '25%', height: '150px' }}  /* Adjust image size */
            />
          </Box>
          <Box flex="1" padding="20px"> {/* Adjust padding */}
          
            <p>Dr. Emily Johnson is a wonderful pediatrician.</p> <p>She's fantastic with kids and always puts parents at ease</p>
          </Box>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Box flex="1" padding="30px"> {/* Adjust padding */}
            <img
              src="https://stanford.edu/~setaluri/images/raj.jpg"
              alt="Image 3"
              style={{ maxWidth: '25%', height: '150px' }}  /* Adjust image size */
            />
          </Box>
          <Box flex="1" padding="30px">
            
            <p>Dr. Benjamin Johnson is a skilled ophthalmologist. He performed my eye surgery flawlessly, and I'm grateful</p>
          </Box>
        </div>
      </Carousel>
    </Box>
  );
};

export default CarouselComponent;

