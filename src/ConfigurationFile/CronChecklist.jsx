import React, { useState } from "react";
import Cron from "react-js-cron";
import "react-js-cron/dist/styles.css";

const CronChecklist = () => {
  const [cronExpression, setCronExpression] = useState("0 0 * * *");

  const handleCronChange = (newCron) => {
    setCronExpression(newCron);
  };

  // Example of running a task based on the cron expression
  // This is a basic example, real implementation might need more sophisticated handling
  const handleTaskExecution = () => {
    console.log(`Executing task based on cron: ${cronExpression}`);
  };

  return (
    <div className="my-2 border-2 border-dashed flex items-center p-2 rounded-md border-gray-300">
      
      <Cron value={cronExpression} setValue={handleCronChange} />
      {/* <button onClick={handleTaskExecution}>Run Task</button> */}
    </div>
  );
};

export default CronChecklist