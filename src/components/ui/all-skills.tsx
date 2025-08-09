import { ReactNode } from "react";
import {
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaLinux,
  FaWindows,
} from "react-icons/fa";
import {
  SiAmazondynamodb,
  SiApachecassandra,
  SiApachemaven,
  SiApple,
  SiBootstrap,
  SiC,
  SiCplusplus,
  SiDjango,
  SiFirebase,
  SiFlask,
  SiGithub,
  SiGitlab,
  SiGo,
  SiJavascript,
  SiJenkins,
  SiJira,
  SiJquery,
  SiJsonwebtokens,
  SiLaravel,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNodedotjs,
  SiNx,
  SiOracle,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedux,
  SiSlack,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export type SkillData = {
  name: string;
  icon: ReactNode;
  category: string;
};
export const ALL_SKILLS: SkillData[] = [
  // Programming Languages
  {
    name: "Python",
    icon: <SiPython title='Python' className='text-blue-400' />,
    category: "Programming Languages",
  },
  {
    name: "Java",
    icon: <FaJava title='Java' className='text-orange-700' />,
    category: "Programming Languages",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript title='JavaScript' className='text-yellow-400' />,
    category: "Programming Languages",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript title='TypeScript' className='text-blue-600' />,
    category: "Programming Languages",
  },

  {
    name: "Go",
    icon: <SiGo title='Go' className='text-blue-600' />,
    category: "Programming Languages",
  },
  {
    name: "C++",
    icon: <SiCplusplus title='C++' className='text-blue-600' />,
    category: "Programming Languages",
  },
  {
    name: "C",
    icon: <SiC title='C' className='text-blue-600' />,
    category: "Programming Languages",
  },
  {
    name: "PHP",
    icon: <SiPhp title='PHP' className='text-blue-600' />,
    category: "Programming Languages",
  },

  // Libraries & Frameworks
  {
    name: "Django REST Framework",
    icon: <SiDjango title='Django REST Framework' className='text-green-700' />,
    category: "Libraries & Frameworks",
  },
  {
    name: "Django",
    icon: <SiDjango title='Django' className='text-green-700' />,
    category: "Libraries & Frameworks",
  },
  {
    name: "Flask",
    icon: <SiFlask title='Flask' className='text-green-700' />,
    category: "Libraries & Frameworks",
  },
  {
    name: "React.js",
    icon: <SiReact title='React.js' className='text-sky-500' />,
    category: "Libraries & Frameworks",
  },
  {
    name: "React Native",
    icon: <SiReact title='React Native' className='text-sky-500' />,
    category: "Libraries & Frameworks",
  },
  {
    name: "Laravel",
    icon: <SiLaravel title='Laravel' className='text-red-600' />,
    category: "Libraries & Frameworks",
  },
  {
    name: "Vue.js",
    icon: <SiVuedotjs title='Vue.js' className='text-green-600' />,
    category: "Libraries & Frameworks",
  },
  {
    name: "Redux",
    icon: <SiRedux title='Redux' className='text-purple-600' />,
    category: "Libraries & Frameworks",
  },
  {
    name: "RTK Query",
    icon: <SiRedux title='RTK Query' className='text-purple-600' />,
    category: "Libraries & Frameworks",
  },
  {
    name: "NX",
    icon: <SiNx title='NX' className='text-gray-700' />,
    category: "Libraries & Frameworks",
  },
  {
    name: "MUI",
    icon: <SiMui title='MUI' className='text-blue-600' />,
    category: "Libraries & Frameworks",
  },
  {
    name: "Node.js",
    icon: (
      <SiNodedotjs title='Node.js' className='text-black dark:text-white' />
    ),
    category: "Libraries & Frameworks",
  },

  // Databases
  {
    name: "MySQL",
    icon: <SiMysql title='MySQL' className='text-blue-500' />,
    category: "Databases",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql title='PostgreSQL' className='text-blue-700' />,
    category: "Databases",
  },
  {
    name: "Oracle",
    icon: <SiOracle title='Oracle' className='text-red-600' />,
    category: "Databases",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb title='MongoDB' className='text-green-600' />,
    category: "Databases",
  },
  {
    name: "Firebase",
    icon: <SiFirebase title='Firebase' className='text-yellow-500' />,
    category: "Databases",
  },
  {
    name: "AWS DynamoDB",
    icon: <SiAmazondynamodb title='AWS DynamoDB' className='text-orange-600' />,
    category: "Databases",
  },
  {
    name: "Cassandra",
    icon: <SiApachecassandra title='Cassandra' className='text-purple-600' />,
    category: "Databases",
  },

  // Web Technologies
  {
    name: "HTML",
    icon: <FaHtml5 title='HTML' className='text-orange-500' />,
    category: "Web Technologies",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt title='CSS' className='text-blue-500' />,
    category: "Web Technologies",
  },
  {
    name: "jQuery",
    icon: <SiJquery title='jQuery' className='text-blue-600' />,
    category: "Web Technologies",
  },
  {
    name: "JSON",
    icon: <SiJsonwebtokens title='JSON' className='text-yellow-600' />,
    category: "Web Technologies",
  },
  // {
  //   name: "AJAX",
  //   icon: <SiAjax title="AJAX" className="text-blue-600" />,
  //   category: "Web Technologies",
  // },
  {
    name: "Bootstrap",
    icon: <SiBootstrap title='Bootstrap' className='text-purple-700' />,
    category: "Web Technologies",
  },

  // Infrastructure & Tools
  {
    name: "Git",
    icon: <FaGitAlt title='Git' className='text-orange-600' />,
    category: "Infrastructure & Tools",
  },
  // Cloud Services
  {
    name: "AWS",
    icon: <FaAws title='AWS' className='text-orange-600' />,
    category: "Infrastructure & Tools",
  },
  {
    name: "AWS S3",
    icon: <FaAws title='AWS S3' className='text-orange-600' />,
    category: "Infrastructure & Tools",
  },
  {
    name: "GitHub",
    icon: <SiGithub title='GitHub' className='text-black' />,
    category: "Infrastructure & Tools",
  },
  {
    name: "GitLab",
    icon: <SiGitlab title='GitLab' className='text-orange-600' />,
    category: "Infrastructure & Tools",
  },
  {
    name: "Docker",
    icon: <FaDocker title='Docker' className='text-blue-400' />,
    category: "Infrastructure & Tools",
  },
  {
    name: "VS Code",
    icon: <VscVscode title='VS Code' className='text-blue-500' />,
    category: "Infrastructure & Tools",
  },
  {
    name: "JIRA",
    icon: <SiJira title='JIRA' className='text-blue-500' />,
    category: "Infrastructure & Tools",
  },
  {
    name: "Slack",
    icon: <SiSlack title='Slack' className='text-purple-600' />,
    category: "Infrastructure & Tools",
  },
  {
    name: "Maven",
    icon: <SiApachemaven title='Maven' className='text-red-600' />,
    category: "Infrastructure & Tools",
  },
  {
    name: "Jenkins",
    icon: <SiJenkins title='Jenkins' className='text-blue-500' />,
    category: "Infrastructure & Tools",
  },
  // {
  //   name: "GitHub Actions",
  //   icon: <SiGithubactions title="GitHub Actions" className="text-gray-700" />,
  //   category: "Infrastructure & Tools",
  // },
  {
    name: "Postman",
    icon: <SiPostman title='Postman' className='text-orange-500' />,
    category: "Infrastructure & Tools",
  },

  // // APIs & Protocols
  // {
  //   name: "RESTful APIs",
  //   icon: <SiPostman title="RESTful APIs" className="text-orange-500" />,
  //   category: "APIs & Protocols",
  // },
  // {
  //   name: "Shopify API",
  //   icon: <SiShopify title="Shopify API" className="text-green-600" />,
  //   category: "APIs & Protocols",
  // },
  // {
  //   name: "WhatsApp API",
  //   icon: <SiWhatsapp title="WhatsApp API" className="text-green-500" />,
  //   category: "APIs & Protocols",
  // },

  // Fundamentals
  // {
  //   name: "Data Structures and Algorithms",
  //   icon: <MdDataObject title="Data Structures and Algorithms" className="text-gray-700" />,
  //   category: "Fundamentals",
  // },
  // {
  //   name: "Object-Oriented Programming",
  //   icon: <FaCode title="OOP" className="text-gray-700" />,
  //   category: "Fundamentals",
  // },
  // {
  //   name: "Database Management Systems",
  //   icon: <FaDatabase title="DBMS" className="text-gray-700" />,
  //   category: "Fundamentals",
  // },
  // {
  //   name: "Software Development",
  //   icon: (
  //     <FaProjectDiagram
  //       title="Software Development"
  //       className="text-gray-700"
  //     />
  //   ),
  //   category: "Fundamentals",
  // },
  // {
  //   name: "System Design",
  //   icon: (
  //     <FaProjectDiagram title="System Design" className="text-purple-600" />
  //   ),
  //   category: "Fundamentals",
  // },
  // {
  //   name: "Software Testing & QA",
  //   icon: <FaVial title="Software Testing & QA" className="text-red-600" />,
  //   category: "Fundamentals",
  // },
  // {
  //   name: "Data Modeling & Schema Design",
  //   icon: <FaDatabase title="Data Modeling" className="text-gray-700" />,
  //   category: "Fundamentals",
  // },
  // {
  //   name: "Software Architecture & Design Patterns",
  //   icon: (
  //     <FaProjectDiagram
  //       title="Software Architecture"
  //       className="text-indigo-600"
  //     />
  //   ),
  //   category: "Fundamentals",
  // },
  // {
  //   name: "Agile & Scrum Methodologies",
  //   icon: <SiScrumalliance title="Agile & Scrum" className="text-green-700" />,
  //   category: "Fundamentals",
  // },
  // {
  //   name: "Software Development Lifecycle (SDLC)",
  //   icon: <FaClipboardList title="SDLC" className="text-blue-700" />,
  //   category: "Fundamentals",
  // },

  // Operating Systems
  {
    name: "macOS",
    icon: <SiApple title='macOS' className='text-gray-500' />,
    category: "Operating Systems",
  },
  {
    name: "Windows",
    icon: <FaWindows title='Windows' className='text-blue-500' />,
    category: "Operating Systems",
  },
  {
    name: "Linux",
    icon: <FaLinux title='Linux' className='text-green-500' />,
    category: "Operating Systems",
  },
];

export const skillIconMap: Record<string, ReactNode> = Object.fromEntries(
  ALL_SKILLS.map((s) => [s.name, s.icon])
);
