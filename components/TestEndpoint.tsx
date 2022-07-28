import {
  Box,
  Button,
  Code,
  Heading,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import beautify from "json-beautify";
import { useState } from "react";

import { endpointAtom, endpointAtomLocalhost, isFilledAtom } from "./Atom";

const TestEndpoint: React.FC = () => {
  const env = process.env.NODE_ENV;
  const isFilled = useAtomValue(isFilledAtom);
  const endpoint = useAtomValue(
    env == "development" ? endpointAtomLocalhost : endpointAtom,
  );

  const { hasCopied, onCopy } = useClipboard(endpoint);
  const toast = useToast();

  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchAPI = async () => {
    setResult("");
    setIsLoading(true);
    const resp = await fetch(endpoint).then((resp) => resp.json());
    setResult(resp);
    setIsLoading(false);
  };

  return (
    <>
      <Button
        disabled={!isFilled || isLoading}
        isLoading={isLoading}
        colorScheme={isFilled ? "blue" : "gray"}
        onClick={() => fetchAPI()}
      >
        Coba API 🚀
      </Button>
      <Button
        mt="5"
        disabled={!isFilled}
        variant="outline"
        colorScheme={isFilled ? "blue" : "gray"}
        onClick={() => {
          onCopy();
          toast({
            title: "Tersalin",
            status: "info",
            duration: 9000,
            isClosable: true,
            position: "top",
          });
        }}
      >
        Salin API URL 🔗
      </Button>
      {result && (
        <>
          <Box pt="8" />
          <Heading as="h2" size="md" opacity="70%">
            Respons API
          </Heading>
          <Code
            mt="4"
            rounded="lg"
            py="3"
            px="2"
            whiteSpace="pre-wrap"
            display="block"
          >
            {beautify(result, null as unknown as object, 2, 100)}
          </Code>
        </>
      )}
    </>
  );
};

export default TestEndpoint;
