import React from 'react'
import Header from './Header'
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

const ContractorRoom = () => {
    return (

        <div className='flex flex-col'>
            <Header />

            <div className='flex flex-row'>
                <div>
                    <UserSidebar />
                </div>

                <div className='flex flex-col'>

                    <div className='ml-24 mt-10 font-sans text-2xl'>
                        Kitchen
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
                        

                        <div>

                        </div>

                    </div>






                </div>

            </div>
        </div>
    )
}

export default ContractorRoom