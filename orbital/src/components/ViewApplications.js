import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom'


const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 100 },
  {id: 'major', label: 'Major', minWidth: 100 },
  {id: 'studyYear', label: 'Year of Study', minWidth: 100 },
  {id: 'fileName', label: 'File Uploaded', minWidth: 100},  
  {
    id: 'otherInfo',
    label: 'Other Information',
    minWidth: 170,
  },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function ViewApplications(listingToEdit, applications) {
  const classes = useStyles();
  console.log(listingToEdit)
  console.log(listingToEdit.applications)

  const myApplications = listingToEdit.applications.filter(application => ((application.module === listingToEdit.listingToEdit.module) && (application.acadYear === listingToEdit.listingToEdit.acadYear) && (application.semester === listingToEdit.listingToEdit.semester)))
  console.log(myApplications)


  return (
    <Paper className={classes.root}>
    <h1> Applications for {listingToEdit.listingToEdit.module} </h1>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {myApplications.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    var value = null;
                    if (column.id === 'name') {
                      value = row.user.name;
                    } else if (column.id === 'email') {
                      value = row.email
                    } else if (column.id === 'major') {
                      value = row.major
                    } else if (column.id === 'studyYear') {
                      value = row.studyYear
                    } else if (column.id === 'otherInfo') {
                      value = row.otherInfo
                    } else if (column.id === 'fileName') {
                      value = (
                        <a href="https://www.google.com" target="_blank">
                        {row.fileName}
                        </a>
                      );
                    }
                    console.log(value)
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
