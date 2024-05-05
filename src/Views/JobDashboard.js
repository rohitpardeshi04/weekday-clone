import React, { useState, useEffect } from "react";
import { fetchJobData } from "../api/services";

const JobDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
     const getJobData = async (offset) => {
       setLoading(true);
       try {
         const result = await fetchJobData(offset);
         setData(result.jdList);
       } catch (error) {
         setError(error.message);
       } finally {
         setLoading(false);
       }
     };


  useEffect(() => {   
    getJobData(0);
  }, []);

  return (
    <>
      <ul>
        {data?.map((d) => (
          <li>{d?.companyName}</li>
        ))}
      </ul>
    </>
  );
};

export default JobDashboard;
