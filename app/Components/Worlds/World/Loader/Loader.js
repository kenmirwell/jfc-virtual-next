"use client";
import { Progress, ChakraProvider, Image } from "@chakra-ui/react";

const Loader = ({ model3d, value, isSafari }) => {
  // if (model3d) {
  //   return null;
  // }
  return (
    <ChakraProvider>
      <div
        className='z-10 absolute overflow-hidden pointer-events-none w-full aspect-video transition-all duration-[0.5s] ease-out 
    flex items-center justify-center'
      >
        {!isSafari ? (
          <video
            autoPlay
            muted
            loop
            poster='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/Worlds/Jollibee_Loading_Icon%20(1).png'
            className='h-full max-w-[40%]'
          >
            <source src='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/Worlds/Jollibee_Loading_Icon%20(1).webm' />
          </video>
        ) : (
          <Image
            src='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/Worlds/Jollibee_Loading_Icon%20(1).png'
            alt='loading icon'
            className='w-auto h-full'
            boxSize={{ base: "150px", md: "300px" }}
          />
        )}
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
      </div>
    </ChakraProvider>
  );
};

export default Loader;
