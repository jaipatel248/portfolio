"use client";

import { ExperienceItemType, WorkExperience } from "../../ui/work-experience";

const WORK_EXPERIENCE: ExperienceItemType[] = [
  {
    id: "1",
    companyName: "Alation",
    companyLogo: "/logos/alation_logo.webp",
    isCurrentEmployer: true,
    positions: [
      {
        id: "1-1",
        title: "Software Engineer II",
        employmentPeriod: "May 2023 – Present",
        employmentType: "Full-time",
        description: `• Designed and implemented scalable cloud-native microservices (LMS Value and History Services) using AWS DynamoDB and Keyspaces (Cassandra) to manage and audit logical metadata changes, enhancing performance, reliability, and compliance.\n\n• Developed and maintained Compose, an intelligent SQL editor, using Django REST Framework and React.js with MUI, TypeScript, NX, and RTK Query.\n\n• Integrated Django REST Framework with a Maven-based Java server via Protobuf for seamless data streaming.`,
        icon: "code",
        skills: [
          "AWS DynamoDB",
          "Cassandra",
          "Django REST Framework",
          "React.js",
          "TypeScript",
          "NX",
          "RTK Query",
          "MUI",
          "Protobuf",
          "Java",
        ],
        location: "Philadelphia, United States",
        isExpanded: true,
      },
    ],
  },
  {
    id: "2",
    companyName: "LatticeAI Inc. (ShopAgain)",
    companyLogo: "/logos/shopagain_logo.jpeg",
    isCurrentEmployer: false,
    positions: [
      {
        id: "2-1",
        title: "Software Development Engineer I",
        employmentPeriod: "December 2021 – February 2023",
        employmentType: "Full-time",
        description: `• Maintained and enhanced ShopAgain, a Shopify Partner App, using Django REST Framework, Flask, and React.js.\n\n• Integrated omnichannel messaging (e.g., WhatsApp), tracked user behavior via Facebook and Google Ads, and optimized user engagement.\n\n• Utilized Shopify APIs to streamline workflows and ensure high performance and a seamless merchant experience.`,
        icon: "code",
        skills: [
          "Django REST Framework",
          "Flask",
          "React.js",
          "Shopify APIs",
          "Facebook/Google Ads Integration",
          "Omnichannel Messaging",
          "JavaScript",
        ],
        location: "Remote",
      },
    ],
  },
  {
    id: "3",
    companyName: "AtliQ Technologies",
    companyLogo: "/logos/atliq_logo.jpg",
    isCurrentEmployer: false,
    positions: [
      {
        id: "3-1",
        title: "Software Engineer",
        employmentPeriod: "April 2021 – November 2021",
        employmentType: "Full-time",
        description: `• Contributed to full-stack web and mobile applications using Laravel, Vue.js, React Native, and MySQL.\n\n• Worked on multiple live projects, delivering features and fixes using HTML, CSS, Bootstrap, and AWS S3.\n\n• Adapted quickly to new tools in a collaborative development environment.`,
        icon: "code",
        skills: [
          "Laravel",
          "Vue.js",
          "React Native",
          "MySQL",
          "AWS S3",
          "HTML",
          "CSS",
          "Bootstrap",
        ],
        location: "India",
      },
      {
        id: "3-2",
        title: "Software Engineer Intern",
        employmentPeriod: "December 2020 – April 2021",
        employmentType: "Internship",
        description: `• Developed and debugged applications using C and JavaScript.\n\n• Gained hands-on experience with over 35 technologies, contributing to multiple modules in a team setting.`,
        icon: "code",
        skills: [
          "Laravel",
          "Vue.js",
          "React Native",
          "MySQL",
          "AWS S3",
          "HTML",
          "CSS",
          "Bootstrap",
        ],
        location: "India",
      },
      {
        id: "3-3",
        title: "Summer Intern",
        employmentPeriod: "April 2020 – July 2020",
        employmentType: "Internship",
        description: `• Contributed to software projects using C and JavaScript during summer internship.\n\n• Gained foundational experience across 34+ technologies while working in a collaborative environment.`,
        icon: "code",
        skills: ["Laravel", "MySQL", "HTML", "CSS", "Bootstrap"],
        location: "Vadodara, Gujarat, India",
      },
    ],
  },

  {
    id: "7",
    companyName: "Dharmsinh Desai University",
    companyLogo: "/logos/ddu_logo.png",
    isCurrentEmployer: false,
    positions: [
      {
        id: "7-1",
        title: "B.Tech, Computer Engineering",
        employmentPeriod: "August 2017 – May 2021",
        employmentType: "Education",
        description: `• Graduated with a CGPA of 8.17/10.0.\n\n• Relevant coursework: Data Structures and Algorithms, Object Oriented Programming, Database Management Systems.\n\n• Participated in team-based academic and extracurricular projects.`,
        icon: "education",
        skills: ["Data Structures", "OOP", "DBMS", "Software Development"],
        location: "Nadiad, Gujarat, India",
      },
    ],
  },
];

export default function WorkSection() {
  return (
    <section className='w-full ibmsans'>
      <h2 className='section-title'>Experience</h2>
      <WorkExperience className='rounded-lg' experiences={WORK_EXPERIENCE} />
    </section>
  );
}
