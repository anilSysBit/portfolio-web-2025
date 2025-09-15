// src/meta.ts
export const metaConfig = {
    "/": `
      <title>Anil Wagle – Web Developer</title>
      <meta name="description" content="Portfolio of Anil Wagle, web developer from Nepal specializing in React, Node.js, and SEO-friendly websites.">
      <link rel="canonical" href="https://www.anilwagle.com.np/">
  
      <!-- Open Graph -->
      <meta property="og:type" content="website">
      <meta property="og:title" content="Anil Wagle – Web Developer">
      <meta property="og:description" content="React & Node.js developer from Nepal. Explore projects, skills, and professional experience.">
      <meta property="og:url" content="https://www.anilwagle.com.np/">
      <meta property="og:image" content="https://www.anilwagle.com.np/anil-wagle-portfolio.jpg">
  
      <!-- Twitter -->
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:title" content="Anil Wagle – Web Developer">
      <meta name="twitter:description" content="Explore Anil Wagle’s web development journey, skills, and featured projects.">
      <meta name="twitter:image" content="https://www.anilwagle.com.np/anil-wagle-twitter.jpg">
  
      <!-- JSON-LD -->
      <script type="application/ld+json">${JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: "https://www.anilwagle.com.np",
        name: "Anil Wagle – Web Developer",
        author: {
          "@type": "Person",
          name: "Anil Wagle"
        }
      })}</script>
    `,
  
    "/about": `
      <title>About Me | Anil Wagle – Web Developer</title>
      <meta name="description" content="Learn more about Anil Wagle – a passionate web developer from Nepal specializing in React, Node.js, and SEO-friendly websites. Discover my journey, skills, and professional background.">
      <link rel="canonical" href="https://www.anilwagle.com.np/about">
  
      <!-- Open Graph -->
      <meta property="og:type" content="profile">
      <meta property="og:title" content="About Anil Wagle – Web Developer">
      <meta property="og:description" content="Passionate React & Node.js developer from Nepal. Learn about my journey, skills, and web development experience.">
      <meta property="og:url" content="https://www.anilwagle.com.np/about">
      <meta property="og:image" content="https://www.anilwagle.com.np/anil-wagle-portfolio.jpg">
  
      <!-- Twitter -->
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:title" content="About Anil Wagle – Web Developer">
      <meta name="twitter:description" content="Get to know Anil Wagle, React & Node.js developer from Nepal, with experience in building SEO-friendly web applications.">
      <meta name="twitter:image" content="https://www.anilwagle.com.np/anil-wagle-twitter.jpg">
  
      <!-- JSON-LD -->
      <script type="application/ld+json">${JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Anil Wagle",
        description:
          "Web developer from Nepal specializing in React, Node.js, and SEO-friendly websites.",
        url: "https://www.anilwagle.com.np/about",
        image: "https://www.anilwagle.com.np/anil-wagle-portfolio.jpg",
        jobTitle: "Software Developer",
        worksFor: { "@type": "Organization", name: "Freelance / ThinkMove Solutions" },
        sameAs: [
          "https://github.com/anilSysBit",
          "https://www.linkedin.com/in/anil-wagle-a09609224"
        ]
      })}</script>
    `,
  
    "/projects": `
      <title>Projects of Anil Wagle – Web Developer</title>
      <meta name="description" content="Explore the portfolio projects of Anil Wagle – showcasing React, Node.js, and full-stack development work from Nepal.">
      <link rel="canonical" href="https://www.anilwagle.com.np/projects">
  
      <!-- Open Graph -->
      <meta property="og:type" content="website">
      <meta property="og:title" content="Projects of Anil Wagle – Web Developer">
      <meta property="og:description" content="Discover Anil Wagle’s featured projects in web development, UI/UX, and software solutions.">
      <meta property="og:url" content="https://www.anilwagle.com.np/projects">
      <meta property="og:image" content="https://www.anilwagle.com.np/anil-wagle-projects.jpg">
  
      <!-- Twitter -->
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:title" content="Projects of Anil Wagle – Web Developer">
      <meta name="twitter:description" content="Showcasing portfolio projects by Anil Wagle, React & Node.js developer from Nepal.">
      <meta name="twitter:image" content="https://www.anilwagle.com.np/anil-wagle-projects-twitter.jpg">
  
      <!-- JSON-LD -->
      <script type="application/ld+json">${JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Projects of Anil Wagle",
        url: "https://www.anilwagle.com.np/projects",
        mainEntity: [
          {
            "@type": "Person",
            name: "Anil Wagle",
            jobTitle: "Software Developer",
            url: "https://www.anilwagle.com.np",
            sameAs: [
              "https://github.com/anilSysBit",
              "https://www.linkedin.com/in/anil-wagle-a09609224"
            ]
          }
        ]
      })}</script>
    `,
  
    "/contact": `
      <title>Contact | Anil Wagle – Web Developer</title>
      <meta name="description" content="Get in touch with Anil Wagle, web developer from Nepal. Contact me for freelance projects, collaborations, or job opportunities in React, Node.js, and SEO-friendly web applications.">
      <link rel="canonical" href="https://www.anilwagle.com.np/contact">
  
      <!-- Open Graph -->
      <meta property="og:type" content="website">
      <meta property="og:title" content="Contact Anil Wagle – Web Developer">
      <meta property="og:description" content="Reach out to Anil Wagle for web development projects, collaborations, or technical discussions.">
      <meta property="og:url" content="https://www.anilwagle.com.np/contact">
      <meta property="og:image" content="https://www.anilwagle.com.np/anil-wagle-portfolio.jpg">
  
      <!-- Twitter -->
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:title" content="Contact Anil Wagle – Web Developer">
      <meta name="twitter:description" content="Connect with Anil Wagle, React & Node.js developer from Nepal. Let’s work together on your next project.">
      <meta name="twitter:image" content="https://www.anilwagle.com.np/anil-wagle-twitter.jpg">
  
      <!-- JSON-LD -->
      <script type="application/ld+json">${JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        url: "https://www.anilwagle.com.np/contact",
        mainEntity: {
          "@type": "Person",
          name: "Anil Wagle",
          jobTitle: "Software Developer",
          url: "https://www.anilwagle.com.np",
          sameAs: [
            "https://github.com/anilSysBit",
            "https://www.linkedin.com/in/anil-wagle-a09609224"
          ],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Service",
            email: "anil.wagle808@email.com",
            availableLanguage: ["English", "Nepali"]
          }
        }
      })}</script>
    `
  }
  