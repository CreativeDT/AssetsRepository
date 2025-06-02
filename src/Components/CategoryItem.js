import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faFile,
  faFileAlt,
  faVideo,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  Brain,
  Bot,
  Database,
  FileSpreadsheet,
  Map,
  Battery,
} from "lucide-react";
const CategoryItem = ({
  title,
  description,
  viewLink,
  categoryName,
  icon,
  iconColor,
  pitchDeckLink,
  documentationLink,
  openVideoModal,
  demoVideoLink,
}) => {
  const [showVideo, setShowVideo] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const descriptionLimit = 60; // Adjust this value as needed

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedDescription = isExpanded
    ? description
    : description.length > descriptionLimit
    ? description.slice(0, descriptionLimit) + "..."
    : description;
  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     if (e.key === 'Escape') setShowVideo(false);
  //   };

  //   if (showVideo) window.addEventListener('keydown', handleKeyDown);
  //   return () => window.removeEventListener('keydown', handleKeyDown);
  // }, [showVideo]);
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-md h-full flex flex-col">
      {/* <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"> */}
      <div className="mb-4">
        <FontAwesomeIcon
          icon={icon}
          className={`text-4xl mb-3 ${
            iconColor || "text-blue-500 bg-blue-100 p-3 rounded-full"
          }`}
        />
        {icon &&
          React.createElement(icon, {
            className: `w-12 h-12 mb-3 ${
              iconColor || "text-blue-500"
            } p-3 rounded-full bg-blue-100`,
          })}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {/* <p className="text-sm text-blue-400 italic mt-2 text-xs"> {categoryName}</p> */}
      </div>

      <div className="mb-4 flex-grow">
        <p className="text-gray-600 mb-2">
          {displayedDescription}
          {description.length > descriptionLimit && !isExpanded && (
            <button
              onClick={toggleExpand}
              className="text-blue-500 ml-1 text-sm"
            >
              Read more
            </button>
          )}
          {description.length > descriptionLimit && isExpanded && (
            <button
              onClick={toggleExpand}
              className="text-blue-500 ml-1 text-sm"
            >
              Read less
            </button>
          )}
        </p>
      </div>
      <div className="mt-auto flex flex-col space-y-1 items-start">
        {pitchDeckLink && (
          <a
            href={pitchDeckLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-light text-sm"
          >
            <FontAwesomeIcon icon={faFile} className="mr-2 text-sm" />
            Pitch Deck →
          </a>
        )}
        {documentationLink && (
          <a
            href={documentationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-light text-sm"
          >
            <FontAwesomeIcon icon={faFileAlt} className="mr-2 text-sm" />
            Documentation →
          </a>
        )}
        {demoVideoLink && (
          <a
            href={demoVideoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-light text-sm flex items-center"
          >
            <FontAwesomeIcon icon={faVideo} className="mr-2 text-sm" />
            Demo Video →
          </a>
        )}

        {/* {showVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg w-full max-w-4xl">
              <div className="p-4">
                <iframe
                  src={demoVideoLink}
                  width="100%"
                  height="500"
                  frameBorder="0"
                  allowFullScreen
                  title={title}
                  className="rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
              <button
                onClick={() => setShowVideo(false)}
                className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium"
              >
                Close Player
              </button>
            </div>
          </div>
        )} */}

        {/* {showVideo && (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-xl w-full max-w-4xl mx-4 overflow-hidden shadow-2xl">
   
      <div className="aspect-video w-full bg-black">
        <iframe
          src={demoVideoLink}
          className="w-full h-full"
          allowFullScreen
          title={title}
        />
      </div>
      
      
      <button
        onClick={() => setShowVideo(false)}
        className="w-full py-4 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium flex items-center justify-center gap-2"
      >
        <span>Close Player</span>
        <span className="text-xs opacity-70">(ESC)</span>
      </button>
    </div>
  </div>
)} */}
      </div>
    </div>
  );
};

export default CategoryItem;
