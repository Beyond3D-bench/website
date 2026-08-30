/**
 * Author block, transcribed from the paper's \author{} macro. Shared by the
 * landing page and the team page so the two can never drift apart.
 */

export type Author = {
  name: string;
  affiliations: number[];
  equal?: boolean;
  href?: string;
};

export const PAPER_TITLE =
  "Long Time No See: Benchmarking VLMs for Out-of-Sight Spatiotemporal Reasoning in Egocentric Videos";

export const AFFILIATIONS = [
  "ETH Zürich",
  "Microsoft Spatial AI Lab",
  "Bocconi University",
];

/**
 * Logos live in `public/logos/`. A missing file falls back to the
 * institution's name set as a wordmark, so the row never renders broken.
 *
 * Heights are per logo because the aspect ratios differ a lot — the two
 * wordmarks are 3:1 and 4.8:1, the Microsoft symbol is square — so a single
 * shared height would leave them optically unbalanced. `invertInDark` flattens
 * a single-colour mark to white for the dark surface; the Microsoft squares
 * carry brand colour and opt out.
 */
export type Institution = {
  name: string;
  src: string;
  height: string;
  heightCompact: string;
  invertInDark: boolean;
};

export const INSTITUTIONS: Institution[] = [
  {
    name: "ETH Zürich",
    src: "/logos/eth-zurich.svg",
    height: "h-8 sm:h-10",
    heightCompact: "h-6 sm:h-8",
    invertInDark: true,
  },
  {
    name: "Microsoft Spatial AI Lab",
    src: "/logos/microsoft.svg",
    height: "h-7 sm:h-8",
    heightCompact: "h-5 sm:h-6",
    invertInDark: false,
  },
  {
    name: "Bocconi University",
    src: "/logos/bocconi.svg",
    height: "h-7 sm:h-9",
    heightCompact: "h-5 sm:h-7",
    invertInDark: true,
  },
];

/** Paper order. */
export const AUTHORS: Author[] = [
  {
    name: "Fangzhou Ma",
    affiliations: [1],
    equal: true,
    href: "https://www.linkedin.com/in/fangzhou-ma-36a8a5271",
  },
  {
    name: "Ivo Alexander Ban",
    affiliations: [1],
    equal: true,
    href: "https://ivo-ab.github.io",
  },
  {
    name: "Eren Homburg",
    affiliations: [1],
    equal: true,
    href: "https://erenhomburg.com",
  },
  {
    name: "Gabriele Goletto",
    affiliations: [2],
    href: "https://gabrielegoletto.github.io",
  },
  {
    name: "Rémi Pautrat",
    affiliations: [2],
    href: "https://rpautrat.github.io",
  },
  {
    name: "Mahdi Rad",
    affiliations: [2],
    href: "https://radmahdi.github.io/Home.html",
  },
  {
    name: "Chiara Plizzari",
    affiliations: [3],
    href: "https://chiaraplizz.github.io",
  },
  {
    name: "Marc Pollefeys",
    affiliations: [1, 2],
    href: "https://people.inf.ethz.ch/marc.pollefeys/",
  },
];
