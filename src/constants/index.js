import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  trazoro,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "Mintrace",
    icon: trazoro,
    iconBg: "white",
    date: "Jan 2016 - Dec 2016",
    points: [
      "Participate in the development of api restful and client of trazoro marketplace to sell and buy gold in Colombia, Ruby on rails and Angularjs Collaborate in the development of trazoro.co, manage documents to commercialize gold for Colombia.",
      "Repair and improvement of existing software in the backend using ruby and client with angularjs",
      "Unit Testing",
      "Create reusable components according to designs and UX",
      "Clean and efficient code creation based on specifications",
      "Api restfull, ruby on rails, grape-api, rspec, Angularjs 1.5, angular-material, angular-ui-router, ng-resource, haml, coffescript, AWS",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "UST Global",
    icon: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2275%22%20height%3D%2275%22%20viewBox%3D%220%200%2075%2075%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M12.942%2045.532c4.351%200%208.691%201.844%2010.687%205.182l-4.722%203.82c-1.607-1.448-3.566-2.505-6.004-2.505-2.633%200-3.917%201.075-3.917%202.076%200%201.328%201.228%202.103%203.917%202.766l2.411.586c6.802%201.64%209.302%204.792%209.302%208.734C24.616%2071.383%2019.98%2075%2012.23%2075%207.894%2075%202.548%2073.183.487%2069.445l4.723-3.82c1.912%201.939%204.076%203.11%206.98%203.11%202.514%200%204.51-.839%204.51-2.347%200-1.21-.911-1.677-3.402-2.301l-2.53-.625c-6.762-1.678-9.38-5.491-9.38-9.16%200-4.75%204.2-8.77%2011.554-8.77zm54.941.81v6.613h-8.279v21.16h-7.65v-21.16h-8.278v-6.613h24.207zM7.618%200v16.46c0%203.279%201.871%205.146%204.916%205.146%203.044%200%204.877-1.867%204.877-5.146V0h7.617v16.424c0%207.635-4.57%2012.234-12.455%2012.234C4.376%2028.658%200%2023.864%200%2016.424V0h7.618zm53.555%208.233V19.02H50.386V8.233h10.787z%22%2F%3E%0A%3C%2Fsvg%3E%0A",
    iconBg: "#E6DEDD",
    date: "Jan 2017 - Jan 2019",
    points: [
      "Internal web application to Walmart center america, to simulate cost and prices of products with different scenarios or contexts.",
      "Repair and improvement of existing software",
      "Create reusable components according to designs",
      "Clean and efficient code creation based on specifications",
      "Unit Testing",
      "typescript, reactjs, jest, rest apis, redux, material ui, nextjs",
      "Collaborate in the development of Visa Market MVP platform to manage services and offers to visa clients and cardholders:",
      "Lead project",
      "Repair and improvement of existing software",
      "Create reusable components according to designs",
      "Clean and efficient code creation based on specifications",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "C4REX",
    icon: "https://media.licdn.com/dms/image/v2/C4E0BAQGWclXjBcM7dg/company-logo_200_200/company-logo_200_200/0/1632253614068/c4rex_logo?e=1736985600&v=beta&t=F5hSVt3M-bvxP2LPMsUf_69zX3N5hnpD9Zo2iq2inQ4",
    iconBg: "white",
    date: "Feb 2019 - Apr 2020",
    points: [
      "collaborate in the development of audiomack.com a music streaming platform, specially the admin panel platform:",
      "Clean and efficient code creation based on specifications",
      "Testing and deployment of programs and systems",
      "Create reusable components according to designs",
      "Design and develop prototypes.",
      "Resolve bugs",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company_name: "Prodigious",
    icon: "https://www.prodigious.com/themes/prodigious/images/logo-icon.png",
    iconBg: "#E6DEDD",
    date: "Jul 2020 - Present",
    points: [
      "Collaborate in the development of the Nissan platform to manage services and marketplace:",
      "Create reusable components according to designs according to specific market or global web pages.",
      "Clean and efficient code creation based on specifications",
      "Testing and deployment of programs and systems",
      "Repair and improvement of existing software focusing on UI and UX",
      "Resolve bugs",
      "Microfrontend architecture.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
