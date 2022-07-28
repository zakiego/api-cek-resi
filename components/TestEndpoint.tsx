import { Button, Text } from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { useState } from "react";

import { endpointAtom, endpointAtomLocalhost, isFilledAtom } from "./Atom";

const TestEndpoint: React.FC = () => {
  const env = process.env.NODE_ENV;
  const isFilled = useAtomValue(isFilledAtom);
  const endpoint = useAtomValue(
    env == "development" ? endpointAtomLocalhost : endpointAtom,
  );

  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchAPI = async () => {
    setIsLoading(true);
    const resp = await fetch(endpoint).then((resp) => resp.json());
    setResult(resp);
    setIsLoading(false);
  };

  return (
    <>
      <Button
        disabled={!isFilled}
        isLoading={isLoading}
        colorScheme={isFilled ? "blue" : "gray"}
        onClick={() => fetchAPI()}
      >
        Coba API 🚀
      </Button>
      <Text>{endpoint}</Text>
    </>
  );
};

export default TestEndpoint;
