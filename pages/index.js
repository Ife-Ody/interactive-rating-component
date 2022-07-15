import {
  Box,
  Center,
  Circle,
  Heading,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [starRating, setstarRating] = useState();
  const stars = [1, 2, 3, 4, 5];
  const listItems = stars.map((star) => (
    <Circle as="button"
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
      key={star}
    >
      {star}
    
    </Circle>
  ));
  return (
    <Center bg="veryDarkBlue" w="100%" p={4} color="white" h="calc(100vh)" >
      <Box
        m="auto"
        borderRadius="30px"
        maxWidth="sm"
        borderColor="white"
        p={8}
        bgGradient="radial(gray.800, gray.900)"
      >
        <Circle size="40px" bg="darkBlue" color="white" mb={8}>
          <Image
            boxSize="16px"
            src="./images/icon-star.svg"
            alt="Dan Abramov"
          />
        </Circle>
        <Heading as="h1" size="lg" my="2">
          How did we do?
        </Heading>
        <Text fontSize="sm" my={2} color="lightGrey">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </Text>
        <Flex justify="space-between" my="6">
          {listItems}
        </Flex>
        <Button
          w={"full"}
          my={2}
          bg="orange"
          textTransform={"uppercase"}
          borderRadius={"full"}
          _hover={{
            background: "white",
            color: "orange",
          }}
          transition="0.5s"
        >
          Submit
        </Button>
        {/* You selected out of 5 Thank you! We appreciate you taking the
        time to give a rating. If you ever need more support, don’t hesitate to
        get in touch! */}
      </Box>
    </Center>
  );
}
