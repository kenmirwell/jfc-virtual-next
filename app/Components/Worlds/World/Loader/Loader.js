"use client";
import { VStack, Progress, ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";

const Loader = ({ model3d, value }) => {
  useEffect(() => {
    console.log(value);
  }, [value]);

  // if (model3d) {
  //   return null;
  // }
  return (

    <ChakraProvider>
      <div
        className='z-10 absolute overflow-hidden pointer-events-none w-full aspect-video transition-all duration-[0.5s] ease-out 
      flex items-center justify-center'
      >
        <VStack className="w-auto h-[60%]">
          <video autoPlay loop muted className='w-auto h-full'>
            <source
              src={
                "https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/Worlds/Jollibee_Loading_Icon%20(1).webm"
              }
              type='video/webm'
            />
          </video>
          <Progress
            pos='absolute'
            bottom='8%'
            left='50%'
            transform='translateX(-50%)'
            h='8px'
            borderRadius='20px'
            w='60%'
            value={value}
            hasStripe
            colorScheme='red'
          />
        </VStack>
      </div>
    </ChakraProvider>

  );
};

export default Loader;
