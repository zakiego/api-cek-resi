import { atom } from "jotai";

import { config } from "~/config";

export const resiAtom = atom("");
export const ekspedisiAtom = atom("");
export const isFilledAtom = atom(
  (get) => get(resiAtom).length > 0 && get(ekspedisiAtom).length > 0,
);
export const endpointAtom = atom(
  (get) => `${config.url}/api/${get(ekspedisiAtom)}/${get(resiAtom)}`,
);
export const endpointAtomLocalhost = atom(
  (get) =>
    `http://localhost:3000/api/resi?courier=${get(ekspedisiAtom)}&awb=${get(
      resiAtom,
    )}`,
);
