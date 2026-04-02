import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Database, Smartphone, Palette } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Frontend Development',
      description: 'Building high-performance, responsive user interfaces using React.js and modern libraries, focusing on seamless user experience and optimized rendering.',
      icon: <Layout className="h-10 w-10 text-primary-600 dark:text-primary-400" />,
    },
    {
      title: 'Backend Development',
      description: 'Developing scalable backend systems using Django and REST APIs, with focus on performance optimization, secure authentication, and efficient data handling.',
      icon: <Server className="h-10 w-10 text-primary-600 dark:text-primary-400" />,
    },
    {
      title: 'Full Stack Development',
      description: 'Delivering end-to-end web applications including SaaS platforms and eCommerce systems, from system design to deployment using modern technologies.',
      icon: <Code className="h-10 w-10 text-primary-600 dark:text-primary-400" />,
    },
    {
      title: 'Database Design & Optimization',
      description: 'Designing efficient database architectures using PostgreSQL and MySQL, with query optimization to improve performance and scalability.',
      icon: <Database className="h-10 w-10 text-primary-600 dark:text-primary-400" />,
    },
    {
      title: 'Performance & Optimization',
      description: 'Improving application performance through code optimization, lazy loading, and efficient API handling to deliver faster and scalable systems.',
      icon: <Smartphone className="h-10 w-10 text-primary-600 dark:text-primary-400" />,
    },
    {
      title: 'Deployment & DevOps',
      description: 'Containerizing applications using Docker and implementing CI/CD pipelines to streamline deployment and reduce release time.',
      icon: <Database className="h-10 w-10 text-primary-600 dark:text-primary-400" />,
    }
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
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Services I Offer</h2>
          <p className="section-subtitle mx-auto">
            I provide a range of web development services to help businesses and individuals
            establish a strong online presence.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="card p-8 flex flex-col items-center text-center"
              variants={item}
            >
              <div className="mb-5 p-3 bg-primary-50 dark:bg-gray-700 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;