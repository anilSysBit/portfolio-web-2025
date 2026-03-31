import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const AboutMe: React.FC = () => {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Thinkmove Solutions",
      period: "2025 - 2026",
      description:
        "Led end-to-end development of a SaaS product, taking full ownership from project planning and architecture to deployment and maintenance. Managed databases, built scalable backend services, and developed responsive frontend interfaces. Collaborated cross-functionally to deliver high-performance applications, while also contributing to product management, system design, and continuous improvements.",
    },
    {
      title: "Frontend Developer",
      company: "SD TECH",
      period: "2024 - 2025",
      description:
        "Developed responsive and user-friendly web interfaces using modern frontend technologies. Built admin dashboards and eCommerce platforms, and transformed UI/UX designs into fully functional web applications. Focused on performance optimization, clean design implementation, and delivering seamless user experiences across devices.",
    },
    {
      title: "React & Django Training",
      company: "Open Source Platforms",
      period: "Self-Learning",
      description:
        "Acquired practical expertise in React and Django through structured self-learning, hands-on project development, and active engagement with open-source resources. Built and integrated frontend and backend applications, strengthening skills in full-stack development and modern web technologies.",
    },
    {
      title: "Business Modeling & Process Management",
      company: "Self-Learning",
      period: "Coursera",
      description:
        "Gained foundational knowledge in business modeling and process management concepts. Developed basic proficiency in business analysis techniques and tools such as Power BI, with an understanding of data visualization, reporting, and process optimization."
    }
  ];
  


  const education = [
    {
      degree: 'Bachelor of Information Technology',
      institution: 'Tribhuvan University',
      period: '2021 - 2025',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="anil-wagle-about.jpg" 
              alt="Anil Wagle - Web Developer" 
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 dark:text-white">About Me</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
            Full-stack web developer with hands-on experience building modern, responsive applications. Skilled in React for frontend development and Django/Laravel for backend systems, with a focus on performance, scalability, and seamless user experience.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
            I focus on building scalable, maintainable solutions with clean and efficient code, ensuring seamless user experiences. I’m committed to continuous learning and staying aligned with the latest technologies and development standards.
            </p>
            
            <a 
              href="./anil-wagle-cv.pdf"
              download="AnilWagle_CV.pdf"
              className="btn btn-primary mb-10"
              // onClick={(e) => {
              //   e.preventDefault();
              //   alert('Resume download functionality would be implemented here.');
              // }}
            >
              Download Resume
              <Download className="ml-2 h-5 w-5" />
            </a>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Work Experience</h3>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-primary-500 dark:border-primary-400 pl-4">
                    <h4 className="font-medium dark:text-white">{exp.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{exp.company} | {exp.period}</p>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary-500 dark:border-primary-400 pl-4">
                    <h4 className="font-medium dark:text-white">{edu.degree}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{edu.institution} | Completed |  {edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;