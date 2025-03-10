import React, { useState, useEffect, useRef } from "react";
import { fetchJobData } from "../api/Services";
import JobCard from "../components/JobCard";
import { CircularProgress, Container, Grid } from "@mui/material";
import Filters from "../components/Filters";
import { handleFilter } from "../utils";

const JobDashboard = ({ jobData, loading, setLoading }) => {
  const [data, setData] = useState(jobData);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const containerRef = useRef(null);
  const [filteredData, setFilteredData] = useState(jobData);

  const [filters, setFilters] = useState({
    companyName: "",
    jobRole: "",
    minExperience: "",
    remote: "",
    minSalary: "",
    location: "",
  });

  useEffect(() => {
    setData(jobData);
  }, [jobData]);

  // Fetch data
  const getJobData = async (offset) => {
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

  // Load more data when reaching end of page
  const handleScroll = () => {
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

  // Handle data when filter changes
  useEffect(() => {
    setLoading(true);
    handleFilter(filters, data, setFilteredData);
    setLoading(false);
  }, [filters, data]);

  return (
    <div ref={containerRef}>
      <Filters filters={filters} setFilters={setFilters} />
      <Container>
        <Grid container>
          {filteredData.map((job, index) => (
            <Grid key={index} sx={{ height: "100%" }} p={2} md={4}>
              <JobCard {...job} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <div style={{ width: "100%", textAlign: "center" }}>
        {loading && <CircularProgress />}
        {error && <p>Error: {error}</p>}
        {!loading && !error && filteredData.length === 0 && (
          <p>No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default JobDashboard;
