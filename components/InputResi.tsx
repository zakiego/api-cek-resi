import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useAtom } from "jotai";

import { ekspedisiAtom, resiAtom } from "./Atom";
import listEkspedisi from "./Ekspedisi";

const InputResi = () => {
  const [resi, setResi] = useAtom(resiAtom);
  const [ekspedisi, setEkspedisi] = useAtom(ekspedisiAtom);

  return (
    <Box>
      <FormControl>
        <Heading as={FormLabel} size="md" opacity="70%">
          Resi
        </Heading>
        <Input
          value={resi}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setResi(e.target.value)
          }
          placeholder="Masukkan nomor resi"
        />
      </FormControl>

      <FormControl pt="7">
        <Heading as={FormLabel} size="md" opacity="70%">
          Ekspedisi
        </Heading>
        <SimpleGrid columns={2} spacing="8px">
          {listEkspedisi.map((item) => {
            const isSelected = item.id == ekspedisi;
            return (
              <Button
                key={item.id}
                size="sm"
                colorScheme={isSelected ? "blue" : "gray"}
                onClick={() => setEkspedisi(isSelected ? "" : item.id)}
              >
                {item.name}
              </Button>
            );
          })}
        </SimpleGrid>
      </FormControl>
    </Box>
  );
};

export default InputResi;
