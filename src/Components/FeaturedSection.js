// import React from "react";
// import CategoryItem from "./CategoryItem";
// import { Brain, Bot, Map, FileSearch, Route, School } from "lucide-react";
// import backgroundImage from "../Assets/banner-abstract.jpg";
// const FeaturedSection = () => {
//   const features = [
//     {
//       title: "Route Optimization",
//       description:
//         "The Route Optimization solution offers optimized route planning along with predictions for fuel consumption and carbon emissions for fleet vehicles. ",
//       icon: Route,
//       iconColor: "text-blue-500",
//     },
//     {
//       title: "LMS",
//       description:
//         "LMS (Learning Management System) is  software platform used to create, Nomination, manage, and track  courses or training programs.",
//       //  viewLink: 'https://globalcsg.sharepoint.com/sites/DT-EngineeringTeam/_layouts/15/embed.aspx?UniqueId=e48ff12b-a202-4f22-a3e4-334a62b3e392&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create',
//       icon: School,
//       iconColor: "text-blue-500",
//     },
//     {
//       title: "LLM4ICS",
//       icon: Brain,
//       iconColor: "text-blue-500",
//       description:
//         "To develop a Proof of Concept (PoC) for generating Instruction Line (IL) / Programmable Logic Control (PLC) code using Large Language Models (LLMs)",
//     },

//     {
//       title: "P&ID",
//       description:
//         "To develop a solution that can help detect the piping and instrumentation symbols from the diagram using computer vision. The goal is to generate an excel sheet that will act as a starter for creation of MTO sheet which eventually leads to reducing manual efforts from an engineer. ",
//       icon: FileSearch,
//       iconColor: "text-blue-500",
//     },
//   ];

//   return (
//     <section
//       className="py-12 bg-gray-50"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-gray-900 mb-8">FEATURED</h2>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           {features.map((feature, index) => (
//             <CategoryItem
//               key={index}
//               title={feature.title}
//               icon={feature.icon}
//               description={feature.description}
//               iconColor={feature.iconColor}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedSection;

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
        "https://globalcsg.sharepoint.com/:p:/r/sites/DigitalTechnologies-All/_layouts/15/Doc.aspx?sourcedoc=%7B18501E7C-9A1C-4516-A1AB-C0C01B96F20B%7D&file=RouteOptimization.pptx&action=edit&mobileredirect=true",
      documentationLink:
        "https://globalcsg.sharepoint.com/:w:/r/sites/DigitalTechnologies-All/_layouts/15/Doc.aspx?sourcedoc=%7BED4954E2-A365-4CDC-8780-F370716D5056%7D&file=Technical_Design_Document_Template.docx&action=default&mobileredirect=true",
      demoVideoLink:
        "https://globalcsg-my.sharepoint.com/personal/renuka_gaddam_global-csg_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Frenuka%5Fgaddam%5Fglobal%2Dcsg%5Fcom%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FScreen%20Recording%202025%2D05%2D29%20192527%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E75af0642%2D6f5e%2D47cd%2D9f03%2Db59070dd9f54",
    },
    {
      title: "LMS",
      description:
        "LMS (Learning Management System) is  software platform used to create, Nomination, manage, and track  courses or training programs.",
      //  viewLink: 'https://globalcsg.sharepoint.com/sites/DT-EngineeringTeam/_layouts/15/embed.aspx?UniqueId=e48ff12b-a202-4f22-a3e4-334a62b3e392&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create',
      icon: School,
      iconColor: "text-blue-500",
      pitchDeckLink:
        "https://globalcsg.sharepoint.com/:p:/s/DigitalTechnologies-All/EVFS8kqdmhFBiXjRcXzKoKAB33fNcqOw6AfZo-71fKDiBQ?e=hSR0dF",
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
        "https://globalcsg.sharepoint.com/:p:/s/DigitalTechnologies-All/EZkw7zLsG-NHkHzOOo0EbkIBIcbBFVuvCQbQ0A6m5X-Bsg?e=kawbX6",
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
        "https://globalcsg.sharepoint.com/:p:/s/DigitalTechnologies-All/EY1_xQA02vVImCLeQsl_ehwBTJn_ywC5rUDhtXmzUlRnJg?e=r0qWYV",
      documentationLink:
        "https://globalcsg.sharepoint.com/:b:/s/DigitalTechnologies-All/EYPSaqoOGBhLsFJ2TmPzB_sBsWfxB2JaE8zO7u4YxRR4Ng?e=5xpWVG",
      demoVideoLink:
        "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FP%26ID%20%2D%20Piping%20and%20Instrumentation%20Diagram%2F10%20Demo%2FSymbol%20Detection%20Demo%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E00f87d7a%2D569b%2D42e3%2D8f3f%2Dfd26c77f9230",
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
