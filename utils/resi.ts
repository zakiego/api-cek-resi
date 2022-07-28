import * as cheerio from "cheerio";
import setCookie from "set-cookie-parser";
import { Resi } from "~/types/resi";

export const getCsrfCookie = async () => {
  const { csrfToken, cookie } = await fetch("https://resi.id").then(
    async (resp) => {
      const root = cheerio.load(await resp.text());
      const csrfToken = root(`meta[name="csrf-token"]`).attr("content");

      const cookie = setCookie.parse(
        setCookie.splitCookiesString(resp.headers.get("set-cookie") as string),
      );

      return { csrfToken, cookie };
    },
  );

  return { csrfToken, cookie };
};

interface CheckResi {
  courier: string;
  awb: string;
}

export const checkResi = async ({ courier, awb }: CheckResi) => {
  const { csrfToken, cookie } = await getCsrfCookie();

  const checkResi = await fetch("https://resi.id/trackresult", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "x-csrf-token": csrfToken as string,
      cookie: `${cookie[0].name}=${cookie[0].value}; ${cookie[1].name}=${cookie[1].value}`,
      "x-requested-with": "XMLHttpRequest",
    },
    body: `courier=${courier}&awb=${awb}&multiple=false`,
  }).then((resp) => resp.json());

  return parseResult(checkResi.html);
};

const parseResult = async (resp: string) => {
  const $ = cheerio.load(await resp);
  const status = $("h4").text().trim();
  const awb = $("h5.name").first().text().trim();
  const courier = ($("img").first().attr("src") as string)
    .split("/")
    .pop()
    ?.split(".")[0] as string;

  const history: Resi["history"] = [];

  $("ul.list-custom.list-custom-circle > li").map((i, el) => {
    const step = $(el).find("h5").text();
    const desc = $(el).find("span").text();
    history.push({ id: (i + 1).toString(), step, desc });
  });

  return { courier, status, awb, history };
};
