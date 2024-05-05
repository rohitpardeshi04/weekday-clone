import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React from "react";

const JobCard = ({
  jdUid,
  jdLink,
  jobDetailsFromCompany,
  maxJdSalary,
  minJdSalary,
  salaryCurrencyCode,
  location,
  minExp,
  maxExp,
  jobRole,
  companyName,
  logoUrl,
}) => {
  return (
    <>
      <Box>
        <Card
          className="job-card"
          sx={{
            padding: 3,
          }}
          variant="outlined"
        >
          <Container>
            {/* last posted chip  */}
            <Chip
              sx={{ fontSize: "9px" }}
              // avatar={<Avatar alt="Time" src="/static/images/avatar/2.jpg" />}
              label="⏳ Posted 10 days ago"
              variant="outlined"
            />

            {/* Company Details */}

            <Grid mt={3} container>
              {/* Logo */}
              <Grid md={2}>
                <img className="company-logo" src={logoUrl} />
              </Grid>

              {/* Company Info */}
              <Grid md={10}>
                <div>
                  <Typography variant="h3"> {companyName}</Typography>{" "}
                </div>
                <div>
                  {" "}
                  <Typography variant="h2"> {jobRole}</Typography>{" "}
                </div>
                <p className="location">{location}</p>
              </Grid>
            </Grid>
            <div className="estimated-salary">
              <Typography variant="body2">
                Estimated Salary: {salaryCurrencyCode}{" "}
                {minJdSalary ? minJdSalary + " -" : ""} {maxJdSalary}
              </Typography>
            </div>

            <div className="about">
              <Typography variant="body1">About Company:</Typography>
              <Typography variant="body2">
                <b>About Us</b>

                <p>{jobDetailsFromCompany}</p>
              </Typography>
            </div>
            <div className="jdLink">
              <Link href={jdLink}>View Job</Link>
            </div>
            <div style={minExp ? {} : { visibility: "hidden" }}>
              <h3>Minimum Experience:</h3>
              <Typography variant="h2"> {minExp} Years</Typography>
            </div>

            <Button
              className="easy-apply"
              sx={{ marginTop: 1 }}
              fullWidth
              variant="contained"
            >
              ⚡ Easy Apply
            </Button>
            <Button
              startIcon={
                <>
                  <Avatar
                    sx={{ width: 24, height: 24 }}
                    alt="Natacha"
                    src="https://weekday-logos-and-images.s3.eu-north-1.amazonaws.com/Mask+Group.png"
                  />
                  <Avatar
                    sx={{ width: 24, height: 24, marginLeft: "4px" }}
                    alt="Natacha"
                    src="https://weekday-logos-and-images.s3.eu-north-1.amazonaws.com/Mask+Group(1).png"
                  />
                </>
              }
              className="referral"
              sx={{ marginTop: 1 }}
              fullWidth
              variant="contained"
            >
              <Typography variant="body2">Unlock referral asks</Typography>
            </Button>
          </Container>
        </Card>
      </Box>
    </>
  );
};

export default JobCard;
