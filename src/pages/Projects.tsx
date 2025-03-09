import React from "react";
import { ExternalLink } from "lucide-react";

const projects = [
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

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
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
                View Details <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
