export const projects: Array<{
  name: string;
  desc: string;
  frameworks: Array<string>;
  link?: string;
}> = [
  {
    name: "Mozart",
    desc: "Track your music listening history with ease!",
    frameworks: [
      "https://raw.githubusercontent.com/thatcatfromspace/portfolio-v2/main/src/assets/nextjs.svg",
      "https://raw.githubusercontent.com/thatcatfromspace/portfolio-v2/main/src/assets/nestjs.svg",
      "https://raw.githubusercontent.com/thatcatfromspace/portfolio-v2/main/src/assets/postgresql.svg",
    ],
  },
  {
    name: "ProLeap",
    desc: "Comprehensive app to manage mentor sessions.",
    frameworks: [
      "https://raw.githubusercontent.com/thatcatfromspace/portfolio-v2/main/src/assets/react.svg",
      "https://raw.githubusercontent.com/thatcatfromspace/portfolio-v2/main/src/assets/django.svg",
      "https://raw.githubusercontent.com/thatcatfromspace/portfolio-v2/main/src/assets/postgresql.svg",
    ],
    link: "https://proleap.vercel.app",
  },
  {
    name: "BloomSync",
    desc: "Directory content synchronizer using bloom filters.",
    frameworks: [
      "https://raw.githubusercontent.com/thatcatfromspace/portfolio-v2/main/src/assets/python.svg",
    ],
    link: "https://github.com/thatcatfromspace/bloomsync",
  },
];
