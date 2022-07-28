import type { NextApiRequest, NextApiResponse } from "next";

import { Resi } from "~/types/resi";
import { checkResi } from "~/utils/resi";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { courier, awb } = req.query as Pick<Resi, "courier" | "awb">;
  if (!courier || !awb) {
    res.status(400).json({ error: "Missing query params" });
    return;
  }

  const resp = await checkResi({ courier, awb });

  return res.json({ ok: resp });
}
