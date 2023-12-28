// Card.tsx
import React from "react";
import { Box } from "@chakra-ui/react";

const Card = ({children}: any) => {

  return (
    <Box className='bg-[#FFFF] rounded-3xl p-4 w-[600px]'>
      {children}
    </Box>
  );
};

export default Card;
