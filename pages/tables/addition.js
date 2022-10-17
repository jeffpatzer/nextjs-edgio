import matrix, { numbers } from "../../util/numbers";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Center,
  Heading,
} from "@chakra-ui/react";
import Layout from "../layout";
import Head from "next/head";

function AdditionTable({ data }) {
  return (
    <Layout>
      <Head>
        <title>Addition Table</title>
      </Head>
      <Center flex="1">
        <Heading as="h1" size="4xl">
          Addition Table
        </Heading>
      </Center>
      <TableContainer>
        <Table size="sm" variant="striped" colorScheme="blackAlpha">
          <Thead>
            <Tr>
              <Th>+</Th>
              {numbers.map((n) => (
                <Th key={n}>{n}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {matrix.map((m, i) => {
              return (
                <Tr key={i}>
                  <Th borderRight="1px solid var(--chakra-colors-blackAlpha-100)">
                    {i}
                  </Th>
                  {m.map((n, i) => (
                    <Td key={`${n.result}__${i}`}>{n.result}</Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Layout>
  );
}

// This gets called on every request
// export async function getServerSideProps() {
//   let API_PATH = `https://apac-tech-summit-express-backend-default.layer0-limelight.link/calculate`;

//   // A lot of API calls really fast - BAD when those are not cached
//   const res = await Promise.all(
//     await matrix.map(
//       async (n) =>
//         await Promise.all(
//           n.map((m) =>
//             fetch(`${API_PATH}?operation=add&x=${m[0]}&y=${m[1]}`).then((res) =>
//               res.json()
//             )
//           )
//         )
//     )
//   );

//   // Pass data to the page via props
//   return { props: { data: res } };
// }

export default AdditionTable;
