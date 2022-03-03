import { ReactNode } from "react";
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";

const StatsGridWithImage = () => {
  const formBackground = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.500", "gray.400");
  const headerColor = useColorModeValue("black", "white");

  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Box bg={formBackground} position={"relative"}>
        <Flex
          flex={1}
          zIndex={0}
          display={{ base: "none", lg: "flex" }}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          position={"absolute"}
          width={"50%"}
          insetY={0}
          right={0}
        >
          <Flex
            bgGradient={"linear(to-r, gray.800 10%, transparent)"}
            w={"full"}
            h={"full"}
          />
        </Flex>
        <Container maxW={"7xl"} zIndex={10} position={"relative"}>
          <Stack direction={{ base: "column", lg: "row" }}>
            <Stack
              flex={1}
              color={textColor}
              justify={{ lg: "center" }}
              py={{ base: 4, md: 20, xl: 60 }}
            >
              <Box mb={{ base: 8, md: 20 }}>
                <Text
                  fontFamily={"heading"}
                  fontWeight={700}
                  textTransform={"uppercase"}
                  mb={3}
                  fontSize={"xl"}
                  color={"gray.500"}
                >
                  Read This!
                </Text>
                <Heading
                  color={headerColor}
                  mb={5}
                  fontSize={{ base: "3xl", md: "5xl" }}
                >
                  Welcome
                </Heading>
                <Text fontSize={"xl"} color={textColor}>
                  Welkom op de website van hét beste biercafé van België! <br />
                  <br />
                  Links bovenaan kan u navigeren door de verschillende
                  menuopties die hieronder verder beschreven staan.
                </Text>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                {stats.map((stat) => (
                  <Box key={stat.title}>
                    <Text
                      fontFamily={"heading"}
                      fontSize={"3xl"}
                      color={headerColor}
                      mb={3}
                    >
                      {stat.title}
                    </Text>
                    <Text fontSize={"xl"} color={textColor}>
                      {stat.content}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
            <Flex flex={1} />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

const StatsText = ({ children }: { children: ReactNode }) => {
  const headerColor = useColorModeValue("black", "white");
  return (
    <Text as={"span"} fontWeight={700} color={headerColor}>
      {children}
    </Text>
  );
};

const stats = [
  {
    title: "Catalogus",
    content: (
      <>
        In onze <StatsText>Catalogus</StatsText> kan u terecht om een compleet
        overzicht te krijgen van de verschillende <StatsText>bieren</StatsText>{" "}
        die wij in aanbieding hebben.
        <br />
        Door gebruik te maken van de <StatsText>filter</StatsText> functie kan u
        makkelijk de lijst beperken tot uw smaak.
      </>
    ),
  },
  {
    title: "Bestellen",
    content: (
      <>
        Via onze <StatsText>bestelpagina</StatsText> kan u uw bestelling
        doorsturen en zal de leiding deze tot bij u aan de tafel brengen.
      </>
    ),
  },
  {
    title: "Sponsors",
    content: (
      <>
        Neem gerust eens een kijkje tussen de verschillende{" "}
        <StatsText>sponsors</StatsText> die hebben bijgedragen aan dit
        evenement!
      </>
    ),
  },
];

export default StatsGridWithImage;
