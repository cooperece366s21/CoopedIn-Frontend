import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
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
            jobs_PartTime: null,
            jobs_FullTime: null,
            jobs_Internship: null,
            jobs_Coop: null
        };
    }

    async componentDidMount() {
        const job_data_PartTime = await api.getTable_PartTime();
        const job_data_FullTime = await api.getTable_FullTime();
        const job_data_Internship = await api.getTable_Internship();
        const job_data_Coop = await api.getTable_Coop();
        this.setState({jobs_PartTime: job_data_PartTime,
            jobs_FullTime: job_data_FullTime,
            jobs_Internship: job_data_Internship,
            jobs_Coop: job_data_Coop})
        // this.setState({jobs_FullTime: job_data_FullTime})
        // this.setState({jobs_Internship: job_data_Internship})
        // this.setState({jobs_Coop: job_data_Coop})
    }

    render() {
        const {jobs_PartTime} = this.state;
        const {jobs_FullTime} = this.state;
        //console.log(this.state);
        const {jobs_Internship} = this.state;
        const {jobs_Coop} = this.state;
        if (jobs_PartTime) {
            return (
                <TableContainer component={Paper}>
                    <Table className={useStyles.table}>
                        <thead>
                        <tr>{header.map((h, i) => <th key={i}>{h}</th>)}</tr>
                        </thead>
                        <tbody>
                        {jobs_PartTime.jobPostings.map((postings, i) => {
                            return postings.jobPostItems.map((data, j) => {
                                console.log(data);
                                return (
                                    <tr key={`row-${j}`}>
                                        <td>{data.id}</td>
                                        <td>{data.company}</td>
                                        <td>{data.jobTitle}</td>
                                        <td>{data.available}</td>
                                        <td>{data.location}</td>
                                    </tr>
                                );
                            });
                        })}
                        {jobs_FullTime.jobPostings.map((postings, i) => {
                            return postings.jobPostItems.map((data, j) => {
                                console.log(data);
                                return (
                                    <tr key={`row-${j}`}>
                                        <td>{data.id}</td>
                                        <td>{data.company}</td>
                                        <td>{data.jobTitle}</td>
                                        <td>{data.available}</td>
                                        <td>{data.location}</td>
                                    </tr>
                                );
                            });
                        })}
                        {jobs_Internship.jobPostings.map((postings, i) => {
                            return postings.jobPostItems.map((data, j) => {
                                console.log(data);
                                return (
                                    <tr key={`row-${j}`}>
                                        <td>{data.id}</td>
                                        <td>{data.company}</td>
                                        <td>{data.jobTitle}</td>
                                        <td>{data.available}</td>
                                        <td>{data.location}</td>
                                    </tr>
                                );
                            });
                        })}
                        {jobs_Coop.jobPostings.map((postings, i) => {
                            return postings.jobPostItems.map((data, j) => {
                                console.log(data);
                                return (
                                    <tr key={`row-${j}`}>
                                        <td>{data.id}</td>
                                        <td>{data.company}</td>
                                        <td>{data.jobTitle}</td>
                                        <td>{data.available}</td>
                                        <td>{data.location}</td>
                                    </tr>
                                );
                            });
                        })}
                        </tbody>
                    </Table>
                </TableContainer>

            );
        } else {
            return "Table hasn't been loaded";
        }
    }
}

export default BasicTable;
