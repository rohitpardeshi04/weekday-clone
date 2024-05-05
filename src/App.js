import React, { useState, useEffect } from "react";
import "./style.css";
import JobDashboard from "./views/JobDashboard";
import { fetchJobData } from "./api/Services"; 

function App() {
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetchJobData(0); 
        setJobData(result.jdList);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <JobDashboard
        jobData={jobData}
        loading={loading}
        setLoading={setLoading}
        error={error}
      />
    </div>
  );
}

export default App;
