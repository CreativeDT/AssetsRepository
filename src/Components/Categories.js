import React, { useState } from "react";
import CategorySection from "./CategorySection";

import {
  Brain,
  Database,
  Bot,
  Route,
  BatteryCharging,
  FileSearch,
  FileText,
  LineChart,
  LayoutDashboard,
  School,
  Globe,
  Plane,
  Users,
  ClipboardList,
  Workflow,
  Settings,
  Truck,
  ScanLine,
} from "lucide-react";

const CategoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const categories = [
    {
      name: "AI/ML GenAI  Solutions",
      items: [
        {
          title: "AI Powered Real Time ETA Prediction",
          description:
            "AI-Powered Real-Time ETA Prediction is a smart system that uses machine learning algorithms to accurately estimate the arrival times of vehicles or deliveries in real-time. By analyzing factors like traffic conditions, weather, route history, and driver behavior, it continuously updates ETA predictions to improve operational efficiency, customer satisfaction, and logistics planning. ",
          icon: Plane,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/:p:/s/DigitalTechnologies-All/EUCV7ndThjBBilnSrYawDxYB8E9OZYsiYG86boEbdkjTbQ?wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1748942651612&web=1",
          documentationLink:
            "https://globalcsg.sharepoint.com/:w:/s/DigitalTechnologies-All/EXmuqmNJj1hMueTLnz0stRUBRnNcN_J5LhAdN68m6JThLw?e=IVC6cD",
          demoVideoLink:
            "https://globalcsg-my.sharepoint.com/:v:/g/personal/pawan_sharma_global-csg_com/EXnjBpl6eDRCi2g6sAvv60EB71948410muWjIBmgVDrC1A",
        },
        {
          title: "Battery Life Optimization",
          description:
            "The Battery Life Optimization project aims to forecast the State of Health (SoH) of electric vehicle batteries using advanced machine learning techniques. The goal is to enable predictive maintenance, optimize route planning, and enhance battery performance through data-driven insights. A RESTful API was developed to serve predictions and visual analytics to a frontend dashboard. ",
          icon: BatteryCharging,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FBattery%20Optimization%2F01%20Project%20Vision%20and%20Goals%2FBattery%20SOH%20optimization%20using%20AI%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FBattery%20Optimization%2F01%20Project%20Vision%20and%20Goals&p=true&ga=1&LOF=1",
          documentationLink:
            "https://globalcsg.sharepoint.com/:w:/s/DigitalTechnologies-All/EelkLtofYyZEnGgFh1KfgAwB_EnlBmdawb9zpGnlW_OIwg?e=bC1dXx",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies-All%2FShared%20Documents%2FDT%20-%20Assets%2FBattery%20Optimization%2Fbattery_health_short_video%2Emp4&referrer=Teams%2ETEAMS-ELECTRON&referrerScenario=teamsSdk_ns-bim",
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
          title: "Freight Tracker",
          description:
            "Freight Tracker is an AI/ML-powered logistics solution that enables real-time tracking and intelligent monitoring of freight shipments. Leveraging machine learning algorithms, it predicts estimated time of arrival (ETA), detects route anomalies, and identifies potential delays before they occur. With geospatial data, predictive analytics, and automated alerts, the system optimizes delivery routes and improves supply chain visibility, driving operational efficiency and timely decision-making.",
          icon: Truck,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FFreight%20Tracker%2F09%20Meetings%20%26%20Misc%2FFreightTracker%5FMarch25%5F2025%20v0%2E1%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FFreight%20Tracker%2F09%20Meetings%20%26%20Misc&p=true&ga=1",
          documentationLink:
            "https://globalcsg-my.sharepoint.com/:p:/g/personal/kushagra_pathak_global-csg_com/ES6S1AnROaZJp9k2_n-1FecB-jtPile0uuZp5YkU3veCmw?e=FeIoTU",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FFreight%20Tracker%2FDemo%20Recording%2FFreight%20Allocator%20%2D%20Demo%201%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E5025df7e%2Da645%2D46d1%2D894f%2Dd614667a3636",
        },
        {
          title: "Knowledge Bot",
          description:
            "The Knowledge Bot System provides a secure, scalable solution for real-time Q&A from unstructured documents using RAG, local LLMs, and multilingual support. It ensures data privacy on local infrastructure while enhancing user experience with translation, chat history, and contextual awareness.",
          icon: Bot,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FKnowledge%20Bot%2FDocuments%2FEffort%20Metrics%20%2D%20Knowledge%20Bot%20%281%29%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FKnowledge%20Bot%2FDocuments&p=true&ga=1&LOF=1",
          documentationLink:
            "https://globalcsg.sharepoint.com/:w:/s/DigitalTechnologies-All/EVf5_L5bPHNCg_bjTh37Wn0BiH-GbEX4a184Pz3xE48lSQ?e=gkbOTH",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FKnowledge%20Bot%2FDocuments%2FKnowledge%5Fbot%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ea0c162d6%2D05d3%2D4ef6%2D9c7b%2D209c4b0a6972",
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
      ],
    },
    {
      name: "Data Analytics & Visualization",
      items: [
        {
          title: "DigiVAVE",
          description:
            "DigiVAVE is an enterprise-grade Value Analysis & Value Engineering (VAVE) platform designed to manage projects through various lifecycle phases. The platform provides data collection, analysis, phase tracking, and reporting functionalities, supported by a modern web interface ",
          icon: LayoutDashboard,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FDigiVAVE%2FCREATIVE%5FDigiVAVE%5FTool%20Pitch%20Desk%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FDigiVAVE&p=true&ga=1&LOF=1",
          documentationLink:
            "https://globalcsg.sharepoint.com/:w:/s/DigitalTechnologies-All/EXWljlMmT5ZCslNKz62FT1gBwx_-XS3eV0kgLZoJI2ysEg?e=vGxTZA",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/:v:/s/DigitalTechnologies-All/ESugKh1zSyJFtf-E_Wx8emkBirpH5vMvwL3UDaNQrfJUpQ?e=CVGQeo",
        },
        {
          title: "HRSS Power BI Report",
          description: "Fuel consumption monitoring systems...",
          icon: LineChart,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/:p:/s/DigitalTechnologies-All/EbeODMwKRwxGgWPR2hK7KlgB2fM0dmMKIlTF76oYOQdhPg?e=eiuJH2",
          documentationLink: "NA",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/:v:/s/DigitalTechnologies-All/EUM3qWgpxL5ClpSN1lVebmkB0BuxSJKIIA0HEZYGjIPjRg?e=19n0d3",
        },
      ],
    },
    {
      name: "Field Service & Operations",
      items: [
        {
          title: "FSM",
          description:
            "The FSM system streamlines service operations through digital ticketing, technician assignment, and work order tracking. It offers role-based dashboards for efficient workflow management and real-time visibility.",
          icon: Workflow,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FFSM%2FFSM%20Pitch%20Desk%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FFSM&p=true&ga=1&LOF=1",
          documentationLink:
            "https://globalcsg.sharepoint.com/:w:/s/DigitalTechnologies-All/ESYhUDU1zbZCtLZRKujIXTsB4ophhk-bFxSURiVGN22n8w?e=2ipNfd",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FFSM%2FDemo%20Video%2FVideo%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Edcaab1bc%2D7595%2D4c5d%2D90ef%2D575ab352879a",
        },
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
      ],
    },
    {
      name: "Learning & Knowledge Systems",
      items: [
        {
          title: "Knowledge Bot",
          description:
            "The Knowledge Bot System provides a secure, scalable solution for real-time Q&A from unstructured documents using RAG, local LLMs, and multilingual support. It ensures data privacy on local infrastructure while enhancing user experience with translation, chat history, and contextual awareness.",
          icon: Globe,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FKnowledge%20Bot%2FDocuments%2FEffort%20Metrics%20%2D%20Knowledge%20Bot%20%281%29%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FKnowledge%20Bot%2FDocuments&p=true&ga=1&LOF=1",
          documentationLink:
            "https://globalcsg.sharepoint.com/:w:/s/DigitalTechnologies-All/EVf5_L5bPHNCg_bjTh37Wn0BiH-GbEX4a184Pz3xE48lSQ?e=gkbOTH",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FKnowledge%20Bot%2FDocuments%2FKnowledge%5Fbot%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ea0c162d6%2D05d3%2D4ef6%2D9c7b%2D209c4b0a6972",
        },
        {
          title: "LMS",
          description:
            "LMS (Learning Management System) is  software platform used to create, Nomination, manage, and track  courses or training programs.",
          icon: School,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/:b:/s/DigitalTechnologies-All/EcO4vNaHajdNqNUdf0WjIisBfLDwYXS1S65yZOS-mLO3GQ?e=hY3sa0",
          documentationLink:
            "https://globalcsg.sharepoint.com/:w:/s/DigitalTechnologies-All/EVozzKy8DmtKhOA7WtCHPJsBvnfCLYkvPWNL1aaWSlIt4w?e=KbYa4N",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FLMS%2FLMS%5FRecodings%2FLMS%5Fshort%5Foverview%5Frecording%5F02%2DJune%2D2025%2Emp4&ga=1&LOF=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E9a344bc3%2D900e%2D4f69%2D9ec5%2Dfb61e78924a6",
        },
      ],
    },
    {
      name: "Process Automation & Optimization",
      items: [
        {
          title: "Battery Life Optimization",
          description:
            "The Battery Life Optimization project aims to forecast the State of Health (SoH) of electric vehicle batteries using advanced machine learning techniques. The goal is to enable predictive maintenance, optimize route planning, and enhance battery performance through data-driven insights. A RESTful API was developed to serve predictions and visual analytics to a frontend dashboard. ",
          icon: BatteryCharging,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FBattery%20Optimization%2F01%20Project%20Vision%20and%20Goals%2FBattery%20SOH%20optimization%20using%20AI%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FBattery%20Optimization%2F01%20Project%20Vision%20and%20Goals&p=true&ga=1&LOF=1",
          documentationLink:
            "https://globalcsg.sharepoint.com/:w:/s/DigitalTechnologies-All/EelkLtofYyZEnGgFh1KfgAwB_EnlBmdawb9zpGnlW_OIwg?e=bC1dXx",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies-All%2FShared%20Documents%2FDT%20-%20Assets%2FBattery%20Optimization%2Fbattery_health_short_video%2Emp4&referrer=Teams%2ETEAMS-ELECTRON&referrerScenario=teamsSdk_ns-bim",
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
          title: "DigiVAVE",
          description:
            "DigiVAVE is an enterprise-grade Value Analysis & Value Engineering (VAVE) platform designed to manage projects through various lifecycle phases. The platform provides data collection, analysis, phase tracking, and reporting functionalities, supported by a modern web interface ",
          icon: LayoutDashboard,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FDigiVAVE%2FCREATIVE%5FDigiVAVE%5FTool%20Pitch%20Desk%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FDigiVAVE&p=true&ga=1&LOF=1",
          documentationLink:
            "https://globalcsg.sharepoint.com/:w:/s/DigitalTechnologies-All/EXWljlMmT5ZCslNKz62FT1gBwx_-XS3eV0kgLZoJI2ysEg?e=vGxTZA",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/:v:/s/DigitalTechnologies-All/ESugKh1zSyJFtf-E_Wx8emkBirpH5vMvwL3UDaNQrfJUpQ?e=CVGQeo",
        },
        {
          title: "FSM",
          description:
            "The FSM system streamlines service operations through digital ticketing, technician assignment, and work order tracking. It offers role-based dashboards for efficient workflow management and real-time visibility.",
          icon: Users,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FFSM%2FFSM%20Pitch%20Desk%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FFSM&p=true&ga=1&LOF=1",
          documentationLink:
            "https://globalcsg.sharepoint.com/:w:/s/DigitalTechnologies-All/ESYhUDU1zbZCtLZRKujIXTsB4ophhk-bFxSURiVGN22n8w?e=2ipNfd",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FFSM%2FDemo%20Video%2FVideo%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Edcaab1bc%2D7595%2D4c5d%2D90ef%2D575ab352879a",
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
      ],
    },
    {
      name: "Workforce Management & Operations",
      items: [
        {
          title: "HRBP Connect",
          description:
            "The HRBP Feedback System is a structured platform designed to collect confidential and constructive feedback from employees. It enables HR Business Partners (HRBPs) to gain insights into employee experiences, identify early warning signals, and support data-driven interventions to enhance organizational culture, engagement, and performance. ",
          icon: ClipboardList,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FHRBP%20Connect%2FHRBP%20Connect%20Pitch%20desk%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FHRBP%20Connect&p=true&ga=1&LOF=1",
          documentationLink:
            "https://globalcsg.sharepoint.com/:w:/s/DigitalTechnologies-All/EYs2Vzo6uvpEn5D3NanI4x0BLq5EIM2TiOR68ElXcAz6ig?e=g6iSHr",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FHRBP%20Connect%2FHRBP%2D%20Short%20Video%2Emp4&ga=1&LOF=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E2f94e7bc%2Dd9ce%2D4fc2%2D992e%2D0650fee16438",
        },
        {
          title: "HRSS Mobility",
          description:
            "Creative Synergies is currently handling travel requests using Excel-based forms. This project intends to convert these forms into a web-based application to manage the end-to-end workflow of travel requests across Domestic, Business, and Work Permit categories. The goal is to streamline submission, approval, and tracking processes for employees, managers, HR, and travel teams.",
          icon: Plane,
          iconColor: "text-blue-500",
          pitchDeckLink: "NA",
          documentationLink: "NA",
          demoVideoLink: "NA",
        },
        {
          title: "HRSS Power BI Report",
          description:
            "Developed an interactive Power BI dashboard suite for HR analytics, covering attendance, background checks, salaries, and headcount trends using secure demo data to support data-driven workforce decisions.",
          icon: LineChart,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/:p:/s/DigitalTechnologies-All/EbeODMwKRwxGgWPR2hK7KlgB2fM0dmMKIlTF76oYOQdhPg?e=eiuJH2",
          documentationLink: "NA",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/:v:/s/DigitalTechnologies-All/EUM3qWgpxL5ClpSN1lVebmkB0BuxSJKIIA0HEZYGjIPjRg?e=19n0d3",
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
    // <div className=" pl-8 pr-8  bg-gray-50">
    //   <div className="flex min-h-screen bg-gray-50 max-w-7xl mx-auto  ">
    //     {/* Sidebar */}
    //     <div className="w-64 bg-gray rounded-lg shadow-md p-6 sticky top-0  top-0 max-h-[80vh] overflow-y-auto border-t border-gray-300">
    //       <h2 className="text-lg font-semibold m-4">Categories</h2>
    //       <nav className="space-y-2 md:space-y-3">
    //         <button
    //           key="all"
    //           onClick={() => setSelectedCategory("All")}
    //           className={`w-full text-left px-4 py-2 rounded-lg ${
    //             selectedCategory === "All"
    //               ? "bg-blue-100 text-blue-700 font-bold scale-[1.02]"
    //               : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
    //           }`}
    //         >
    //           All
    //         </button>
    //         {categories.map((category) => (
    //           <button
    //             key={category.name}
    //             onClick={() => setSelectedCategory(category.name)}
    //             className={`w-full text-left px-4 py-1 rounded-lg ${
    //               selectedCategory === category.name
    //                 ? "bg-blue-100 text-blue-700 font-bold scale-[1.02]"
    //                 : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
    //             }`}
    //           >
    //             {category.name}
    //           </button>
    //         ))}
    //       </nav>
    //     </div>

    //     {/* Main Content */}
    //     <main className=" flex-1 p-8 overflow-y-auto">
    //       <div className="max-w-7xl mx-auto">
    //         {/* Search Bar */}
    //         <div className="mb-8">
    //           <input
    //             type="text"
    //             placeholder="Search items..."
    //             value={searchQuery}
    //             onChange={(e) => setSearchQuery(e.target.value)}
    //             className="w-full px-4 py-3 rounded-lg border border-gray-300
    //                          focus:outline-none focus:ring-2 focus:ring-blue-500
    //                          focus:border-transparent transition-all"
    //           />
    //         </div>

    //         <CategorySection items={filteredItems} />
    //       </div>
    //     </main>
    //   </div>
    // </div>

    <div className="bg-gray-50 min-h-screen">
      {/* Topbar for Mobile */}
      <div className="md:hidden flex justify-between items-center p-4 shadow-sm bg-white sticky top-0 z-10">
        <h2 className="text-xl font-semibold">Categories</h2>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-gray-600 hover:text-gray-900"
        >
          {/* Hamburger icon */}
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {sidebarOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
        {/* Sidebar */}
        <div
          className={`${
            sidebarOpen ? "block" : "hidden"
          } md:block md:w-64 bg-white rounded-lg shadow-md p-6 border-t border-gray-300 md:sticky md:top-0 max-h-[80vh] overflow-y-auto z-10`}
        >
          <h2 className="text-lg font-semibold mb-4 hidden md:block">
            Categories
          </h2>
          <nav className="space-y-2 md:space-y-3">
            <button
              key="all"
              onClick={() => {
                setSelectedCategory("All");
                setSidebarOpen(false);
              }}
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
                onClick={() => {
                  setSelectedCategory(category.name);
                  setSidebarOpen(false);
                }}
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
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {/* Search Bar */}
            <div className="mb-6">
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

            <CategorySection items={filteredItems} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default CategoriesPage;
