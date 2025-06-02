import React, { useState } from "react";
import CategorySection from "./CategorySection";

// import { faCloud, faRobot, faDatabase, faFileAlt, faMapMarkedAlt, faBatteryFull } from '@fortawesome/free-solid-svg-icons';
import {
  Brain,
  Bot,
  Database,
  FileSpreadsheet,
  Map,
  Battery,
} from "lucide-react";

const CategoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showVideo, setShowVideo] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const openVideoModal = (url) => {
    setSelectedVideoUrl(url);
    setShowVideo(true);
  };

  const closeVideoModal = () => {
    setShowVideo(false);
    setSelectedVideoUrl(null);
  };

  // Open video URL in a new tab
  const openVideoInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const categories = [
    {
      name: "AI/ML GenAI  Solutions",
      items: [
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
          title: "Data Quality",
          icon: Database,
          iconColor: "text-blue-500",
          description:
            "A Data Quality App that detects, explains, and correct anomalies in datasets using natural language, enabling seamlesss and code-free data cleansing.",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/:p:/s/DigitalTechnologies-All/EaxI4F9D_1ROrbIW8Y-dsrABj33clQjLjQnObIhqfbvK-w?e=guqaFl",
          documentationLink:
            "https://globalcsg.sharepoint.com/:w:/s/DigitalTechnologies-All/EY0J2Jv2QDdClHEcmLozxY4BRptDdK_pPR9h_yqegjxp5g?e=jkfFZ3",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/:v:/s/DigitalTechnologies-All/ETcDHmUaaw1AoaVV9re97xMBqH_RWX_9coqqj7hLD993Dw?e=AOsDzF",
        },

        {
          title: "Knowledge Bot",
          description:
            "The Knowledge Bot System provides a secure, scalable solution for real-time Q&A from unstructured documents using RAG, local LLMs, and multilingual support. It ensures data privacy on local infrastructure while enhancing user experience with translation, chat history, and contextual awareness.",
          icon: Bot,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/:p:/s/DigitalTechnologies-All/EceW3DJPXSVHv0oKVCUk8TYBMNoGIpGiC7tLF---QReA6A?e=bKStFx",
          documentationLink:
            "https://globalcsg.sharepoint.com/:w:/s/DigitalTechnologies-All/EVf5_L5bPHNCg_bjTh37Wn0BiH-GbEX4a184Pz3xE48lSQ?e=gkbOTH",
          demoVideoLink: "https://example.com/demo-video",
        },
        {
          title: "Battery Life Optimization",
          description:
            "he Battery Life Optimization project aims to forecast the State of Health (SoH) of electric vehicle batteries using advanced machine learning techniques. The goal is to enable predictive maintenance, optimize route planning, and enhance battery performance through data-driven insights. A RESTful API was developed to serve predictions and visual analytics to a frontend dashboard. ",
          icon: Bot,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/:p:/r/sites/DigitalTechnologies-All/_layouts/15/Doc2.aspx?action=edit&sourcedoc=%7B720672ec-b12d-449a-a64e-aff96caf2bc6%7D&wdOrigin=TEAMS-MAGLEV.teamsSdk_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1748489230657&web=1",
          documentationLink:
            "https://globalcsg.sharepoint.com/:w:/s/DigitalTechnologies-All/EelkLtofYyZEnGgFh1KfgAwB_EnlBmdawb9zpGnlW_OIwg?e=bC1dXx",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies-All%2FShared%20Documents%2FDT%20-%20Assets%2FBattery%20Optimization%2Fbattery_health_short_video%2Emp4&referrer=Teams%2ETEAMS-ELECTRON&referrerScenario=teamsSdk_ns-bim",
        },
        {
          title: "Route Optimization",
          description:
            "The Route Optimization solution offers optimized route planning along with predictions for fuel consumption and carbon emissions for fleet vehicles. ",
          icon: Bot,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/:p:/r/sites/DigitalTechnologies-All/_layouts/15/Doc.aspx?sourcedoc=%7B18501E7C-9A1C-4516-A1AB-C0C01B96F20B%7D&file=RouteOptimization.pptx&action=edit&mobileredirect=true",
          documentationLink:
            "https://globalcsg.sharepoint.com/:w:/r/sites/DigitalTechnologies-All/_layouts/15/Doc.aspx?sourcedoc=%7BED4954E2-A365-4CDC-8780-F370716D5056%7D&file=Technical_Design_Document_Template.docx&action=default&mobileredirect=true",
          demoVideoLink:
            "https://globalcsg-my.sharepoint.com/personal/renuka_gaddam_global-csg_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Frenuka%5Fgaddam%5Fglobal%2Dcsg%5Fcom%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FScreen%20Recording%202025%2D05%2D29%20192527%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E75af0642%2D6f5e%2D47cd%2D9f03%2Db59070dd9f54",
        },
        {
          title: "P&ID",
          description:
            "To develop a solution that can help detect the piping and instrumentation symbols from the diagram using computer vision. The goal is to generate an excel sheet that will act as a starter for creation of MTO sheet which eventually leads to reducing manual efforts from an engineer. ",
          icon: Bot,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/:p:/s/DigitalTechnologies-All/EY1_xQA02vVImCLeQsl_ehwBTJn_ywC5rUDhtXmzUlRnJg?e=r0qWYV",
          documentationLink:
            "https://globalcsg.sharepoint.com/:b:/s/DigitalTechnologies-All/EYPSaqoOGBhLsFJ2TmPzB_sBsWfxB2JaE8zO7u4YxRR4Ng?e=5xpWVG",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FP%26ID%20%2D%20Piping%20and%20Instrumentation%20Diagram%2F10%20Demo%2FSymbol%20Detection%20Demo%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E00f87d7a%2D569b%2D42e3%2D8f3f%2Dfd26c77f9230",
        },
      ],
    },
    {
      name: "Process Automation & Optimization",
      items: [
        {
          title: "Data Quality",
          icon: Database,
          iconColor: "text-blue-500",
          description:
            "A Data Quality App that detects, explains, and correct anomalies in datasets using natural language, enabling seamlesss and code-free data cleansing.",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/:p:/s/DigitalTechnologies-All/EaxI4F9D_1ROrbIW8Y-dsrABj33clQjLjQnObIhqfbvK-w?e=guqaFl",
          documentationLink:
            "https://globalcsg.sharepoint.com/:w:/s/DigitalTechnologies-All/EY0J2Jv2QDdClHEcmLozxY4BRptDdK_pPR9h_yqegjxp5g?e=jkfFZ3",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/:v:/s/DigitalTechnologies-All/ETcDHmUaaw1AoaVV9re97xMBqH_RWX_9coqqj7hLD993Dw?e=AOsDzF",
        },
        {
          title: "FSM",
          description: "AI-powered driver monitoring solutions...",
          icon: Bot,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/:p:/s/DigitalTechnologies-All/ET0ntQGALPRBi8kv6hP49ogBalyJ7Dx4PFi4oCTcgacVjQ?e=2IOx3E",
          documentationLink:
            "https://globalcsg.sharepoint.com/:w:/s/DigitalTechnologies-All/ESYhUDU1zbZCtLZRKujIXTsB4ophhk-bFxSURiVGN22n8w?e=2ipNfd",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FFSM%2FDemo%20Video%2FVideo%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Edcaab1bc%2D7595%2D4c5d%2D90ef%2D575ab352879a",
        },
        {
          title: "P&ID",
          description:
            "To develop a solution that can help detect the piping and instrumentation symbols from the diagram using computer vision. The goal is to generate an excel sheet that will act as a starter for creation of MTO sheet which eventually leads to reducing manual efforts from an engineer. ",
          icon: Bot,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/:p:/s/DigitalTechnologies-All/EY1_xQA02vVImCLeQsl_ehwBTJn_ywC5rUDhtXmzUlRnJg?e=r0qWYV",
          documentationLink:
            "https://globalcsg.sharepoint.com/:b:/s/DigitalTechnologies-All/EYPSaqoOGBhLsFJ2TmPzB_sBsWfxB2JaE8zO7u4YxRR4Ng?e=5xpWVG",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FP%26ID%20%2D%20Piping%20and%20Instrumentation%20Diagram%2F10%20Demo%2FSymbol%20Detection%20Demo%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E00f87d7a%2D569b%2D42e3%2D8f3f%2Dfd26c77f9230",
        },
        {
          title: "Route Optimization",
          description:
            "The Route Optimization solution offers optimized route planning along with predictions for fuel consumption and carbon emissions for fleet vehicles. ",
          icon: Bot,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/:p:/r/sites/DigitalTechnologies-All/_layouts/15/Doc.aspx?sourcedoc=%7B18501E7C-9A1C-4516-A1AB-C0C01B96F20B%7D&file=RouteOptimization.pptx&action=edit&mobileredirect=true",
          documentationLink:
            "https://globalcsg.sharepoint.com/:w:/r/sites/DigitalTechnologies-All/_layouts/15/Doc.aspx?sourcedoc=%7BED4954E2-A365-4CDC-8780-F370716D5056%7D&file=Technical_Design_Document_Template.docx&action=default&mobileredirect=true",
          demoVideoLink:
            "https://globalcsg-my.sharepoint.com/personal/renuka_gaddam_global-csg_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Frenuka%5Fgaddam%5Fglobal%2Dcsg%5Fcom%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FScreen%20Recording%202025%2D05%2D29%20192527%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E75af0642%2D6f5e%2D47cd%2D9f03%2Db59070dd9f54",
        },
        {
          title: "Battery Life Optimization",
          description:
            "he Battery Life Optimization project aims to forecast the State of Health (SoH) of electric vehicle batteries using advanced machine learning techniques. The goal is to enable predictive maintenance, optimize route planning, and enhance battery performance through data-driven insights. A RESTful API was developed to serve predictions and visual analytics to a frontend dashboard. ",
          icon: Bot,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/:p:/r/sites/DigitalTechnologies-All/_layouts/15/Doc2.aspx?action=edit&sourcedoc=%7B720672ec-b12d-449a-a64e-aff96caf2bc6%7D&wdOrigin=TEAMS-MAGLEV.teamsSdk_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1748489230657&web=1",
          documentationLink:
            "https://globalcsg.sharepoint.com/:w:/s/DigitalTechnologies-All/EelkLtofYyZEnGgFh1KfgAwB_EnlBmdawb9zpGnlW_OIwg?e=bC1dXx",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies-All%2FShared%20Documents%2FDT%20-%20Assets%2FBattery%20Optimization%2Fbattery_health_short_video%2Emp4&referrer=Teams%2ETEAMS-ELECTRON&referrerScenario=teamsSdk_ns-bim",
        },

        {
          title: "DigiVAVE",
          description:
            "DigiVAVE is an enterprise-grade Value Analysis & Value Engineering (VAVE) platform designed to manage projects through various lifecycle phases. The platform provides data collection, analysis, phase tracking, and reporting functionalities, supported by a modern web interface ",
          icon: Bot,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/:p:/s/DigitalTechnologies-All/EenilGjVQ6pBqyAkt0Ix-AkB1-Cdo5amWg96jBGTnhsQow?e=m6vw6s",
          documentationLink:
            "https://globalcsg.sharepoint.com/:w:/s/DigitalTechnologies-All/EXWljlMmT5ZCslNKz62FT1gBwx_-XS3eV0kgLZoJI2ysEg?e=vGxTZA",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/:v:/s/DigitalTechnologies-All/ESugKh1zSyJFtf-E_Wx8emkBirpH5vMvwL3UDaNQrfJUpQ?e=CVGQeo",
        },
      ],
    },
    {
      name: "Data Analytics & Visualization",
      items: [
        {
          title: "DigiVAVE",
          description:
            "DigiVAVE is an enterprise-grade Value Analysis & Value Engineering (VAVE) platform designed to manage projects through various lifecycle phases. The platform provides data collection, analysis, phase tracking, and reporting functionalities, supported by a modern web interface ",
          icon: Bot,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/:p:/s/DigitalTechnologies-All/EenilGjVQ6pBqyAkt0Ix-AkB1-Cdo5amWg96jBGTnhsQow?e=m6vw6s",
          documentationLink:
            "https://globalcsg.sharepoint.com/:w:/s/DigitalTechnologies-All/EXWljlMmT5ZCslNKz62FT1gBwx_-XS3eV0kgLZoJI2ysEg?e=vGxTZA",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/:v:/s/DigitalTechnologies-All/ESugKh1zSyJFtf-E_Wx8emkBirpH5vMvwL3UDaNQrfJUpQ?e=CVGQeo",
        },
        {
          title: "HRSS Power BI Report",
          description: "Fuel consumption monitoring systems...",
          icon: Bot,
          iconColor: "text-blue-500",
          pitchDeckLink: "https://example.com/pitch-deck",
          documentationLink: "https://example.com/docs",
          demoVideoLink: "https://example.com/demo-video",
        },
      ],
    },
    {
      name: "Learning & Knowledge Systems",
      items: [
        {
          title: "LMS",
          description:
            "LMS (Learning Management System) is  software platform used to create, Nomination, manage, and track  courses or training programs.",
          //  viewLink: 'https://globalcsg.sharepoint.com/sites/DT-EngineeringTeam/_layouts/15/embed.aspx?UniqueId=e48ff12b-a202-4f22-a3e4-334a62b3e392&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create',
          icon: Bot,
          iconColor: "text-blue-500",
          pitchDeckLink: "https://example.com/pitch-deck",
          documentationLink: "https://example.com/docs",
          demoVideoLink: "https://example.com/demo-video",
        },
        {
          title: "Knowledge Bot",
          description:
            "The Knowledge Bot System provides a secure, scalable solution for real-time Q&A from unstructured documents using RAG, local LLMs, and multilingual support. It ensures data privacy on local infrastructure while enhancing user experience with translation, chat history, and contextual awareness.",
          icon: Bot,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/:p:/s/DigitalTechnologies-All/EceW3DJPXSVHv0oKVCUk8TYBMNoGIpGiC7tLF---QReA6A?e=bKStFx",
          documentationLink:
            "https://globalcsg.sharepoint.com/:w:/s/DigitalTechnologies-All/EVf5_L5bPHNCg_bjTh37Wn0BiH-GbEX4a184Pz3xE48lSQ?e=gkbOTH",
          demoVideoLink: "https://example.com/demo-video",
        },
      ],
    },
    {
      name: "Workforce Management & Operations",
      items: [
        {
          title: "HRSS Mobility",
          description:
            "Creative Synergies is currently handling travel requests using Excel-based forms. This project intends to convert these forms into a web-based application to manage the end-to-end workflow of travel requests across Domestic, Business, and Work Permit categories. The goal is to streamline submission, approval, and tracking processes for employees, managers, HR, and travel teams.",
          icon: Bot,
          iconColor: "text-blue-500",
          pitchDeckLink: "https://example.com/pitch-deck",
          documentationLink: "https://example.com/docs",
          demoVideoLink: "https://example.com/demo-video",
        },
        {
          title: "HRSS Power BI Report",
          description: "Fuel consumption monitoring systems...",
          icon: Bot,
          iconColor: "text-blue-500",
          pitchDeckLink: "https://example.com/pitch-deck",
          documentationLink: "https://example.com/docs",
          demoVideoLink: "https://example.com/demo-video",
        },
        {
          title: "HRBP Connect",
          description:
            "Creative Synergies is currently handling travel requests using Excel-based forms. This project intends to convert these forms into a web-based application to manage the end-to-end workflow of travel requests across Domestic, Business, and Work Permit categories. The goal is to streamline submission, approval, and tracking processes for employees, managers, HR, and travel teams.",
          icon: Bot,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/:p:/s/DigitalTechnologies-All/EdWitrvPTL1FlYWDV0D3IN0BJhIHL_JAcw45stZpYea09g?e=4bxOz9",
          documentationLink:
            "https://globalcsg.sharepoint.com/:w:/s/DigitalTechnologies-All/EYs2Vzo6uvpEn5D3NanI4x0BLq5EIM2TiOR68ElXcAz6ig?e=g6iSHr",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/:b:/s/DigitalTechnologies-All/EeoXlMscEOpIlM64Wa4OPNMBGncpcR6FN1-_1m7Px8o_VA?e=QpI4M8",
        },
      ],
    },
    {
      name: "Field Service & Operations",
      items: [
        {
          title: "FSM",
          description: "AI-powered driver monitoring solutions...",
          icon: Bot,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/:p:/s/DigitalTechnologies-All/ET0ntQGALPRBi8kv6hP49ogBalyJ7Dx4PFi4oCTcgacVjQ?e=2IOx3E",
          documentationLink:
            "https://globalcsg.sharepoint.com/:w:/s/DigitalTechnologies-All/ESYhUDU1zbZCtLZRKujIXTsB4ophhk-bFxSURiVGN22n8w?e=2ipNfd",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FFSM%2FDemo%20Video%2FVideo%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Edcaab1bc%2D7595%2D4c5d%2D90ef%2D575ab352879a",
        },
        {
          title: "Route Optimization",
          description:
            "The Route Optimization solution offers optimized route planning along with predictions for fuel consumption and carbon emissions for fleet vehicles. ",
          icon: Bot,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/:p:/r/sites/DigitalTechnologies-All/_layouts/15/Doc.aspx?sourcedoc=%7B18501E7C-9A1C-4516-A1AB-C0C01B96F20B%7D&file=RouteOptimization.pptx&action=edit&mobileredirect=true",
          documentationLink:
            "https://globalcsg.sharepoint.com/:w:/r/sites/DigitalTechnologies-All/_layouts/15/Doc.aspx?sourcedoc=%7BED4954E2-A365-4CDC-8780-F370716D5056%7D&file=Technical_Design_Document_Template.docx&action=default&mobileredirect=true",
          demoVideoLink:
            "https://globalcsg-my.sharepoint.com/personal/renuka_gaddam_global-csg_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Frenuka%5Fgaddam%5Fglobal%2Dcsg%5Fcom%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FScreen%20Recording%202025%2D05%2D29%20192527%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E75af0642%2D6f5e%2D47cd%2D9f03%2Db59070dd9f54",
        },
      ],
    },
  ];

  // Step 1: Flatten all items and tag them with their category
  const allItems = categories.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      category: category.name, // Add category info to item
    }))
  );

  // Step 2: Deduplicate based on `title`
  const deduplicatedItems = allItems.filter(
    (item, index, self) =>
      index === self.findIndex((i) => i.title === item.title)
  );

  // Step 3: Decide which base items to show based on selected category
  const getBaseItems = () => {
    if (selectedCategory === "All") {
      return deduplicatedItems;
    } else {
      return allItems.filter((item) => item.category === selectedCategory);
    }
  };

  // Step 4: Filter deduplicated items based on search query
  const filteredItems = getBaseItems().filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );
  });

  return (
    <div className=" pl-8 pr-8  bg-gray-50">
      <div className="flex min-h-screen bg-gray-50 max-w-7xl mx-auto  ">
        {/* Sidebar */}
        <div className="w-64 bg-gray rounded-lg shadow-md p-6 sticky top-0  top-0 max-h-[80vh] overflow-y-auto border-t border-gray-300">
          <h2 className="text-lg font-semibold m-4">Categories</h2>
          <nav className="space-y-2 md:space-y-3">
            <button
              key="all"
              onClick={() => setSelectedCategory("All")}
              className={`w-full text-left px-4 py-2 rounded-lg ${
                selectedCategory === "All"
                  ? "bg-blue-100 text-blue-700 font-bold scale-[1.02]"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`w-full text-left px-4 py-1 rounded-lg ${
                  selectedCategory === category.name
                    ? "bg-blue-100 text-blue-700 font-bold scale-[1.02]"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {category.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <main className=" flex-1 p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300
                             focus:outline-none focus:ring-2 focus:ring-blue-500
                             focus:border-transparent transition-all"
              />
            </div>

            {/* <CategorySection items={filteredItems} categoryName={selectedCategory} openVideoModal={openVideoModal} /> */}
            <CategorySection
              items={filteredItems}
              // openVideoModal={openVideoModal}
            />
          </div>
        </main>
        {/* Modal
        {showVideo && selectedVideoUrl && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 pt-14">
            <div className="bg-white rounded-lg w-full max-w-4xl">
              <div className="p-4">
                <iframe
                  src={selectedVideoUrl}
                  width="100%"
                  height="400"
                  frameBorder="0"
                  allowFullScreen
                  title="Demo Video"
                  className="rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
              <button
                onClick={closeVideoModal}
                className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium"
              >
                Close Player
              </button>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default CategoriesPage;
