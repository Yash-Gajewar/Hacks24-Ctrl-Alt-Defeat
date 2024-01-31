import React from 'react';
import Header from './Header';
import PieChartComponent from './Charts/PieChartComponent';
import UserSidebar from './UserSidebar';
import LinearWithValueLabel from './LinearWithValueLabel';
import plus from '../assets/plus.png';
import CustomSlider from './CustomSlider';

const totalAmount = 5000000;
const amountPaid = 200000;

const dummyUrls = [
    'https://www.example.com/page1',
    'https://www.example.com/page2',
    'https://www.example.com/page3',
    'https://www.example.com/page4',
    'https://www.example.com/page5',
    // Add more URLs as needed
];

const ContractorRoom = () => {
    const [addTask, setAddTask] = React.useState(false);
    const [task, setTask] = React.useState('');
    const [taskList, setTaskList] = React.useState([]);

    return (
        <div className='flex flex-col'>
            <Header />

            <div className='flex flex-row'>
                <div>
                    <UserSidebar />
                </div>

                <div className='flex flex-col'>
                    <div className='ml-24 mt-10 font-sans text-2xl'>Kitchen</div>

                    <div className='flex justify-between'>
                        <div className='font-sans text-2xl'></div>
                        {/* pie chart and amount paid section */}
                        <div className='flex flex-row items-center justify-center ml-24'>
                            <div>
                                {/* pie chart */}
                                <div className='flex flex-col items-center'>
                                    <div>
                                        <PieChartComponent />
                                    </div>

                                    <div>Work</div>
                                </div>
                            </div>
                            <div className='ml-24'>
                                {/* pie chart */}
                                <div className='flex flex-col items-center'>
                                    <div>
                                        <PieChartComponent />
                                    </div>

                                    <div>Amount</div>
                                </div>
                            </div>
                        </div>

                        {/* Rooms and their status and pdf documents */}
                    </div>

                    <div className='flex flex-col mt-5 ml-5'>
                        <div className='grid grid-cols-2 gap-4'>
                            {taskList.map((task, index) => (
                                <div
                                    key={index}
                                    className='flex pt-3 pb-3 pl-2 pr-2 mt-5 justify-center item-center hover:shadow-md'
                                >
                                    <CustomSlider task={task} taskCompleted={0} />
                                </div>
                            ))}
                        </div>
                        {addTask ? (
                            <input
                                className="flex h-10 w-full ml-5 rounded-md border border-gray-300"
                                type="text"
                                placeholder="Task"
                                onChange={(e) => setTask(e.target.value)}
                                onBlur={() => {setTaskList([...taskList, task]); setTask(''); setAddTask(false)}}
                            />
                        ) : (
                            <></>
                        )}

                        <div
                            className='flex w-full pt-3 pb-3 pl-2 pr-2 mt-5 ml-5 justify-center item-center hover:shadow-md'
                            onClick={() => setAddTask(true)}
                            onBlur={() => setAddTask(false)}>
                            <img
                                src={plus}
                                alt='Add task'
                                style={{
                                    width: '25px',
                                }}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContractorRoom;
