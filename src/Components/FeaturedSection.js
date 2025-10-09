import React from "react";
import CategoryItem from "./CategoryItem";
import { Brain, FileSearch, Route, GraduationCap } from "lucide-react";
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
        "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs%2FRouteOptimization%5FPitchDeck%2E%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs&p=true&ga=1",
      documentationLink:
        "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FRoute%20Optimization%2F04%20Design%2F03%20HLD%20and%20LLD%2FHLD%20Document%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FRoute%20Optimization%2F04%20Design%2F03%20HLD%20and%20LLD&p=true&ga=1&LOF=1",
      demoVideoLink:
        "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FRoute%20Optimization%2FLatest%20Documents%2FRoute%20Optimization%20Instruction%20Video%20%2D%20Short%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Efbf36fb7%2D23dd%2D433d%2Da8af%2D88e6f61869c2&isSPOFile=1&xsdata=MDV8MDJ8fDIyNTQ3YzI3MjU5NTQwYjNlMWNlMDhkZGQzZWYzODQyfGE5YzUwYzZjMmVjYzQ2NTM5OWIyNTgwMjRhZjkxODY2fDB8MHw2Mzg4OTk3NDY1NTEwMzAyMjJ8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKRFFTSTZJbFJsWVcxelgwRlVVRk5sY25acFkyVmZVMUJQVEU5R0lpd2lWaUk2SWpBdU1DNHdNREF3SWl3aVVDSTZJbGRwYmpNeUlpd2lRVTRpT2lKUGRHaGxjaUlzSWxkVUlqb3hNWDA9fDF8TDJOb1lYUnpMekU1T2pVMU1USXhaVFUzTFRWaVpUZ3ROR0kyT1MwNE5qWTVMVEJrWWpVeE9EQTFZelF5TjE5ak0ySTROR0l5WVMxaVpUSTVMVFJqWW1NdE9UYzVaaTFrT1RsbVl6VXpNemczWW1aQWRXNXhMbWRpYkM1emNHRmpaWE12YldWemMyRm5aWE12TVRjMU5ETTNOemcxTXpRMk1RPT18MzA3YjI2ZmEyMDliNGRhMGUxY2UwOGRkZDNlZjM4NDJ8ZjQ2MThhMGFkODYwNGQ5ZGI0Njc2YjhiYWI2YjMyMjU%3D&sdata=UTZSYkY4TlVpM0tZRER2TWdza0cyV1h5UWhZZkJaak9XWlY3ek5LV1I3cz0%3D&ovuser=a9c50c6c%2D2ecc%2D4653%2D99b2%2D58024af91866%2Cadhiyamaan%2Emaharajan%40global%2Dcsg%2Ecom",
    },
    {
      title: "LMS",
      description:
        "LMS (Learning Management System) is  software platform used to create, Nomination, manage, and track  courses or training programs.",
      icon: GraduationCap,
      iconColor: "text-blue-500",
      pitchDeckLink:
        "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs%2FLMS%5FPitchDeck%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs&p=true&ga=1",
      documentationLink:
        "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FLMS%2F04%20Design%2F03%20HLD%20and%20LLD%2FLMS%2DHigh%5FLevel%5FDesign%5FDoc%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FLMS%2F04%20Design%2F03%20HLD%20and%20LLD&p=true&ga=1&LOF=1",
      demoVideoLink:
        "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FLMS%2FLMS%5FRecodings%2FLMS%5Fshort%5Foverview%5Frecording%5F02%2DJune%2D2025%2Emp4&ga=1&LOF=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E9a344bc3%2D900e%2D4f69%2D9ec5%2Dfb61e78924a6",
    },
    {
      title: "LLM4ICS",
      icon: Brain,
      iconColor: "text-blue-500",
      description:
        "LLM4ICS converts natural-language instructions into PLC- ready Instruction List (IL) code with bidirectional generation(Natural Language to Industrial Line Code & Vice Versa), routine auto-creation, and tag import. By automating repetitive programming in Studio 5000, it accelerates development, reduces errors, and cuts manual coding effort , enabling engineers to focus on high-value tasks.",
      pitchDeckLink:
        "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs%2FCREATIVE%5FNatural%20Language%20to%20PLC%20Instruction%20Generation%20flyer%20version%5FFinal%20%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs&p=true&ga=1",
      documentationLink:
        "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FLLM4ICS%2FDocuments%2FLLM4ICS%5FHLD%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FLLM4ICS%2FDocuments&p=true&ga=1&LOF=1",
      demoVideoLink:
        "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20Demo%20Videos%2FLLM4ICS%2DShort%20Video%2Emp4&ga=1&LOF=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ef39e1519%2D82d3%2D4851%2D8a1d%2Dc34bd27dbb72&isDarkMode=false",
    },
    {
      title: "P&ID",
      description:
        "To develop a solution that can help detect the piping and instrumentation symbols from the diagram using computer vision. The goal is to generate an excel sheet that will act as a starter for creation of MTO sheet which eventually leads to reducing manual efforts from an engineer. ",
      icon: FileSearch,
      iconColor: "text-blue-500",
      pitchDeckLink:
        "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs%2FSymbol%20Detection%20Pitch%20Deck%20%281%29%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs&p=true&ga=1",
      documentationLink:
        "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FP%26ID%20%2D%20Piping%20and%20Instrumentation%20Diagram%2F04%20Design%2F03%20HLD%20and%20LLD%2FSymbol%2DDetection%2DPID%2DDocumentation%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FP%26ID%20%2D%20Piping%20and%20Instrumentation%20Diagram%2F04%20Design%2F03%20HLD%20and%20LLD&p=true&ga=1&LOF=1",
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
      className="pt-4 pb-12 bg-gray-50"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">FEATURED</h2>
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
