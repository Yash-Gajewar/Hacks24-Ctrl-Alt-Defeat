import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import PieChartComponent from './Charts/PieChartComponent'
import UserSidebar from './UserSidebar'
import LinearWithValueLabel from './LinearWithValueLabel'


const totalAmount = 5000000;
const amountPaid = 200000;

const dummyUrls = [
    "https://www.example.com/page1",
    "https://www.example.com/page2",
    "https://www.example.com/page3",
    "https://www.example.com/page4",
    "https://www.example.com/page5",
    // Add more URLs as needed
];

const UserRoom = () => {
    return (

        <div className='flex flex-col'>
            <Header />

            <div className='flex flex-row'>
                <div>
                    <UserSidebar />
                </div>

                <div className='flex flex-col'>

                    <div className='ml-24 mt-10 font-sans text-2xl'>
                        Drawing Room
                    </div>


                    <div className='flex justify-between'>
                        <div className='font-sans text-2xl'>

                        </div>
                        {/* pie chart and amount paid section */}
                        <div className='flex flex-row items-center justify-center ml-24'>
                            <div>
                                {/* pie chart */}
                                <div className='flex flex-col items-center'>
                                    <div>
                                        <PieChartComponent />
                                    </div>

                                    <div>
                                        Work
                                    </div>
                                </div>


                            </div>
                            <div className='ml-24'>
                                {/* pie chart */}
                                <div className='flex flex-col items-center'>
                                    <div>
                                        <PieChartComponent />
                                    </div>

                                    <div>
                                        Amount
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Rooms and their status and pdf documents */}


                    </div>

                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-col mt-10 ml-10 w-full'>
                            <LinearWithValueLabel title={"Flooring"} value={"100"} />
                            <LinearWithValueLabel title={"Painting"} value={"25"} />
                            <LinearWithValueLabel title={"Plumbing"} value={"58"} />
                            <LinearWithValueLabel title={"Furniture"} value={"80"} />
                            <LinearWithValueLabel title={"Trolly"} value={"90"} />

                        </div>

                        <div>

                        </div>

                    </div>






                </div>

            </div>

        </div>

    )
}

export default UserRoom;