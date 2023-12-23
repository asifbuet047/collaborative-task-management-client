import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useLoggedinUser from '../../../Hooks/useLoggedinUser'
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ClockLoading from '../../DataLoadingComponents/ClockLoading';

function AllTasks() {
    const user = useLoggedinUser();
    const instance = useAxiosSecure();

    const alltasks = useQuery({
        queryKey: ['alltaks'],
        queryFn: () => {
            return instance.get(`/mytasks?id=${user.email}`);
        },
        retry: true
    });

    return (
        <div>
            <div>
                {
                    alltasks.isFetching &&
                    <div>
                        <ClockLoading />
                    </div>
                }
                {
                    alltasks.isSuccess &&
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5'>
                        {
                            alltasks.data.data.map((task, index) =>
                                <Card sx={{ minWidth: 275 }} key={index}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                            {
                                                task.title
                                            }
                                        </Typography>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            {
                                                task.description
                                            }
                                        </Typography>
                                        <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
                                            {
                                                task.deadline
                                            }
                                        </Typography>
                                    </CardContent>

                                </Card>
                            )
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default AllTasks