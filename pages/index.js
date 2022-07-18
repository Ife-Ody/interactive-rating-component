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
import { useRouter } from "next/router";
import { useState } from "react";
import StarRating from "../components/starRating";

export default function Home() {
  const [Rating, setRating] = useState(0);
  const stars = [1, 2, 3, 4, 5];
  const router = useRouter()

  function submitHandler(e) {
    e.preventDefault();
    console.log(Rating);
    router.push(`./thank-you?rating=${Rating}`)
  }
  return (
    <Center bg="veryDarkBlue" w="100%" p={4} color="white" h="calc(100vh)">
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
            alt="Logo"
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
          {stars.map((star) => (
            <StarRating
              setRating={setRating}
              star={star}
              key={star}
            ></StarRating>
          ))}
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
          onClick={submitHandler}
        >
          Submit
        </Button>
      </Box>
    </Center>
  );
}
