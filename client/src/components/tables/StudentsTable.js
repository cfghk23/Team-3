import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';

function StudentsTable() {
    const courses = [
        { name: "John Doe", averageScore: 20, rank: 1 },
        { name: "Tony Stark", averageScore: 30, rank: 2 },
        { name: "Bruce Wayne", averageScore: 40, rank: 3 },
        { name: "Richard Mayor", averageScore: 20, rank: 4 },
        { name: "Tony Luke", averageScore: 30, rank: 5 },
        // { name: "Bruce Wayne", averageScore: 40, rank: 6 },
        // { name: "John Doe", averageScore: 20, rank: 7 },
        // { name: "Tony Stark", averageScore: 30, rank: 8 },
        // { name: "Bruce Wayne", averageScore: 40, rank: 9 },
        // { name: "History of Money", averageScore: 47, rank: 4 },
        // { name: "Needs and Wants", averageScore: 35, rank: 5 },
        //... add more courses as needed
    ];

    return (
        <div className='mx-10 w-full'>
            <h1 className='my-2 text-xl font-bold'>Top Performing Course</h1>
            <Paper elevation={3}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Student Name</TableCell>
                            <TableCell align="right">Score</TableCell>
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

export default StudentsTable;