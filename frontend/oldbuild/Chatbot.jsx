import { useEffect } from "react"
import alanBtn from '@alan-ai/alan-sdk-web';


export default function RootLayout() {
   useEffect(() => {
  alanBtn({
      key: '8b04236d3f7b4898197df1a26b6510f22e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        if (commandData.command === 'go:back') {
          // Call the client code that will react to the received command
        }
      }
  });
}, []);
    // return (
      
    //   <div className="root-layout">
    //     <ScrollRestoration />
    //     <header>
    //       <Navbar/>
    //       <Breadcrumbs />
    //     </header>
    //     <main>
    //       <Outlet />
    //     </main>
    //     <Footer/>
  
    //     <Grid
    //     templateColumns={{ base: "1fr", lg: "repeat(6, 1fr)", xl: "repeat(5, 1fr)" }}
    //     gap={6}
    //   >
    //     {/* main content & navbar */}
    //     <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }} p="40px">
    //       <Navbar />
    //       <Outlet />
    //     </GridItem>
    //   </Grid>
    //   </div>
    // )
  }