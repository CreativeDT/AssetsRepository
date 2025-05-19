import React, { useState } from 'react';
import CategorySection from './CategorySection';

// import { faCloud, faRobot, faDatabase, faFileAlt, faMapMarkedAlt, faBatteryFull } from '@fortawesome/free-solid-svg-icons';
import { Brain, Bot, Database, FileSpreadsheet, Map, Battery } from 'lucide-react';

const CategoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('AI/ML GenAI  Solutions');
  const [showVideo, setShowVideo] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const openVideoModal = (url) => {
    setSelectedVideoUrl(url);
    setShowVideo(true);
  };

  const closeVideoModal = () => {
    setShowVideo(false);
    setSelectedVideoUrl(null);
  };
  const categories = [
    {
      name: 'AI/ML GenAI  Solutions',
      items: [
        {
          title: 'LLM4ICS',
          icon: Brain,
          iconColor: 'text-blue-500', 
          description: 'To develop a Proof of Concept (PoC) for generating Instruction Line (IL) / Programmable Logic Control (PLC) code using Large Language Models (LLMs)',
          pitchDeckLink: "https://globalcsg.sharepoint.com/:p:/s/DigitalTechnologies-All/EZkw7zLsG-NHkHzOOo0EbkIBIcbBFVuvCQbQ0A6m5X-Bsg?e=kawbX6",
          documentationLink: "https://example.com/docs",
          demoVideoLink: "https://globalcsg.sharepoint.com/:v:/s/DigitalTechnologies-All/EXupQUN9s4BFrIKiL33nHkoBxqN0XMdaaYA86T5ML2Y-cA?e=RetlgP"
        
        
        },
        {
          title: 'Data Quality',
          icon: Database,
          iconColor: 'text-blue-500', 
          description: 'A Data Quality App that detects, explains, and correct anomalies in datasets using natural language, enabling seamlesss and code-free data cleansing.',
          pitchDeckLink: "https://globalcsg.sharepoint.com/:p:/s/DigitalTechnologies-All/EaxI4F9D_1ROrbIW8Y-dsrABj33clQjLjQnObIhqfbvK-w?e=guqaFl",
          documentationLink: "https://example.com/docs",
          demoVideoLink: "https://globalcsg.sharepoint.com/:v:/s/DigitalTechnologies-All/ETcDHmUaaw1AoaVV9re97xMBqH_RWX_9coqqj7hLD993Dw?e=AOsDzF"
        
        
        },
       
        {
            title: 'Knowledge Bot',
            description: 'XYZ...',
            icon: Bot,
            iconColor: 'text-blue-500', 
            pitchDeckLink: "https://example.com/pitch-deck",
            documentationLink: "https://example.com/docs",
            demoVideoLink: "https://example.com/demo-video"
          },{
            title: 'Battery Life Optimization',
            description: 'he Battery Life Optimization project aims to forecast the State of Health (SoH) of electric vehicle batteries using advanced machine learning techniques. The goal is to enable predictive maintenance, optimize route planning, and enhance battery performance through data-driven insights. A RESTful API was developed to serve predictions and visual analytics to a frontend dashboard. ',
            icon: Bot,
            iconColor: 'text-blue-500', 
            pitchDeckLink: "https://example.com/pitch-deck",
            documentationLink: "https://example.com/docs",
            demoVideoLink: "https://example.com/demo-video"
          }
          ,{
            title: 'Route Optimization',
            description: 'The Route Optimization solution offers optimized route planning along with predictions for fuel consumption and carbon emissions for fleet vehicles. ',
            icon: Bot,
            iconColor: 'text-blue-500', 
            pitchDeckLink: "https://globalcsg.sharepoint.com/:p:/r/sites/DigitalTechnologies-All/_layouts/15/Doc.aspx?sourcedoc=%7B18501E7C-9A1C-4516-A1AB-C0C01B96F20B%7D&file=RouteOptimization.pptx&action=edit&mobileredirect=true",
            documentationLink: "https://globalcsg.sharepoint.com/:w:/r/sites/DigitalTechnologies-All/_layouts/15/Doc.aspx?sourcedoc=%7BED4954E2-A365-4CDC-8780-F370716D5056%7D&file=Technical_Design_Document_Template.docx&action=default&mobileredirect=true",
            demoVideoLink: "https://example.com/demo-video"
          }
          ,{
            title: 'P&ID',
            description: 'To develop a solution that can help detect the piping and instrumentation symbols from the diagram using computer vision. The goal is to generate an excel sheet that will act as a starter for creation of MTO sheet which eventually leads to reducing manual efforts from an engineer. ',
            icon: Bot,
            iconColor: 'text-blue-500', 
            pitchDeckLink: "https://globalcsg.sharepoint.com/:p:/s/DigitalTechnologies-All/EY1_xQA02vVImCLeQsl_ehwBTJn_ywC5rUDhtXmzUlRnJg?e=r0qWYV",
            documentationLink: "https://globalcsg.sharepoint.com/:w:/r/sites/DigitalTechnologies-All/_layouts/15/Doc.aspx?sourcedoc=%7BED4954E2-A365-4CDC-8780-F370716D5056%7D&file=Technical_Design_Document_Template.docx&action=default&mobileredirect=true",
            demoVideoLink: "https://teams.microsoft.com/l/meetingrecap?driveId=b%217gdorkqCT02DXNqOVKJDyiwjbs5_rzFBsLa9nZ46kcgUFXg4kLpRQooRvPlI48pc&driveItemId=01QBODHKR7WTK4GZ2OXJALMS45G6CLCCXA&sitePath=https%3A%2F%2Fglobalcsg-my.sharepoint.com%2F%3Av%3A%2Fg%2Fpersonal%2Fanupam_srivastava_global-csg_com%2FET-01cNnTrpAtkudN4SxCuABv_poSZJNYamUzeztFHQ_Ag&fileUrl=https%3A%2F%2Fglobalcsg-my.sharepoint.com%2F%3Av%3A%2Fg%2Fpersonal%2Fanupam_srivastava_global-csg_com%2FET-01cNnTrpAtkudN4SxCuABv_poSZJNYamUzeztFHQ_Ag&iCalUid=040000008200E00074C5B7101A82E00800000000C000F02DD5AFDB010000000000000000100000008AAE73D19BB26D4183937C8E9C03A528&threadId=19%3Ameeting_NWM0YTk4ODYtNjk5MS00ZTdhLThmOGQtNjE3MjZmZWM3YzAw%40thread.v2&organizerId=dddc7527-f474-4f0e-ad20-3da0cd6cab95&tenantId=a9c50c6c-2ecc-4653-99b2-58024af91866&callId=e28b8d9f-2342-4646-9b9a-41bc552b4ac9&threadType=Meeting&meetingType=Scheduled&subType=RecapSharingLink_RecapChiclet"
          }
      ]
    },
    {
      name: 'Process Automation & Optimization',
      items: [
        {
          title: 'Data Quality',
          description: 'A Data Quality App that detects, explains, and correct anomalies in datasets using natural language, enabling seamlesss and code-free data cleansing.',
          icon: Database,
          iconColor: 'text-blue-500', 
          pitchDeckLink: "https://globalcsg.sharepoint.com/:p:/s/DigitalTechnologies-All/EaxI4F9D_1ROrbIW8Y-dsrABj33clQjLjQnObIhqfbvK-w?e=guqaFl",
          documentationLink: "https://example.com/docs",
          demoVideoLink: "https://globalcsg.sharepoint.com/:v:/s/DigitalTechnologies-All/ETcDHmUaaw1AoaVV9re97xMBqH_RWX_9coqqj7hLD993Dw?e=AOsDzF"
        },
        {
          title: 'FSM',
          description: 'AI-powered driver monitoring solutions...',
          icon: Bot,
          iconColor: 'text-blue-500', 
          pitchDeckLink: "https://example.com/pitch-deck",
          documentationLink: "https://example.com/docs",
          demoVideoLink: "https://example.com/demo-video"
        },
        {
            title: 'P&ID',
            description: 'To develop a solution that can help detect the piping and instrumentation symbols from the diagram using computer vision. The goal is to generate an excel sheet that will act as a starter for creation of MTO sheet which eventually leads to reducing manual efforts from an engineer.',
            icon: FileSpreadsheet,
            iconColor: 'text-blue-500', 
            pitchDeckLink: "https://globalcsg.sharepoint.com/:p:/s/DigitalTechnologies-All/EY1_xQA02vVImCLeQsl_ehwBTJn_ywC5rUDhtXmzUlRnJg?e=r0qWYV",
            documentationLink: "https://example.com/docs",
            demoVideoLink: "https://teams.microsoft.com/l/meetingrecap?driveId=b%217gdorkqCT02DXNqOVKJDyiwjbs5_rzFBsLa9nZ46kcgUFXg4kLpRQooRvPlI48pc&driveItemId=01QBODHKR7WTK4GZ2OXJALMS45G6CLCCXA&sitePath=https%3A%2F%2Fglobalcsg-my.sharepoint.com%2F%3Av%3A%2Fg%2Fpersonal%2Fanupam_srivastava_global-csg_com%2FET-01cNnTrpAtkudN4SxCuABv_poSZJNYamUzeztFHQ_Ag&fileUrl=https%3A%2F%2Fglobalcsg-my.sharepoint.com%2F%3Av%3A%2Fg%2Fpersonal%2Fanupam_srivastava_global-csg_com%2FET-01cNnTrpAtkudN4SxCuABv_poSZJNYamUzeztFHQ_Ag&iCalUid=040000008200E00074C5B7101A82E00800000000C000F02DD5AFDB010000000000000000100000008AAE73D19BB26D4183937C8E9C03A528&threadId=19%3Ameeting_NWM0YTk4ODYtNjk5MS00ZTdhLThmOGQtNjE3MjZmZWM3YzAw%40thread.v2&organizerId=dddc7527-f474-4f0e-ad20-3da0cd6cab95&tenantId=a9c50c6c-2ecc-4653-99b2-58024af91866&callId=e28b8d9f-2342-4646-9b9a-41bc552b4ac9&threadType=Meeting&meetingType=Scheduled&subType=RecapSharingLink_RecapChiclet"
          },
          {
            title: 'Route Optimization',
            description: 'The Route Optimization solution offers optimized route planning along with predictions for fuel consumption and carbon emissions for fleet vehicles.',
            icon: Map,
            iconColor: 'text-blue-500', 
            pitchDeckLink: "https://globalcsg.sharepoint.com/:p:/r/sites/DigitalTechnologies-All/_layouts/15/Doc.aspx?sourcedoc=%7B18501E7C-9A1C-4516-A1AB-C0C01B96F20B%7D&file=RouteOptimization.pptx&action=edit&mobileredirect=true",
            documentationLink: "https://globalcsg.sharepoint.com/:w:/r/sites/DigitalTechnologies-All/_layouts/15/Doc.aspx?sourcedoc=%7BED4954E2-A365-4CDC-8780-F370716D5056%7D&file=Technical_Design_Document_Template.docx&action=default&mobileredirect=true",
            demoVideoLink: "https://example.com/demo-video"
              },
          {
            title: 'Battery Life Optimization',
            description: 'The Battery Life Optimization project aims to forecast the State of Health (SoH) of electric vehicle batteries using advanced machine learning techniques. The goal is to enable predictive maintenance, optimize route planning, and enhance battery performance through data-driven insights. A RESTful API was developed to serve predictions and visual analytics to a frontend dashboard. ',
            icon: Battery,
            iconColor: 'text-blue-500', 
            pitchDeckLink: "https://example.com/pitch-deck",
            documentationLink: "https://example.com/docs",
            demoVideoLink: "https://example.com/demo-video"
       
          },
          
          {
            title: 'DigiVAVE',
            description: 'XYZ',
            icon: Bot,
            iconColor: 'text-blue-500', 
            pitchDeckLink: "https://example.com/pitch-deck",
            documentationLink: "https://example.com/docs",
            demoVideoLink: "https://example.com/demo-video"
          }
      ]
    },
    {
      name: 'Data Analytics & Visualization',
      items: [
        {
          title: 'Fuel Analytics',
          description: 'Fuel consumption monitoring systems...',
          icon: Bot,
          iconColor: 'text-blue-500', 
          pitchDeckLink: "https://example.com/pitch-deck",
          documentationLink: "https://example.com/docs",
          demoVideoLink: "https://example.com/demo-video"
        
        },
        {
          title: 'DigiVAVE',
          description: 'XYZ',
          icon: Bot,
          iconColor: 'text-blue-500', 
          pitchDeckLink: "https://example.com/pitch-deck",
          documentationLink: "https://example.com/docs",
          demoVideoLink: "https://example.com/demo-video"
        },
        {
            title: 'HRSS Power BI Report',
            description: 'Fuel consumption monitoring systems...',
            icon: Bot,
            iconColor: 'text-blue-500', 
            pitchDeckLink: "https://example.com/pitch-deck",
            documentationLink: "https://example.com/docs",
            demoVideoLink: "https://example.com/demo-video"
          }
      ]
    },
    {
      name: 'Learning & Knowledge Systems',
      items: [
        {
          title: 'LMS',
          description: 'LMS (Learning Management System) is  software platform used to create, Nomination, manage, and track  courses or training programs.',
          //  viewLink: 'https://globalcsg.sharepoint.com/sites/DT-EngineeringTeam/_layouts/15/embed.aspx?UniqueId=e48ff12b-a202-4f22-a3e4-334a62b3e392&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create',
           icon: Bot,
           iconColor: 'text-blue-500', 
           pitchDeckLink: "https://example.com/pitch-deck",
           documentationLink: "https://example.com/docs",
           demoVideoLink: "https://example.com/demo-video"
      
          },
        {
            title: 'Knowledge Bot',
            description: 'XYZ',
             //viewLink: 'https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/embed.aspx?UniqueId=09ecff85-7b92-4b5f-98f7-34114d105d78&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create',
             icon: Bot,
             iconColor: 'text-blue-500', 
             pitchDeckLink: "https://example.com/pitch-deck",
             documentationLink: "https://example.com/docs",
             demoVideoLink: 'https://globalcsg.sharepoint.com/sites/DigitalTechnologies-All/_layouts/15/embed.aspx?UniqueId=09ecff85-7b92-4b5f-98f7-34114d105d78&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create',
          
            },
          
          
      ]
    } ,
    {
        name: 'Workforce Management & Operations',
        items: [
          {
            title: 'Video Safety',
            description: 'AI-powered driver monitoring solutions...',
            icon: Bot,
            iconColor: 'text-blue-500', 
            pitchDeckLink: "https://example.com/pitch-deck",
            documentationLink: "https://example.com/docs",
            demoVideoLink: "https://example.com/demo-video"
          },{
            title: 'HRSS Mobility',
            description: 'Creative Synergies is currently handling travel requests using Excel-based forms. This project intends to convert these forms into a web-based application to manage the end-to-end workflow of travel requests across Domestic, Business, and Work Permit categories. The goal is to streamline submission, approval, and tracking processes for employees, managers, HR, and travel teams.',
            icon: Bot,
            iconColor: 'text-blue-500', 
            pitchDeckLink: "https://example.com/pitch-deck",
            documentationLink: "https://example.com/docs",
            demoVideoLink: "https://example.com/demo-video"
          },
          {
            title: 'HRSS Power BI Report',
            description: 'Fuel consumption monitoring systems...',
            icon: Bot,
            iconColor: 'text-blue-500', 
            pitchDeckLink: "https://example.com/pitch-deck",
            documentationLink: "https://example.com/docs",
            demoVideoLink: "https://example.com/demo-video"
          }
          ,{
            title: 'HRBP Connect',
            description: 'Creative Synergies is currently handling travel requests using Excel-based forms. This project intends to convert these forms into a web-based application to manage the end-to-end workflow of travel requests across Domestic, Business, and Work Permit categories. The goal is to streamline submission, approval, and tracking processes for employees, managers, HR, and travel teams.',
            icon: Bot,
            iconColor: 'text-blue-500', 
            pitchDeckLink: "https://example.com/pitch-deck",
            documentationLink: "https://example.com/docs",
            demoVideoLink: "https://example.com/demo-video"
          }
        ]
      },
      {
        name: 'Field Service & Operations',
        items: [
          {
            title: 'Video Safety',
            description: 'AI-powered driver monitoring solutions...',
            icon: Bot,
            iconColor: 'text-blue-500', 
            pitchDeckLink: "https://example.com/pitch-deck",
            documentationLink: "https://example.com/docs",
            demoVideoLink: "https://example.com/demo-video"
          
          
          },
          {
            title: 'FSM',
            description: 'AI-powered driver monitoring solutions...',
            icon: Bot,
            iconColor: 'text-blue-500', 
            pitchDeckLink: "https://example.com/pitch-deck",
            documentationLink: "https://example.com/docs",
            demoVideoLink: "https://example.com/demo-video"
          },{
            title: 'Route Optimization',
            description: 'The Route Optimization solution offers optimized route planning along with predictions for fuel consumption and carbon emissions for fleet vehicles.',
            icon: Bot,
            iconColor: 'text-blue-500', 
            pitchDeckLink: "https://globalcsg.sharepoint.com/:p:/r/sites/DigitalTechnologies-All/_layouts/15/Doc.aspx?sourcedoc=%7B18501E7C-9A1C-4516-A1AB-C0C01B96F20B%7D&file=RouteOptimization.pptx&action=edit&mobileredirect=true",
            documentationLink: "https://globalcsg.sharepoint.com/:w:/r/sites/DigitalTechnologies-All/_layouts/15/Doc.aspx?sourcedoc=%7BED4954E2-A365-4CDC-8780-F370716D5056%7D&file=Technical_Design_Document_Template.docx&action=default&mobileredirect=true",
            demoVideoLink: "https://example.com/demo-video"
          }
        ]
      }
  ];
  // const getBaseItems = () => {
  //   if (selectedCategory === 'All') {
  //     return categories.flatMap(category => category.items);
  //   }
  //   return categories.find(cat => cat.name === selectedCategory)?.items || [];
  // };
  const getBaseItems = () => {
    if (selectedCategory === 'All') {
      return categories.flatMap(category => 
        category.items.map(item => ({
          ...item,
          category: category.name  // Add category property
        }))
      );
    }
    const category = categories.find(cat => cat.name === selectedCategory);
    return category ? category.items.map(item => ({
      ...item,
      category: category.name  // Add category property
    })) : [];
  };
  const filteredItems = getBaseItems().filter(item => {
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
      <div className="w-64 bg-gray rounded-lg shadow-md p-6 sticky top-0  top-0 max-h-[80vh] overflow-y-auto border-t border-gray-300" >
        <h2 className="text-lg font-semibold m-4">Categories</h2>
        <nav className="space-y-2 md:space-y-3"> 
        <button
            key="all"
            onClick={() => setSelectedCategory('All')}
            className={`w-full text-left px-4 py-2 rounded-lg ${
              selectedCategory === 'All'
                ? 'bg-blue-100 text-blue-700 font-bold scale-[1.02]'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
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
                ? 'bg-blue-100 text-blue-700 font-bold scale-[1.02]'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
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
            <CategorySection items={filteredItems}  openVideoModal={openVideoModal} />
        </div>
        </main>
     {/* Modal */}
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
      )}
    </div>
    </div>
  );
};


export default CategoriesPage;