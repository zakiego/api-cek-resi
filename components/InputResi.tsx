import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useAtom } from "jotai";

import { ekspedisiAtom, resiAtom } from "./Atom";

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
        <Stack direction="row">
          {listEkspedisi.map((item) => {
            const isSelected = item.id == ekspedisi;
            return (
              <Button
                key={item.id}
                colorScheme={isSelected ? "blue" : "gray"}
                onClick={() => setEkspedisi(isSelected ? "" : item.id)}
              >
                {item.name}
              </Button>
            );
          })}
        </Stack>
      </FormControl>
    </Box>
  );
};

const listEkspedisi = [
  { id: "jnt", name: "J&T Express" },
  { id: "tiki", name: "TIKI" },
  { id: "pos", name: "POS" },
  { id: "sicepat", name: "SiCepat" },
];

export default InputResi;
