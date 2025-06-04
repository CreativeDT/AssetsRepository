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
      pitchDeckLink:
        "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FRoute%20Optimization%2F01%20Project%20Vision%20and%20Goals%2FRouteOptimization%5Fv1%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FRoute%20Optimization%2F01%20Project%20Vision%20and%20Goals&p=true&ga=1&LOF=1",
      documentationLink:
        "https://globalcsg.sharepoint.com/:w:/r/sites/DigitalTechnologies-All/_layouts/15/Doc.aspx?sourcedoc=%7B713646FA-984B-42BE-A75A-D1F301AF2198%7D&file=Route_Optimization_HLD_Document.docx&action=default&mobileredirect=true",
      demoVideoLink:
        "https://globalcsg-my.sharepoint.com/personal/renuka_gaddam_global-csg_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Frenuka%5Fgaddam%5Fglobal%2Dcsg%5Fcom%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FScreen%20Recording%202025%2D05%2D29%20192527%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E75af0642%2D6f5e%2D47cd%2D9f03%2Db59070dd9f54",
    },
    {
      title: "LMS",
      description:
        "LMS (Learning Management System) is  software platform used to create, Nomination, manage, and track  courses or training programs.",
      icon: School,
      iconColor: "text-blue-500",
      pitchDeckLink:
        "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Fun%2C%20Learning%20and%20Operations%2FISO%20Audit%20Documents%2FPitchDeck%2FLMS%5FPitchDeck%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Fun%2C%20Learning%20and%20Operations%2FISO%20Audit%20Documents%2FPitchDeck&p=true&ga=1",
      documentationLink:
        "https://globalcsg.sharepoint.com/:w:/s/DigitalTechnologies-All/EVozzKy8DmtKhOA7WtCHPJsBvnfCLYkvPWNL1aaWSlIt4w?e=KbYa4N",
      demoVideoLink:
        "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FLMS%2FLMS%5FRecodings%2FLMS%5Fshort%5Foverview%5Frecording%5F02%2DJune%2D2025%2Emp4&ga=1&LOF=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E9a344bc3%2D900e%2D4f69%2D9ec5%2Dfb61e78924a6",
    },
    {
      title: "LLM4ICS",
      icon: Brain,
      iconColor: "text-blue-500",
      description:
        "To develop a Proof of Concept (PoC) for generating Instruction Line (IL) / Programmable Logic Control (PLC) code using Large Language Models (LLMs)",
      pitchDeckLink:
        "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FLLM4ICS%2F09%20Meetings%20%26%20Misc%2FNatural%20Language%20to%20PLC%20Instruction%20Generation%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FLLM4ICS%2F09%20Meetings%20%26%20Misc&p=true&ga=1&LOF=1",
      documentationLink:
        "https://globalcsg.sharepoint.com/:p:/s/DigitalTechnologies-All/EcXYEPGONrlNvHwDCeYOHMoBX6dDhOmEhh8sKB6_A8jwCQ?e=llrUdP",
      demoVideoLink:
        "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FLLM4ICS%2FDemo%20Recording%2FLLM4ICS%201st%20version%20demo%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ef54953b9%2Df5b1%2D4e6e%2D82ce%2D6f4a0936ed9d",
    },
    {
      title: "P&ID",
      description:
        "To develop a solution that can help detect the piping and instrumentation symbols from the diagram using computer vision. The goal is to generate an excel sheet that will act as a starter for creation of MTO sheet which eventually leads to reducing manual efforts from an engineer. ",
      icon: FileSearch,
      iconColor: "text-blue-500",
      pitchDeckLink:
        "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FP%26ID%20%2D%20Piping%20and%20Instrumentation%20Diagram%2F09%20Meetings%20and%20Misc%2FSymbol%20Detection%20PID%20%2D%20Presentation%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FP%26ID%20%2D%20Piping%20and%20Instrumentation%20Diagram%2F09%20Meetings%20and%20Misc&p=true&ga=1&LOF=1",
      documentationLink:
        "https://globalcsg.sharepoint.com/:b:/s/DigitalTechnologies-All/EYPSaqoOGBhLsFJ2TmPzB_sBsWfxB2JaE8zO7u4YxRR4Ng?e=5xpWVG",
      demoVideoLink:
        "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FP%26ID%20%2D%20Piping%20and%20Instrumentation%20Diagram%2F10%20Demo%2FSymbol%20Detection%20Demo%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E00f87d7a%2D569b%2D42e3%2D8f3f%2Dfd26c77f9230",
    },
  ];

  // Sort features alphabetically by title
  const sortedFeatures = [...features].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <section
      className="py-12 bg-gray-50"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">FEATURED</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {sortedFeatures.map((feature, index) => (
            <CategoryItem
              key={index}
              title={feature.title}
              icon={feature.icon}
              description={feature.description}
              iconColor={feature.iconColor}
              pitchDeckLink={feature.pitchDeckLink}
              documentationLink={feature.documentationLink}
              demoVideoLink={feature.demoVideoLink}
              isUpcoming={feature.isUpcoming}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
