import React from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";

const Filters = ({ filters, setFilters }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <Container sx={{ marginTop: 5, marginBottom: 3 }}>
      <Typography mb={1} variant="body1">
        Filters:
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item md={2}>
          <TextField
            sx={{ minWidth: "120px" }}
            fullWidth
            label="Company Name"
            name="companyName"
            variant="outlined"
            value={filters.companyName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item md={2}>
          <TextField
            sx={{ minWidth: "120px" }}
            fullWidth
            select
            label="Job Role"
            name="jobRole"
            variant="outlined"
            value={filters.jobRole}
            onChange={handleChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="frontend">Frontend</MenuItem>
            <MenuItem value="backend">Backend</MenuItem>
            <MenuItem value="android">Android</MenuItem>
            <MenuItem value="ios">Ios</MenuItem>
            <MenuItem value="tech lead">Tech Lead</MenuItem>
          </TextField>
        </Grid>
        <Grid item md={2}>
          <TextField
            sx={{ minWidth: "120px" }}
            fullWidth
            select
            label="Min Experience"
            name="minExperience"
            variant="outlined"
            value={filters.minExperience}
            onChange={handleChange}
          >
            {[...Array(11).keys()].map((num) => (
              <MenuItem key={num} value={num}>
                {num}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item md={2}>
          <TextField
            sx={{ minWidth: "120px" }}
            fullWidth
            select
            label="Remote/On-site"
            name="remote"
            variant="outlined"
            value={filters.remote}
            onChange={handleChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value={true}>Remote</MenuItem>
            <MenuItem value={false}>On-site</MenuItem>
          </TextField>
        </Grid>
        <Grid item md={2}>
          <TextField
            sx={{ minWidth: "120px" }}
            fullWidth
            select
            label="Min Base Salary"
            name="minSalary"
            variant="outlined"
            value={filters.minSalary}
            onChange={handleChange}
          >
            {[...Array(11).keys()].map((num) => (
              <MenuItem key={num * 10} value={num * 10}>
                USD {num * 10}K
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item md={2}>
          <TextField
            sx={{ minWidth: "120px" }}
            fullWidth
            select
            label="Location"
            name="location"
            variant="outlined"
            value={filters.location}
            onChange={handleChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="delhi ncr">Delhi NCR</MenuItem>
            <MenuItem value="mumbai">Mumbai</MenuItem>
            <MenuItem value="bangalore">Bangalore</MenuItem>
            <MenuItem value="chennai">Chennai</MenuItem>
          </TextField>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Filters;
