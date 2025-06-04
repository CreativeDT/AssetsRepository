// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFile, faFileAlt, faVideo } from "@fortawesome/free-solid-svg-icons";

// const CategoryItem = ({
//   title,
//   description,
//   viewLink,
//   categoryName,
//   icon,
//   iconColor,
//   pitchDeckLink,
//   documentationLink,
//   openVideoModal,
//   demoVideoLink,
// }) => {
//   const isHRSSMobility = title === "HRSS Mobility";
//   const [isHovered, setIsHovered] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);

//   const descriptionLimit = 60;

//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const displayedDescription = isExpanded
//     ? description
//     : description.length > descriptionLimit
//     ? description.slice(0, descriptionLimit) + "..."
//     : description;

//   return (
//     <div
//       className="bg-white p-6 rounded-lg shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-md h-full flex flex-col relative group overflow-hidden font-sans font-medium"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Glassmorphism Overlay */}
//       {isHRSSMobility && isHovered && (
//         <div className="absolute inset-0 bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-white/10 z-10 flex items-center justify-center pointer-events-none rounded-lg">
//           <span className="text-gray-900 text-4xl tracking-wide">
//             Upcoming Asset
//           </span>
//         </div>
//       )}

//       {/* Card content still visible behind blur */}
//       <div className="mb-4 z-0">
//         {icon &&
//           React.createElement(icon, {
//             className: `w-12 h-12 mb-3 ${
//               iconColor || "text-blue-500"
//             } p-3 rounded-full bg-blue-100`,
//           })}
//         <h3 className="text-xl mb-2">{title}</h3>
//       </div>

//       <div className="mb-4 flex-grow z-0">
//         <p className="text-gray-600 mb-2">
//           {displayedDescription}
//           {description.length > descriptionLimit && !isExpanded && (
//             <button
//               onClick={toggleExpand}
//               className="text-blue-500 ml-1 text-sm"
//             >
//               Read more
//             </button>
//           )}
//           {description.length > descriptionLimit && isExpanded && (
//             <button
//               onClick={toggleExpand}
//               className="text-blue-500 ml-1 text-sm"
//             >
//               Read less
//             </button>
//           )}
//         </p>
//       </div>

//       <div className="mt-auto flex flex-col space-y-1 items-start z-0">
//         {pitchDeckLink && (
//           <a
//             href={pitchDeckLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
//           >
//             <FontAwesomeIcon icon={faFile} className="mr-2 text-sm" />
//             Pitch Deck →
//           </a>
//         )}
//         {documentationLink && (
//           <a
//             href={documentationLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
//           >
//             <FontAwesomeIcon icon={faFileAlt} className="mr-2 text-sm" />
//             Documentation →
//           </a>
//         )}
//         {demoVideoLink && (
//           <a
//             href={demoVideoLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
//           >
//             <FontAwesomeIcon icon={faVideo} className="mr-2 text-sm" />
//             Demo Video →
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoryItem;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFileAlt, faVideo } from "@fortawesome/free-solid-svg-icons";

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
  const isHRSSMobility = title === "HRSS Mobility";
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const descriptionLimit = 60;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedDescription = isExpanded
    ? description
    : description.length > descriptionLimit
    ? description.slice(0, descriptionLimit) + "..."
    : description;

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-md h-full flex flex-col relative group overflow-hidden font-sans font-medium"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glassmorphism Overlay */}
      {isHRSSMobility && isHovered && (
        <div className="absolute inset-0 bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-white/10 z-10 flex items-center justify-center pointer-events-none rounded-lg">
          <span className="text-gray-900 text-4xl tracking-wide">
            Upcoming Asset
          </span>
        </div>
      )}

      {/* Card content */}
      <div className="mb-4 z-0">
        {icon &&
          React.createElement(icon, {
            className: `w-12 h-12 mb-3 ${
              iconColor || "text-blue-500"
            } p-3 rounded-full bg-blue-100`,
          })}
        <h3 className="text-xl mb-2">{title}</h3>
      </div>

      <div className="mb-4 flex-grow z-0">
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

      <div className="mt-auto flex flex-col space-y-1 items-start z-0">
        {/* Pitch Deck */}
        {pitchDeckLink && pitchDeckLink !== "NA" ? (
          <a
            href={pitchDeckLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
          >
            <FontAwesomeIcon icon={faFile} className="mr-2 text-sm" />
            Pitch Deck →
          </a>
        ) : (
          <div className="text-gray-500 text-sm flex items-center">
            <FontAwesomeIcon icon={faFile} className="mr-2 text-sm" />
            Pitch Deck (NA)
          </div>
        )}

        {/* Documentation */}
        {documentationLink && documentationLink !== "NA" ? (
          <a
            href={documentationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
          >
            <FontAwesomeIcon icon={faFileAlt} className="mr-2 text-sm" />
            Documentation →
          </a>
        ) : (
          <div className="text-gray-500 text-sm flex items-center">
            <FontAwesomeIcon icon={faFileAlt} className="mr-2 text-sm" />
            Documentation (NA)
          </div>
        )}

        {/* Demo Video */}
        {demoVideoLink && demoVideoLink !== "NA" ? (
          <a
            href={demoVideoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
          >
            <FontAwesomeIcon icon={faVideo} className="mr-2 text-sm" />
            Demo Video →
          </a>
        ) : (
          <div className="text-gray-500 text-sm flex items-center">
            <FontAwesomeIcon icon={faVideo} className="mr-2 text-sm" />
            Demo Video (NA)
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryItem;
