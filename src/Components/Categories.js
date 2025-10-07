/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import CategorySection from "./CategorySection";

import {
  Brain,
  Database,
  Bot,
  Route,
  BatteryCharging,
  FileSearch,
  LineChart,
  LayoutDashboard,
  Globe,
  Plane,
  Users,
  ClipboardList,
  Truck,
  TerminalSquare,
  SquarePen,
  RadioTower,
  BrainCircuit,
  Gauge,
  ClipboardCheck,
  Mail,
  Layers,
  Atom,
  Wrench,
  GraduationCap,
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
          title: "Agentic AI - Data Pipeline",
          description:
            "An agentic framework where specialized LLM-powered agents collaborate with Spark to interpret goals, design, adapt and orchestrate reusable data pipelines end-to-end.",
          icon: BrainCircuit, // better than Truck
          iconColor: "text-blue-500",
          pitchDeckLink: "NA",
          documentationLink: "NA",
          demoVideoLink: "NA",
        },
        {
          title: "Creative’s WellShield",
          description:
            "AI-Powered Wellhead & Tank Monitoring Solution: Our AI/ML-driven Choke Optimization system uses real-time telemetry data to predict the current choke percentage and forecast future choke positions. This enables operators to proactively optimize well performance, maintain flow stability, and plan for efficient production management.",
          icon: Gauge, // better than Truck
          iconColor: "text-blue-500",
          pitchDeckLink: "NA",
          documentationLink: "NA",
          demoVideoLink: "NA",
        },

        {
          title: "AI Powered Real Time ETA Prediction",
          description:
            "Real-time Congestion, Unexpected Road Diversions And Vehicle-specific Constraints, Such As Heavy Cargo, Create Unpredictability In Travel Time, Affecting Estimated Arrival Times (ETA). Additionally, Variations In Driver Behavior, Including Speed Fluctuations And Stoppages, Further Impact Delivery Timelines.Implement Machine Learning (ML) Models Trained On Historical Trip Data Continuously Refine Estimated Time Of Arrival (ETA) Using Real-time Updates",
          icon: Plane,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/DT%20-%20Assets/All%20Assets%20-%20Pitch%20Deck/New%20Pitch%20-%20Updated/PDFs/CREATIVE_AI%20Powered%20Real%20Time%20ETA%20Prediction.pdf?CT=1759835932462&OR=ItemsView",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAI%20Powered%20Real%20Time%20ETA%20Prediction%2F04%20Design%2F03%20HLD%20and%20LLD%2FReal%5Ftime%5FETA%5FPrediction%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAI%20Powered%20Real%20Time%20ETA%20Prediction%2F04%20Design%2F03%20HLD%20and%20LLD&p=true&ga=1&LOF=1",
          demoVideoLink:
            "https://globalcsg-my.sharepoint.com/:v:/g/personal/pawan_sharma_global-csg_com/EXnjBpl6eDRCi2g6sAvv60EB71948410muWjIBmgVDrC1A",
        },
        {
          title: "Automated Test Case Generation",
          description:
            "Automatically convert plain-text requirements or user stories into accurate test cases and BDD scenarios using LLMs with RAG. Supports both manual and automated testing, with continuous improvement via domain-specific context.",
          icon: SquarePen,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/DT%20-%20Assets/All%20Assets%20-%20Pitch%20Deck/New%20Pitch%20-%20Updated/PDFs/CREATIVE_GenAIDrivenTestCaseGeneration_PitchDeck_v3.pdf?CT=1759838545226&OR=ItemsView",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FGen%20AI%20Driven%20Test%20Case%20Generator%2F04%20Design%2F03%20HLD%20and%20LLD%2FGenAI%5FDriven%5FTestCase%5FGeneration%2DSoftware%20Architecture%20Design%28HLD%29%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FGen%20AI%20Driven%20Test%20Case%20Generator%2F04%20Design%2F03%20HLD%20and%20LLD&p=true&ga=1&LOF=1",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FGen%20AI%20Driven%20Test%20Case%20Generator%2FRecording%2FGenAI%5FDriven%5FTestCase%5FGeneration%2DShort%5FVideo%2Emp4&ga=1&LOF=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E79d3053c%2D1ac6%2D4257%2Dab85%2D5455c46b5575",
        },
        {
          title: "Automated Test Script Generation ",
          description:
            "Capture user interactions using test script recorder and transform them into structured BDD scenarios, step definitions, and POMs using AI. Instantly integrates with automation frameworks for efficient test execution and reporting.",
          icon: TerminalSquare,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/DT%20-%20Assets/All%20Assets%20-%20Pitch%20Deck/New%20Pitch%20-%20Updated/PDFs/CREATIVE_GenAIDrivenTestAutomationScriptGeneration_PitchDeck.pdf?CT=1759838382046&OR=ItemsView",
          documentationLink:
            "https://globalcsg.sharepoint.com/:b:/s/DigitalTechnologies-All/EULWXqnIW2lLhnURXmD-XGwBllDcDMVM14trGKj0BtMImQ?e=4I0g3K",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/:v:/s/DigitalTechnologies-All/EQoAzQvfpwBBoIBBXEoxaz4BfLXtQRwPYaH1rtHSeZ-oZA?e=2tFKZT",
        },
        {
          title: "Battery Life Optimization",
          description:
            "The Battery Life Optimization project aims to forecast the State of Health (SoH) of electric vehicle batteries using advanced machine learning techniques. The goal is to enable predictive maintenance, optimize route planning, and enhance battery performance through data-driven insights. A RESTful API was developed to serve predictions and visual analytics to a frontend dashboard. ",
          icon: BatteryCharging,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/DT%20-%20Assets/All%20Assets%20-%20Pitch%20Deck/New%20Pitch%20-%20Updated/PDFs/CREATIVE_PitchDeck_battery_optimization_Final.pdf?CT=1759838875064&OR=ItemsView",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FBattery%20Optimization%2F04%20Design%2FBattery%20life%20optimization%20HLD%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FBattery%20Optimization%2F04%20Design&p=true&ga=1",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies-All%2FShared%20Documents%2FDT%20-%20Assets%2FBattery%20Optimization%2Fbattery_health_short_video%2Emp4&referrer=Teams%2ETEAMS-ELECTRON&referrerScenario=teamsSdk_ns-bim",
        },

        {
          title: "Contract and Compliance Analyzer",
          description:
            "An AI-powered Contract & Compliance Analyzer that reviews contracts against critical clauses using GenAI and RAG, ensuring compliance gaps are quickly identified.",
          icon: ClipboardCheck,
          iconColor: "text-blue-500",
          pitchDeckLink: "NA",
          documentationLink: "NA",
          demoVideoLink: "NA",
        },
        {
          title: "Data Quality",
          icon: Database,
          iconColor: "text-blue-500",
          description:
            "A Data Quality App that detects, explains, and correct anomalies in datasets using natural language, enabling seamlesss and code-free data cleansing.",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/DT%20-%20Assets/All%20Assets%20-%20Pitch%20Deck/New%20Pitch%20-%20Updated/PDFs/CREATIVE_Data%20Quality.pdf?CT=1759837939196&OR=ItemsView",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FData%20Quality%2F04%20Design%2F03%20HLD%20and%20LLD%2FHIGH%20LEVEL%20DESIGN%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FData%20Quality%2F04%20Design%2F03%20HLD%20and%20LLD&p=true&ga=1",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/:v:/s/DigitalTechnologies-All/ETcDHmUaaw1AoaVV9re97xMBqH_RWX_9coqqj7hLD993Dw?e=AOsDzF",
        },
        {
          title: "Email Intent Classification",
          description:
            "Email intent classification is an AI-driven process that automatically analyzes incoming emails to identify their purpose - such as confirmations, inquiries, or complaints - so they can be routed and handled quickly without manual review.",
          icon: Mail,
          iconColor: "text-blue-500",
          pitchDeckLink: "NA",
          documentationLink: "NA",
          demoVideoLink: "NA",
        },
        {
          title: "Freight Tracker",
          description:
            "An AI/ML-driven intelligent scheduling and workforce optimization platform that predicts real-time ETAs, optimizes trailer-driver allocation, and dynamically adapts to traffic, cargo, and regulatory constraints boosting logistics efficiency while reducing delays and idle time",
          icon: Truck,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/DT%20-%20Assets/All%20Assets%20-%20Pitch%20Deck/New%20Pitch%20-%20Updated/PDFs/CREATIVE_FreightTracker.pdf?CT=1759838222868&OR=ItemsView",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FFreight%20Tracker%2F09%20Meetings%20%26%20Misc%2FHigh%20Level%20Proposed%20Solution%20Diagram%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FFreight%20Tracker%2F09%20Meetings%20%26%20Misc&p=true&ga=1",
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
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/DT%20-%20Assets/All%20Assets%20-%20Pitch%20Deck/New%20Pitch%20-%20Updated/PDFs/CREATIVE_Knowledge_bot%20Pitchdeck_Final.pdf?CT=1759838841072&OR=ItemsView",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FKnowledge%20Bot%2FDocuments%2FHLD%5FDocumentation%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FKnowledge%20Bot%2FDocuments&p=true&ga=1&LOF=1",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FKnowledge%20Bot%2FDocuments%2FKnowledge%5Fbot%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ea0c162d6%2D05d3%2D4ef6%2D9c7b%2D209c4b0a6972",
        },
        {
          title: "LLM4ICS",
          icon: Brain,
          iconColor: "text-blue-500",
          description:
            "LLM4ICS converts natural-language instructions into PLC- ready Instruction List (IL) code with bidirectional generation(Natural Language to Industrial Line Code & Vice Versa), routine auto-creation, and tag import. By automating repetitive programming in Studio 5000, it accelerates development, reduces errors, and cuts manual coding effort , enabling engineers to focus on high-value tasks.",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/DT%20-%20Assets/All%20Assets%20-%20Pitch%20Deck/New%20Pitch%20-%20Updated/PDFs/CREATIVE_Natural%20Language%20to%20PLC%20Instruction%20Generation%20flyer%20version_Final%20.pdf?CT=1759842014727&OR=ItemsView",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FLLM4ICS%2F09%20Meetings%20%26%20Misc%2FLLM4ICS%20architecture%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FLLM4ICS%2F09%20Meetings%20%26%20Misc&p=true&ga=1&LOF=1",
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
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/DT%20-%20Assets/All%20Assets%20-%20Pitch%20Deck/New%20Pitch%20-%20Updated/PDFs/Symbol%20Detection%20Pitch%20Deck.pdf?CT=1759839157082&OR=ItemsView",
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
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/DT%20-%20Assets/All%20Assets%20-%20Pitch%20Deck/New%20Pitch%20-%20Updated/PDFs/RouteOptimization_PitchDeck.pdf?CT=1759840012248&OR=ItemsView",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FRoute%20Optimization%2F04%20Design%2F03%20HLD%20and%20LLD%2FHLD%20Document%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FRoute%20Optimization%2F04%20Design%2F03%20HLD%20and%20LLD&p=true&ga=1&LOF=1",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FRoute%20Optimization%2FLatest%20Documents%2FRoute%20Optimization%20Instruction%20Video%20%2D%20Short%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E1f44116e%2D72d6%2D4b44%2Daf92%2Dbc3b9e01b95c",
        },
        {
          title: "Semantic Search",
          description: "NA",
          icon: Atom,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/DT%20-%20Assets/All%20Assets%20-%20Pitch%20Deck/New%20Pitch%20-%20Updated/PDFs/CREATIVE_Semantic_Search_PitchDeck_Final.pdf?CT=1759839519050&OR=ItemsView",
          documentationLink: "NA",
          demoVideoLink: "NA",
        },
        {
          title: "Multi-Agentic Framework",
          description:
            "Creative Synergies is currently handling travel requests using Excel-based forms. This project intends to convert these forms into a web-based application to manage the end-to-end workflow of travel requests across Domestic, Business, and Work Permit categories. The goal is to streamline submission, approval, and tracking processes for employees, managers, HR, and travel teams.",
          icon: Users,
          iconColor: "text-blue-500",
          pitchDeckLink: "NA",
          documentationLink: "NA",
          demoVideoLink: "NA",
        },
        {
          title: "TFM",
          description:
            "Creative Synergies is currently handling travel requests using Excel-based forms. This project intends to convert these forms into a web-based application to manage the end-to-end workflow of travel requests across Domestic, Business, and Work Permit categories. The goal is to streamline submission, approval, and tracking processes for employees, managers, HR, and travel teams.",
          icon: Layers,
          iconColor: "text-blue-500",
          pitchDeckLink: "NA",
          documentationLink: "NA",
          demoVideoLink: "NA",
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
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/DT%20-%20Assets/All%20Assets%20-%20Pitch%20Deck/New%20Pitch%20-%20Updated/PDFs/CREATIVE_DigiVave%20PitchDeck.pdf?CT=1759838035896&OR=ItemsView",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FDigiVAVE%2FDesign%20Docs%2FDigiVAVE%5FHLD%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FDigiVAVE%2FDesign%20Docs&p=true&ga=1&LOF=1",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/:v:/s/DigitalTechnologies-All/ESugKh1zSyJFtf-E_Wx8emkBirpH5vMvwL3UDaNQrfJUpQ?e=CVGQeo",
        },
        {
          title: "HRSS Power BI Report",
          description:
            "The HRSS Power BI Reporting Solution centralizes and streamlines HR data analysis by transforming flat file data into five interactive reports: Attendance, Background Verification (BGV), Salary Analytics, Headcount Summary, and Headcount Trends. The solution enhances workforce visibility, ensures compliance, and supports strategic decision-making through dynamic, scalable, and actionable insights.",
          icon: LineChart,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/DT%20-%20Assets/All%20Assets%20-%20Pitch%20Deck/New%20Pitch%20-%20Updated/PDFs/CREATIVE_HRSS_Analytics.pdf?CT=1759838720075&OR=ItemsView",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FHRSS%20Power%20BI%20Report%2F04%20Design%2F03%20HLD%20and%20LLD%2FHRSS%20Analytics%20Report%2D%20HLD%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FHRSS%20Power%20BI%20Report%2F04%20Design%2F03%20HLD%20and%20LLD&p=true&ga=1&LOF=1",
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
          icon: Wrench,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/DT%20-%20Assets/All%20Assets%20-%20Pitch%20Deck/New%20Pitch%20-%20Updated/PDFs/CREATIVE_FSM%20PitchDeck.pdf?CT=1759838265787&OR=ItemsView",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FFSM%2F04%20Design%2F03%20HLD%20and%20LLD%2FHLD%20Document%20FSM%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FFSM%2F04%20Design%2F03%20HLD%20and%20LLD&p=true&ga=1&LOF=1",
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
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/DT%20-%20Assets/All%20Assets%20-%20Pitch%20Deck/New%20Pitch%20-%20Updated/PDFs/RouteOptimization_PitchDeck.pdf?CT=1759840012248&OR=ItemsView",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FRoute%20Optimization%2F04%20Design%2F03%20HLD%20and%20LLD%2FHLD%20Document%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FRoute%20Optimization%2F04%20Design%2F03%20HLD%20and%20LLD&p=true&ga=1&LOF=1",
          demoVideoLink:
            "https://globalcsg-my.sharepoint.com/personal/renuka_gaddam_global-csg_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Frenuka%5Fgaddam%5Fglobal%2Dcsg%5Fcom%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FScreen%20Recording%202025%2D05%2D29%20192527%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E75af0642%2D6f5e%2D47cd%2D9f03%2Db59070dd9f54",
        },
      ],
    },
    {
      name: "Internet of Things (IoT)",
      items: [
        {
          title: "Creative’s MidStream Shield",
          description:
            "Real-Time Oil & Gas Incident Monitoring Solution: MidStream Shield is a real-time oil & gas incident monitoring solution that leverages IoT sensors (pressure, temperature, leak detection) to ensure safety and reliability in midstream operations. With a live map-based dashboard, instant Kafka-driven alerts, and detailed incident logging with analytics, it provides zone-level visibility, rapid escalation workflows, and full audit readiness. Its scalable, modular design makes integration seamless across existing systems.",
          icon: RadioTower,
          iconColor: "text-blue-500",
          pitchDeckLink: "NA",
          documentationLink: "NA",
          demoVideoLink: "NA",
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
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/DT%20-%20Assets/All%20Assets%20-%20Pitch%20Deck/New%20Pitch%20-%20Updated/PDFs/CREATIVE_Knowledge_bot%20Pitchdeck_Final.pdf?CT=1759838841072&OR=ItemsView",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FKnowledge%20Bot%2FDocuments%2FHLD%5FDocumentation%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FKnowledge%20Bot%2FDocuments&p=true&ga=1&LOF=1",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FKnowledge%20Bot%2FDocuments%2FKnowledge%5Fbot%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ea0c162d6%2D05d3%2D4ef6%2D9c7b%2D209c4b0a6972",
        },
        {
          title: "LMS",
          description:
            "LMS (Learning Management System) is  software platform used to create, Nomination, manage, and track  courses or training programs.",
          icon: GraduationCap,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/DT%20-%20Assets/All%20Assets%20-%20Pitch%20Deck/New%20Pitch%20-%20Updated/PDFs/LMS_PitchDeck.pdf?CT=1759838997438&OR=ItemsView",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FLMS%2F04%20Design%2F03%20HLD%20and%20LLD%2FLMS%2DHigh%5FLevel%5FDesign%5FDoc%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FLMS%2F04%20Design%2F03%20HLD%20and%20LLD&p=true&ga=1&LOF=1",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FLMS%2FLMS%5FRecodings%2FLMS%5Fshort%5Foverview%5Frecording%5F02%2DJune%2D2025%2Emp4&ga=1&LOF=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E9a344bc3%2D900e%2D4f69%2D9ec5%2Dfb61e78924a6",
        },
      ],
    },
    {
      name: "Process Automation & Optimization",
      items: [
        {
          title: "Automated Test Case Generation",
          description:
            "Automatically convert plain-text requirements or user stories into accurate test cases and BDD scenarios using LLMs with RAG. Supports both manual and automated testing, with continuous improvement via domain-specific context.",
          icon: SquarePen,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/DT%20-%20Assets/All%20Assets%20-%20Pitch%20Deck/New%20Pitch%20-%20Updated/PDFs/CREATIVE_GenAIDrivenTestCaseGeneration_PitchDeck_v3.pdf?CT=1759838545226&OR=ItemsView",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FGen%20AI%20Driven%20Test%20Case%20Generator%2F04%20Design%2F03%20HLD%20and%20LLD%2FGenAI%5FDriven%5FTestCase%5FGeneration%2DSoftware%20Architecture%20Design%28HLD%29%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FGen%20AI%20Driven%20Test%20Case%20Generator%2F04%20Design%2F03%20HLD%20and%20LLD&p=true&ga=1&LOF=1",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FGen%20AI%20Driven%20Test%20Case%20Generator%2FRecording%2FGenAI%5FDriven%5FTestCase%5FGeneration%2DShort%5FVideo%2Emp4&ga=1&LOF=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E79d3053c%2D1ac6%2D4257%2Dab85%2D5455c46b5575",
        },
        {
          title: "Automated Test Script Generation ",
          description:
            "Capture user interactions using test script recorder and transform them into structured BDD scenarios, step definitions, and POMs using AI. Instantly integrates with automation frameworks for efficient test execution and reporting.",
          icon: TerminalSquare,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/DT%20-%20Assets/All%20Assets%20-%20Pitch%20Deck/New%20Pitch%20-%20Updated/PDFs/CREATIVE_GenAIDrivenTestAutomationScriptGeneration_PitchDeck.pdf?CT=1759838382046&OR=ItemsView",
          documentationLink:
            "https://globalcsg.sharepoint.com/:b:/s/DigitalTechnologies-All/EULWXqnIW2lLhnURXmD-XGwBllDcDMVM14trGKj0BtMImQ?e=4I0g3K",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/:v:/s/DigitalTechnologies-All/EQoAzQvfpwBBoIBBXEoxaz4BfLXtQRwPYaH1rtHSeZ-oZA?e=2tFKZT",
        },
        {
          title: "Battery Life Optimization",
          description:
            "The Battery Life Optimization project aims to forecast the State of Health (SoH) of electric vehicle batteries using advanced machine learning techniques. The goal is to enable predictive maintenance, optimize route planning, and enhance battery performance through data-driven insights. A RESTful API was developed to serve predictions and visual analytics to a frontend dashboard. ",
          icon: BatteryCharging,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/DT%20-%20Assets/All%20Assets%20-%20Pitch%20Deck/New%20Pitch%20-%20Updated/PDFs/CREATIVE_PitchDeck_battery_optimization_Final.pdf?CT=1759838875064&OR=ItemsView",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FRoute%20Optimization%2F04%20Design%2F03%20HLD%20and%20LLD%2FHLD%20Document%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FRoute%20Optimization%2F04%20Design%2F03%20HLD%20and%20LLD&p=true&ga=1&LOF=1",
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
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/DT%20-%20Assets/All%20Assets%20-%20Pitch%20Deck/New%20Pitch%20-%20Updated/PDFs/CREATIVE_Data%20Quality.pdf?CT=1759837939196&OR=ItemsView",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FData%20Quality%2F04%20Design%2F03%20HLD%20and%20LLD%2FHIGH%20LEVEL%20DESIGN%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FData%20Quality%2F04%20Design%2F03%20HLD%20and%20LLD&p=true&ga=1",
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
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/DT%20-%20Assets/All%20Assets%20-%20Pitch%20Deck/New%20Pitch%20-%20Updated/PDFs/CREATIVE_DigiVave%20PitchDeck.pdf?CT=1759838035896&OR=ItemsView",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FDigiVAVE%2FDesign%20Docs%2FDigiVAVE%5FHLD%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FDigiVAVE%2FDesign%20Docs&p=true&ga=1&LOF=1",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/:v:/s/DigitalTechnologies-All/ESugKh1zSyJFtf-E_Wx8emkBirpH5vMvwL3UDaNQrfJUpQ?e=CVGQeo",
        },
        {
          title: "FSM",
          description:
            "The FSM system streamlines service operations through digital ticketing, technician assignment, and work order tracking. It offers role-based dashboards for efficient workflow management and real-time visibility.",
          icon: Wrench,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/DT%20-%20Assets/All%20Assets%20-%20Pitch%20Deck/New%20Pitch%20-%20Updated/PDFs/CREATIVE_FSM%20PitchDeck.pdf?CT=1759838265787&OR=ItemsView",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FFSM%2F04%20Design%2F03%20HLD%20and%20LLD%2FHLD%20Document%20FSM%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FFSM%2F04%20Design%2F03%20HLD%20and%20LLD&p=true&ga=1&LOF=1",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FFSM%2FDemo%20Video%2FFSM%20Demo%5FShort%2Emp4&ga=1&LOF=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E19aee9dd%2Da3ba%2D4dbb%2D98f3%2Da1ca296fe6f1",
        },
        {
          title: "P&ID",
          description:
            "To develop a solution that can help detect the piping and instrumentation symbols from the diagram using computer vision. The goal is to generate an excel sheet that will act as a starter for creation of MTO sheet which eventually leads to reducing manual efforts from an engineer. ",
          icon: FileSearch,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/DT%20-%20Assets/All%20Assets%20-%20Pitch%20Deck/New%20Pitch%20-%20Updated/PDFs/Symbol%20Detection%20Pitch%20Deck.pdf?CT=1759839157082&OR=ItemsView",
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
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/DT%20-%20Assets/All%20Assets%20-%20Pitch%20Deck/New%20Pitch%20-%20Updated/PDFs/RouteOptimization_PitchDeck.pdf?CT=1759840012248&OR=ItemsView",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FRoute%20Optimization%2F04%20Design%2F03%20HLD%20and%20LLD%2FHLD%20Document%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FRoute%20Optimization%2F04%20Design%2F03%20HLD%20and%20LLD&p=true&ga=1&LOF=1",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FRoute%20Optimization%2FLatest%20Documents%2FRoute%20Optimization%20Instruction%20Video%20%2D%20Short%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E1f44116e%2D72d6%2D4b44%2Daf92%2Dbc3b9e01b95c",
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
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/DT%20-%20Assets/All%20Assets%20-%20Pitch%20Deck/New%20Pitch%20-%20Updated/PDFs/CREATIVE_HRBP_Connect.pdf?CT=1759838646754&OR=ItemsView",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FHRBP%20Connect%2F04%20Design%2F03%20HLD%20and%20LLD%2FHLD%20Document%20HRBP%201%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FHRBP%20Connect%2F04%20Design%2F03%20HLD%20and%20LLD&p=true&ga=1&LOF=1",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FHRBP%20Connect%2FHRBP%2D%20Short%20Video%2Emp4&ga=1&LOF=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E2f94e7bc%2Dd9ce%2D4fc2%2D992e%2D0650fee16438",
        },
        {
          title: "HRSS Power BI Report",
          description:
            "Developed an interactive Power BI dashboard suite for HR analytics, covering attendance, background checks, salaries, and headcount trends using secure demo data to support data-driven workforce decisions.",
          icon: LineChart,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/DT%20-%20Assets/All%20Assets%20-%20Pitch%20Deck/New%20Pitch%20-%20Updated/PDFs/CREATIVE_HRSS_Analytics.pdf?CT=1759838720075&OR=ItemsView",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FHRSS%20Power%20BI%20Report%2F04%20Design%2F03%20HLD%20and%20LLD%2FHRSS%20Analytics%20Report%2D%20HLD%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FHRSS%20Power%20BI%20Report%2F04%20Design%2F03%20HLD%20and%20LLD&p=true&ga=1&LOF=1",
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
