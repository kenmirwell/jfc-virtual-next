"use client";
import config from "@/app/utils";
import { Progress, ChakraProvider, Image } from "@chakra-ui/react";

const Loader = ({ model3d, value, isSafari }) => {
  if (model3d) {
    return null;
  }
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
            // poster='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/Worlds/Jollibee_Loading_Icon%20(1).png'
            poster={`${config.apiURL}/Worlds/Loading-icon.png`}
            className='h-full max-w-[40%]'
          >
            {/* <source src='https://frdmqigbelepsdgiecdr.supabase.co/storage/v1/object/public/Worlds/Jollibee_Loading_Icon%20(1).webm' /> */}
            <source src={`${config.apiURL}/Worlds/Loading-vid.webm`} />
          </video>
        ) : (
          <Image
            src={`${config.apiURL}/Worlds/Loading-icon.png`}
            alt='loading icon'
            // boxSize={{ base: "160px", md: "240px", lg: "320px" }}
            transform={{
              base: "scale(.4)",
              sm: "scale(.6)",
              md: "scale(.8)",
              lg: "scale(1)",
            }}
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
