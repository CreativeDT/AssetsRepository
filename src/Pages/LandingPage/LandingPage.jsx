export default function LandingPage() {
    return (
       <div className=" bg-gray-50">
    {/* //     Navigation Bar
    //     <nav className="bg-gray-800 shadow-sm">
    //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //         <div className="flex items-center justify-between h-16">
    //           <div className="flex-shrink-0">
    //             <span className="text-white font-bold text-xl">DTSolutions</span>
    //           </div>
    //         </div>
    //       </div>
    //     </nav> */}
  
        {/* Hero Section */}
        <main className=" landing max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 md:text-5xl">
            Digital Technologies Asset Repository
            </h2>
            
            <p className="mt-4 text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            One place to discover and know more about DT  Solutions , Accelerators and MVPs.
            </p>
  
            {/* Browse Solutions Button
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg
                             transition-colors duration-200 transform hover:scale-105
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                             text-lg md:px-10 md:py-4">
              Browse Solutions
            </button> */}
          </div>
        </main>
      </div>
    );
  }