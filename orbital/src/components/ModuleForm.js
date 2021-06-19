import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function ModuleForm({user, module, setModule, acadYear, setAcadYear, semester, setSemester, moduleCoordinator, setModuleCoordinator, email, setEmail, jobScope, setJobScope}) {

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
      <Typography variant="h6" gutterBottom>
        Module Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            required
            id="module"
            name="module"
            label="Module Code"
            value={module}
            onChange={handleModuleChange}
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
          />
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
            
          />
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