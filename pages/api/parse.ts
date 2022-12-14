import * as cheerio from "cheerio";
import type { NextApiRequest, NextApiResponse } from "next";

import { Resi } from "~/types/resi";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Resi>,
) {
  const $ = cheerio.load(htmlRaw);
  const status = $("h4").text().trim();
  const awb = $("h5.name").text().trim();
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

  return res.json({ courier, status, awb, history });
}

const htmlRaw =
  '<div class="check-valid" >\n\t<div class="col-12 check">\n\t\t\n\t\t<!-- check-label -->\n\t\t<div class="check-label">\n\t\t\t\t\t\t<div class="check-label-header bg-warning">\n\t\t\t\t<i class="material-icons">watch_later</i>\n\t\t\t\t<div class="d-flex justify-content-between align-items-center">\n\t\t\t\t\t<h4 class="label m-0"> ON PROCESS </h4>\n\t\t\t\t\t\t\t\t\t\t\t<img src="https://resi.id/img/exp/jnt.svg" style="max-width: 84px;">\n\t\t\t    \t\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="check-label-body">\n\t\t\t\t<!-- header -->\n\t\t\t\t<div class="row label-body-header align-items-center">\n\t\t\t\t\t<div class="col">\n\t\t\t\t\t\t<p class="description">Nomor Resi</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<aside class="d-flex aside-wrap">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class="name letter-spacing text-uppercase mb-0" style="display: inline-block; white-space: nowrap;">\n\t\t\t\t\t\t\t\t JP4704492059 \t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t<div class="d-flex">\n\t\t\t\t\t\t\t\t<button id="btn-share" class="btn btn-share btn-rounded">\n\t\t\t\t\t\t\t\t\t<ion-icon name="share"></ion-icon>\n\t\t\t\t\t\t\t\t\t<span>Bagikan</span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<div class="share-icon-wrap d-none">\n\t\t\t\t\t\t\t\t\t<button class="share-sosmed-btn" data-sharer="facebook" data-url="https://resi.id/s/JP4704492059">\n\t\t\t\t\t\t\t\t\t\t<ion-icon class="bg-fb" name="logo-facebook"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class="share-sosmed-btn" data-sharer="twitter" data-url="https://resi.id/s/JP4704492059">\n\t\t\t\t\t\t\t\t\t\t<ion-icon class="bg-tw" name="logo-twitter"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class="share-sosmed-btn line mobile-hide" data-sharer="line" data-url="https://resi.id/s/JP4704492059">\n\t\t\t\t\t\t\t\t\t\t<img src="https://resi.id/img/icons/line.svg" alt="">\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class="share-sosmed-btn line mobile-show" data-sharer="lineMobile" data-url="https://resi.id/s/JP4704492059">\n\t\t\t\t\t\t\t\t\t\t<img src="https://resi.id/img/icons/line.svg" alt="">\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class="share-sosmed-btn" data-sharer="googleplus" data-url="https://resi.id/s/JP4704492059">\n\t\t\t\t\t\t\t\t\t\t<ion-icon class="bg-gp" name="logo-googleplus"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class="share-sosmed-btn mobile-hide" data-sharer="whatsapp" data-url="https://resi.id/s/JP4704492059">\n\t\t\t\t\t\t\t\t\t\t<ion-icon class="bg-wa" name="logo-whatsapp"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class="share-sosmed-btn mobile-show" data-sharer="whatsappMobile" data-url="https://resi.id/s/JP4704492059">\n\t\t\t\t\t\t\t\t\t\t<ion-icon class="bg-wa" name="logo-whatsapp"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class="share-sosmed-btn" data-sharer="telegram" data-url="https://resi.id/s/JP4704492059">\n\t\t\t\t\t\t\t\t\t\t<ion-icon class="bg-tg" name="ios-paper-plane"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class="share-sosmed-btn mobile-show" data-sharer="email" data-url="https://resi.id/s/JP4704492059">\n\t\t\t\t\t\t\t\t\t\t<ion-icon class="bg-mail" name="mail"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class="share-sosmed-btn mobile-hide" data-sharer="gmail" data-url="https://resi.id/s/JP4704492059">\n\t\t\t\t\t\t\t\t\t\t<ion-icon class="bg-mail" name="mail"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class="share-sosmed-btn" data-sharer="sms" data-url="https://resi.id/s/JP4704492059">\n\t\t\t\t\t\t\t\t\t\t<ion-icon class="bg-sms" name="phone-portrait"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class="btn-copy" data-clipboard-text="https://resi.id/s/JP4704492059">\n\t\t\t\t\t\t\t\t\t\t<input type="text" id="awb-link-copy" value="https://resi.id/s/JP4704492059">\n\t\t\t\t\t\t\t\t\t\t<ion-icon class="bg-link" name="link"></ion-icon>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</aside>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="col">\n\t\t\t\t\t\t<button class="btn btn-track btn-detail btn-rounded">Detail</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t<!-- end header -->\n\t\t\t</div>\n\n\t\t\t<!-- accordion -->\n\t\t\t\t\t\t<div class="accordion" style="display: none">\n\t\t\t\n\t\t\t\t\n\t\t\t\t<!-- proses pengiriman -->\n\t\t\t\t<div class="row label-body-process">\n\t\t\t\t\t<ul class="list-custom list-custom-circle">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<h5>TerimaPaket</h5>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t<span>Tue, 26 Jul 2022 20:15</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span> - </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>???GADING_GRIYA_L???dari???Pic???paket sudah diterima</span>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<h5>KirimPaket</h5>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t<span>Tue, 26 Jul 2022 20:38</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span> - </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>oleh???JRT_GATEWAY???di kirim ke???JKT_GATEWAY???</span>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<h5>KirimPaket</h5>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t<span>Tue, 26 Jul 2022 23:44</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span> - </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>oleh???GADING_GRIYA_L???di kirim ke???DC_CILINCING???</span>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<h5>Sampai</h5>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t<span>Wed, 27 Jul 2022 00:12</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span> - </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>paket sudah sampai di tujuan???DC_CILINCING???</span>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<h5>KirimPaket</h5>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t<span>Wed, 27 Jul 2022 00:29</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span> - </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>oleh???DC_CILINCING???di kirim ke???JRT_GATEWAY???</span>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<h5>Sampai</h5>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t<span>Wed, 27 Jul 2022 00:51</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span> - </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>paket sudah sampai di tujuan???JRT_GATEWAY???</span>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<h5>Sampai</h5>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t<span>Wed, 27 Jul 2022 05:53</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span> - </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>paket sudah sampai di tujuan???JKT_GATEWAY???</span>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<h5>KirimPaket</h5>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t<span>Wed, 27 Jul 2022 22:07</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span> - </span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>oleh???JKT_GATEWAY???di kirim ke???BDJ_GATEWAY???</span>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<!-- end proses pengiriman -->\n\t\t\t</div>\n\t\t\t<!-- end accordion -->\n\n\t\t\t<div class="check-label-footer"></div>\n\t\t</div>\n\t\t<!-- end check label -->\n\t</div>\n</div>\n<!-- end data ada -->\t\t\t\n\n<script>\n\tvar clipboard = new ClipboardJS(\'.btn-copy\');\n\twindow.Sharer.init();\n</script>';
