import React from 'react';
import Header from './Header';
import Card from './Card';
import ContracterSidebar from './ContracterSidebar';
import family from '../assets/family.png';
import Cookie from 'js-cookie';

const totalAmount = 5000000;
const amountPaid = 200000;

// const dummyUrls = [
//     'https://www.example.com/page1',
//     'https://www.example.com/page2',
//     'https://www.example.com/page3',
//     'https://www.example.com/page4',
//     'https://www.example.com/page5',
//     // Add more URLs as needed
// ];

const Families = () => {
    const [addTask, setAddTask] = React.useState(false);
    const [task, setTask] = React.useState('');
    const [taskList, setTaskList] = React.useState([]);
    const userId = Cookie.get('id');
    const [families, setFamilies] = React.useState([]);



    const handleSubmit = async () => {
      const response = await fetch(`https://tsec-backend.onrender.com/api/v1/contractors/selected/${userId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${Cookie.get('token')} `,
        },
      });
      const data = await response.json();


      // console.log(data);
      setFamilies(data.data.contracts);
    }

    React.useEffect(() => {
      handleSubmit();
    }, []);

    return (
       
            <div className='flex flex-row'>
                <div>
                    <ContracterSidebar />
                </div>

                <div className="ml-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {families.map((familyItem, index) => {
                      console.log(familyItem);
                      return <Card image={family} firstName={familyItem.userId.firstName} lastName={familyItem.userId.lastName}/>
                    })}
                </div>

                
            </div>

    );
};

export default Families;
