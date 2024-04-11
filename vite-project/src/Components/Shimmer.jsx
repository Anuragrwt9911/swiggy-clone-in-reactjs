import React from "react";

const Shimmer = () => {
  return (
    <div class="flex justify-center items-center h-screen">
      <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24 animate-spin bg-gradient-to-r from-blue-400 to-orange-500 "></div>
    </div>
  );
};

export default Shimmer;
