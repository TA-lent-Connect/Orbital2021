import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

// const columns = [
//   { id: 'name', label: 'Name', minWidth: 170 },
//   { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
//   {
//     id: 'population',
//     label: 'Population',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'size',
//     label: 'Size\u00a0(km\u00b2)',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'density',
//     label: 'Density',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toFixed(2),
//   },
// ];

// function createData(name, code, population, size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }

// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
// ];

// const useStyles = makeStyles({
//   root: {
//     width: '100%',
//   },
//   container: {
//     maxHeight: 440,
//   },
// });

// export default function StickyHeadTable() {
//   const classes = useStyles();
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Paper className={classes.root}>
//       <TableContainer className={classes.container}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
//               return (
//                 <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//                   {columns.map((column) => {
//                     const value = row[column.id];
//                     return (
//                       <TableCell key={column.id} align={column.align}>
//                         {column.format && typeof value === 'number' ? column.format(value) : value}
//                       </TableCell>
//                     );
//                   })}
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// }

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 24,
  },
  pos: {
    marginBottom: 12,
  },
});

const ViewApplications = ({user, listing, setListingToEdit}) => {
  const classes = useStyles();
  const history = useHistory();

  const handleEdit = () => {
    history.push("/mymodules/editlisting");
    setListingToEdit(listing)
  }

  return listing !== undefined ? (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<KeyboardBackspaceIcon />}
          onClick={() => {
            window.history.back();
          }}
        >
          Back
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={10}>
                  <Typography variant="h6" color="primary">
                    {listing.module}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  {user !== undefined &&
                  listing.user.username === user.username ? (
                    <Tooltip title="Edit Listing">
                      <IconButton
                        variant="outlined"
                        color="primary"
                        onClick={handleEdit}
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                  ) : null}
                </Grid>
              </Grid>

              <Typography variant="h6" component="h2">
                {listing.title}
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                <br></br>
                AY {listing.acadYear}
                <br></br>
                {listing.semester}
                <br></br>
                <br></br>
              </Typography>
              <Divider variant="middle" />
              <Typography variant="body2" color="textPrimary" component="p">
                <br></br>
                Module Coordinator: <br></br>
                {listing.moduleCoordinator} <br></br> <br></br>
                Email: <br></br>
                {listing.email} <br></br> <br></br>
                Jobscope: <br></br>
                {listing.jobScope} <br></br>
                <br></br>
                Number Of Openings: <br></br>
                {listing.numberOfOpenings} <br></br> <br></br>
                Deadline: <br></br>
                {listing.deadline} <br></br> <br></br>
                Requirements: <br></br>
                {listing.requirements} <br></br> <br></br>
                Application Process: <br></br>
                {listing.applicationProcess} <br></br> <br></br>
                Attachments: <br></br>
                link <br></br> <br></br>
                Other information: <br></br>
                {listing.otherInfo} <br></br><br></br>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  ) : null; // Or have some loading screen;
};

export default ViewApplications;