import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const ABOUT_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a Passionate Frontend Developer. Having 2 Years of Expirence as a QA Analyst and worked on many of the Automation Projects. Outside of coding, I enjoy staying active, exploring new technologies, playing Cricket, and Reading Books.`;

export const EXPERIENCES = [
  {
    year: "Jan 2023 - Present",
    role: "Graduate Assistant in University of Maryland, Baltimore County. ",
    company: "UMBC",
    description: `Working as a Teaching Assistant under the Professor Kevin Chen for the Subject Principles of Computer Security, and Professor Deepinder Sidhu for Advance Computer Networks. `,
    technologies: [""],
  },
  {
    year: "Sept 2021 - July 2023",
    role: "Quality Analyst. ",
    company: "MTX Goup Inc.",
    description: `Worked on multiple licensing projects as a QA tester, focusing on creating detailed-oriented test cases by analyzing documented requirements and user stories. Served as a QA lead on several projects, taking full responsibility for my QA team. Received excellent feedback for our collective work, including successful collaboration with BA and development teams for requirement implementation and defect resolution. Engineered automation scripts utilizing Selenium with Java for licensing projects, resulting in a 40% reduction in manual testing time and a significant increase in project efficiency`,
    technologies: [
      "Salesforce",
      "Selenium",
      "Java",
      "Detailed Oriented Testcases",
    ],
  },
  {
    year: "May 2021 - Aug 2021",
    role: "Quality Analyst Intern",
    company: "MTX Group Inc. ",
    description: `Salesforce Cloud Exposure: "Gained exposure to Salesforce cloud fundamentals, including the use of Triggers, SOQL, Validation Rules, Apex Classes, and Flows. This experience provided a solid foundation in Salesforce platform capabilities.  Contributed to several automation projects utilizing Selenium with Java, focusing on enhancing efficiency and accuracy in testing processes. Strengthened my technical skill set by gaining proficiency in Selenium, learning the basics of Salesforce, and SOQL, which has equipped me for advanced problem-solving in practical scenarios.`,
    technologies: ["Salesforce", "Selenium", "Java"],
  },
];

export const PROJECTS = [
  {
    title: "Icon-Generator(In-Progress)",
    image: project1,
    description:
      "A fully functional website that can Generate the Icons based on the User Text, and the users have the Ability to Customize the Icons.",
    technologies: ["HTML", "TailWindCSS", "React", "Node.js", "Stripe"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "TailwindCSS", "React"],
  },
  {
    title: "In Progress....",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
