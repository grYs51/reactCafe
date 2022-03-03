import type { NextPage } from "next";
import { Beers } from "../pages/api/beers";
import React from "react";
import {
  Stack,
  Text,
  Button,
  useColorModeValue,
  Image,
  List,
} from "@chakra-ui/react";
import { FcLock } from "react-icons/fc";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";
interface Props {
  beer: Beers;
}
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

const BeerCard: NextPage<Props> = ({ beer }) => {
  const formBackground = useColorModeValue("gray.50", "gray.800");
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Stack
            display="flex"
            flexFlow="row"
            alignItems="center"
            justifyContent="center"
            bg={formBackground}
            p="4"
            boxShadow="lg"
            m="2"
            borderRadius="2xl"
          >
            <Image
              marginEnd={10}
              rounded={10}
              w="100px"
              h="100px"
              src={beer.image}
            />
            <Stat>
              <StatLabel>{beer.name}</StatLabel>
              <StatHelpText marginTop={4} marginBottom={0}>
                {beer.drinkType}
              </StatHelpText>
              <StatHelpText marginBottom={0}>
                {beer.percentage ? beer.percentage + "%" : " "}
              </StatHelpText>
              <StatHelpText marginTop={2}>Prijs: {beer.price}</StatHelpText>
            </Stat>
          </Stack>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>{beer.name}</PopoverHeader>
          <PopoverBody>
            <List>
              
            </List>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default BeerCard;
