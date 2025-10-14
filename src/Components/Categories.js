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
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAgentic%20AI%20Data%20Engineering%20Pipeline%2F09%20Meetings%20and%20Misc%2FAgentic%20AI%20For%20Data%20Pipeline%20Pitch%20Deck%20%281%29%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAgentic%20AI%20Data%20Engineering%20Pipeline%2F09%20Meetings%20and%20Misc&p=true&ga=1",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAgentic%20AI%20Data%20Engineering%20Pipeline%2F09%20Meetings%20and%20Misc%2FAgentic%20AI%20for%20Data%20Pipeline%20Software%20Architecture%20Design%28HLD%29%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAgentic%20AI%20Data%20Engineering%20Pipeline%2F09%20Meetings%20and%20Misc&p=true&ga=1",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAgentic%20AI%20Data%20Engineering%20Pipeline%2F09%20Meetings%20and%20Misc%2FAgentic%5FAI%5FDatapipeline%5FShort%5Fvideo%20%281%29%2Ewebm&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E706eeb40%2Da784%2D4bf6%2D9ca6%2D01d343c9a0f1",
        },
        {
          title: "AI Powered Real Time ETA Prediction",
          description:
            "Real-time Congestion, Unexpected Road Diversions And Vehicle-specific Constraints, Such As Heavy Cargo, Create Unpredictability In Travel Time, Affecting Estimated Arrival Times (ETA). Additionally, Variations In Driver Behavior, Including Speed Fluctuations And Stoppages, Further Impact Delivery Timelines.Implement Machine Learning (ML) Models Trained On Historical Trip Data Continuously Refine Estimated Time Of Arrival (ETA) Using Real-time Updates",
          icon: Plane,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/:b:/s/DigitalTechnologies-All/Ef16ZN9onGBKv-9pl1AhVCYBmdMA8eNiZPSLXWz6UV9snA?e=xLIsrv",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAI%20Powered%20Real%20Time%20ETA%20Prediction%2F04%20Design%2F03%20HLD%20and%20LLD%2FReal%5Ftime%5FETA%5FPrediction%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAI%20Powered%20Real%20Time%20ETA%20Prediction%2F04%20Design%2F03%20HLD%20and%20LLD&p=true&ga=1&LOF=1",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20Demo%20Videos%2FTime%5Fdelay%5Fprediction%5Fv1%2Ewebm&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E59884bd5%2D3293%2D425c%2D8d97%2Dfb6459072300",
        },
        {
          title: "Automated Test Case Generation",
          description:
            "Automatically convert plain-text requirements or user stories into accurate test cases and BDD scenarios using LLMs with RAG. Supports both manual and automated testing, with continuous improvement via domain-specific context.",
          icon: SquarePen,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/:b:/s/DigitalTechnologies-All/EfBFJcSSf6lHlyvD-372UcsBuRDBQ4ZkYDRmoLkryEU_jA?e=QzC7qi",
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
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs%2FCREATIVE%5FGenAIDrivenTestAutomationScriptGeneration%5FPitchDeck%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs&p=true&ga=1",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FGen%20AI%20Driven%20Test%20Automation%20Script%20Generator%2F04%20Design%2F03%20HLD%20and%20LLD%2FCREATIVE%5FGenAI%5FDriven%5FAutomation%5FTestScript%5FGeneration%2DSoftware%20Architecture%20Design%28HLD%29%5FV0%2E2%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FGen%20AI%20Driven%20Test%20Automation%20Script%20Generator%2F04%20Design%2F03%20HLD%20and%20LLD&p=true&ga=1",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FGen%20AI%20Driven%20Test%20Automation%20Script%20Generator%2F10%20Recording%2FGen%5FAI%5FDriven%5FTest%5FScript%5FGenerator%5FShortVideo%5Fv2%2Ewebm&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E5e6a62ca%2Defbd%2D40e8%2D8887%2D478ff262ea00",
        },
        {
          title: "Battery Life Optimization",
          description:
            "The Battery Life Optimization project aims to forecast the State of Health (SoH) of electric vehicle batteries using advanced machine learning techniques. The goal is to enable predictive maintenance, optimize route planning, and enhance battery performance through data-driven insights. A RESTful API was developed to serve predictions and visual analytics to a frontend dashboard. ",
          icon: BatteryCharging,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs%2FPitchDeck%5Fbattery%5Foptimization%20%281%29%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs&p=true&ga=1",
          documentationLink:
            "https://globalcsg.sharepoint.com/:b:/s/DigitalTechnologies-All/EQTrblUmglJNo9mRyW88T38BnCgYZ6OCvDNz-2VLzUeEGg?e=b74oSN",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies-All%2FShared%20Documents%2FDT%20-%20Assets%2FBattery%20Optimization%2Fbattery_health_short_video%2Emp4&referrer=Teams%2ETEAMS-ELECTRON&referrerScenario=teamsSdk_ns-bim",
        },

        {
          title: "Contract and Compliance Analyzer",
          description:
            "An AI-powered Contract & Compliance Analyzer that reviews contracts against critical clauses using GenAI and RAG, ensuring compliance gaps are quickly identified.",
          icon: ClipboardCheck,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FContract%20%26%20Compliance%20Analyzer%2F09%20Meetings%20and%20Misc%2FCREATIVE%5FContract%5Fand%5FCompliance%5FAnalyzer%5FPitchDeck%201%5FFinal%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FContract%20%26%20Compliance%20Analyzer%2F09%20Meetings%20and%20Misc&p=true&ga=1",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FContract%20%26%20Compliance%20Analyzer%2F09%20Meetings%20and%20Misc%2FContract%20%26%20Compliance%20Analyzer%20%2D%20Software%20Architecture%20Design%28HLD%29%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FContract%20%26%20Compliance%20Analyzer%2F09%20Meetings%20and%20Misc&p=true&ga=1",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FContract%20%26%20Compliance%20Analyzer%2F09%20Meetings%20and%20Misc%2Fshort%5Fvideo%5Fcontract%5FAnalyzer%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Eee659f4f%2D0a9f%2D4698%2D98a6%2D5ee796502d52",
        },
        {
          title: "Data Quality",
          icon: Database,
          iconColor: "text-blue-500",
          description:
            "A Data Quality App that detects, explains, and correct anomalies in datasets using natural language, enabling seamlesss and code-free data cleansing.",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs%2FCREATIVE%5FData%20Quality%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs&p=true&ga=1",
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
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FEmail%20Intent%20Classification%2F02%20Pitch%20Deck%2FEmail%20Intent%20Classification%20Pitch%20Deck%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FEmail%20Intent%20Classification%2F02%20Pitch%20Deck&p=true&ga=1A",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FEmail%20Intent%20Classification%2F01%20Design%2FEmail%20Intent%20Classification%20%2D%20Software%20Architecture%20Design%28HLD%29%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FEmail%20Intent%20Classification%2F01%20Design&p=true&ga=1",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FEmail%20Intent%20Classification%2F03%20Asset%20Recording%2FEmail%20Intent%20Classification%20%2D%20Demo%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E3a282b5c%2Dc577%2D4436%2D83ad%2Df6b9594c299b",
        },
        {
          title: "Freight Tracker",
          description:
            "An AI/ML-driven intelligent scheduling and workforce optimization platform that predicts real-time ETAs, optimizes trailer-driver allocation, and dynamically adapts to traffic, cargo, and regulatory constraints boosting logistics efficiency while reducing delays and idle time",
          icon: Truck,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs%2FCREATIVE%5FFreightTracker%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs&p=true&ga=1",
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
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs%2FCREATIVE%5FKnowledge%5Fbot%20Pitchdeck%5FFinal%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs&p=true&ga=1",
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
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs%2FRouteOptimization%5FPitchDeck%2E%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs&p=true&ga=1",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FRoute%20Optimization%2F04%20Design%2F03%20HLD%20and%20LLD%2FHLD%20Document%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FRoute%20Optimization%2F04%20Design%2F03%20HLD%20and%20LLD&p=true&ga=1&LOF=1",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FRoute%20Optimization%2FLatest%20Documents%2FRoute%20Optimization%20Instruction%20Video%20%2D%20Short%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E1f44116e%2D72d6%2D4b44%2Daf92%2Dbc3b9e01b95c",
        },
        {
          title: "Semantic Search",
          description:
            "Semantic Search enables engineers to instantly find the exact procedures they need by understanding the true meaning of their queries, not just keywords. Running fully offline, it locates and highlights the right sections, diagrams, and steps from complex manuals, reducing downtime, preventing errors, and ensuring seamless operations even in remote environments.",
          icon: Atom,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?viewid=1c6be442%2Dc98f%2D44b1%2D8d39%2D852ced6a14e5&ct=1759855803505&or=Teams%2DHL&ga=1&LOF=1&id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs%2FCREATIVE%5FSemantic%5FSearch%5FPitchDeck%5FFinal%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs&isSPOFile=1&xsdata=MDV8MDJ8fGFhZjYwYjhhZjU0YTRhYmIxMDQwMDhkZTA1YzFjMWI4fGE5YzUwYzZjMmVjYzQ2NTM5OWIyNTgwMjRhZjkxODY2fDB8MHw2Mzg5NTQ1MjY4NzAwODE2MDB8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKRFFTSTZJbFJsWVcxelgwRlVVRk5sY25acFkyVmZVMUJQVEU5R0lpd2lWaUk2SWpBdU1DNHdNREF3SWl3aVVDSTZJbGRwYmpNeUlpd2lRVTRpT2lKUGRHaGxjaUlzSWxkVUlqb3hNWDA9fDF8TDJOb1lYUnpMekU1T2pjNU1HTmxaakUxTFdVMVltWXRORE5tT1MwNVkyUXdMVEV4TldJNU5HTXpPRFkwT1Y5ak0ySTROR0l5WVMxaVpUSTVMVFJqWW1NdE9UYzVaaTFrT1RsbVl6VXpNemczWW1aQWRXNXhMbWRpYkM1emNHRmpaWE12YldWemMyRm5aWE12TVRjMU9UZzFOVGc0TmpNeE13PT18YzJiMmI2ZjMyODdhNGRhNzk2MzQwOGRlMDVjMWMxYjd8NTRiYTEyMTI2YzMyNDcxODhiNWRkMWMwMjNiNWY2MDU%3D&sdata=TGpjdnZKc2lIWWY0QzNtSGVPQzdaVHZ4NmdMbWVFRTdnU2JPaTg4aFdwYz0%3D&ovuser=a9c50c6c%2D2ecc%2D4653%2D99b2%2D58024af91866%2Cadhiyamaan%2Emaharajan%40global%2Dcsg%2Ecom",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FSemantic%20Search%2F04%20Design%2F03%20HLD%20and%20LLD%2FSemanticSearch%20High%20Level%20Design%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FSemantic%20Search%2F04%20Design%2F03%20HLD%20and%20LLD&p=true&ga=1&LOF=1",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/:v:/s/DigitalTechnologies-All/EUA2Y5TZTxpGvvyXTJrAiDIBwc26VwImwaWGkgYsKYoPYA?e=GpMlUJ&isSPOFile=1&xsdata=MDV8MDJ8fGZlNzBiYTEwNjZmZjQwMDdhMzU2MDhkZTA1YzFmMjcyfGE5YzUwYzZjMmVjYzQ2NTM5OWIyNTgwMjRhZjkxODY2fDB8MHw2Mzg5NTQ1Mjc2ODc2MTUzMTh8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKRFFTSTZJbFJsWVcxelgwRlVVRk5sY25acFkyVmZVMUJQVEU5R0lpd2lWaUk2SWpBdU1DNHdNREF3SWl3aVVDSTZJbGRwYmpNeUlpd2lRVTRpT2lKUGRHaGxjaUlzSWxkVUlqb3hNWDA9fDF8TDJOb1lYUnpMekU1T2pjNU1HTmxaakUxTFdVMVltWXRORE5tT1MwNVkyUXdMVEV4TldJNU5HTXpPRFkwT1Y5ak0ySTROR0l5WVMxaVpUSTVMVFJqWW1NdE9UYzVaaTFrT1RsbVl6VXpNemczWW1aQWRXNXhMbWRpYkM1emNHRmpaWE12YldWemMyRm5aWE12TVRjMU9UZzFOVGsyTnpjMk1RPT18NWQxZTVlYjhhMGNjNDI2OGY4YTUwOGRlMDVjMWYyNzF8OTc5MzI4YjdmYmYwNGZlY2JmMTY1MGVkOWY0NjJiOGI%3D&sdata=NFVmTVBFK1BiaFJsSzVJUFNSczZucjlacFhRME5wcnNzQTBTVUVTRHFjMD0%3D&ovuser=a9c50c6c-2ecc-4653-99b2-58024af91866%2Cadhiyamaan.maharajan%40global-csg.com",
        },
        {
          title: "AI / ML Powered Invoice Processing.",
          description:
            "Creative Synergies is currently handling travel requests using Excel-based forms. This project intends to convert these forms into a web-based application to manage the end-to-end workflow of travel requests across Domestic, Business, and Work Permit categories. The goal is to streamline submission, approval, and tracking processes for employees, managers, HR, and travel teams.",
          icon: Layers,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInvoice%20Processing%2F09%20Meetings%20and%20Misc%2FCREATIVE%5FInvoiceProcessing%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInvoice%20Processing%2F09%20Meetings%20and%20Misc&p=true&ga=1",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInvoice%20Processing%2F09%20Meetings%20and%20Misc%2FInvoice%20Processing%20Software%20Architecture%20Design%28HLD%29%20%281%29%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInvoice%20Processing%2F09%20Meetings%20and%20Misc&p=true&ga=1",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInvoice%20Processing%2F09%20Meetings%20and%20Misc%2Foriginal%2D0ED14C68%2DE680%2D4A1D%2DA64E%2D9C44E192DB27%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E57dcef80%2De6ca%2D40d2%2Da8d9%2D8e175297c921",
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
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs%2FCREATIVE%5FDigiVave%20PitchDeck%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs&p=true&ga=1",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FDigiVAVE%2FDesign%20Docs%2FDigi%20Vave%20HLD%201%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FDigiVAVE%2FDesign%20Docs&p=true&ga=1&LOF=1",
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
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs%2FCREATIVE%5FHRSS%5FAnalytics%201%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs&p=true&ga=1",
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
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs%2FCREATIVE%5FFSM%20PitchDeck%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs&p=true&ga=1",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FFSM%2F04%20Design%2F03%20HLD%20and%20LLD%2FFSM%2DSoftware%20Architecture%20Design%28HLD%29%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FFSM%2F04%20Design%2F03%20HLD%20and%20LLD&p=true&ga=1&LOF=1",
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
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs%2FRouteOptimization%5FPitchDeck%2E%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs&p=true&ga=1",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FRoute%20Optimization%2F04%20Design%2F03%20HLD%20and%20LLD%2FHLD%20Document%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FRoute%20Optimization%2F04%20Design%2F03%20HLD%20and%20LLD&p=true&ga=1&LOF=1",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FRoute%20Optimization%2FLatest%20Documents%2FRoute%20Optimization%20Instruction%20Video%20%2D%20Short%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E8bac9758%2Dc1e0%2D4858%2Dab5d%2D4be9033cc0b4&isSPOFile=1&xsdata=MDV8MDJ8fDIyNTQ3YzI3MjU5NTQwYjNlMWNlMDhkZGQzZWYzODQyfGE5YzUwYzZjMmVjYzQ2NTM5OWIyNTgwMjRhZjkxODY2fDB8MHw2Mzg4OTk3NDY1NTEwMzAyMjJ8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKRFFTSTZJbFJsWVcxelgwRlVVRk5sY25acFkyVmZVMUJQVEU5R0lpd2lWaUk2SWpBdU1DNHdNREF3SWl3aVVDSTZJbGRwYmpNeUlpd2lRVTRpT2lKUGRHaGxjaUlzSWxkVUlqb3hNWDA9fDF8TDJOb1lYUnpMekU1T2pVMU1USXhaVFUzTFRWaVpUZ3ROR0kyT1MwNE5qWTVMVEJrWWpVeE9EQTFZelF5TjE5ak0ySTROR0l5WVMxaVpUSTVMVFJqWW1NdE9UYzVaaTFrT1RsbVl6VXpNemczWW1aQWRXNXhMbWRpYkM1emNHRmpaWE12YldWemMyRm5aWE12TVRjMU5ETTNOemcxTXpRMk1RPT18MzA3YjI2ZmEyMDliNGRhMGUxY2UwOGRkZDNlZjM4NDJ8ZjQ2MThhMGFkODYwNGQ5ZGI0Njc2YjhiYWI2YjMyMjU%3D&sdata=UTZSYkY4TlVpM0tZRER2TWdza0cyV1h5UWhZZkJaak9XWlY3ek5LV1I3cz0%3D&ovuser=a9c50c6c%2D2ecc%2D4653%2D99b2%2D58024af91866%2Cadhiyamaan%2Emaharajan%40global%2Dcsg%2Ecom",
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
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FMidStream%20Shield%2F09%20Meetings%20and%20Misc%2FMidStream%20Shield%20Real%2DTime%20Oil%20%26%20Gas%20Incident%20Monitoring%20Solution%202%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FMidStream%20Shield%2F09%20Meetings%20and%20Misc&p=true&ga=1",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FMidStream%20Shield%2F09%20Meetings%20and%20Misc%2FMidStream%20Shield%20Real%2DTime%20Oil%20%26%20Gas%20Incident%20Monitoring%20Solution%20Software%20Architecture%20Design%28HLD%29%201%201%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FMidStream%20Shield%2F09%20Meetings%20and%20Misc&p=true&ga=1",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FMidStream%20Shield%2F09%20Meetings%20and%20Misc%2FMSRTOGIMS%20%28MIDSTREAM%20SHIELD%20REAL%2DTIME%20OIL%20And%20GAS%20INCIDENT%20MONITORING%20SOLUTION%2DDemo%29%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E53ab1f0e%2Dcb1e%2D4910%2Da93c%2D5aecf270f74a",
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
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs%2FCREATIVE%5FKnowledge%5Fbot%20Pitchdeck%5FFinal%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs&p=true&ga=1",
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
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs%2FLMS%5FPitchDeck%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs&p=true&ga=1",
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
            "https://globalcsg.sharepoint.com/:b:/s/DigitalTechnologies-All/EfBFJcSSf6lHlyvD-372UcsBuRDBQ4ZkYDRmoLkryEU_jA?e=QzC7qi",
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
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs%2FCREATIVE%5FGenAIDrivenTestAutomationScriptGeneration%5FPitchDeck%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs&p=true&ga=1",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FGen%20AI%20Driven%20Test%20Automation%20Script%20Generator%2F04%20Design%2F03%20HLD%20and%20LLD%2FCREATIVE%5FGenAI%5FDriven%5FAutomation%5FTestScript%5FGeneration%2DSoftware%20Architecture%20Design%28HLD%29%5FV0%2E2%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FGen%20AI%20Driven%20Test%20Automation%20Script%20Generator%2F04%20Design%2F03%20HLD%20and%20LLD&p=true&ga=1",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/stream.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FGen%20AI%20Driven%20Test%20Automation%20Script%20Generator%2F10%20Recording%2FGen%5FAI%5FDriven%5FTest%5FScript%5FGenerator%5FShortVideo%5Fv2%2Ewebm&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E5e6a62ca%2Defbd%2D40e8%2D8887%2D478ff262ea00",
        },
        {
          title: "Battery Life Optimization",
          description:
            "The Battery Life Optimization project aims to forecast the State of Health (SoH) of electric vehicle batteries using advanced machine learning techniques. The goal is to enable predictive maintenance, optimize route planning, and enhance battery performance through data-driven insights. A RESTful API was developed to serve predictions and visual analytics to a frontend dashboard. ",
          icon: BatteryCharging,
          iconColor: "text-blue-500",
          pitchDeckLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs%2FPitchDeck%5Fbattery%5Foptimization%20%281%29%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs&p=true&ga=1",
          documentationLink:
            "https://globalcsg.sharepoint.com/:b:/s/DigitalTechnologies-All/EQTrblUmglJNo9mRyW88T38BnCgYZ6OCvDNz-2VLzUeEGg?e=b74oSN",
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
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs%2FCREATIVE%5FData%20Quality%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs&p=true&ga=1",
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
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs%2FCREATIVE%5FDigiVave%20PitchDeck%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs&p=true&ga=1",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FDigiVAVE%2FDesign%20Docs%2FDigi%20Vave%20HLD%201%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FDigiVAVE%2FDesign%20Docs&p=true&ga=1&LOF=1",
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
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs%2FCREATIVE%5FFSM%20PitchDeck%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs&p=true&ga=1",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FFSM%2F04%20Design%2F03%20HLD%20and%20LLD%2FFSM%2DSoftware%20Architecture%20Design%28HLD%29%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FFSM%2F04%20Design%2F03%20HLD%20and%20LLD&p=true&ga=1&LOF=1",
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
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs%2FSymbol%20Detection%20Pitch%20Deck%20%281%29%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs&p=true&ga=1",
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
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs%2FRouteOptimization%5FPitchDeck%2E%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs&p=true&ga=1",
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
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs%2FCREATIVE%5FHRBP%5FConnect%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs&p=true&ga=1",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FHRBP%20Connect%2F04%20Design%2F03%20HLD%20and%20LLD%2FHRBP%20HLD%201%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FHRBP%20Connect%2F04%20Design%2F03%20HLD%20and%20LLD&p=true&ga=1&LOF=1",
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
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs%2FCREATIVE%5FHRSS%5FAnalytics%201%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FAll%20Assets%20%2D%20Pitch%20Deck%2FNew%20Pitch%20%2D%20Updated%2FPDFs&p=true&ga=1",
          documentationLink:
            "https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FHRSS%20Power%20BI%20Report%2F04%20Design%2F03%20HLD%20and%20LLD%2FHRSS%20Analytics%20Report%2D%20HLD%2Epdf&parent=%2Fsites%2FDigitalTechnologies%2DAll%2FShared%20Documents%2FDT%20%2D%20Assets%2FInternal%20BU%20Projects%2FHRSS%20Power%20BI%20Report%2F04%20Design%2F03%20HLD%20and%20LLD&p=true&ga=1&LOF=1",
          demoVideoLink:
            "https://globalcsg.sharepoint.com/:v:/s/DigitalTechnologies-All/EUM3qWgpxL5ClpSN1lVebmkB0BuxSJKIIA0HEZYGjIPjRg?e=19n0d3",
        },
        {
          title: "Choke Optimization",
          description:
            "AI-Powered Wellhead & Tank Monitoring Solution: Our AI/ML-driven Choke Optimization system uses real-time telemetry data to predict the current choke percentage and forecast future choke positions. This enables operators to proactively optimize well performance, maintain flow stability, and plan for efficient production management.",
          icon: Gauge, // better than Truck
          iconColor: "text-blue-500",
          pitchDeckLink: "NA",
          documentationLink: "NA",
          demoVideoLink: "NA",
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
