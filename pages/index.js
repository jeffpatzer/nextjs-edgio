import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import {
  Box,
  Container,
  Heading,
  Center,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon, CloseIcon } from "@chakra-ui/icons";
import { RiDivideFill } from "react-icons/ri";
import { TbEqual } from "react-icons/tb";

export default function Home() {
  const [operator, setOperator] = useState("add");
  const [result, setResult] = useState("--");
  const [leftValue, setLeftValue] = useState(0);
  const [rightValue, setRightValue] = useState(0);

  const Operator = () => {
    switch (operator) {
      case "add":
        return <AddIcon />;
      case "minus":
        return <MinusIcon />;
      case "multiply":
        return <CloseIcon />;
      case "divide":
        return <Icon as={RiDivideFill} w={8} h={8} verticalAlign="middle" />;

      default:
        break;
    }
  };

  function getResult() {
    // Fetch value from API
  }

  return (
    <Container bg="gray.200" centerContent maxW="auto" height="100vh">
      <Head>
        <title>Basic Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center flex="1">
        <Heading as="h1" size="4xl">
          Calculator
        </Heading>
      </Center>

      <HStack>
        <Center
          w="40px"
          h="40px"
          bg="tomato"
          color="white"
          onClick={() => setOperator("add")}
        >
          <AddIcon />
        </Center>
        <Center
          w="40px"
          h="40px"
          bg="tomato"
          color="white"
          onClick={() => setOperator("minus")}
        >
          <Box as="span" fontWeight="bold" fontSize="lg">
            <MinusIcon />
          </Box>
        </Center>
        <Center
          w="40px"
          h="40px"
          bg="tomato"
          color="white"
          onClick={() => setOperator("multiply")}
        >
          <Box as="span" fontWeight="bold" fontSize="lg">
            <CloseIcon />
          </Box>
        </Center>
        <Center
          w="40px"
          h="40px"
          bg="tomato"
          color="white"
          onClick={() => setOperator("divide")}
        >
          <Box as="span" fontWeight="bold" fontSize="lg">
            <Icon as={RiDivideFill} w={8} h={8} verticalAlign="middle" />
          </Box>
        </Center>
      </HStack>

      <Center p={9}>
        <HStack>
          <Input
            variant="outline"
            placeholder="x"
            size="lg"
            width={100}
            bg="gray.100"
            textAlign="center"
            value={leftValue}
            onChange={(e) => setLeftValue(e.target.value)}
          />
          <Center w="40px" h="40px" bg="goldenrod" color="white">
            <Box as="span" fontWeight="bold" fontSize="lg">
              <Operator />
            </Box>
          </Center>
          <Input
            variant="outline"
            placeholder="y"
            size="lg"
            width={100}
            bg="gray.100"
            textAlign="center"
            value={rightValue}
            onChange={(e) => setRightValue(e.target.value)}
          />
        </HStack>
      </Center>

      <Box pb={3}>
        <Center
          w="40px"
          h="40px"
          bg="darkslategray"
          color="white"
          onClick={getResult}
        >
          <Box as="span" fontWeight="bold" fontSize="lg">
            <Icon as={TbEqual} verticalAlign="middle" />
          </Box>
        </Center>
      </Box>

      <Heading as="h2" size="2xl">
        {result}
      </Heading>

      <footer className={styles.footer}>
        <a href="https://edg.io" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/edgio.svg" alt="Edgio Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </Container>
  );
}
