import { StaticImageData } from "next/image";

import html from "@/public/html.png";
import css from "@/public/css.png";
import javascript from "@/public/js.png";
import typescript from "@/public/ts.png";
import reactjs from "@/public/reactjs.png";
import nextjs from "@/public/nextjs.png";
import tailwind from "@/public/tailwind.png";
import sass from "@/public/SASS.png";
import mongodb from "@/public/mongodb.png";
import sanity from "@/public/Sanity.svg";
import vscode from "@/public/vscode.png";
import github from "@/public/github.png";
import figma from "@/public/figma.png";
import xd from "@/public/xd.png";
import travelBooking from "@/public/travel-booking.png";
import cakeStore from "@/public/CakeStore.png";
import LOMS from "@/public/LOMS.png";
import { Github, Globe, Instagram, Linkedin, Mail } from "lucide-react";

export const aboutInfor = {
  name: "Lưu Hùng",
  nickname: "kendy_luu",
  location: "Ho Chi Minh City",
  shortIntro:
    "  I am currently studying at Ton Duc Thang University majoring in software engineering and my career orientation is a front-end developer and UI/UX Designer. I love creating and designing simple yet beautiful websites with great user experiences. I'm interested in the entire UI stack. Loves trying new things and building great projects. I believe that everything is Art when you put your consciousness into it. You can connect with me through social links.",
  Intro:
    "  I am currently studying at Ton Duc Thang University majoring in software engineering and my career orientation is a front-end developer and UI/UX Designer. I love creating and designing simple yet beautiful websites with great user experiences. I'm interested in the entire UI stack. Loves trying new things and building great projects. I believe that everything is Art when you put your consciousness into it. You can connect with me through social links.",
};

export const skillItem: { name: string; img: string | StaticImageData }[] = [
  { name: "HTML", img: html },
  { name: "CSS", img: css },
  { name: "JavaScript", img: javascript },
  { name: "TypeScript", img: typescript },
  { name: "ReactJS", img: reactjs },
  { name: "NextJS", img: nextjs },
  { name: "TailwindCSS", img: tailwind },
  { name: "SASS", img: sass },
  { name: "MongoDB", img: mongodb },
  { name: "Sanity", img: sanity },
  { name: "Visual Studio Code", img: vscode },
  { name: "Github", img: github },
  { name: "Figma", img: figma },
  { name: "Adobe XD", img: xd },
];

export const careerHistory = [
  {
    logoUrl: "https://placehold.co/64x64/242629/FFFFFF?text=C1",
    title: "Front-end Developer",
    company: "Tech Solutions Inc.",
    startDate: "Sep 2023",
    endDate: "Present",
    duration: "1 year",
    type: "Full-time",
  },
  {
    logoUrl: "https://placehold.co/64x64/242629/FFFFFF?text=C2",
    title: "UI/UX Design Intern",
    company: "Creative Minds Agency",
    startDate: "Jan 2023",
    endDate: "Aug 2023",
    duration: "8 mos",
    type: "Internship",
  },
];

export const projects = [
  {
    slug: "travel-booking-app",
    imageUrl: travelBooking,
    title: "Travel Booking App",
    description: "A modern web app for booking flights and hotels.",
    techIcons: [reactjs, tailwind, javascript],
    longDescription:
      "This is a detailed description of the Travel Booking App. It was built with a focus on user experience, providing a seamless interface for searching, comparing, and booking travel options. The project involved integrating with third-party APIs for real-time data.",
    sourceCodeUrl: "https://github.com",
    liveDemoUrl: "https://example.com",
  },
  {
    slug: "e-commerce-cake-store",
    imageUrl: cakeStore,
    title: "E-commerce Cake Store",
    description: "Online platform for a local bakery.",
    techIcons: [figma],
    longDescription:
      "This is a detailed description of the E-commerce Cake Store. It was designed to provide a seamless shopping experience for customers looking to order cakes online. The project involved creating a user-friendly interface and integrating with payment gateways.",
    sourceCodeUrl: "https://github.com",
    liveDemoUrl: "https://example.com",
  },
  {
    slug: "loms-system",
    imageUrl: LOMS,
    title: "LOMS System",
    description: "Logistics and Order Management System.",
    techIcons: [nextjs, mongodb, tailwind, typescript],
    longDescription:
      "This is a detailed description of the LOMS System. It was designed to streamline logistics and order management processes for businesses. The project involved building a robust backend with Next.js and MongoDB, as well as a responsive frontend with Tailwind CSS.",
    sourceCodeUrl: "https://github.com",
    liveDemoUrl: "https://example.com",
  },
];

export const contactLinks = {
  gmail: {
    title: "Stay in Touch",
    description: "Reach out via email for inquiries or collaborations.",
    buttonText: "Go to Gmail",
    link: "mailto:example@gmail.com",
    Icon: Mail,
    backgroundStyle: "bg-red-500",
  },
  instagram: {
    title: "Follow My Journey",
    description: "Follow my creative journey.",
    buttonText: "Go to Instagram",
    link: "https://instagram.com",
    Icon: Instagram,
    backgroundStyle: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  linkedin: {
    title: "Let's Connect",
    description: "Connect with me professionally.",
    buttonText: "Go to Linkedin",
    link: "https://linkedin.com",
    Icon: Linkedin,
    backgroundStyle: "bg-blue-600",
  },
  github: {
    title: "Explore the Code",
    description: "Explore my open-source work.",
    buttonText: "Go to Github",
    link: "https://github.com",
    Icon: Github,
    backgroundStyle: "bg-gray-800",
  },
  behance: {
    title: "See My Designs",
    description: "Check out my design portfolio.",
    buttonText: "Go to Behance",
    link: "https://behance.net",
    Icon: Globe,
    backgroundStyle: "bg-blue-800",
  },
};
