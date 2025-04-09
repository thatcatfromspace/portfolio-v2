export const projects: Array<{
  name: string;
  desc: string;
  frameworks: Array<string>;
  link?: string;
}> = [
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
    name: "Remus",
    desc: "Converse about your text, image and video files with a chatbot.",
    frameworks: [
      "https://raw.githubusercontent.com/thatcatfromspace/portfolio-v2/main/src/assets/react.svg",
      "https://raw.githubusercontent.com/thatcatfromspace/portfolio-v2/refs/heads/main/src/assets/google.svg",
      "https://raw.githubusercontent.com/thatcatfromspace/portfolio-v2/main/src/assets/python.svg",
      "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/redis/redis-original.svg",
    ],
    link: "https://github.com/thatcatfromspace/remus",
  },
  {
    name: "ForeSight",
    desc: "Big data weather analytics for weather forecasting.",
    frameworks: [
      "https://raw.githubusercontent.com/thatcatfromspace/portfolio-v2/main/src/assets/python.svg",
      "https://raw.githubusercontent.com/thatcatfromspace/portfolio-v2/refs/heads/main/src/assets/cassandra.svg",
    ],
    link: "https://github.com/thatcatfromspace/foresight",
  },
  {
    name: "BloomSync",
    desc: "Elegantly synchronizes folders using bloom filters.",
    frameworks: [
      "https://raw.githubusercontent.com/thatcatfromspace/portfolio-v2/main/src/assets/python.svg",
    ],
    link: "https://github.com/thatcatfromspace/bloomsync",
  },
  {
    name: "Mozart",
    desc: "Track your music listening history with ease!",
    frameworks: [
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
      "https://raw.githubusercontent.com/thatcatfromspace/portfolio-v2/main/src/assets/nestjs.svg",
      "https://raw.githubusercontent.com/thatcatfromspace/portfolio-v2/main/src/assets/postgresql.svg",
    ],
    link: "https://mozart-tracker.vercel.app",
  },
];
