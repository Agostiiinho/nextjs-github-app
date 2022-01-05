import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import useSwr from "swr";
import {
  Box,
  Heading,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Text,
  StatGroup,
} from "@chakra-ui/react";

async function fetcher(...arg) {
  const res = await fetch(...arg);

  return res.json();
}

export default function Home() {
  const { data } = useSwr("/api/github", fetcher);

  return (
    <>
      <Box mt={5}>
        <Heading as="h1" textAlign="center" size="2xl" mb={5}>
          <p>Agostinho Github Status</p>
        </Heading>
        <Flex justify="center">
          <Box w="300px" p={5} ml={8} mb={3} borderWidth="1px" rounded="lg">
            <Stat>
              <StatLabel>
                <Text fontSize="xl">Github Stars</Text>
              </StatLabel>
              <StatNumber>{data ? data.stars : "Loading..."}</StatNumber>
            </Stat>
          </Box>
          <Box w="300px" p={5} ml={8} mb={3} borderWidth="1px" rounded="lg">
            <Stat>
              <StatLabel>
                <Text fontSize="xl">Github Followers</Text>
              </StatLabel>
              <StatNumber>{data ? data.followers : "Loading..."}</StatNumber>
            </Stat>
          </Box>
          <Box w="300px" p={5} ml={8} mb={3} borderWidth="1px" rounded="lg">
            <Stat>
              <StatLabel>
                <Text fontSize="xl">Repos Starred</Text>
              </StatLabel>
              <StatNumber>{data ? data.starred : "Loading..."}</StatNumber>
            </Stat>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
