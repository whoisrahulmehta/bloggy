import React, { useEffect, useState } from "react";

function Loading() {
  const [loadingStep, setLoadingStep] = useState(0);
  const [bar, setBAr] =useState(false);
// const [loadingCount , setloadingCount]   = useState("1");

  useEffect(() => {
    let a = 1;
    const timers = [
      setTimeout(() => setLoadingStep(1), 500),
      setTimeout(() => setLoadingStep(2), 2000),
      // setTimeout(() => setLoadingStep(3), 5000),
      setTimeout(()=> setBAr(true), 3000),
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);


  return (
    <div className="content">
      {loadingStep === 1 && (
        <div className="loading1 flex flex-row justify-center items-center">
          <span className="">BLOGGY</span>
        </div>
      )}
      {loadingStep === 2 && (
        <div className="loading flex flex-row justify-center items-center">
          <span>Welcome</span>
        </div>
      )}
      {bar && (
        <div className="loader flex flex-row justify-start items-center">
          <p className="bar2 flex flex-row justify-start items-center"></p>
          <p className="bar"></p>
          {/* <p>Loading :  {loadingCount} %</p> */}
        </div>
      )}

    </div>
  );
}

export default Loading;
