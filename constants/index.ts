import { RxHome, RxPerson, RxDashboard, RxClipboard, RxFileText } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },
  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
  },
  {
    name: "Stripe Payment",
    Image: "/stripe.webp",
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Socials = [
  { 
    name: "GitHub", 
    src: "/nav-icon2.svg", 
    href: "https://github.com/krishna0355/" 
  },
  { 
    name: "LinkedIn", 
    src: "/nav-icon1.svg", 
    href: "https://www.linkedin.com/in/krishnaa-agarwal" 
  },
  {
    name: "Gmail", 
    src: "/nav-icon3.svg",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=krishnakumaragarwal99@gmail.com&su=Connect%20from%20portfolio&body=Hi%20Krishna%2C%0A",
  },
];

export const Projects = [
  {
    title: "AI Powered Resume Matcher & Builder",
    text: "React, Tailwind, jsPDF, Supabase — ATS templates, keyword/semantic scoring, auth & PDF export",
    src: "/project-img1.png",
    link: "https://github.com/krishna0355/Resume-matcher",
  },
  {
    title: "Face Recognition System",
    text: "Python, Flask, NumPy, OpenCV",
    src: "/project-img2.png",
    link: "https://github.com/krishna0355/face_recognition_flask",
  },
   {
    title: "Packing Station Load Balancer",
    text: "Python, Optimization Algorithms — workload distribution across packing stations with task assignment and efficiency tracking",
    src: "/project-img4.png",
    link: "https://e1-frontend.vercel.app/",
  },
  {
    title: "Online Doctor Appointment",
    text: "MySQL, HTML/CSS/JS — booking & scheduling with DB workflows and protected uploads",
    src: "/project-img3.png",
    link: "https://your-doctor-appointment-link.com",
  },
 
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
  {
    name: "/resume",
    icon: RxFileText, 
    link: "/resume",
  },
];
