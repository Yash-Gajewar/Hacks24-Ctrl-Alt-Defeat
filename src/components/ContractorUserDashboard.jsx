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

const ContractorUserDashboard = () => {
    const [addTask, setAddTask] = React.useState(false);
    const [task, setTask] = React.useState('');
    const [taskList, setTaskList] = React.useState([]);
    const [taskProgress, setTaskProgress] = React.useState({});
    const [progress, setProgress] = React.useState('');

    React.useEffect(() => {
        setTaskProgress({
            ...taskProgress,
            [task]: progress,
        });

        console.log(taskProgress);
    }, [progress]);

    return (
        

            <div className='flex flex-row'>
                <div>
                    <UserSidebar />
                </div>

                <div className='flex flex-col ml-24'>
                    <div className='ml-24 mt-10 font-sans text-2xl'>Yash.Gajewar11</div>

                    <div className="grid justify-between">
                        <div className="font-sans text-2xl"></div>
                        {/* pie chart and amount paid section */}
                        <div className="grid grid-cols-2 gap-20 mt-2 ">
                            <div className="cols-span-1 bg-slate-100 p-1 rounded">
                                {/* pie chart */}
                                <div className="flex flex-col items-center">
                                    <h4>Work</h4>
                                    <PieChartComponent />
                                </div>
                            </div>
                            <div className="cols-span-1 bg-slate-100 p-1 rounded">
                                {/* pie chart */}
                                <div className="flex flex-col items-center">
                                    <h4>Amount</h4>
                                    <PieChartComponent />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>

                    <div className='flex flex-col mt-5 ml-5'>
                        <div className='grid grid-cols-1 gap-4'>
                            {taskList.map((task, index) => (
                                <div
                                    key={index}
                                    className='flex justify-center gap-10 item-center'
                                >
                                    <CustomSlider setProgress={setProgress} task={task} taskCompleted={0} />
                                </div>
                            ))}
                        </div>
                        {addTask ? (
                            <input
                                className="flex h-10 w-full ml-5 rounded-md border border-gray-300"
                                type="text"
                                placeholder="Task"
                                onChange={(e) => setTask(e.target.value)}
                                onBlur={() => { setTaskList([...taskList, task]); setAddTask(false) }}
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

                    <div>
                        Upload Image
                    </div>

                    </div>

                    
                </div>
            </div>



    );
};

export default ContractorUserDashboard;
