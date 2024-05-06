export const handleFilter = (filters, jobData, setFilteredData) => {
  const { companyName, jobRole, minExperience, remote, minSalary, location } =
    filters;

  // Filter job data based on all provided filters
  const filteredJobs = jobData.filter((job) => {
    //   company name filter
    const companyNameMatch =
      !companyName ||
      job.companyName.toLowerCase().includes(companyName.toLowerCase());

    // job role filter
    const jobRoleMatch = !jobRole || job.jobRole === jobRole;

    //   Min Experience filter
    const minExperienceMatch =
      minExperience === "" || job.minExp >= parseInt(minExperience);

    // remote filter
    const remoteMatch =
      remote === "" ||
      (remote === true
        ? job.location.toLowerCase().includes("remote")
        : job.location.toLowerCase() !== "remote");

    // Min Base Salary
    const minSalaryMatch =
      minSalary === "" || job.minJdSalary >= parseInt(minSalary);

    //   Location
    const locationMatch =
      location === "" || job.location.toLowerCase() === location.toLowerCase();

    return (
      companyNameMatch &&
      jobRoleMatch &&
      minExperienceMatch &&
      remoteMatch &&
      minSalaryMatch &&
      locationMatch
    );
  });

  setFilteredData(filteredJobs);
};
