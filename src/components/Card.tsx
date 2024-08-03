// Card.tsx
import React from "react";
import { Box } from "@chakra-ui/react";

const Card = ({children, className}: any) => {

  return (
    <Box className={`bg-[#FFFF] rounded-3xl p-4 w-[600px] ${className}`}>
      {children}
    </Box>
  );
};

export default Card;
