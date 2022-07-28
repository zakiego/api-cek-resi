import { Code, Heading, Text } from "@chakra-ui/react";
import { useAtomValue } from "jotai";

import { endpointAtom, isFilledAtom } from "./Atom";

const Endpoint: React.FC = () => {
  const endpoint = useAtomValue(endpointAtom);
  const isFilled = useAtomValue(isFilledAtom);

  return (
    <>
      <Heading as="h2" size="md" opacity="70%">
        API
      </Heading>
      {isFilled ? (
        <Code py="2" mt="3" px="3" colorScheme="blue">
          {endpoint}
        </Code>
      ) : (
        <Code py="2" mt="3" px="3">
          <Text opacity="30%">{`https://resi.pages.dev/api/{ekspedisi}/{resi}`}</Text>
        </Code>
      )}
    </>
  );
};

export default Endpoint;
