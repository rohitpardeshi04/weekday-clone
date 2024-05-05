import React, { useState, useEffect, useRef } from "react";
import { fetchJobData } from "../api/Services";
import JobCard from "../components/JobCard";
import { CircularProgress, Container, Grid } from "@mui/material";

const JobDashboard = ({ jobData, loading, setLoading }) => {
  const [data, setData] = useState(jobData);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const containerRef = useRef(null);

  // set data initially
  useEffect(() => {
    setData(jobData);
  }, [jobData]);

  //fetch data
  const getJobData = async (offset) => {
    console.log("GET DATA");
    setLoading(true);
    try {
      const result = await fetchJobData(offset);
      setData((prevData) => [...prevData, ...result.jdList]);
      if (result.jdList.length === 0) {
        setHasMore(false);
      }
      setOffset(offset + 1);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // If reached end of page -> call getJobData with updated offset
  const handleScroll = () => {
    console.log(
      window.innerHeight + document.documentElement.scrollTop + 1,
      document.documentElement.offsetHeight,
      loading
    );
    if (
      window.innerHeight + Math.trunc(document.documentElement.scrollTop) + 1 <
        document.documentElement.offsetHeight ||
      loading
    ) {
      return;
    }
    getJobData(offset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div ref={containerRef}>
      <Container>
        <Grid container>
          {data.map((d, index) => (
            <Grid key={index} sx={{ height: "100%" }} p={2} md={4}>
              <JobCard {...d} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <div style={{ width: "100%", textAlign: "center" }}>
        {loading && <CircularProgress />}
        {error && <p>Error: {error}</p>}
        {!loading && !error && data.length === 0 && <p>No jobs found.</p>}
      </div>
    </div>
  );
};

export default JobDashboard;
