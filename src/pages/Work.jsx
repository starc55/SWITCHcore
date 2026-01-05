import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import "@/styles/work.css";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    link: "#",
    image: "https://pixel77.com/wp-content/uploads/2024/06/ecommerce-website-designs-2-1024x768.webp",
  },
  {
    id: 2,
    title: "Corporate Branding",
    category: "Branding",
    link: "#",
    image: "https://excelsiorlevel.com/wp-content/uploads/2021/07/brand-identity-logo-explained1.jpg",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    category: "Mobile App",
    link: "#",
    image: "https://s3-alpha.figma.com/hub/file/3881404495/444efcbe-82e7-4d4c-a1dd-c9c689067349-cover.png",
  },
  {
    id: 4,
    title: "Digital Marketing Campaign",
    category: "Marketing",
    link: "#",
    image: "https://www.investopedia.com/thmb/CHEeSQHPK9MJ6TPFZKcFLTa5eqc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SMM_Final_4188900-b14da77d5eee49019768a7b839a19efb.jpg",
  },
  {
    id: 5,
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    link: "#",
    image: "https://www.bootstrapdash.com/blog/wp-content/uploads/2025/01/staradmin2.jpg",
  },
  {
    id: 6,
    title: "Online Education Portal",
    category: "Web Development",
    link: "#",
    image: "https://cdn.dribbble.com/userupload/34352072/file/original-a7c5481373a222720231036490818c06.jpg?format=webp",
  },
  {
    id: 7,
    title: "Restaurant Website",
    category: "Web Design",
    link: "#",
    image: "https://w3-lab.com/wp-content/uploads/2019/09/Screenshot_4.jpg",
  },
  {
    id: 8,
    title: "Fitness Tracker App",
    category: "Mobile App",
    link: "#",
    image: "https://cdn.dribbble.com/userupload/13798783/file/original-d9494398aa951c122ccb3e8aa562689a.png?resize=752x&vertical=center",
  },
];

const Work = () => {
  return (
    <section className="work-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <SectionTitle title="work.title" />
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.link}
            className={`project-card card-height-${(index % 3) + 1}`}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="project-image">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-img"
              />
            </div>

            <motion.div className="project-overlay">
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="overlay-content"
              >
                <h3>{project.title}</h3>
                <p>{project.category}</p>
                <span className="view-link">Ko'proq ko'rish →</span>
              </motion.div>
            </motion.div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Work;