import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

export default function ApplicationDetailsForm({user, module, setModule, moduleError, acadYear, setAcadYear, acadYearError, semester, setSemester, semesterError, name, setName, nameError, email, setEmail, emailError, major, setMajor, majorError, studyYear, setStudyYear, studyYearError}) {

  const handleModuleChange = (event) => {
    setModule(event.target.value)
  }
  const handleAcadYearChange = (event) => {
    setAcadYear(event.target.value)
  }
  const handleSemesterChange = (event) => {
    setSemester(event.target.value)
  }
  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const handleMajorChange = (event) => {
    setMajor(event.target.value)
  }
  const handleStudyYearChange = (event) => {
    setStudyYear(event.target.value)
  }

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            required
            id="module"
            name="module"
            label="Module Code"
            value={module}
            onChange={handleModuleChange}
            error={moduleError === "Module not found" || moduleError === "Duplicate Listing exists for current academic year and semester" || moduleError === "Listing for this module code not found"}
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
            error={acadYearError === "Please choose an academic year" || acadYearError === "Duplicate Listing exists for current academic year and semester" || acadYearError === "Listing for corresponding module code and academic year not found"}
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
            error={semesterError === "Please choose a semester" || semesterError === "Duplicate Listing exists for current academic year and semester" || semesterError === "Listing for corresponding module code and semester not found"}
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
            id="name"
            name="name"
            label="Full Name"
            fullWidth
            value={name}
            onChange={handleNameChange}
            error={nameError === "Please enter your name"}
            helperText={nameError}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            value={email}
            onChange={handleEmailChange}
            error={emailError === "Please enter your email"}
            helperText={emailError}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="major"
            name="major"
            label="Major"
            fullWidth
            value={major}
            onChange={handleMajorChange}
            error={majorError === "Please choose your major"}
            helperText={majorError}
          >
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="studyYear"
            name="studyYear"
            label="Year of Study"
            fullWidth
            value={studyYear}
            onChange={handleStudyYearChange}
            select
            error={studyYearError === "Please select your year of study"}
            helperText={studyYearError}
          >
            <MenuItem value={"Year 1"}>Year 1</MenuItem>
            <MenuItem value={"Year 2"}>Year 2</MenuItem>
            <MenuItem value={"Year 3"}>Year 3</MenuItem>
            <MenuItem value={"Year 4"}>Year 4</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </TextField>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}