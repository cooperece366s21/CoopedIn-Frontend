import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import * as api from '../services/api';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


//const rows = [
//    createData('Solar panel person', "NYC Dept", "NY", 24, 4.0),
//    createData('Frontend Dev', "Uhhhh Spotify", "Remote", 37, 4.3),
//    createData('Electrician', "Cooper Union", "East Village", 24, 6.0),
//    createData('Robot Controller', "Microsoft", "CA", 67, 4.3),
//    createData('Architect', "Bloomberg", "NJ", 49, 3.9),
//];
const header = ["id", "company", "jobTitle", "availablity", "location"];
class BasicTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: null
        };
    }
    async componentDidMount(){
        const job_data = await api.getTable();
        this.setState({jobs: job_data})
    }

    render() {
        const {jobs} = this.state;
        if (jobs) {
            return (
                <TableContainer component={Paper}>
                    <Table className={useStyles.table} aria-label="simple table">
                        <thead>
                        <tr>{header.map((h, i) => <th key={i}>{h}</th>)}</tr>
                        </thead>
                        <tbody>
                        {jobs.jobPostings.map((data, i) => {
                            return (
                                <tr key={i}>
                                    <td>{data.id}</td>
                                    <td>{data.company}</td>
                                    <td>{data.jobTitle}</td>
                                    <td>{data.available}</td>
                                    <td>{data.location}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </Table>
                </TableContainer>

            );
        } else {
            return <div></div>;
        }
    }
}
export default BasicTable;
