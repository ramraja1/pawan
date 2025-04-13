/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Pawan's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Pawan Tiwari  Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Pawan Tiwari",
  logo_name: "Pawan",
  nickname: "Ram",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1_jGvGVFLFxCbZuQG92fUEtLAAnaNObPZ/view?usp=sharing",
  portfolio_repository: "https://github.com/ramraja1/pawan",
  githubProfile: "https://github.com/ramraja1",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/ramraja1",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/pawan-tiwari-922284246",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://youtube.com/c/ramraja1",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:ramtiwari7081@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "WhatsApp",
    link:
      "https://wa.me/919696734338?text=Hi%20there!%20I%20found%20your%20profile%20awesome!%20🔥",
    fontAwesomeIcon: "fa-whatsapp", // Reference: https://fontawesome.com/icons/whatsapp?style=brands
    backgroundColor: "#25D366", // WhatsApp green from https://simpleicons.org/?q=whatsapp
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/ramraja640/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using  React Native and solo android apps using echo",
        "⚡ Creating application backend in Node & Expres",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },

    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Codolio",
      iconifyClassname: "fa-solid:laptop-code",
      style: {
        color: "#4A90E2",
      },
      profileLink: "https://codolio.com/profile/ram6",
    },
    {
      siteName: "GeeksforGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#2F8D46",
      },
      profileLink: "https://www.geeksforgeeks.org/user/ramtiwaz8jh",
    },
    {
      siteName: "Coding Ninjas",
      iconifyClassname: "simple-icons:codingninjas",
      style: {
        color: "#F26F21",
      },
      profileLink:
        "https://www.naukri.com/code360/profile/88b1a09c-33a8-42de-a6e2-5770739b1a66",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/ramqx/",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Sagar Institute of Science, Technology and Engineering",
      subtitle: "B.Tech in Computer Science and Engineering",
      logo_path: "SISTec_Logo.png",
      alt_name: "SISTec",
      duration: "2022 - 2026",
      descriptions: [
        "⚡ Studying core computer science subjects such as Data Structures, Algorithms, DBMS, Operating Systems, and Computer Networks.",
        "⚡ Actively working on real-world projects using MERN Stack, AI, and Full Stack Development.",
        "⚡ Participated in various coding contests and hackathons to improve problem-solving and team collaboration skills.",
      ],
      website_link: "https://sistece.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Freelancing, Internships & Open Source",
  description:
    "As a passionate self-taught developer, I’ve worked on real-world freelance projects, contributed to open-source, and interned at a startup. My focus has been on building useful web applications using the MERN stack and exploring AI integration.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Freelancing",
      work: true,
      experiences: [
        {
          title: "Full Stack Developer (MERN)",
          company: "Self-employed",
          company_url: "",
          logo_path: "dsc_logo.png",
          duration: "Jan 2024 - Present",
          location: "Remote",
          description:
            "Worked on freelance projects including BookNest (an old book marketplace) and CodeNest (a coding contest platform for students and teachers). Implemented features like authentication, dashboards, contest creation, cloud integration, and mobile responsiveness.",
          color: "#0C9D58",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Development Intern",
          company: "Leopard Innovation Technology",
          company_url: "",
          logo_path: "mozilla_logo.png",
          duration: "Feb 2025 - Present",
          location: "Work From Home",
          description:
            "Contributed to frontend development using React.js, Tailwind CSS, and API integration. Focused on building reusable components, improving UI consistency, and collaborating with the core team for delivery deadlines.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Open Source",
      experiences: [
        {
          title: "Contributor",
          company: "GitHub Projects",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "2024 - Present",
          location: "Remote",
          description:
            "Actively contribute to open-source projects by fixing bugs, adding features, and enhancing documentation. Skilled with Git workflows, pull requests, and collaborative development.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have built several full-stack web applications using the MERN stack, focusing on real-world use cases like e-commerce, education platforms, and creative social apps. My projects showcase my skills in API integration, authentication, cloud deployment, and interactive UI design.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "mern-codenest-architecture",
      name: "CodeNest Architecture and MERN Stack Best Practices",
      createdAt: "2024-03-15T00:00:00Z",
      description:
        "In-depth article on how CodeNest was structured using MERN stack",
      url: "https://yourblogsite.com/codenest-mern-architecture",
    },
    {
      id: "seo-performance-optimization",
      name: "SEO & Performance Optimization in React Projects",
      createdAt: "2024-04-02T00:00:00Z",
      description:
        "Technical guide to optimizing MERN apps for SEO and load speed",
      url: "https://yourblogsite.com/seo-performance-react",
    },
    {
      id: "roasthub-animated-ui",
      name: "Creating Realistic Animation Effects in RoastHub",
      createdAt: "2024-04-10T00:00:00Z",
      description:
        "Tutorial on implementing lifelike UI animations using Framer Motion",
      url: "https://yourblogsite.com/roasthub-ui-animations",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "pawanpng.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Problem Solving, Full Stack, React, and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "#",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Ratibad, Bhopal, Madhya Pradesh, India 462044",
    locality: "Bhopal",
    country: "India",
    region: "Madhya Pradesh",
    postalCode: "462044",
    streetAddress: "Ratibad",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
