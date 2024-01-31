import React from 'react'
import Header from './Header'
import PieChartComponent from './Charts/PieChartComponent'


const totalAmount = 5000000;
const amountPaid = 200000;


const Home = () => {
    return (

        <div className='flex flex-col'>
            <Header />


            <div className='flex flex-row'>


                <div className='flex justify-between ml-24'>

                    <div className='font-sans text-2xl ml-10 mt-5'>
                    Dashboard
                    </div>
                    {/* pie chart and amount paid section */}
                    <div className='flex flex-row'>
                        <div>
                            {/* pie chart */}
                            <PieChartComponent />
                        </div>
                        <div className='ml-52'>
                            {/* pie chart */}
                            <PieChartComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home