import { Button, Center, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { Prefetch } from "@layer0/react";

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
          <Prefetch url="/tables/addition">
            <Button colorScheme="gray" variant="outline" as="a">
              Addition Table
            </Button>
          </Prefetch>
        </Link>
        <Link href="/tables/multiplication" passHref>
          <Prefetch url="/tables/multiplication">
            <Button colorScheme="gray" variant="outline" as="a">
              Multiplication Table
            </Button>
          </Prefetch>
        </Link>
      </HStack>
    </Center>
  );
};

export default Nav;
