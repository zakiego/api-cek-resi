import { checkResi } from "../../utils/resi";

export async function onRequest(context: any) {
  const [courier, awb] = context.params.resi;

  const resp = await checkResi({ courier, awb });

  return new Response(JSON.stringify({ ...resp }));
}
