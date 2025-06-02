import React from "react";
import CategoryItem from "./CategoryItem";
import { Brain, Bot, Map } from "lucide-react";
import backgroundImage from "../Assets/banner-abstract.jpg";
const FeaturedSection = () => {
  const features = [
    {
      title: "LLM4ICS",
      icon: Brain,
      iconColor: "text-blue-500",
      description:
        "To develop a Proof of Concept (PoC) for generating Instruction Line (IL) / Programmable Logic Control (PLC) code using Large Language Models (LLMs)",
    },
    {
      title: "Knowledge Bot",
      description:
        "The Knowledge Bot System provides a secure, scalable solution for real-time Q&A from unstructured documents using RAG, local LLMs, and multilingual support. It ensures data privacy on local infrastructure while enhancing user experience with translation, chat history, and contextual awareness.",
      icon: Bot,
      iconColor: "text-blue-500",
    },

    {
      title: "P&ID",
      description:
        "To develop a solution that can help detect the piping and instrumentation symbols from the diagram using computer vision. The goal is to generate an excel sheet that will act as a starter for creation of MTO sheet which eventually leads to reducing manual efforts from an engineer. ",
      icon: Bot,
      iconColor: "text-blue-500",
    },

    {
      title: "Route Optimization",
      description:
        "The Route Optimization solution offers optimized route planning along with predictions for fuel consumption and carbon emissions for fleet vehicles. ",
      icon: Map,
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
