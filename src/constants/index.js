import {
    mobile,
    backend,
    creator,
    dev,
    react,
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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    contactapp,
    newsness,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: react,
    },
    {
      title: "JavaScript Developer",
      icon: dev,
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
      title: "HealthBot",
      company_name: "Node.js/JavaScript",
      icon: dev,
      iconBg: "#383E56",
      date: "Jan 2023 - April 2023",
      points: [
        "Common tool to fetch the health related information of microservices across 5+ applications in production",
        "This app helped the associates save significant amount of time and thereby increase in the overall productiviy of the team",
        "Colaborated with other development and infra teams including with there manages in order to understand the scalability of this application across other teams within walmart.",
        "Developed scripts baed out of Node.js which is leveraging the data through the existing services in production.",
      ],
    },
    {
      title: "Incident Management App",
      company_name: "React.js with TypeScript",
      icon: react,
      iconBg: "#E6DEDD",
      date: "May 2023 - Aug 2023",
      points: [
        "Designed multiple dynamic and browser compatible pages using React.js with TypeScript.",
        "Produced multiple visual elements of web applications by translating UI/UX design wireframes",
        "By leveraging historical incident data, this tool enhances opreational resilience and supports continuous imporvements in incident management processes.Thereby reducing 25% time spenton incident resolution.",
      ],
    },
    {
      title: "Shift Master",
      company_name: "React.js with JavaScript",
      icon: react,
      iconBg: "#383E56",
      date: "September 2023 - Present",
      points: [
        "Developing a common tool in order to manage the workig shifts of associates across the teams within Walmart.",
        "Integrtion with xmatters makes it leverage the assignment of on-call duty by the managers.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Developing APIs which gives associate data with their shift details. And later leveraging this data in our front end.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Quick learning ability with a colaborative approach to problems makes Anurag a good fit for the industry.",
      name: "Deepshika Tripathi",
      designation: "SDE",
      company: "Walmart Global Tech",
      image: "../assets/dt.png",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Anurag does.",
      name: "Vinit Dhoke",
      designation: "SDE",
      company: "DP World",
      image: "../assets/vd.png",
    },
  ];
  
  const projects = [
    {
      name: "User-Data Handler",
      description:
        "Web application that allows users to manage and keep record of different people with a functionality of adding and deleting the records. Users also have a search feature to search for a particular record by name when needed.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "semantic-ui",
          color: "green-text-gradient",
        },
      ],
      image: contactapp,
      source_code_link: "https://github.com/argkmr/contact-app2",
    },
    {
      name: "NewsNess",
      description:
        "Web application that enables users to fetch top news headlines trendig in the country on different media hubs. NewsNess is a One-Stop platform to get the latest headlines from various sources at one place with just one click!",
      tags: [
        {
          name: "next.js/react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind-css",
          color: "pink-text-gradient",
        },
      ],
      image: newsness,
      source_code_link: "https://github.com/argkmr/NewsNess",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };