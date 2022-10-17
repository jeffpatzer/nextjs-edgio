import { Button, Center, HStack } from "@chakra-ui/react";
import Link from "next/link";

const Nav = () => {
  return (
    <Center py={5} px={3}>
      <HStack>
        <Link href="/" passHref>
          <Button colorScheme="gray" variant="outline" as="a">
            Calculator
          </Button>
        </Link>
        <Link href="/tables/addition" passHref>
          <Button colorScheme="gray" variant="outline" as="a">
            Addition Table
          </Button>
        </Link>
        <Link href="/tables/multiplication" passHref>
          <Button colorScheme="gray" variant="outline" as="a">
            Multiplication Table
          </Button>
        </Link>
      </HStack>
    </Center>
  );
};

export default Nav;
