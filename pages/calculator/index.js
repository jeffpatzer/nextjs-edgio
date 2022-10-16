import { useState } from "react";
import styles from "../../styles/Home.module.css";
import {
  Box,
  Heading,
  Center,
  HStack,
  Icon,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon, CloseIcon } from "@chakra-ui/icons";
import { RiDivideFill } from "react-icons/ri";
import { TbEqual } from "react-icons/tb";

function Calculator() {
  const [operator, setOperator] = useState("add");
  const [result, setResult] = useState({
    result: "--",
  });
  const [leftValue, setLeftValue] = useState(0);
  const [rightValue, setRightValue] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const Operator = () => {
    switch (operator) {
      case "add":
        return <AddIcon />;
      case "subtract":
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
    setLoading(true);
    // Fetch value from API
    fetch(`/api/calculate?operation=${operator}&x=${leftValue}&y=${rightValue}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setResult(data);
      })
      .catch((e) => {
        setLoading(false);
        setResult({ result: "NaN" });
      });
  }

  return (
    <>
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
          onClick={() => setOperator("subtract")}
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
            type="number"
            minLength={1}
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
            minLength={1}
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

      <Heading as="h2" size="2xl" mt={5}>
        {isLoading ? <Spinner /> : result.result}
      </Heading>
    </>
  );
}

export default Calculator;
