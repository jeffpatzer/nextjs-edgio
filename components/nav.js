import { Button, Center, HStack } from "@chakra-ui/react";
import Link from "next/link";

const Nav = () => {
  return (
    <Center py={5} px={3}>
      <HStack>
        <Link href="/">
          <Button colorScheme="gray" variant="outline">
            Calculator
          </Button>
        </Link>
        <Link href="/tables/addition">
          <Button colorScheme="gray" variant="outline">
            Addition Table
          </Button>
        </Link>
        <Link href="/tables/multiplication">
          <Button colorScheme="gray" variant="outline">
            Multiplication Table
          </Button>
        </Link>
      </HStack>
    </Center>
  );
};

export default Nav;
