import { Button } from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { useState } from "react";

import { endpointAtom, isFilledAtom } from "./Atom";

const TestEndpoint: React.FC = () => {
  const isFilled = useAtomValue(isFilledAtom);
  const endpoint = useAtomValue(endpointAtom);

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
    </>
  );
};

export default TestEndpoint;
