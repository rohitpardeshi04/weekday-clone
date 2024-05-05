import React, { useState, useEffect } from "react";
import { fetchJobData } from "../api/Services";
import JobCard from "../components/JobCard";
import { Container, Grid } from "@mui/material";

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
      <Container>
        <Grid container>
          {data?.map((d) => (
            <Grid sx={{height:"100%"}} p={2} md={4}>
              <JobCard {...d} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default JobDashboard;
