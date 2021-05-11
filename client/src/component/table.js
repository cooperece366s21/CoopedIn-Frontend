import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import api, {getTable} from '../services/api';
//api.getTable(){};
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});
function createData(name, company, location, id, job_title) {
    return { name, company, location, id, job_title };
}

const rows = [
    createData('Solar panel person', "NYC Dept", "NY", 24, 4.0),
    createData('Frontend Dev', "Uhhhh Spotify", "Remote", 37, 4.3),
    createData('Electrician', "Cooper Union", "East Village", 24, 6.0),
    createData('Robot Controller', "Microsoft", "CA", 67, 4.3),
    createData('Architect', "Bloomberg", "NJ", 49, 3.9),
];

class BasicTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TableContainer component={Paper}>
                <Table className={useStyles.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Job Title </TableCell>
                            <TableCell align="right">Company</TableCell>
                            <TableCell align="right">Location</TableCell>
                            <TableCell align="right">id</TableCell>
                            <TableCell align="right">Job Type</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.company}</TableCell>
                                <TableCell align="right">{row.location}</TableCell>
                                <TableCell align="right">{row.id}</TableCell>
                                <TableCell align="right">{row.job_title}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        );
    }
}
export default BasicTable;