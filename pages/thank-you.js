import { Box, Center, Heading, Text, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Thanks() {
  const router = useRouter();
  const rating = router.query.rating;
  return (
    <Center bg="veryDarkBlue" w="100%" p={4} color="white" h="calc(100vh)">
      <Flex
        m="auto"
        borderRadius="30px"
        maxWidth="sm"
        borderColor="white"
        p={8}
        bgGradient="radial(gray.800, gray.900)"
        flexDirection="column"
      >
        <Image
          size="144px"
          src="./images/illustration-thank-you.svg"
          alt="Logo"
          mx="auto"
          my="2"
        />
        {rating && (
          <Box
            color="orange"
            bgColor="darkBlue"
            borderRadius="full"
            mx="auto"
            px="4"
            py="2"
            my="5"
          >
            You selected {rating} out of 5
          </Box>
        )}

        <Heading as="h1" size="lg" my="2" mx="auto" textAlign="center">
          Thank you!
        </Heading>

        <Text fontSize="sm" my={2} color="lightGrey" textAlign={"center"}>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </Text>
      </Flex>
    </Center>
  );
}
