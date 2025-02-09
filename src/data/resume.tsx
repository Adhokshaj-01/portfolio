import { Icons } from "@/components/icons";
import {  HomeIcon } from "lucide-react";

export const DATA = {
  name: "Adhokshaj",
  initials: "AJ23",
  url: " https://magicui.design/docs/components/line-shadow-text",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
"Software Developer | Internet Traveller",
  summary:
    "Adhokshaj, is a developer and a  passionate tech enthusiast always exploring the fast-changing tech world. With a love for learning and a creative coding approach, he enjoys turning ideas into digital solutions. His journey is driven by curiosity, adaptability, and a constant desire for knowledge. When not exploring the internet, he likes reading philosophy and watching movies. Currently, he is working on building next-generation software with a professional touch.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Docker",
    "Java",
    "PHP",
    "Figma"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "contact.adhokshaj@gmail.com",
    tel: " ",
    social: {
      GitHub: {
        name: "GitHub",
        url: "#",
        icon: Icons.github,

        navbar: true,
      },
      Cosmos: {
        name: "Photo Shoecase",
        url: "#",
        icon: Icons.photo,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "#",
        icon: Icons.linkedin,

        navbar: true,
      },
     
    },
  },

  work: [
    {
      company: "Freelancing",
      href: "",
      badges: [],
      location: "Remote",
      title: "Software Developer",
      logoUrl: "/freelance.jpg",
      start: "May 2024",
      end: "present",
      description:
        "Developing modern and scalable ERP software",
    },
    {
      company: "Royals Webtech",
      href: "https://royalswebtechpvtltd.com/",
      badges: [],
      location: "Nagour",
      title: "Fullstack Developer",
      logoUrl: "/intern.png",
      start: "Oct 2023",
      end: "Apr 2024",
      description:
        "Developed a comprehensive salon management system thatrevolutionized daily operations. The system includes advanced features such as user-friendly appointment scheduling for clients and staff, efficient inventory management to track and manage salon products, and automated invoice generation for seamless financial transactions, with the help of technologies like ReactJS, PHP, SQL",
    },
  ],
  education: [
    {
      school: "GH Raisoni University",
      href: "https://ghrcemn.raisoni.net/",
      degree: "Degree in Computer Applications",
      logoUrl: "/rgi.jpg",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Renoir Studios",
      href: "https://www.renoirstudio.com/",
      // dates: "April 2023",
      active: true,
      description:
        "Developing a modern interior architecture studio website, focused on showcasing innovative designs and seamless user experience. Stay tuned for the launch!",
      technologies: [
        "Nextjs",
        "Typescript",
        "ShadCN",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.renoirstudio.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/renoir.png",
      video:
        ""
    },

     {
      title: "Eureka",
      href: "https://eureka-main2.web.app/",
      // dates: "April 2023",
      active: true,
      description:
        "A webspace for witting and excuting coding/front-end programes with help of AI.",
      technologies: [
        "React.js",
        "Firebase",
        "TailwindCSS",
        "Open AI"
      ],
      links: [
        {
          type: "Website",
          href: "https://eureka-main2.web.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/eureka.jpeg",
      video:
        ""
    },
    {
      title: "Piegon",
      href: "https://piegon-api.vercel.app/",
      // dates: "April 2024",
      active: true,
      description:
        "Inspire from Postman. ApiVerse help to test api's which different methods such as POST,GET,DELETE,PATCH..",
      technologies: [
        "React.js",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://piegon-api.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/api.png",
      video:
        ""
    },
    {
      title: "Social Media App",
      href: "https://social-app-33e35.web.app/",
      // dates: "April 2024",
      active: true,
      description:
        "Social Media App , which allows user to register/login to website and post their thought's with other social media features !",
      technologies: [
        "React.js",
        "Chakra UI",
        "Firebase"
      ],
      links: [
        {
          type: "Website",
          href: "https://social-app-33e35.web.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/social.jpg",
      video:
        ""
    },
  ],
  hackathons: [
    
      {
        description: "Planning & Ideation - I start by exploring ideas, defining goals, and creating wireframes to visualize the project.",
        icons : <Icons.idea color="red"/>,
        color:'red'
      },
      {
        description: "Development & Coding - Bringing designs to life with clean, scalable code, integrating APIs, and ensuring smooth functionality.",
        icons : <Icons.magic color="skyblue" />,
      },
      {
        description: "Deployment & Launch - the software, optimizing performance, and providing post-launch support for seamless user experience.",
        icons: <Icons.launch color="purple"/>,
      }
    
  ]
} as const;
