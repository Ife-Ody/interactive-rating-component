import React from "react";
import { Circle } from "@chakra-ui/react";

const StarRating = ({ setRating, star }) => {
  function clickHandler() {
    setRating(star);
  }
  return (
    <div>
      <Circle
        as="button"
        size="51px"
        bg="darkBlue"
        color={"mediumGray"}
        _hover={{
          background: "orange",
          color: "white",
        }}
        _focus={{
          background: "mediumGray",
          color: "white",
        }}
        transition="0.5s"
        onClick={clickHandler}
      >
        {star}
      </Circle>
    </div>
  );
};

export default StarRating;
