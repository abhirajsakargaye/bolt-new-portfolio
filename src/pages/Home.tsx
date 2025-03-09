import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const tools = [
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Notion",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg",
    },
    {
      name: "Jira",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    },
    {
      name: "Framer",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
    },
    {
      name: "Webflow",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webflow/webflow-original.svg",
    },
    {
      name: "Mixpanel",
      icon: "https://cdn.brandfetch.io/idr_rhI2FS/theme/dark/id2z2mYeIM.svg",
    },
  ];
  const skills = [
    "Project Management",
    "PDLC & Sprint Planning",
    "Product Roadmapping",
    "User Research",
    "User Personas",
    "Market Research",
    "Competitor Analysis",
    "Go-To-Market (GTM) Strategy",
    "Feature Prioritisation",
    "Agile Methodologies & Scrum",
    "Wireframing & Prototyping",
    "UI/UX Designing",
    "Defining Metrics & KPIs",
    "Data Analytics & Visualisation",
    "SQL",
    "Stakeholder Management",
  ];
  const featuredProjects = [
    {
      title: "ROI Calculator",
      description:
        "Conducted market research on 5+ competitors, crafted Figma wireframes, and defined 3+ success metrics, leading to a clear PRD and a robust Go-To-Market strategy.",
      image:
        "https://images.pexels.com/photos/7651559/pexels-photo-7651559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Product Strategy", "GTM Strategies", "Metrics"],
      notionLink:
        "https://abhirajsakargaye.notion.site/Qoruz-ROI-Calculator-Product-1f969ae584d44dba845c8e7681cdb304",
    },
    {
      title: "New Feature for Wizom App",
      description:
        "Analyzed 7+ competitors, identified 3 high-impact features, developed a prioritization framework, and defined 4 success metrics, driving data-informed product decisions.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      tags: ["Product Strategy", "prioritization", "Metrics"],
      notionLink:
        "https://abhirajsakargaye.notion.site/Wizdom-App-Internship-Assignment-214863a7440640dcaa3ead08025946d8",
    },
    {
      title: "Lead Finder Tool",
      description:
        "Planned a highly intuitive and easy-to-use Lead Finder tool to be incorporated inside ReachInbox ecosystem",
      image: "/email.avif",
      tags: ["PRD", "GTM Strategies", "Marketing"],
      notionLink:
        "https://abhirajsakargaye.notion.site/Lead-Finder-Tool-ReachInbox-4c3c283fd587431195ba029689179be3",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hi, I'm Abhiraj Sakargaye
        </h1>
        <h2 className="text-2xl text-gray-700 mb-6">Product Explorer</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-justify">
          👋 Hey! I&apos;m Abhiraj, a Product Explorer with a passion for
          turning ideas into impactful products. I&apos;ve gained hands-on
          experience in D2C, Web3, and service-based startups, wearing many
          hats—from planning and executing product sprints to wireframing and
          managing stakeholders.
          <br />
          <span className="block mt-4">
            🤖 Recently, I&apos;ve been exploring how AI tools can supercharge
            workflows, automating tasks and offering data-driven insights to
            work smarter. Like this website which I designed and developed using
            bolt.new and edited using chatgpt.
          </span>
          <br />
          <span className="block mt-1">
            🛠️ My toolkit includes Figma, Notion, Jira, and no-code/low-code
            platforms, but my real strength lies in adapting quickly, learning
            eagerly, and building products people truly enjoy.
          </span>
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Projects
            <ArrowRight className="ml-2" size={20} />
          </Link>

          <Link
            to="https://www.linkedin.com/in/abhiraj-"
            className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg transition-colors"
          >
            Connect on LinkedIn
          </Link>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="mb-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.notionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  View Details <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            See More Projects
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Skills
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className="mb-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Tools I Use
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
          {tools.map((tool) => (
            <div key={tool.name} className="flex flex-col items-center">
              <img src={tool.icon} alt={tool.name} className="w-12 h-12 mb-2" />
              <p className="text-gray-600">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Let's Work Together
        </h2>
        <p className="text-gray-600 mb-6">
          I'm always open to discussing product related opportunities.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="tel:+917869556979"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Call Me
          </a>
          <a
            href="mailto:abhirajsakargaye@gmail.com"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Email Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
