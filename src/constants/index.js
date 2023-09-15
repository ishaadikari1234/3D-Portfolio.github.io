import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  figma,
  audio,
  street,
  threejs,
  mood,
  fake,
  soft,
  technical,
  technical2,
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
    title: "Full Stack Developer",
    icon: mobile,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Technical Skills",
    company_name: "Languages",
    icon: technical,
    iconBg: "#383E56",
    points: [
      "C/C++",
      "Python",
      "Java",
      "SQL",
      "PHP",
      "JavaScript"
    ],
  },
  {
    title: "Technical Skills",
    company_name: "Tools & Framework",
    icon: technical2,
    iconBg: "#E6DEDD",
    points: [
      "Tableau",
      "Flask",
      "React-three Fiber",
      "Three.js",
      "TailwindCSS",
      "OpenCV",
      "Tensorflow"
    ],
  },
  {
    title: "Soft Skills",
    company_name: "",
    icon: soft,
    iconBg: "#383E56",
    points: [
      "Leadership and teamwork",
      "Problem-solving and critical thinking",
      "Adaptability and flexibility",
      "Time management and organization",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Isha proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Isha does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Isha optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Smart Street Light",
    description:
      "This project combines Internet of Things (IoT), sensors, and smart analytics to create an intelligent lighting network that adapts to real-time conditions and provides numerous benefits to cities, communities, and the environment.",
    tags: [
      {
        name: "Arduino UNO",
        color: "blue-text-gradient",
      },
      {
        name: "IR Sensor",
        color: "green-text-gradient",
      },
      {
        name: "LDR Sensor",
        color: "pink-text-gradient",
      },
    ],
    image: street,
  },
  {
    name: "Fake News Detection",
    description:
      "WThe Fake News Detection project utilizes machine learning algorithms and natural language processing techniques to accurately identify and combat the spread of misinformation, enabling users to make informed decisions and safeguarding the integrity of information in the digital age",
    tags: [
      {
        name: "rPassiveAggressiveClassifier",
        color: "blue-text-gradient",
      },
      {
        name: "Sklearn",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: fake,
  },
  {
    name: "AudioHive",
    description:
      "AudioHive is a music streaming platform that offers a wide range of songs, albums, and playlists, allowing users to explore and discover music, create personalized playlists, and enjoy a seamless listening experience similar to Spotify.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: audio,
  },
  {
    name: "Mood Musify",
    description:
      "Mood Musify is an innovative music system that uses artificial intelligence to analyze users' emotions and curate personalized playlists based on their mood, providing a tailored listening experience that matches their current emotional state.",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: mood,
  },
];

export { services, technologies, experiences, testimonials, projects };