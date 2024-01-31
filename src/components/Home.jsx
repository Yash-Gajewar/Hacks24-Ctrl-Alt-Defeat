import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import PieChartComponent from './Charts/PieChartComponent'

const Home = () => {
    return (
        <div className='flex flex-col'>
            <Header />
            <div className='flex flex-row'>
                <div>
                    <Sidebar />
                </div>

                <div className='flex flex-col ml-24'>
                    {/* pie chart and amount paid section */}
                    <div className='flex flex-row'>
                        <div>
                            {/* pie chart */}
                            <PieChartComponent />
                        </div>
                        <div>
                            {/* amount paid */}
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Home