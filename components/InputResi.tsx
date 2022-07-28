import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { Box, BoxProps, forwardRef } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { useState } from "react";

import { ekspedisiAtom, resiAtom } from "./Atom";

const InputResi = () => {
  const [resi, setResi] = useAtom(resiAtom);
  const [ekspedisi, setEkspedisi] = useAtom(ekspedisiAtom);

  return (
    <Box>
      <FormControl>
        <FormLabel fontWeight="semibold">Resi</FormLabel>
        <Input
          value={resi}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setResi(e.target.value)
          }
          placeholder="Masukkan nomor resi"
        />
      </FormControl>

      <FormControl pt="7">
        <FormLabel fontWeight="semibold">Ekspedisi</FormLabel>
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
