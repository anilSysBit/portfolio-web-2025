import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import CTA from '../components/CTA';
const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Audit Inventory Management System',
      description: 'Developed a full-stack SaaS-based inventory and audit management system supporting product tracking, stock control, and reporting workflows. Built scalable backend services with Django and designed responsive frontend interfaces using TypeScript and MUI, enabling efficient management of inventory operations and real-time data handling.',
      image: '/projects/ims-product.png',
      tags: ['Typescript', 'Django', 'MySQL', 'MUI'],
      liveUrl: '',
      githubUrl: 'https://github.com/anilSysBit',
    },
    {
      title: 'Jagatpur E-Bazar',
      description: 'Built a multi-role eCommerce platform featuring user-facing website, admin dashboard, and seller panel. Implemented complete shopping workflows including product browsing, cart, checkout, and order management, with responsive UI and seamless frontend-backend integration for real-time data updates.',
      image: '/projects/jagatpuradmin.jpg',
      tags: ['React.js', 'Admin Panel', 'Seller Panel', 'User Website'],
      liveUrl: 'https://next-jeb.vercel.app/',
      githubUrl: 'https://github.com/anilSysBit',
    },
    {
      title: 'Drone Selling Website',
      description: 'Developed a responsive eCommerce website for drone products using React.js, converting UI/UX designs into a fully functional web application. Implemented product listings, user-friendly navigation, and optimized frontend performance for a seamless shopping experience.',
      image: '/projects/paras/drone.png',
      tags: ['React.js', 'Redux', 'REST'],
      liveUrl:"https://drone-website-five.vercel.app/",
    },
    {
      title: 'Football Management System',
      description: 'Developed a full-stack sports management platform for organizing football events, teams, and user interactions. Built robust backend services using Django and REST APIs, and implemented a responsive React.js frontend for real-time data updates, team management, and event tracking.',
      image: '/projects/sportstable.png',
      tags: ['Django', 'React.js', 'REST API'],
      liveUrl: 'https://gpn-sports.vercel.app/',
      githubUrl: 'https://github.com/anilSysBit',
    },
    {
      title: "Thinkmove Solutions Company Website",
      description: "Developed a custom WordPress theme using PHP to deliver a scalable and high-performance company website with optimized structure, responsive design, and improved user experience.",
      image: "/projects/thinkmove/thinkmove.png",
      tags: ["PHP", "WordPress"],
      liveUrl: "https://thinkmovesolutions.com/",
    },
    {
      title: "Divestroke Swimming",
      description: "Built a custom eCommerce shop page for a swimming institute, enabling seamless product browsing, ordering, and improved user engagement through responsive and user-friendly design.",
      image: "/projects/thinkmove/divestroke.png",
      tags: ["PHP", "WordPress"],
      liveUrl: "https://divestrokeswim.com/",
    },
    {
      title: "Plan A Trek",
      description: "Developed a fully customized WordPress theme for a travel platform, focusing on performance, clean UI, and structured content presentation for better user navigation.",
      image: "/projects/thinkmove/planatrek.png",
      tags: ["PHP", "WordPress"],
      liveUrl: "https://www.planatrek.com/",
    },
    {
      title: "Uniglobe College",
      description: "Enhanced and redesigned key features of the college website, improving usability, content flow, and overall user experience through custom WordPress development.",
      image: "/projects/thinkmove/uniglobe.png",
      tags: ["PHP", "WordPress"],
      liveUrl: "https://uniglobe.edu.np/",
    },
    {
      title: "The Vision Expert",
      description: "Developed a complete website for an eye clinic using WordPress and Elementor, including custom PHP features to support business-specific requirements and improve functionality.",
      image: "/projects/thinkmove/visionexpert.png",
      tags: ["PHP", "WordPress"],
      liveUrl: "https://thevisionexpert.com/",
    },
    {
      title: "Bank Rate Nepal",
      description: "Built a WordPress-based platform for publishing financial news and banking updates, ensuring structured content delivery, performance optimization, and easy content management.",
      image: "/projects/thinkmove/bankrate.png",
      tags: ["PHP", "WordPress"],
      liveUrl: "https://bankratenepal.com/",
    },
    {
      title: 'Meal Planner',
      description: 'A website that recommends personalized meals based on BMI, user preferences, and daily routines.',
      image: '/projects/mealbmi.png',
      tags: ['Django', 'Full Stack', 'Meal Planning'],
      liveUrl: 'http://localhost:8000/',
      githubUrl: 'https://github.com/anilSysBit',
    },
    {
      title: 'Jagatpur Blood Management System',
      description: 'A website for managing blood delivery, handling blood requests, and user management.',
      image: '/projects/bloodadmin.png',
      tags: ['React.js', 'Admin Panel'],
      liveUrl: 'bms.jagatpurebazar.com',
      githubUrl: 'https://github.com/anilSysBit',
    },
    {
      title: 'Laravel Blood Management Project',
      description: 'A website for handling blood delivery data with Laravel for backend and user management.',
      image: '/projects/laravelblood.png',
      tags: ['Laravel', 'Backend', 'Blood Management'],
      liveUrl: 'http://localhost:5173',
      githubUrl: 'https://github.com/anilSysBit',
    },
    {
      title: 'Pinterest Clone',
      description: 'A Pinterest-like clone with React.js featuring image sharing and user interactions.',
      image: '/projects/pinterestclone.png',
      tags: ['React.js', 'UI/UX'],
      liveUrl: 'https://pinterestwebx.vercel.app/',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Daraz Clone',
      description: 'A Daraz-like e-commerce UI built with React.js for product listing and shopping experience.',
      image: '/projects/darazclone.png',
      tags: ['React.js', 'E-commerce'],
      liveUrl: 'https://darazclone.vercel.app/',
      githubUrl: 'https://github.com/anilSysBit/',
    },
    {
      title: 'Ghost House 3D Website',
      description: 'A 3D immersive website using Three.js for an interactive spooky house experience.',
      image: '/projects/ghosthouse.png',
      tags: ['Three.js', '3D Web', 'Interactive UI'],
      liveUrl: 'https://anilsysbit.github.io/ghostHouse.github.io/',
      githubUrl: 'https://github.com/anilSysBit',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills.',
      image: 'projects/portfolio.png',
      tags: ['React.js', 'Framer Motion', 'Tailwind CSS'],
      liveUrl: 'https://anilwagle.com.np',
      githubUrl: 'https://github.com/anilSysBit',
    },
    {
      title: 'SportsPasal UI',
      description: 'A UI design for a sports product marketplace built using React.js.',
      image: 'projects/sportpasal.png',
      tags: ['React.js', 'UI Design'],
      liveUrl: 'https://sports-pasal.vercel.app/',
      githubUrl: 'https://github.com/anilSysBit',
    },
    {
      title: 'Hotel Booking UI',
      description: 'A hotel booking UI built with React.js as a practice project.',
      image: '/projects/hourlodge.png',
      tags: ['React.js', 'UI Design'],
      liveUrl: 'https://hourlodge.vercel.app/',
      githubUrl: 'https://github.com',
    },
  ];
  
  
  

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <>
      <div className="pt-20">
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">My Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my web development work, including personal projects and client websites.
          </p>
        </div>
      </div>
      
      <section className="py-20">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={item}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      <CTA />
    </div>
    </>

  );
};

export default Projects;