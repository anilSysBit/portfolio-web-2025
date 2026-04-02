import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const AboutMe: React.FC = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Thinkmove Solutions",
      period: "2025 - 2026",
      description:
      "Built and delivered full-stack SaaS applications using React.js and Django, supporting 50+ users and 5000+ product records. Developed 150+ RESTful APIs, optimized backend performance reducing response time by 30–40%, and implemented CI/CD pipelines reducing deployment time from 30 minutes to 5 minutes. Containerized applications using Docker and deployed on cloud infrastructure while managing the complete product lifecycle.",
    },
    {
      title: "Frontend Developer",
      company: "SD TECH",
      period: "2024 - 2025",
      description:
        "Developed 50+ responsive UI components and pages for eCommerce platforms including admin, seller, and customer panels. Implemented complete shopping workflows (browse → cart → checkout → payment), integrated payment gateways, and optimized performance using lazy loading and code splitting. Improved UI/UX consistency and conducted testing to ensure reliability across devices.",
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
        "Gained foundational knowledge in business modeling and process management concepts. Developed basic proficiency in business analysis techniques and tools such as Power BI, with an understanding of data visualization, reporting, and process optimization.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Information Technology",
      institution: "Tribhuvan University",
      period: "2021 - 2025",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
            <h2 className="text-3xl font-bold mb-6 dark:text-white">
              About Me
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Full Stack Software Developer with nearly 2 years of experience
              building scalable SaaS and eCommerce systems, improving
              application performance by up to 40% and delivering end-to-end
              solutions for real-world business operations.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Strong experience in backend architecture, database design, and
              frontend optimization, with a product-oriented mindset and
              hands-on involvement across the full development lifecycle, from
              requirement analysis to deployment.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Focused on building efficient, maintainable systems and
              continuously improving performance, scalability, and user
              experience in fast-paced environments.
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
              <h3 className="text-xl font-semibold mb-4 dark:text-white">
                Work Experience
              </h3>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-primary-500 dark:border-primary-400 pl-4"
                  >
                    <h4 className="font-medium dark:text-white">{exp.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {exp.company} | {exp.period}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-primary-500 dark:border-primary-400 pl-4"
                  >
                    <h4 className="font-medium dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {edu.institution} | Completed | {edu.period}
                    </p>
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
