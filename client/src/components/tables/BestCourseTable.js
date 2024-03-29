import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';

function CourseTable() {
    const courses = [
        { name: "Investing", averageScore: 60, rank: 1 },
        { name: "Helping Others", averageScore: 59, rank: 2 },
        { name: "Savings", averageScore: 50, rank: 3 },
        // { name: "History of Money", averageScore: 47, rank: 4 },
        // { name: "Needs and Wants", averageScore: 35, rank: 5 },
        //... add more courses as needed
    ];

    return (
        <div className='mx-10'>
            <h1 className='my-2 text-xl font-bold'>Top Performing Course</h1>
            <Paper elevation={3}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Course Name</TableCell>
                            <TableCell align="right">Average Score (out of 10)</TableCell>
                            <TableCell align="right">Rank</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {courses.map((course) => (
                        <TableRow key={course.name}>
                            <TableCell component="th" scope="row">
                                {course.name}
                            </TableCell>
                            <TableCell align="right">{course.averageScore}</TableCell>
                            <TableCell align="right">{course.rank}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </Paper>
        </div>
        
    );
}

export default CourseTable;
