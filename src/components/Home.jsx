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
                            <LinearWithValueLabel title={"Kitchen"} value={"10"} />
                            <LinearWithValueLabel title={"Drawing Room"} value={"25"} />
                            <LinearWithValueLabel title={"Bathroom"} value={"58"} />
                            <LinearWithValueLabel title={"Bedroom 1"} value={"80"} />
                            <LinearWithValueLabel title={"Bedroom 2"} value={"90"} />

                        </div>

                        <div>
                            <div className='ml-10 mt-10 font-sans text-2xl justify-center items-center'>
                                Documents
                            </div>

                            <ul className='list-disc ml-10'>
                                {dummyUrls.map((url, index) => (
                                    <li key={index}>
                                        <a href={url} target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline'>
                                            {`Link ${index + 1}`}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>

                        </div>

                    </div>






                </div>

            </div>
        </div>
    )
}

export default Home