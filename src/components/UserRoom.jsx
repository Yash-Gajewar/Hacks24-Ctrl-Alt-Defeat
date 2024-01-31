import React from 'react';
import Header from './Header';
import PieChartComponent from './Charts/PieChartComponent';
import UserSidebar from './UserSidebar';
import LinearWithValueLabel from './LinearWithValueLabel';
import { Typography } from '@mui/material'; // Assuming you are using MUI v5
import './styles/UserRoom.css';

const totalAmount = 5000000;
const amountPaid = 200000;

const UserRoom = () => {
    return (
        <div className="parent-div flex flex-col">
            <div className="grid grid-cols-4 m-3">
                <div className="col-span-1">
                    <UserSidebar />
                </div>

                <div className="col-span-3 flex flex-col gap-2">
                    <Typography sx={{ fontVariant: 'all-petite-caps', letterSpacing: '5px', color: 'white', fontSize: '60px', mt: '30px', mb: '30px', fontWeight: 'bold' }}>Drawing Room</Typography>

                    <div className="stats-card grid justify-between">
                        <div className="font-sans text-2xl"></div>
                        {/* pie chart and amount paid section */}
                        <div className="grid grid-cols-2 gap-20 mb-11">
                            <div className="cols-span-1 bg-slate-800 rounded">
                                {/* pie chart */}
                                <div className="flex flex-col items-center">
                                    <Typography variant='h4' sx={{ color: 'white', fontSize: '25px', mt: '20px' }}>Work</Typography>
                                    <PieChartComponent />
                                </div>
                            </div>
                            <div className="cols-span-1 bg-slate-800 rounded">
                                {/* pie chart */}
                                <div className="flex flex-col items-center">
                                    <Typography variant="h4" sx={{ color: 'white', fontSize: '25px', mt: '20px' }}>Amount</Typography>
                                    <PieChartComponent />
                                </div>
                            </div>
                        </div>

                        {/* Rooms and their status and pdf documents */}
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        <div className="col-span-2 w-full">
                            <LinearWithValueLabel title={'Flooring'} value={100} />
                            <LinearWithValueLabel title={'Painting'} value={25} />
                            <LinearWithValueLabel title={'Plumbing'} value={58} />
                            <LinearWithValueLabel title={'Furniture'} value={80} />
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserRoom;
