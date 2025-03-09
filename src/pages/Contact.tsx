import React, { useState } from "react";
import { Phone, Mail, ExternalLink, Linkedin } from "lucide-react";

const Contact = () => {
  const [activeTab, setActiveTab] = useState("Phone");

  const tabs = [
    {
      name: "Phone",
      icon: <Phone className="w-8 h-8" />,
      content: "+91 7869556979",
      link: "tel:+917869556979",
    },
    {
      name: "Email",
      icon: <Mail className="w-8 h-8" />,
      content: "abhirajsakargaye@gmail.com",
      link: "mailto:abhirajsakargaye@gmail.com",
    },
    {
      name: "Portfolio",
      icon: <ExternalLink className="w-8 h-8" />,
      content: "View on Notion",
      link: "https://abhirajsakargaye.notion.site/Product-Portfolio-3b86961b1b624b7eb55eab6359554a87",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-8 h-8" />,
      content: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/abhiraj-",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h1>
      <p className="text-gray-600 mb-8">
        I'm always open to discussing product-related opportunities.
      </p>

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex flex-col items-center justify-center w-full h-32 p-4 rounded-lg transition-colors text-gray-600 bg-gray-100 hover:bg-blue-100`}
          >
            {tab.icon}
            <span className="mt-2 font-medium">{tab.name}</span>
          </button>
        ))}
      </div>

      <div className="p-8 bg-gray-50 rounded-lg shadow-md text-center">
        {tabs.map(
          (tab) =>
            activeTab === tab.name && (
              <div key={tab.name}>
                {tab.link ? (
                  <a
                    href={tab.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-blue-600 hover:underline"
                  >
                    {tab.content}
                  </a>
                ) : (
                  <p className="text-xl font-semibold text-gray-800">
                    {tab.content}
                  </p>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Contact;
