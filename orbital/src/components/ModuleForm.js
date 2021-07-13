import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

export default function ModuleForm({user, module, setModule, moduleError, acadYear, setAcadYear, acadYearError, semester, setSemester, semesterError, moduleCoordinator, setModuleCoordinator, moduleCoordinatorError, email, setEmail, emailError, jobScope, setJobScope}) {

  const handleModuleChange = (event) => {
    setModule(event.target.value)
  }
  const handleAcadYearChange = (event) => {
    setAcadYear(event.target.value)
  }
  const handleSemesterChange = (event) => {
    setSemester(event.target.value)
  }
  const handleModuleCoordinatorChange = (event) => {
    setModuleCoordinator(event.target.value)
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const handleJobScopeChange = (event) => {
    setJobScope(event.target.value)
  }

  return (
    <React.Fragment>
      {/* <Typography variant="h6" gutterBottom>
        Module Information
      </Typography> */}
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            required
            id="module"
            name="module"
            label="Module Code"
            value={module}
            onChange={handleModuleChange}
            error={moduleError === "Module not found" || moduleError === "Duplicate Listing exists for current academic year and semester"}
            helperText={moduleError}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="acadYear"
            name="acadYear"
            label="Academic Year"
            fullWidth
            value={acadYear}
            onChange={handleAcadYearChange}
            select
            error={acadYearError === "Please choose an academic year" || acadYearError === "Duplicate Listing exists for current academic year and semester"}
            helperText={acadYearError}
          >
            <MenuItem value={"2021/2022"}>2021/2022</MenuItem>
            <MenuItem value={"2022/2023"}>2022/2023</MenuItem>
            <MenuItem value={"2023/2024"}>2023/2024</MenuItem>
            <MenuItem value={"2024/2025"}>2024/2025</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="semester"
            name="semester"
            label="Semester"
            fullWidth
            value={semester}
            onChange={handleSemesterChange}
            select
            error={semesterError === "Please choose a semester" || semesterError === "Duplicate Listing exists for current academic year and semester"}
            helperText={semesterError}
          >
            <MenuItem value={"Semester 1"}>Semester 1</MenuItem>
            <MenuItem value={"Semester 2"}>Semester 2</MenuItem>
            <MenuItem value={"Special Term 1"}>Special Term 1</MenuItem>
            <MenuItem value={"Special Term 2"}>Special Term 2</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="moduleCoordinator"
            name="moduleCoordinator"
            label="Module Coordinator"
            defaultValue={user.name}
            fullWidth
            value={moduleCoordinator}
            onChange={handleModuleCoordinatorChange}
            error={moduleCoordinatorError === "Please enter your name"}
            helperText={moduleCoordinatorError}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            defaultValue={user.email}
            fullWidth
            value={email}
            onChange={handleEmailChange}
            error={emailError === "Please enter your email"}
            helperText={emailError}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="jobScope"
            name="jobScope"
            label="Job Scope"
            multiline
            rows={8}
            fullWidth
            value={jobScope}
            onChange={handleJobScopeChange}

          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}