import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default function ApplicationForm({numberOfOpenings, setNumberOfOpenings, numberOfOpeningsError, deadline, setDeadline, deadlineError, requirements, setRequirements, applicationProcess, setApplicationProcess}) {

  const handleNumberOfOpeningsChange = (event) => {
    setNumberOfOpenings(event.target.value)
  }
  const handleDeadlineChange = (event) => {
    setDeadline(event.target.value)
  }
  const handleRequirementsChange = (event) => {
    setRequirements(event.target.value)
  }
  const handleApplicationProcessChange = (event) => {
    setApplicationProcess(event.target.value)
  }
    
  return (
    <React.Fragment>
      {/* <Typography variant="h6" gutterBottom>
        Application Details
      </Typography> */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="numberOfOpenings"
            name="numberOfOpenings"
            label="Number Of Openings"
            value={numberOfOpenings}
            onChange={handleNumberOfOpeningsChange}
            error={numberOfOpeningsError === "Please input a valid number"}
            helperText={numberOfOpeningsError}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="deadline"
            name="deadline"
            label="Deadline"
            type="date"
            value={deadline}
            onChange={handleDeadlineChange}
            error={deadlineError === "Please choose a deadline"}
            helperText={deadlineError}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="requirements"
            name="requirements"
            label="Requirements"
            multiline
            rows={8}
            fullWidth
            value={requirements}
            onChange={handleRequirementsChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="applicationProcess"
            name="applicationProcess"
            label="Application Process"
            multiline
            rows={8}
            fullWidth
            value={applicationProcess}
            onChange={handleApplicationProcessChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}