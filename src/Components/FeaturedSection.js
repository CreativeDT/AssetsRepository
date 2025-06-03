import React from "react";
import CategoryItem from "./CategoryItem";
import { Brain, Bot, Map, FileSearch, Route, School } from "lucide-react";
import backgroundImage from "../Assets/banner-abstract.jpg";
const FeaturedSection = () => {
  const features = [
    {
      title: "Route Optimization",
      description:
        "The Route Optimization solution offers optimized route planning along with predictions for fuel consumption and carbon emissions for fleet vehicles. ",
      icon: Route,
      iconColor: "text-blue-500",
    },
    {
      title: "LMS",
      description:
        "LMS (Learning Management System) is  software platform used to create, Nomination, manage, and track  courses or training programs.",
      //  viewLink: 'https://globalcsg.sharepoint.com/sites/DT-EngineeringTeam/_layouts/15/embed.aspx?UniqueId=e48ff12b-a202-4f22-a3e4-334a62b3e392&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create',
      icon: School,
      iconColor: "text-blue-500",
    },
    {
      title: "LLM4ICS",
      icon: Brain,
      iconColor: "text-blue-500",
      description:
        "To develop a Proof of Concept (PoC) for generating Instruction Line (IL) / Programmable Logic Control (PLC) code using Large Language Models (LLMs)",
    },
    {
      title: "P&ID",
      description:
        "To develop a solution that can help detect the piping and instrumentation symbols from the diagram using computer vision. The goal is to generate an excel sheet that will act as a starter for creation of MTO sheet which eventually leads to reducing manual efforts from an engineer. ",
      icon: FileSearch,
      iconColor: "text-blue-500",
    },
  ];

  return (
    <section
      className="py-12 bg-gray-50"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">FEATURED</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <CategoryItem
              key={index}
              title={feature.title}
              icon={feature.icon}
              description={feature.description}
              iconColor={feature.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
