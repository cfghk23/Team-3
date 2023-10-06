import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';

function WorstCourseTable() {
    const courses = [

        { name: "Science", averageScore: 6, rank: 3 },
        { name: "English", averageScore: 7, rank: 2 },
        { name: "Mathematics", averageScore: 8, rank: 1 },
        //... add more courses as needed
    ];

    return (
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
    );
}

export default WorstCourseTable;