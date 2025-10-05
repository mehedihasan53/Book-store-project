import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-9xl">404</h1>
      <h2 className="text-red-400 text-4xl">Page not found</h2>
    </div>
  );
};

export default ErrorPage;
