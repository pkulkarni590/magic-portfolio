import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Prathmesh",
  lastName: "Kulkarni",
  name: `Prathmesh Kulkarni`,
  role: "AI Product Management",
  avatar: "/images/Potrait.PNG",
  email: "pkulkarni590@gmail.com",
  institute_email: "pkulka12@gmail.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi", "Marathi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/pkulkarni590",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/prathmesh-kulkarni-00531116b",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between product and technology</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">CounselAI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/counselai-ai-driven-legal-workflows",
  },
  subline: (
    <>
      I'm Prathmesh, a master's student at <Text as="span" size="xl" weight="strong">Johns Hopkins University</Text> and AI PM intern at <Text as="span" size="xl" weight="strong">CounselAI</Text>, where engineering instinct meets product thinking.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Prathmesh has shipped large-scale data infrastructure at Druva. Now he's on the other side of the table, shaping AI products as a PM, with the instincts of an engineer who's seen what actually gets built.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "CounselAI",
        timeframe: "December 2025 - Present",
        role: "AI Product Management Intern",
        achievements: [
          <>
            Built AI-driven workflows for file scanning, audio processing, and cross-file image
            detection, supporting 3 live pilot projects with lawyers and improving document
            understanding and response accuracy.
          </>,
          <>
            Improved system performance by implementing parallel AWS Lambda processing and semantic
            vector-based responsiveness scoring, reducing end-to-end processing time by over 60%.
          </>,
          <>
            Worked directly with lawyers and founders to define product requirements and validate
            real-world legal use cases, shaping core AI product features in a pre-revenue startup.
          </>,
        ],
        images: [],
      },
      {
        company: "Druva Data Solutions",
        timeframe: "July 2022 - May 2025",
        role: "Software Development Engineer",
        achievements: [
          <>
            Led feature efforts addressing 30+ security vulnerabilities using Snyk, achieving
            FedRAMP compliance and enabling federal client acquisition.
          </>,
          <>
            Developed large-file download capability in Flask/REST APIs, solving client failures
            above 3 GB; directly benefited three top-five customers.
          </>,
          <>
            Prioritized and delivered 18 Legalhold Flask API enhancements, cutting server response
            times by 25% and enabling 300+ enterprise users to complete compliance tasks 40% faster.
          </>,
        ],
        images: [],
      },
      {
        company: "Srivenk Farms",
        timeframe: "October 2021 - May 2022",
        role: "Data Analysis Intern",
        achievements: [
          <>
            Built a demand-driven AI model for predictive pricing and demand forecasting, boosting
            average selling price by 31% from $0.94/kg to $1.23/kg and unlocking $34.8K in
            incremental revenue.
          </>,
          <>
            Developed a cross-platform Flutter mobile app with a Python backend integrating REST
            APIs and data pipelines for real-time agricultural market data analytics.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Johns Hopkins University",
        description: <>Master Of Science In Engineering Management.</>,
      },
      {
        name: "Pune Institute Of Computer Technology",
        description: <>Bachelor of Engineering in Information Technology.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "AI & Machine Learning",
        description: (
          <>Building LLM-powered workflows, agentic AI systems, and vector embedding pipelines for real-world product use cases.</>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "LLMs", icon: "openai" },
          { name: "AWS Lambda", icon: "aws" },
          { name: "Docker", icon: "docker" },
        ],
        images: [],
      },
      {
        title: "Product Management",
        description: (
          <>Defining roadmaps, writing PRDs, and working cross-functionally to ship AI products from 0 to 1.</>
        ),
        tags: [
          { name: "Agile", icon: "jira" },
          { name: "Figma", icon: "figma" },
        ],
        images: [],
      },
      {
        title: "Data & Backend Engineering",
        description: (
          <>Building data pipelines, REST APIs, and analytics systems using Python, SQL, Flask, and Tableau.</>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "SQL", icon: "postgresql" },
          { name: "Flask", icon: "flask" },
          { name: "Tableau", icon: "tableau" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
