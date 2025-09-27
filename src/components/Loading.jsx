import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center min-h-screen items-center ">
      <div className="flex flex-col items-center">
        
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-4"></div>

        
        <p className="text-gray-600 text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
