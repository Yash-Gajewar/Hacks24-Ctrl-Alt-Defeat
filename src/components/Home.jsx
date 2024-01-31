import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import PieChartComponent from './Charts/PieChartComponent'
import UserSidebar from './UserSidebar'


const totalAmount = 5000000;
const amountPaid = 200000;


const Home = () => {
    return (

        <div className='flex flex-col'>
            <Header />

            <div className='flex flex-row'>
                <div>
                    <UserSidebar />
                </div>

                <div className='flex flex-col'>

                    <div className='ml-24 mt-10 font-sans text-2xl'>
                        Dashboard
                    </div>


                    <div className='flex justify-between'>
                    <div className='font-sans text-2xl'>
                            
                    </div>
                    {/* pie chart and amount paid section */}
                    <div className='flex flex-row items-center justify-center ml-24'>
                        <div>
                            {/* pie chart */}
                            <PieChartComponent />
                        </div>
                        <div className='ml-24'>
                            {/* pie chart */}
                            <PieChartComponent />
                        </div>
                    </div>


                    {/* Rooms and their status and pdf documents */}


                    <div className='flex flex-row'>

                        {/* rooms section */}
                        <div className='flex flex-row'>
                            

                        </div>

                        
                        {/* pdf section */}
                        <div>

                        </div>

                    </div>

                </div>



                </div>

            </div>

        </div>

    )
}

export default Home